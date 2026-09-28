# Site de Receitas

Site simples feito com HTML, CSS, JavaScript e Node.js com Express. A página inicial apresenta três receitas, cada uma em sua própria página.

## Rodar no computador

1. Instale o Node.js.
2. Abra o terminal nesta pasta.
3. Execute `npm install` para instalar o Express.
4. Execute `npm start`.
5. Acesse `http://localhost:3000` no navegador.

## Publicar no GitHub

1. Crie um repositório público vazio no GitHub, sem adicionar README, licença ou `.gitignore`.
2. No terminal desta pasta, execute `git init`.
3. Execute `git add .` e depois `git commit -m "Preparar site para hospedagem"`.
4. Conecte o repositório local ao GitHub com `git remote add origin URL_DO_REPOSITORIO`.
5. Execute `git branch -M main` e `git push -u origin main`.

## Publicar no Render

1. Entre no Render e escolha **New +** e depois **Web Service**.
2. Conecte sua conta do GitHub e selecione o repositório do site.
3. Use `npm install` como comando de instalação e `npm start` como comando de inicialização.
4. Escolha o plano gratuito e clique em **Create Web Service**.
5. Aguarde o deploy e abra a URL pública fornecida pelo Render.

O servidor usa a porta definida pelo Render (`process.env.PORT`) e serve os arquivos deste site.
