# post-install script to run as root
ftp -V https://raw.githubusercontent.com/laydros/dotfiles/main/bin/obsd-post.sh

# grab dotfiles for user
init and clone directory

```
cd ~
git init
git remote add origin https://github.com/laydros/dotfiles.git
git fetch
git checkout -f main
```
