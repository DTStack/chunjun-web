"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[162],{7772:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"dirty-data-management","metadata":{"permalink":"/chunjun-web/blog/dirty-data-management","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-13-dirty-data-management/FXIP-8 \u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406.md","source":"@site/blog/2022-01-13-dirty-data-management/FXIP-8 \u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406.md","title":"\u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406","description":"\u76ee\u524d\u4efb\u52a1\u5bf9\u810f\u6570\u636e\u7684\u5904\u7406\u4ec5\u4ec5\u662f\u65e5\u5fd7\u6253\u5370\uff0c\u8fd9\u6837\u663e\u7136\u662f\u65e0\u6cd5\u5e94\u5bf9\u5ba2\u6237\u591a\u53d8\u7684\u4f7f\u7528\u573a\u666f\u3002","date":"2022-01-13T00:00:00.000Z","formattedDate":"2022\u5e741\u670813\u65e5","tags":[{"label":"Principle","permalink":"/chunjun-web/blog/tags/principle"}],"readingTime":4.395,"truncated":false,"authors":[{"name":"TieZhu","title":"ChunJun maintainer","url":"https://github.com/WTZ468071157","imageURL":"https://github.com/WTZ468071157.png","key":"tiezhu"}],"frontMatter":{"slug":"dirty-data-management","title":"\u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406","authors":"tiezhu","tags":["Principle"]},"nextItem":{"title":"\u5206\u5272SQL\u8bed\u53e5","permalink":"/chunjun-web/blog/spilt-sql-statement"}},"content":"\u76ee\u524d\u4efb\u52a1\u5bf9\u810f\u6570\u636e\u7684\u5904\u7406\u4ec5\u4ec5\u662f\u65e5\u5fd7\u6253\u5370\uff0c\u8fd9\u6837\u663e\u7136\u662f\u65e0\u6cd5\u5e94\u5bf9\u5ba2\u6237\u591a\u53d8\u7684\u4f7f\u7528\u573a\u666f\u3002\\n# \u65b9\u6848\\n\u6574\u4f53\u67b6\u6784\u91c7\u7528**\u751f\u4ea7\u8005-\u6d88\u8d39\u8005**\u6a21\u5f0f\uff0c\u4efb\u52a1\u542f\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u540c\u65f6\u5c06Manager\u521d\u59cb\u5316\u5e76\u542f\u52a8Consumer\u5f02\u6b65\u7ebf\u7a0b\u6c60\uff0c\u4ec5\u9700\u5728BaseRichInputFormat \u548c BaseRichOutputFormat \u8c03\u7528 Manager\u7684collect() \u65b9\u6cd5\u6536\u96c6\u810f\u6570\u636e\u5373\u53ef\u3002\\n## \u6d41\u7a0b\u56fe\\n![image.png](image-1.png)\\n![image.png](image-2.png)\\n\\n\\n\\n## \u8be6\u7ec6\u63cf\u8ff0\\n### \u4efb\u52a1\u914d\u7f6e\u53c2\u6570\\n\u5bf9\u5e94Java \u5b9e\u4f53\u7c7b - DirtyConf\\n```json\\n \\"dirty\\": {\\n        \\"type\\": \\"log\\",\\n        \\"printRate\\": 500,\\n        \\"errorLimit\\": 1000,\\n        \\"totalLimit\\": 1000,\\n        \\"properties\\": {\\n          \\"store\\": true,\\n          \\"fileName\\": \\"dirty.csv\\",\\n          \\"filePath\\": \\"~/dirty\\"\\n        }\\n      }\\n```\\n\\n- type\\n\\n\u63d2\u4ef6\u7c7b\u578b\uff0c**\u5fc5\u586b\u9879**\uff0c\u6839\u636etype\u52a8\u6001\u52a0\u8f7d\u5bf9\u5e94\u7684\u63d2\u4ef6\uff1b\\n\\n- printRate\\n\\n\u810f\u6570\u636e\u5728\u65e5\u5fd7\u4e2d\u7684\u6253\u5370\u9891\u7387\uff0c\u9ed8\u8ba4\u503c\u662f**Long.MAX_VALUE**\uff0c\u5373\uff1a**\u4e0d\u6253\u5370**\u810f\u6570\u636e\u4fe1\u606f\u5728\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff08\u56e0\u4e3a\u5ba2\u6237\u7684\u6570\u636e\u4e0d\u5b9c\u66b4\u9732\uff09\uff1b\\n**\u6539\uff082022-01-13 by tiezhu**\uff09\uff1a\u9ed8\u8ba4\u503c\u4fee\u6539\u4e3a1\uff0c\u8868\u793a\u9ed8\u8ba4\u810f\u6570\u636e\u4fe1\u606f\u90fd\u4f1a\u6253\u5370\u5230\u65e5\u5fd7\u6587\u4ef6\u4e2d\uff0c\u540c\u65f6\uff0c\u5982\u679cprintRate <= 0\uff0c\u8868\u793a\u4e0d\u6253\u5370\u4efb\u4f55\u810f\u6570\u636e\u4fe1\u606f\uff1b\\n\\n- errorLimit\\n\\n\u810f\u6570\u636e\u5728\u63d2\u4ef6\u4e2d\uff0c\u5904\u7406\u5931\u8d25\u7684\u6761\u6570\u9650\u5236\uff0c\u5f53\u5904\u7406\u5931\u8d25\u7684\u810f\u6570\u636e\u6761\u6570\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u65f6\uff0c\u4efb\u52a1\u629b\u51faNoRestartException\uff0c\u5373\u4efb\u52a1\u5931\u8d25\u4e14\u4e0d\u91cd\u8bd5\uff1b\u9ed8\u8ba4\u503c\u662f**Long.MAX_VALUE**\uff1b\\n**\u6539\uff082022-01-13 by tiezhu\uff09**\uff1a\u9ed8\u8ba4\u503c\u4fee\u6539\u4e3a1\uff0c\u5982\u679cerrorLimit < 0\uff0c\u8868\u793a\u4efb\u52a1\u5bb9\u5fcd\u6240\u6709\u7684\u5f02\u5e38\uff0c\u4e0d\u5931\u8d25\uff1b\\n\\n- totalLimit\\n\\n\u810f\u6570\u636e\u603b\u6761\u6570\u9650\u5236\uff0c\u5373\u6536\u96c6\u5230\u7684\u810f\u6570\u636e\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5236\u65f6\uff0c\u4efb\u52a1\u629b\u51faNoRestartException\uff0c\u5373\u4efb\u52a1\u5931\u8d25\u4e14\u4e0d\u91cd\u8bd5\uff1b**\u9ed8\u8ba4\u503c\u662fLong.MAX_VALUE**\uff1b\\n**\u6539\uff082022-01-13 by tiezhu\uff09**\uff1a\u9ed8\u8ba4\u503c\u4fee\u6539\u4e3a1\uff0c\u5982\u679ctotalLimit < 0\uff0c\u8868\u793a\u4efb\u52a1\u5bb9\u5fcd\u6240\u6709\u7684\u5f02\u5e38\uff0c\u4e0d\u5931\u8d25\uff1b\\n\\n- properties\\n\\n\u5404\u81ea\u63d2\u4ef6\u7684\u53c2\u6570\u914d\u7f6e\\n\\n### \u810f\u6570\u636e\u63d2\u4ef6\u7ba1\u7406\u8005\\n\u5bf9\u5e94Java \u5b9e\u4f53\u7c7b - DirtyManager\\nManager\u4e3b\u8981\u7ef4\u62a4\u7740\u810f\u6570\u636e\u6d88\u8d39\u8005Consumer \u548c \u4e00\u4e2a\u5f02\u6b65\u7ebf\u7a0b\u6c60\uff1b\\n\\n- \u4e3b\u8981\u4f5c\u7528\u662f**\u6536\u96c6\u810f\u6570\u636e**\uff0c\u5e76\u4e0b\u53d1\u5230Consumer\u961f\u5217\u4e2d\\n\\n![image.png](image-3.png)\\n\\n- \u8c03\u7528 collect() \u65b9\u6cd5\\n\\nBaseRichInputFormat\\n![image.png](image-4.png)\\n\\n### \u810f\u6570\u636e\u63d2\u4ef6\u6d88\u8d39\u8005\\n\u5bf9\u5e94Java \u5b9e\u4f53\u7c7b - AbstractDirtyConsumer\\nConsumer\u4e3b\u8981\u7ef4\u62a4\u7740\u4e00\u4e2a\u6d88\u606f\u961f\u5217\uff0c\u4e2d\u95f4\u7f13\u5b58\u7740\u810f\u6570\u636e\u4fe1\u606f\uff1b\\n\\n- run() \u65b9\u6cd5\\n\\n\u4e3b\u8981\u903b\u8f91\u662f\u6d88\u8d39\u961f\u5217\u4e2d\u7684\u810f\u6570\u636e\uff0cconsume() \u65b9\u6cd5\u4ea4\u7ed9\u5b50\u7c7b\u53bb\u5b9e\u73b0\uff1b\u5982\u679c\u5728consume\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4e86\u5f02\u5e38\uff0c\u90a3\u4e48errorCounter \u8ba1\u6570\u52a0\u4e00\u3002\\n![image.png](image-5.png)\\n\\n- consume() \u65b9\u6cd5\\n\\n\u5904\u7406\u810f\u6570\u636e\u7684\u5177\u4f53\u903b\u8f91\uff0c\u4ea4\u7531\u5b50\u7c7b\u5b9e\u73b0\uff0c\u6839\u636e\u63d2\u4ef6\u7684\u4e0d\u540c\uff0c\u5bf9\u810f\u6570\u636e\u5904\u7406\u903b\u8f91\u4e5f\u4f1a\u6709\u6240\u4e0d\u540c\u3002\\n\\u0000\\n\\n# \u63a5\u53e3\u89c4\u8303\\n\u542f\u52a8\u53c2\u6570\\n```sql\\n \\"dirty\\": {\\n        \\"type\\": \\"log\\",\\n        \\"printRate\\": 500,\\n        \\"errorLimit\\": 1000,\\n        \\"totalLimit\\": 1000,\\n        \\"properties\\": {\\n          \\"store\\": true,\\n          \\"fileName\\": \\"dirty.csv\\",\\n          \\"filePath\\": \\"~/dirty\\"\\n        }\\n      }\\n\\n# \u4ee5\u4e0b\u53c2\u6570\u5728FlinkX \u542f\u52a8\u53c2\u6570-confProp\u4e2d\\nflinkx.dirty-data.output-type = log/jdbc\\nflinkx.dirty-data.max-rows = 1000 // total limit\\nflinkx.dirty-data.max-collect-failed-rows = 1000 // error limit\\n\\nflinkx.dirty-data.jdbc.url= \\nflinkx.dirty-data.jdbc.username= \\nflinkx.dirty-data.jdbc.password=\\nflinkx.dirty-data.jdbc.database=   // database \u53ef\u4ee5\u5199\u5728 url\\nflinkx.dirty-data.jdbc.table=\\n\\nflinkx.dirty-data.log.print-interval= 500\\n```\\nJDBC \u5efa\u8868\u8bed\u53e5\uff08MySQL\uff09\\n```sql\\njob_id\\njob_name \\n\u8868\u540d operator_name\\n\u6570\u636e data\\n\u9519\u8bef\u539f\u56e0 error_msg\\n\u5b57\u6bb5\u540d field_name\\n\\nCREATE TABLE IF NOT EXISTS flinkx_dirty_data\\n(\\n    job_id        VARCHAR(32)                               NOT NULL COMMENT \'Flink Job Id\',\\n    job_name      VARCHAR(255)                              NOT NULL COMMENT \'Flink Job Name\',\\n    operator_name VARCHAR(255)                              NOT NULL COMMENT \'\u51fa\u73b0\u5f02\u5e38\u6570\u636e\u7684\u7b97\u5b50\u540d\uff0c\u5305\u542b\u8868\u540d\',\\n    dirty_data    TEXT                                      NOT NULL COMMENT \'\u810f\u6570\u636e\u7684\u5f02\u5e38\u6570\u636e\',\\n    error_message TEXT COMMENT \'\u810f\u6570\u636e\u4e2d\u5f02\u5e38\u539f\u56e0\',\\n    field_name    VARCHAR(255) COMMENT \'\u810f\u6570\u636e\u4e2d\u5f02\u5e38\u5b57\u6bb5\u540d\',\\n    create_time    TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP(6) NOT NULL ON UPDATE CURRENT_TIMESTAMP(6) COMMENT \'\u810f\u6570\u636e\u51fa\u73b0\u7684\u65f6\u95f4\u70b9\'\\n)\\n    COMMENT \'\u5b58\u50a8\u810f\u6570\u636e\';\\n\\nCREATE INDEX idx_job_id ON flinkx_dirty_data (job_id);\\nCREATE INDEX idx_operator_name ON flinkx_dirty_data(operator_name);\\nCREATE INDEX idx_create_time ON flinkx_dirty_data(create_time);\\n```\\n#### Metircs\\n```sql\\nflinkx_DirtyData_count\\nflinkx_DirtyData_collectFailedCount\\n```\\n#### \u98ce\u9669\\n\u6570\u636e\u540c\u6b65JSON\u810f\u6570\u636e\u914d\u7f6e\\n\\n\\n\\n#### \u9879\u76ee\u76ee\u5f55\u7ed3\u6784\\n\u7236\u6a21\u5757\\nflinkx-dirtydata-collectors\\n\\n\u5b50\u6a21\u5757\\nflinkx-dirtydata-collector-jdbc\\nflinkx-dirtydata-collector-log\\n\\n#### \u6253\u5305\u76ee\u5f55\\nflinkx-dist\\ndirtydata-collector\\njdbc\\nlog"},{"id":"spilt-sql-statement","metadata":{"permalink":"/chunjun-web/blog/spilt-sql-statement","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-06-08-split-sql/FXIP-7 \u5206\u5272SQL\u8bed\u53e5.md","source":"@site/blog/2021-06-08-split-sql/FXIP-7 \u5206\u5272SQL\u8bed\u53e5.md","title":"\u5206\u5272SQL\u8bed\u53e5","description":"\u80cc\u666f","date":"2021-06-08T00:00:00.000Z","formattedDate":"2021\u5e746\u67088\u65e5","tags":[{"label":"Principle","permalink":"/chunjun-web/blog/tags/principle"}],"readingTime":2.94,"truncated":false,"authors":[{"name":"Ada Wang","title":"ChunJun maintainer","url":"https://github.com/deadwind4","imageURL":"https://github.com/deadwind4.png","key":"wang"}],"frontMatter":{"slug":"spilt-sql-statement","title":"\u5206\u5272SQL\u8bed\u53e5","authors":"wang","tags":["Principle"]},"prevItem":{"title":"\u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406","permalink":"/chunjun-web/blog/dirty-data-management"}},"content":"## \u80cc\u666f\\nSQL\u8bed\u53e5\u7684DDL\u548cDML\u6839\u636e\u5206\u53f7\u5212\u5206\u3002\\n\u4e4b\u524d\u7684\u5bf9\u4e00\u7ec4SQL\u8bed\u53e5\u7684\u5207\u5206\u6709\u95ee\u9898\u3002\u51fa\u73b0 \'\\\\\\\\\\\\\\\\\' \u4f1a\u51fa\u73b0\u5207\u5272\u9519\u8bef\u3002\\n\u4f8b\u5b50\u5982\u4e0b\uff1a\\n```java\\nCREATE TABLE student (id INT, name STRING, age INT) USING CSV;\\nSELECT *, split(q,\'\\\\\\\\\\\\\\\\\') as qq FROM foo_table;\\nSELECT * FROM bar_table;\\n```\\n\u4e0a\u9762\u4ee3\u7801\u65e0\u6cd5\u88absplitIgnoreQuota()\u65b9\u6cd5\u6b63\u786e\u5207\u5272\u6210\u4e09\u53e5SQL\u3002\\n\\n#### \u6307\u5bfc\u601d\u60f3\\n\u60f3\u4ece\u7f16\u8bd1\u539f\u7406\u7684\u8bcd\u6cd5\u5206\u6790\u89d2\u5ea6\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5b9e\u73b0\u4e00\u4e2aDFA\uff08\u786e\u5b9a\u6709\u9650\u72b6\u6001\u81ea\u52a8\u673a\uff09\u3002\u53ea\u8981\u72b6\u6001\u8f6c\u6362\u56fe\u662f\u5bf9\u7684\u3002\u90a3\u4e48\u89e3\u6790\u7684\u5b57\u7b26\u4e32\u4e00\u5b9a\u662f\u5bf9\u7684\u3002\\n\\n# \u6280\u672f\u65b9\u6848\\n#### \u6b65\u9aa4\\n\\n1. \u4f7f\u7528\u72b6\u6001\u673a\u5c06\u5b57\u7b26\u4e32Token\u5316\u3002\\n   1. \u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u6210Token\u6570\u7ec4\u3002\\n2. \u6839\u636eToken\u91cd\u7ec4\u6210SQL\u8bed\u53e5\u3002\\n   1. \u6839\u636eToken\u6570\u7ec4\u4e2d\u7684Token\u7c7b\u578b\uff0c\u62fc\u63a5\u6210\u4e00\u4e2a\u4e00\u4e2aSQL\u8bed\u53e5\uff0c\u7ec4\u6210SQL\u6570\u7ec4\u3002\\n\\n\u4e3b\u5e72\u4ee3\u7801\u5c31\u5982\u4e0b\u4e24\u6b65\uff1a\\n```java\\nString string = \\"\u4e00\u5768SQL\u8bed\u53e5\\";\\nList<Token> tokens = tokenize(s);\\nList<Token> tokens = tokenize(string);\\nreturn processTokens(tokens);\\n```\\n### \u4e00\u3001\u72b6\u6001\u673a\u7684\u5b9e\u73b0\\n#### \u72b6\u6001\u673a\u8f6c\u6362\u56fe\\n\u4e0b\u56fe\u4e2d\uff0c\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u4ee3\u8868\u4e00\u79cd\u72b6\u6001\uff0c\u6bcf\u4e00\u6761\u8fb9\u90fd\u4ee3\u8868\u4e00\u4e2a\u51fd\u6570\u3002\\n\u6bcf\u5f53\u8def\u8fc7\u9700\u8981\u751f\u6210Token\u7684\u8fb9\uff0c\u5c31\u628a\u7f13\u51b2\u533a\u4e2d\u6240\u6709\u5b57\u7b26\u4fdd\u5b58\u5230Token\u4e2d\u3002\\n![image.png](./image.png)\\n#### \u72b6\u6001\u673a\u4e94\u79cd\u72b6\u6001\uff1a\\n```java\\nprivate enum State {\\n    /** current char in single quote */\\n    SINGLE_QUOTED,\\n    /** current char in single quote\uff0cand after \'\\\\\' */\\n    AFTER_BACKSLASH_SINGLE_QUOTED,\\n    /** current char in double quote */\\n    DOUBLE_QUOTED,\\n    /** current char in double quote\uff0cand after \'\\\\\' */\\n    AFTER_BACKSLASH_DOUBLE_QUOTED,\\n    /** out of quote */\\n    UNQUOTED\\n}\\n```\\n#### \u5207\u6362\u72b6\u6001\u7684\u4e09\u79cd\u5173\u952e\u5b57\\n\u5206\u9694\u7b26\u4e0d\u5728\u5173\u952e\u5b57\u4e2d\uff0c\u52a8\u6001\u4f20\u5165\u3002\\n```java\\npublic class Keyword {\\n    public static final char SINGLE_QUOTE = \'\\\\\'\';\\n    public static final char DOUBLE_QUOTE = \'\\\\\\"\';\\n    public static final char BACKSLASH = \'\\\\\\\\\';\\n}\\n```\\n### \u4e8c\u3001Token\u7684\u5b9e\u73b0\\n```java\\npublic class Token {\\n\\n    private TokenKind kind;\\n    private String val;\\n\\n    Token(TokenKind kind, String val) {\\n        this.kind = kind;\\n        this.val = val;\\n    }\\n    \\n    public TokenKind getKind() {\\n        return kind;\\n    }\\n\\n    public String getVal() {\\n        return val;\\n    }\\n}\\n```\\nToken\u53ea\u6709\u4e24\u79cd\u7c7b\u578b\\n```java\\n/** There are only two kinds */\\nprivate enum TokenKind {\\n    /** SQL string */\\n    STRING,\\n    /** SQL delimiter */\\n    DELIMITER\\n}\\n```\\n#### Token\u4f7f\u7528\u4e3e\u4f8b\\n\u5728\u5982\u4e0bSQL\u4f8b\u5b50\u4e2d\uff0c\u8f6c\u6362\u51fa\u7684\u4e00\u4e2aToken\u6570\u7ec4\u662f\u8fd9\u6837[STRING, STRING, STRING, DELIMITER, STRING, DELIMITER]\u3002\u90a3\u4e48\u4f1a\u6839\u636eSEMICOLON\u7c7b\u578b\uff0c\u6700\u7ec8\u8fd8\u539f\u51fa\u4e24\u53e5SQL\u3002\\n```java\\nSELECT *, split(q,\'\\\\\\\\\\\\\\\\\') as qq FROM foo_table;\\nSELECT * FROM bar_table;\\n```\\n\\n# \u53c2\u8003\u8d44\u6599\\n\u300a\u73b0\u4ee3\u7f16\u8bd1\u539f\u7406:C\u8bed\u8a00\u63cf\u8ff0\u300b\u2014\u2014\u7b2c2\u7ae0 \u8bcd\u6cd5\u5206\u6790\\n\\n#### \u53c2\u8003\u4ee3\u7801\\nFlink StructuredOptionsSplitter\u7c7b splitEscaped\uff08\uff09\u65b9\u6cd5\u3002"}]}')}}]);