# 🌐 Como Ativar o GitHub Pages

## O que é GitHub Pages?

GitHub Pages permite hospedar seu formulário gratuitamente diretamente do GitHub. Seu formulário ficará acessível em:

```
https://rafacrt.github.io/igunicampeventos/
```

---

## 📝 Passos para Ativar

### 1. Acesse as Configurações do Repositório

1. Vá para: https://github.com/rafacrt/igunicampeventos
2. Clique em **⚙️ Settings** (configurações) no menu superior
3. No menu lateral esquerdo, clique em **Pages**

### 2. Configure o GitHub Pages

1. Em **Source** (Origem), selecione:
   - **Branch**: `master` (ou `main`)
   - **Folder**: `/ (root)`
2. Clique em **Save** (Salvar)

### 3. Aguarde a Publicação

1. O GitHub começará a publicar seu site
2. Isso pode levar de 1 a 5 minutos
3. Você verá uma mensagem: "Your site is ready to be published at..."

### 4. Acesse seu Formulário

Após alguns minutos, acesse:

```
https://rafacrt.github.io/igunicampeventos/
```

---

## ✅ Verificar se Funcionou

1. Abra a URL do seu site
2. O formulário deve aparecer
3. Teste preenchendo e enviando
4. Verifique se os dados chegam no Google Sheets

---

## 🔧 Personalizar Domínio (Opcional)

Se quiser usar um domínio próprio (ex: `eventos.ig.unicamp.br`):

### 1. Configurar DNS

No provedor do seu domínio, adicione um registro CNAME:

```
CNAME: eventos
Aponta para: rafacrt.github.io
```

### 2. Configurar no GitHub

1. Nas configurações do Pages
2. Em **Custom domain**, digite: `eventos.ig.unicamp.br`
3. Clique em **Save**
4. Marque **Enforce HTTPS**

### 3. Aguardar Propagação

- DNS pode levar até 48h para propagar (geralmente minutos)
- O certificado HTTPS é gerado automaticamente

---

## 📱 Compartilhar o Formulário

Depois de ativado, você pode compartilhar:

- **Link direto**: https://rafacrt.github.io/igunicampeventos/
- **QR Code**: Gere em https://www.qr-code-generator.com/
- **Embed**: Incorpore em outro site usando iframe

### Exemplo de iframe:

```html
<iframe
  src="https://rafacrt.github.io/igunicampeventos/"
  width="100%"
  height="800"
  frameborder="0">
</iframe>
```

---

## 🚀 Atualizações Automáticas

Toda vez que você fizer push para o repositório:

1. O GitHub Pages detecta automaticamente
2. Republica o site com as mudanças
3. Leva cerca de 1-2 minutos

Para atualizar:

```bash
# Faça suas alterações nos arquivos
git add .
git commit -m "Descrição da mudança"
git push
```

---

## 🐛 Problemas Comuns

### Site não carrega (404)

- Aguarde 5-10 minutos após ativar
- Verifique se a branch correta está selecionada
- Certifique-se de que o arquivo se chama `index.html`

### Formulário carrega mas não envia

- Verifique se a URL do Google Apps Script está correta
- Teste localmente primeiro
- Veja os logs do console do navegador (F12)

### CSS/JS não carrega

- Verifique se os caminhos são relativos (não absolutos)
- Exemplo correto: `logo-ig.png` (não `/logo-ig.png`)
- Limpe o cache do navegador (Ctrl + Shift + R)

---

## 📊 Estatísticas (Opcional)

Para adicionar Google Analytics:

1. Crie uma conta em https://analytics.google.com
2. Obtenha seu código de rastreamento
3. Adicione antes do `</head>` no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 Segurança

### Público vs Privado

- **Repositório Público**: Qualquer pessoa pode ver o código
- **Repositório Privado**: Apenas você vê o código (GitHub Pages funciona igual)

**IMPORTANTE**: A URL do Google Apps Script estará visível no código. Por isso:
- Não inclua dados sensíveis no formulário
- Configure as permissões da planilha corretamente
- Monitore as submissões regularmente

### Desativar Temporariamente

Para desativar o formulário temporariamente:

1. Vá em Settings > Pages
2. Selecione **None** em Source
3. Clique em Save

---

## ✨ Melhorias Futuras

Após ativar o GitHub Pages, você pode:

- [ ] Adicionar Google Analytics para ver acessos
- [ ] Criar um domínio personalizado
- [ ] Adicionar mais campos ao formulário
- [ ] Criar uma página de confirmação
- [ ] Adicionar validação de horários disponíveis
- [ ] Integrar com calendário do Google

---

## 📞 Suporte

Se tiver problemas:

1. Veja a [documentação oficial](https://docs.github.com/pages)
2. Abra uma [issue](https://github.com/rafacrt/igunicampeventos/issues)
3. Consulte os guias de debug do projeto

---

**Pronto! Seu formulário está no ar! 🎉**
