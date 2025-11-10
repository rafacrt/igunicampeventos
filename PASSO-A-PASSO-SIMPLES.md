# 🚀 PASSO A PASSO SIMPLES - Configure em 5 minutos!

## ⚠️ PROBLEMA QUE VOCÊ TEVE:
O erro `Cannot read properties of undefined (reading 'postData')` acontece quando você executa a função **doPost** diretamente. Você deve executar a função **testarFormulario** em vez disso!

---

## ✅ SOLUÇÃO RÁPIDA - FAÇA EXATAMENTE NESTA ORDEM:

### 1️⃣ ATUALIZAR O SCRIPT (2 minutos)

1. Abra o arquivo **SCRIPT-FINAL-GOOGLE-APPS.js** (está na mesma pasta)
2. Pressione `Ctrl+A` para selecionar tudo
3. Pressione `Ctrl+C` para copiar
4. Abra sua planilha no Google Sheets
5. Vá em **Extensões** → **Apps Script**
6. **APAGUE TODO O CÓDIGO** que está lá
7. Pressione `Ctrl+V` para colar o novo código
8. Pressione `Ctrl+S` para salvar
9. Dê um nome: "Formulário IG v2"

✅ **Pronto! Script atualizado.**

---

### 2️⃣ TESTAR SE FUNCIONA (1 minuto)

1. No Apps Script, procure o menu dropdown que está escrito "doPost"
2. Clique nele e selecione **testarFormulario**
3. Clique no botão **▶ Executar**
4. Se pedir permissão, autorize (Revisar permissões → Avançado → Permitir)
5. Aguarde aparecer "Execução concluída"

**Agora faça o seguinte:**

6. Volte para a planilha do Google Sheets
7. Olhe se apareceu uma **nova linha** com dados de teste
8. Deve ter um evento chamado "🧪 TESTE - Semana de Geociências"

### ✅ SE APARECEU A LINHA DE TESTE:
**PARABÉNS! O script está funcionando!** Pule para o passo 3.

### ❌ SE NÃO APARECEU:
1. No Apps Script, clique em **Execuções** (ícone de relógio ⏰ no menu lateral)
2. Clique na execução mais recente
3. Leia os logs e me envie um print

---

### 3️⃣ VERIFICAR OS CABEÇALHOS (1 minuto)

Só por garantia, vamos verificar se os cabeçalhos estão corretos:

1. No Apps Script, mude o dropdown para **verificarPlanilha**
2. Clique em **▶ Executar**
3. Vá em **Execuções** (ícone ⏰)
4. Clique na execução mais recente
5. Leia o que está escrito

**Se aparecer "✅ TODOS OS CABEÇALHOS ESTÃO CORRETOS!":**
Ótimo! Vá para o passo 4.

**Se aparecer erros:**
Copie os nomes EXATOS do erro e cole nos cabeçalhos da planilha.

---

### 4️⃣ REIMPLANTAR (1 minuto)

Como você fez mudanças no script, precisa reimplantar:

1. No Apps Script, clique em **Implantar** → **Gerenciar implantações**
2. Clique no ícone de **✏️ lápis** (editar)
3. Em "Versão", clique em **Nova versão**
4. Descrição: "Correção dos erros"
5. Clique em **Implantar**
6. Clique em **Concluído**

**⚠️ A URL continua a mesma!** Você NÃO precisa alterar nada no index.html.

---

### 5️⃣ TESTAR NO NAVEGADOR (30 segundos)

1. Abra o arquivo **index.html** no navegador
2. Preencha o formulário com dados reais
3. Clique em "Avançar"
4. Preencha a segunda parte
5. Clique em "Enviar solicitação"
6. Deve aparecer um alert ✅ de sucesso

**Agora:**

7. Volte para a planilha do Google Sheets
8. Pressione `F5` para atualizar
9. Veja se apareceu uma **nova linha** com seus dados

---

## 🎉 SE FUNCIONOU:

**PERFEITO!** Seu formulário está pronto para uso. Agora você pode:

- Compartilhar o formulário com outras pessoas
- Monitorar as respostas na planilha
- (Opcional) Configurar notificações por email

---

## ❌ SE AINDA NÃO FUNCIONOU:

### Verifique estas 3 coisas:

#### 1. A URL no index.html está correta?
   - Abra o index.html
   - Vá na linha 463
   - A URL deve ser igual à do seu Apps Script

#### 2. O script está autorizado?
   - Execute a função `testarFormulario` novamente
   - Se pedir permissões, autorize tudo

#### 3. Os cabeçalhos da planilha estão EXATOS?
   - Execute a função `verificarPlanilha`
   - Veja se todos estão corretos

---

## 🆘 PRECISA DE AJUDA?

Me envie prints de:

1. **Execuções do Apps Script** (aba Execuções → clique na mais recente)
2. **Console do navegador** (pressione F12 no formulário)
3. **Primeira linha da planilha** (os cabeçalhos)
4. **Resultado da função verificarPlanilha**

Com isso eu consigo identificar o problema exato!

---

## 📚 FUNÇÕES ÚTEIS NO APPS SCRIPT:

Você tem estas funções disponíveis:

| Função | O que faz |
|--------|-----------|
| **testarFormulario** | Envia dados de teste para a planilha |
| **verificarPlanilha** | Verifica se os cabeçalhos estão corretos |
| **limparUltimaLinha** | Remove a última linha (útil para limpar testes) |

---

## ✨ DICA PROFISSIONAL:

Antes de compartilhar o formulário com outras pessoas:

1. Execute `limparUltimaLinha` várias vezes para remover os testes
2. Teste uma última vez para garantir que está tudo funcionando
3. Faça backup da planilha (Arquivo → Fazer uma cópia)

Pronto! 🎉
