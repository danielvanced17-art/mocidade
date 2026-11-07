# Mocidade Gideões no iPhone (e em qualquer celular)

O iPhone não instala APK. A solução é publicar esta pasta como site e **adicionar à Tela de Início**:
vira um ícone, abre em tela cheia e funciona sem internet para Bíblia, Harpa e cifras.

## 1. Publicar (uma vez só, grátis, uns 5 minutos)
1. No GitHub, crie um repositório **público** (ex.: `mocidade`).
2. **Add file > Upload files**: arraste **o conteúdo desta pasta** (index.html, sw.js, manifest.webmanifest, apple-touch-icon.png, as pastas `icons` e `fonts`) e confirme em **Commit changes**.
3. **Settings > Pages**: em *Branch* escolha `main` e `/ (root)` e clique **Save**.
4. Em 1 a 2 minutos o endereço aparece ali: `https://SEU-USUARIO.github.io/mocidade/`

## 2. Instalar no iPhone
1. Abra o endereço no **Safari** (não funciona pelo Chrome nem pelo navegador do WhatsApp).
2. Toque em **Compartilhar** (o quadrado com a seta) > **Adicionar à Tela de Início** > **Adicionar**.
3. Abra pelo ícone novo. Entre com o usuário e a senha (só na primeira vez).

No Android também funciona: Chrome > menu ⋮ > **Instalar aplicativo**.

## Atualizar depois
Troque o `index.html` no repositório (Add file > Upload files, mesmo nome). O app instalado pega a versão nova
sozinho: ela aparece na abertura seguinte.

## Bom saber
- O endereço da planilha (`API_URL`) fica visível no código do site; quem protege os dados é o login.
- No iPhone não existe botão voltar: use o gesto de deslizar da borda esquerda da tela.
- O app instalado guarda o login separado do Safari: entre uma vez de novo depois de instalar.
- Se a tela do iPhone apagar com o app aberto, é o ajuste de Brilho e Tela do iOS; nem todas as versões
  deixam o app segurar a tela ligada.
