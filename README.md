# 漆桁博个人学术主页

本项目基于 [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light) 模板改造，用于中文个人学术主页。

## 主要内容

- 个人简介
- 研究方向
- 论文成果：一作 / 学生一作、正在进行的研究、合作论文
- 项目经历
- 其他开源项目
- 获奖经历

## 隐私处理

页面未公开手机号、出生年月、求职意向、签证相关经历，也未提供原始简历 PDF 下载链接。

## 头像

页面使用 `materials/profile/headshot_upscaled_faithful.png`，该文件由现有头像材料 `materials/profile/QHB.png` 复制得到，未重新生成头像。

## 使用方式

该主页使用 Jekyll / GitHub Pages 结构，核心文件为：

- `_config.yml`
- `index.md`
- `_data/publications.yml`
- `_includes/publications.md`
- `_includes/services.md`
- `_layouts/homepage.html`
- `_sass/minimal-light.scss`

推送到 GitHub Pages 仓库后，会由 GitHub Pages 按 minimal-light 模板生成网页。
