---
title: configure s3cmd at AWS CN region
date: 2015-04-20
tags:  AWS
---


不得不赞叹下我国的强势和市场的广大。AWS进入中国后，IAM 等单独为中国区部署了一套。但这样也给我们带来了诸多的不便。比如设置`Access Policy`跨帐号访问的时候，永远提示帐号不存在（因为中国区的帐号系统中的确没有美西帐号的信息）。 正是这个原因，`s3cmd`工具在美西等区域使用一切正常，但在中国区的时候会出现拒绝的情况。 这里我们介绍一下我们解决的办法。

<!--more-->

## 背景
`s3cmd` 1.5.2 版本支持 `v4`版本校验后，历史版本不支持`v4`版本校验, 详情可以参考文档 [Signing AWS Requests with Signature Version 4.](http://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html).
`s3fs` 1.7.8 版本增加`v4` 校验的支持。 中国区属于AWS新区域，S3仅支持v4 版本校验。但中国区与美西等服务器不互通，因此不能使用v4版本校验默认的服务器配置。

## 安装

不能用`apt-get install s3cmd`命令安装`s3cmd`，否则，版本将是1.0.0。 如已经安装，需要卸载后，重新用pip安装。

    sudo pip install s3cmd==1.5.2


## 配置
执行 `s3cmd --configure` 配置KEY。
配置完成后，修改` ~/.s3cfg` 文件，修改以下字段：

    bucket_location = cn-north-1
    host_base = s3.cn-north-1.amazonaws.com.cn
    host_bucket = %(bucket)s.s3.cn-north-1.amazonaws.com.cn
    website_endpoint = http://%(bucket)s.s3-website-%(location)s.amazonaws.com.cn/


## 使用
参数及使用方法与其他区使用一致。

