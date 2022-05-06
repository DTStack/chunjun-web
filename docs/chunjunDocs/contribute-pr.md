# 如何提交一个优秀的pr
在github上提交pr是参与chunjun项目开源的一个重要途径，小伙伴们在使用中的一些功能上feature或者bug都可以向社区提交pr贡献代码，也可以根据已有的issue提供自己的解决方案。

## 第一步：fork chunjun到自己的github仓库
![image](../../static/img/pr/pr1.png)

点击fork后就可以在自己仓库中看到以你名字命名的chunjun项目了：

![image](../../static/img/pr/pr2.png)

## 第二步：clone chunjun到本地IDE
![image](../../static/img/pr/pr3.png)

## 第三步：将DTStack/chunjun设置为本地仓库的远程分支upstream
```shell
$ cd chunjun
# add upstream
$ git remote add upstream https://github.com/DTStack/chunjun.git
# 查看远程仓库设置
$ git remote -v
origin  https://github.com/your_name/chunjun.git (fetch)
origin  https://github.com/your_name/chunjun.git (push)
upstream    https://github.com/DTStack/chunjun.git (fetch)
upstream    https://github.com/DTStack/chunjun.git (push)
```
## 第四步：提交代码
**切换分支**
```shell
$ git checkout -b branch_name
```
**本地修改代码后，提交commit**
- commit_message格式：
[commit_type] [module] message
- commit_type:
    - feat：表示是一个新功能（feature)
    - hotfix：hotfix，修补bug
    - docs：改动、增加文档
    - opt：修改代码风格及opt imports这些，不改动原有执行的代码
    - test：增加测试
- eg:[hotfix-12345][mysql] Fix mysql time type loses precision.

```shell
# 提交commit前先进行代码格式化
$ mvn spotless:apply
$ git commit -a -m "<you_commit_message>"
```
**rebase远程分支**

这一步很重要，因为我们仓库中的chunjun代码很有可能已经落后于社区，所以我们 push commit前需要rebase，保证我们的commit是基于社区最新的代码，很多小伙伴没有这一步导致提交的pr当中包含了其他人的commit
```shell
$ git fetch upstream
$ git rebase upstream/branch_name
```

*rebase后有可能出现代码冲突，一般是由于多人编辑同一个文件引起的，只需要根据提示打开冲突文件对冲突部分进行修改，将提示的冲突文件的冲突都解决后，执行
```shell
$ git add .
$ git rebase --continue
```
依此往复，直至屏幕出现类似rebase successful字样即可

*rebase之后代码可能无法正常推送，需要```git push -f``` 强制推送，强制推送是一个有风险的操作，操作前请仔细检查以避免出现无关代码被强制覆盖的问题

**push到github仓库**
```shell
$ git push origin branch_name
```
## 第五步：提交pr
以我修复kafka写入过程中出现空指针问题为例，经过步骤四我已经把代码提交至我的仓库master分支

![image](../../static/img/pr/pr4.png)

进入chunjun仓库页面，点击Pull Request

![image](../../static/img/pr/pr5.png)

![image](../../static/img/pr/pr6.png)

选择head仓库和base仓库以及相应的分支

![image](../../static/img/pr/pr7.png)

填写pr信息，pr信息应该尽量概括清楚问题的前因后果，如果存在对应issue要附加issue地址，保证问题是可追溯的

![image](../../static/img/pr/pr8.png)

![image](../../static/img/pr/pr9.png)

pr提交成功后需要一段时间代码review，您可以耐心等待一下我们review后合入，或者直接联系我们。
