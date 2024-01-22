# 기술문서 작성법

- clone & branch
- ./blog/authors.yml 에 본인 정보 저장
- ./blog/{yyyy-MM-dd}-{title}.md 로 글 작성
- pull request -> 기술블로그 위원회 만장일치 통과 후 병합

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern
static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.
