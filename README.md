# Docker 化的 Node.js 开发环境

## 使用方法

### 安装 Docker

https://www.docker.com/community-edition

### 获取源代码

```bash
git clone git@github.com:tws-stack/dockerlized-bff.git
```

### 启动开发环境

安装本地开发环境依赖，以供本地开发工具辅助和测试：

```bash
cd dockerlized-bff
yarn
```

后台启动开发环境相关服务：

```bash
$ docker-compose up -d
```

停止开发环境相关服务：

```bash
$ docker-compose stop
```

查看开发用 Web 服务的日志（并持续跟踪）：

```bash
docker-compose logs -f web
```

查看开发用数据库服务的日志（并持续跟踪）：

```bash
docker-compose logs -f db
```

修改过 package.json 之后，需要重新构建 Web 服务镜像：

```bash
docker-compose build web
```

## 编辑器支持

### VisualStudio Code

- 安装 [JavaScript Standard Style](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs) 插件。
- 在服务启动的情况下，使用已经配置好的 Attach 设置进入远程调试状态。

### WebStorm

- 已经配置好，直接用 WebStorm 打开文件夹即可。
- 在服务启动的情况下，使用已经配置好的 Attach 设置进入远程调试状态。

## 命名规范

- image 和 tag 使用减号 `-` 分割的小写命名。
- container 使用下划线 `_` 分割的小写命名。