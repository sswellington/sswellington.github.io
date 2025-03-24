# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unrelease
### Changed

#### Documentação do Projeto de Reescrita do Site

##### Introdução

Este projeto tem como objetivo reescrever o site pessoal e o blog atualmente hospedados no GitHub Pages, eliminando dependências de terceiros, como o Jekyll. Todo o site será gerado estaticamente utilizando apenas C#, JavaScript, CSS e HTML, sem uso de bibliotecas externas.

##### Estrutura do Projeto

A estrutura de diretórios do projeto será organizada da seguinte forma:

/
│-- /posts          # Armazena os posts do blog em formato Markdown
│-- /templates      # Contém os arquivos de layout base do site
│-- /assets         # Inclui imagens, estilos CSS e scripts JS
│-- /output         # Pasta onde os arquivos HTML finais serão gerados
│-- generator.cs    # Script em C# para gerar os arquivos HTML
│-- generator.js    # Alternativa em JavaScript para geração do site
│-- index.html      # Página inicial do site
│-- config.json     # Arquivo de configuração do gerador

##### Tarefas
- Estrutura do Site
- Geração dos Arquivos Estáticos
- Publicação no GitHub Pages
- Backlog
- Criar script para automatizar execução dos geradores
- Adicionar suporte a metadados nos posts
- Melhorar estilos visuais do site
- Criar documentação de uso para novos contribuidores

##### Conclusão
Essa abordagem garante um site leve, sem dependências externas, fácil de manter e completamente estático, compatível com o GitHub Pages.

## 1.0.1 - 2025-03-23
### Fix
- Assets
    - style.css: Footer

### Chore
- Pages: About

## 1.0.0 - 2024-06-30
### Added
- Assets
    - [reset.css](https://meyerweb.com/eric/tools/css/reset/)
    - [new.css](https://newcss.net/)
    - style.css
    - icons

### Removed
- External dependencies
    - Vue.js 
    - [Haruno](https://github.com/sswellington/haruno)
    - icons

## 0.11.0 - 2022-07-03
### Added
- update vuejs version 2 to 3.2.37

## 0.10.0 - 2021-02-06
### Added
- css: minify

## 0.9.0 - 2021-02-05
### Added
- css: transition and transform of scale;

## 0.8.0 - 2021-02-04
### Added
- css: gallery

## 0.7.0 - 2020-09-30
### Added
- [Vue.js v3.0](https://v3.vuejs.org/)

## 0.6.0 - 2020-09-30
### Added
- enable browser caching

## 0.5.1 - 2020-09-04
### Fixed
- css: responsive mobile
- cleaning: sarada.css
    - style: <a>

### Removed
- layout.css

## 0.5.0 - 2020-09-04
### Added
- sarada.css
- layout.css
    - aside

### Removed
- sakura.css
- HTML: demo

## 0.4.0 - 2020-08-27
### Added
- Haruno

## 0.3.0 - 2020-08-27
### Added
- CSS: [New.css v1.1.4](https://newcss.net/)  

### Removed
- CSS: [Normalize.css v8.0.1](https://github.com/necolas/normalize.css)

## 0.2.0 - 2020-08-27
### Added
- [Ico](https://www.veryicon.com)
    - [favicon.ico](https://www.veryicon.com/icons/movie--tv/naruto-vol-1/haruno-sakura.html)
    - [Social Media: Colored Circle](https://www.veryicon.com/icons/application/common-application-icons/)
    - [Nav: Common app Design Icon](https://www.veryicon.com/icons/application/common-app-design-icon/)

## 0.1.0 - 2020-08-27
### Added
- CSS:
    - [Normalize.css v8.0.1](https://github.com/necolas/normalize.css)
    - [Sakura.css v1.3.1](https://github.com/oxalorg/sakura)