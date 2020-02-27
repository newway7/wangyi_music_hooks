#In github's jekyll,you should enter GMT time (time zone UTC(+0:00))

# nowGMT=`date -u +"%Y-%m-%d-%H-%M-%S"`

# echo $nowGMT

var=`date "+%Y-%m-%d-%H-%M-%S"`

echo $var

#1.

git init

#2.

git add .

#3.

git commit -m $var

#4.

 git remote add origin git@github.com:newway7/wangyi_music_hooks.git

#5.

git push -u origin master