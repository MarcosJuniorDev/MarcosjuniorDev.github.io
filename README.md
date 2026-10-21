# 🚀 Portfólio & Currículo Interativo – Marcos Junior Oliveira

Portfólio moderno, veloz e elegante desenvolvido especialmente para hospedar no **GitHub Pages**, combinando as duas áreas de atuação de Marcos: **Desenvolvimento Back-End Java** e **Infraestrutura / SysAdmin / DevOps**.

Desenvolvido em tema escuro com estética **Preto e Gradientes Cinza (Dark Slate / Obsidian Chrome)**, tipografia de alta fidelidade e microinterações fluidas.

---

## ✨ Recursos do Projeto

- **Filtro Dinâmico de Perfil:** O recrutador pode alternar com 1 clique entre:
  - 🌐 *Visão Completa* (visão integrada do perfil)
  - ☕ *Java Back-End* (foco em Spring Boot, REST APIs, SQL, Clean Architecture)
  - ☁️ *Infra & DevOps* (foco em Proxmox, Docker, Zabbix, Linux SysAdmin)
- **Downloads Diretos dos Dois Currículos:**
  - `CurriculoMarcosAttJava.pdf` (Currículo Java)
  - `Curriculo_Marcos_Oliveira_Infraestrutura.pdf` (Currículo Infraestrutura)
  - Botão de download direto e botão para visualizar diretamente no navegador.
- **Botões com Cópia para Área de Transferência:**
  - Botão "Copiar E-mail" com alerta flutuante (*toast notification*) e feedback visual.
- **Link Direto para WhatsApp:**
  - Mensagem personalizada pronta para iniciar conversa com recrutadores.
- **Zero Dependências Pesadas:**
  - Feito em HTML5 semântico, CSS3 moderno e JavaScript vanilla puro.
  - Carregamento instantâneo no GitHub Pages.
  - Totalmente responsivo para celulares, tablets e desktops.

---

## 📁 Estrutura de Arquivos

```text
MarcosJuniorDev/
├── index.html                                  # Página principal semântica e acessível
├── style.css                                   # Estilização completa, dark mode e gradientes
├── script.js                                   # Filtro de perfil, scrollspy, cópia e menu mobile
├── CurriculoMarcosAttJava.pdf                  # PDF do currículo focado em Java
├── Curriculo_Marcos_Oliveira_Infraestrutura.pdf # PDF do currículo focado em Infraestrutura
└── README.md                                   # Instruções de uso e deploy
```

---

## 🌐 Como Publicar no GitHub Pages (Passo a Passo)

### Opção 1: Seu site como domínio principal (`seunome.github.io`)

1. Crie um repositório no seu GitHub com o nome exato:
   ```text
   MarcosjuniorDev.github.io
   ```
2. No seu terminal, dentro desta pasta (`MarcosJuniorDev`), execute:
   ```bash
   git init
   git add .
   git commit -m "feat: site de portfólio e currículos interativos"
   git branch -M main
   git remote add origin https://github.com/MarcosjuniorDev/MarcosjuniorDev.github.io.git
   git push -u origin main
   ```
3. Pronto! Em 1 a 2 minutos seu site estará no ar em:
   `https://marcosjuniordev.github.io`

---

### Opção 2: Como repositório de projeto (`seunome.github.io/portfolio`)

1. Crie um repositório com o nome que desejar (ex: `portfolio` ou `curriculo`).
2. No terminal:
   ```bash
   git init
   git add .
   git commit -m "feat: site de portfólio"
   git branch -M main
   git remote add origin https://github.com/MarcosjuniorDev/portfolio.git
   git push -u origin main
   ```
3. No GitHub, abra o repositório, clique em **Settings** > **Pages** (no menu lateral esquerdo).
4. Em **Build and deployment** > **Branch**, selecione `main` e a pasta `/(root)`, depois clique em **Save**.
5. Seu site ficará acessível em:
   `https://marcosjuniordev.github.io/portfolio/`

---

## 🛠️ Personalizações Rápidas

- **Atualizar Links de Redes Sociais:**
  - Abra o arquivo `index.html` e edite os links de LinkedIn e GitHub nas seções `#hero` e `#contato`.
- **Atualizar Currículos em PDF:**
  - Basta substituir os arquivos PDF mantendo os mesmos nomes (`CurriculoMarcosAttJava.pdf` e `Curriculo_Marcos_Oliveira_Infraestrutura.pdf`), ou alterar o atributo `href` correspondente no `index.html`.
- **Adicionar sua Foto de Perfil:**
  - Se quiser colocar sua foto no topo da seção "Sobre Mim" ou no Hero, basta salvar uma imagem (ex: `foto.jpg`) nesta pasta e inseri-la no `index.html`.
