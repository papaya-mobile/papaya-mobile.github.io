
# Engineering Blog of Papaya Mobile

This is blog of papaya mobile engineering powered by [Hexo](https://hexo.io/) and github pages.
And obviously here is the raw materials based on which hexo generates the static blog. 
To visit the blog content, see: http://papaya-mobile.github.io .


## Post a new blog

1. install ``nodejs``, ``npm`` and ``hexo-cli``.
   see [hexo docs](https://hexo.io/zh-cn/docs/index.html ) for more details.

2. clone this repo to local:
    
        git clone https://github.com/papaya-mobile/papaya-mobile.github.io.git

3. install npm deps:

        cd papaya-mobile.github.io
        npm install 
    
        # for local preview
        npm install hexo-server --save
        # for deploy 
        npm install hexo-deployer-git --save  


4. new a post:

        hexo new [layout] <title>

   this command will generate a markdown file under ``source/_posts``.

5. write the post use whatever markdown editor you like

6. generate static html and preview:

        hexo generate
        hexo server

7. deploy ( push to github and public the post to the world):

        hexo deploy


8. remember to commit your post markdown file to ``master`` branch.


## workflow

fork this repo, write and test your post at local, then make a PR.

**DO NOT** deploy, leave it to the repo maintainer.




