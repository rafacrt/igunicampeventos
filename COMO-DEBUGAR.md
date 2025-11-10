# Guia Rápido de Debug - Formulário não está salvando no Google Sheets

## ⚠️ PROBLEMA: Formulário envia, mas dados não aparecem na planilha

Siga estes passos NA ORDEM:

---

## 📋 PASSO 1: Verificar os cabeçalhos da planilha

Abra sua planilha do Google Sheets e verifique se a **primeira linha** contém EXATAMENTE estes nomes:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| **Timestamp** | **Email** | **Data Início** | **Data Término** | **Nome do Evento** | **Local** | **Descrição** |

### ⚠️ ATENÇÃO:
- **"Data Início"** tem acento no "í"
- **"Data Término"** tem acento no "é"
- **"Descrição"** tem cedilha
- Não pode haver espaços extras antes ou depois
- Deve estar na linha 1

---

## 🔧 PASSO 2: Atualizar o código do Apps Script

1. Abra o Google Sheets
2. Vá em **Extensões** > **Apps Script**
3. **APAGUE TODO O CÓDIGO** que está lá
4. Abra o arquivo `SCRIPT-GOOGLE-APPS-CORRIGIDO.js` que está na pasta do projeto
5. **COPIE TODO O CONTEÚDO** desse arquivo
6. **COLE** no Apps Script
7. Clique em **Salvar** (ícone de disquete ou Ctrl+S)

---

## ✅ PASSO 3: Testar o script ANTES de implantar

1. No Apps Script, no menu dropdown de funções (ao lado de "Debug"), selecione **testarFormulario**
2. Clique em **Executar** (ícone de "play")
3. Se pedir autorização, clique em:
   - **Revisar permissões**
   - Escolha sua conta
   - **Avançado**
   - **Acessar [nome do projeto] (não seguro)**
   - **Permitir**
4. Aguarde a execução terminar

### Como ver se funcionou:
- Volte para a planilha do Google Sheets
- Verifique se apareceu uma **nova linha** com dados de teste
- Se apareceu: ✅ O script está funcionando!
- Se NÃO apareceu: ❌ Vá para o PASSO 4

---

## 🔍 PASSO 4: Ver os logs de erro

1. No Apps Script, clique em **Execuções** (ícone de relógio no menu lateral esquerdo)
2. Você verá uma lista de execuções
3. Clique na **mais recente**
4. Leia os logs e veja onde está dando erro

### Erros comuns:

**"Cannot find method appendRow"**
- Problema: A planilha não está sendo encontrada
- Solução: Certifique-se de que você está rodando o script da MESMA planilha (abra a planilha, depois vá em Extensões > Apps Script)

**"TypeError: Cannot read property..."**
- Problema: Dados estão chegando em formato errado
- Solução: Verifique se o formulário HTML está enviando os dados corretamente

---

## 🚀 PASSO 5: Reimplantar o Apps Script

Mesmo se já tinha implantado antes, você precisa **reimplantar** após fazer mudanças:

1. No Apps Script, clique em **Implantar** > **Gerenciar implantações**
2. Clique no ícone de **lápis** (editar) na implantação existente
3. Em **Versão**, selecione **Nova versão**
4. Adicione uma descrição: "Correção dos logs e debug"
5. Clique em **Implantar**
6. **COPIE A URL** (ela será a mesma, mas a versão será atualizada)

---

## 🌐 PASSO 6: Testar pelo navegador

1. Abra o arquivo `index.html` no navegador
2. Pressione **F12** para abrir as Ferramentas do Desenvolvedor
3. Vá na aba **Console**
4. Preencha o formulário e envie
5. Veja se aparecem erros no console

### Erros comuns no console:

**"Failed to fetch"** ou **"Network error"**
- A URL do Apps Script pode estar errada
- Verifique se você colocou a URL correta na linha 463 do index.html

**"CORS policy"**
- Isso é normal! O `mode: 'no-cors'` causa isso
- Ignore este erro se o formulário mostra a mensagem de sucesso

---

## 🔄 PASSO 7: Verificar execuções em tempo real

1. Deixe o Google Apps Script aberto na aba **Execuções**
2. Em outra aba/janela, abra o formulário
3. Preencha e envie
4. **IMEDIATAMENTE** volte para a aba de Execuções e clique em **Atualizar**
5. Você deve ver uma nova execução aparecer

### O que verificar:
- **Status**: Deve ser "Concluído" (não "Com falha")
- Clique na execução
- Veja os logs:
  - Deve aparecer `=== INÍCIO DA EXECUÇÃO ===`
  - Deve aparecer os dados recebidos
  - Deve aparecer `✅ Linha adicionada com SUCESSO`
  - Deve aparecer `=== FIM DA EXECUÇÃO ===`

---

## 🎯 CHECKLIST FINAL

Antes de enviar um novo teste, confirme:

- [ ] Cabeçalhos da planilha estão corretos (com acentos!)
- [ ] Colei o novo script do arquivo `SCRIPT-GOOGLE-APPS-CORRIGIDO.js`
- [ ] Salvei o script no Apps Script
- [ ] Testei a função `testarFormulario` e funcionou
- [ ] Reimplantei o Apps Script (Nova versão)
- [ ] A URL no index.html (linha 463) está correta
- [ ] Console do navegador (F12) está aberto para ver erros
- [ ] Aba de Execuções do Apps Script está aberta

---

## 💡 DICA: Como ver EXATAMENTE o que está sendo enviado

Se ainda não funcionar, adicione este código no **Console do navegador** (F12) ANTES de enviar o formulário:

```javascript
// Cole isso no Console e pressione Enter
window.addEventListener('submit', function(e) {
  const formData = new FormData(e.target);
  const dados = Object.fromEntries(formData.entries());
  console.log('📤 DADOS SENDO ENVIADOS:', dados);
});
```

Depois envie o formulário. No console aparecerá exatamente o que está sendo enviado.

---

## 📞 Se AINDA assim não funcionar

Me envie:
1. Print da tela de **Execuções** do Apps Script
2. Print do **Console** do navegador (F12)
3. Print dos **cabeçalhos da planilha** (primeira linha)
4. Print dos **logs** de uma execução (clique em uma execução na lista)

Com essas informações consigo identificar o problema exato!
