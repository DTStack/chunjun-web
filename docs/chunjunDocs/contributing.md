---
title: Contributing to ChunJun
sidebar_position: 10
---
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

### 如何提问题和需求？
当前提供了4个类型的问题分类：
* Feature request
* Ask a Question
* Bug report
* Development Task  
在对应的问题类型下创建具体的问题；将问题的场景描述清楚；

### 如何提交pr?
1. 新建issuse .描述问题信息。
2. 基于对应的release分支拉取开发分支,分支命名参考 [分支命名规范]
3. commit 信息：[type-issuseId] [module] msg，type 定义参考：[Commit type 类别]   
eg:  
[hotfix-31280][core] 修复bigdecimal转decimal运行失败问题  
[feat-31372][rdb] RDB结果表Upsert模式支持选择更新策略
4. 多次提交使用rebase 合并成一个。
5. pr 名称：[chunjun-issuseid][module名称] 标题
6. 对应模块的test 测试通过，并通过代码检查

### 代码检查插件
chunjun  当前使用google-java-format ，严格要求必须通过google-java-format 的格式转换，在maven 里面通过设置，  
如果不满足google-java-format 格式要求，编译阶段将会出现异常；

### Commit type 类别
* feat：表示是一个新功能（feature)
* hotfix：hotfix，修补bug
* docs：改动、增加文档
* opt：修改代码风格及opt imports这些，不改动原有执行的代码
* test：增加测试

###  分支命名规范
* 新功能：feat: feat_flink版本_issuseId   
eg: feat_1.12_11111  
* bug修复： hotfix: hotfix_flink版本_issuseId
eg: hotfix_1.12_11112  
注意当前chunjun版本依赖flink 版本上进行开发,比如1.12_release 就是对应的flink 1.12 版本；
所以在提交分支的时候请添加上对应的版本