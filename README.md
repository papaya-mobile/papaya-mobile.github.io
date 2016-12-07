
# Engineering Blog of Papaya Mobile

This is blog of papaya mobile engineering powered by [Hexo](https://hexo.io/) and github pages.
And obviously here is the raw materials based on which hexo generates the static blog. 
To visit the blog content, see: http://papaya-mobile.github.io .


## branches

There are two branches in this repo: ``master`` and ``source``.
``master`` branch is the publishing branch, and github use the branch to render the blog pages.
``source`` branch is the raw blog materials, based on hexo.

Usually ``master`` branch should be committed by ``hexo deploy`` command, 
and should not be interfered by any people.  And ``source`` branch is our workspace,
we should checkout this branch to run hexo commands.


## Post a new blog

1. install ``nodejs``, ``npm`` and ``hexo-cli``.
   see [hexo docs](https://hexo.io/zh-cn/docs/index.html ) for more details.

2. clone this repo to local and checkout ``source`` branch:
    
        git clone https://github.com/papaya-mobile/papaya-mobile.github.io.git
        cd papaya-mobile.github.io
        git checkout -t origin/source

2. update [papaya tech sharing](https://github.com/papaya-mobile/papaya-tech-sharing) submodule.

        git submodule update --init


3. install npm deps:

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


8. remember to commit your post markdown file to ``source`` branch.


## workflow

fork this repo, write and test your post at local, then make a PR.

**DO NOT** deploy, leave it to the repo maintainer.




