# 🔄 Como Atualizar o Google Sheets para o Formulário Novo (3 Etapas)

## ⚠️ O QUE MUDOU?

O formulário foi expandido de **2 etapas para 3 etapas** e agora tem **26 campos** (antes tinha apenas 7).

### Novos campos adicionados:
- Horários do evento (início e término)
- Horários de montagem/desmontagem
- Público estimado
- Dados da entidade promotora
- Dados do coordenador (nome, email, telefone)
- Dados do contato (nome, email, telefone)
- Perguntas sobre expositores, patrocínio e inscrição paga
- Serviços multimídia necessários (checkboxes)
- Prestadores de serviços (checkboxes)
- Observações adicionais
- Declaração de responsabilidade

---

## 🚀 PASSO A PASSO PARA ATUALIZAR (10 minutos)

### 1️⃣ Backup da Planilha Atual (1 minuto)

**IMPORTANTE**: Faça backup antes de qualquer alteração!

1. Abra sua planilha do Google Sheets
2. Clique em **Arquivo** → **Fazer uma cópia**
3. Nomeie como "Backup - Reserva IG - [DATA]"
4. Clique em **Fazer uma cópia**

✅ Agora você tem um backup caso precise voltar.

---

### 2️⃣ Opção A: Criar Nova Planilha (RECOMENDADO - Mais Fácil)

#### Por que criar uma nova planilha?
- Não precisa ajustar colunas manualmente
- Cabeçalhos são criados automaticamente
- Menos chance de erros
- Mantém a planilha antiga intacta

#### Como fazer:

1. **Crie uma nova planilha no Google Sheets**
   - Acesse: https://sheets.google.com
   - Clique em **+ Novo**
   - Nomeie: "Reserva de Espaços IG - 2025"

2. **Abra o Apps Script da NOVA planilha**
   - Na nova planilha, clique em **Extensões** → **Apps Script**
   - Apague o código padrão

3. **Cole o novo script**
   - Abra o arquivo **SCRIPT-GOOGLE-SHEETS-ATUALIZADO.js**
   - Copie TODO o conteúdo (Ctrl+A, Ctrl+C)
   - Cole no Apps Script (Ctrl+V)
   - Clique em **Salvar** (Ctrl+S)
   - Dê um nome: "Formulário IG v3"

4. **Crie os cabeçalhos automaticamente**
   - No dropdown de funções, selecione **criarCabecalhos**
   - Clique em **▶ Executar**
   - Autorize se necessário
   - Os 26 cabeçalhos serão criados automaticamente! ✨

5. **Teste se está funcionando**
   - Selecione a função **testarFormulario**
   - Clique em **▶ Executar**
   - Verifique se apareceu uma linha de teste na planilha
   - Se sim, está funcionando! 🎉

6. **Implante o script**
   - Clique em **Implantar** → **Nova implantação**
   - Tipo: **Aplicativo da Web**
   - Executar como: **Eu**
   - Acesso: **Qualquer pessoa**
   - Clique em **Implantar**
   - **COPIE A URL** (você vai precisar dela!)

7. **Atualize o index.html**
   - Abra o arquivo `index.html`
   - Procure pela linha que tem `fetch(` (aproximadamente linha 505)
   - Substitua a URL antiga pela nova URL que você copiou
   - Salve o arquivo

8. **Teste o formulário**
   - Abra o `index.html` no navegador
   - Preencha todas as 3 etapas
   - Envie
   - Verifique se os dados chegaram na planilha

---

### 2️⃣ Opção B: Atualizar Planilha Existente (Mais Trabalhoso)

Se você preferir manter a mesma planilha:

1. **Adicione as novas colunas**
   - Abra o arquivo **CABECALHOS-PLANILHA-ATUALIZADA.txt**
   - A planilha antiga tinha 7 colunas (A-G)
   - Você precisa adicionar 19 novas colunas (H-Z)
   - Copie os nomes dos cabeçalhos H até Z
   - Cole na linha 1 da planilha, começando da coluna H

2. **Verifique se está correto**
   - Execute a função **verificarPlanilha** no Apps Script
   - Se todos os 26 cabeçalhos estiverem corretos, prossiga

3. **Atualize o script do Apps Script**
   - Copie o conteúdo de **SCRIPT-GOOGLE-SHEETS-ATUALIZADO.js**
   - Cole no Apps Script (substituindo o código antigo)
   - Salve

4. **Reimplante**
   - Implantar → Gerenciar implantações
   - Editar → Nova versão
   - Implantar

5. **Teste**
   - Execute a função **testarFormulario**
   - Verifique se todos os campos estão sendo preenchidos

---

## 🧪 Testando a Atualização

### Teste 1: Verificar Cabeçalhos
```
No Apps Script:
1. Selecione a função: verificarPlanilha
2. Clique em Executar
3. Vá em Execuções e veja o resultado
4. Deve mostrar: "✅ TODOS OS 26 CABEÇALHOS ESTÃO CORRETOS!"
```

### Teste 2: Teste Automático
```
No Apps Script:
1. Selecione a função: testarFormulario
2. Clique em Executar
3. Vá para a planilha
4. Deve aparecer uma linha com dados de teste
5. Verifique se TODOS os 26 campos estão preenchidos
```

### Teste 3: Teste Real
```
No navegador:
1. Abra o index.html
2. Preencha a Etapa 1 (datas e horários)
3. Clique em "Avançar"
4. Preencha a Etapa 2 (informações do evento)
5. Clique em "Avançar"
6. Preencha a Etapa 3 (organização e serviços)
7. Marque a declaração de responsabilidade
8. Clique em "Enviar solicitação"
9. Deve aparecer um alert de sucesso
10. Verifique na planilha se os dados chegaram
```

---

## 📊 Comparação: Antes vs Depois

| Item | Antes (v1) | Depois (v2) |
|------|------------|-------------|
| **Etapas** | 2 | 3 |
| **Campos** | 7 | 26 |
| **Colunas na planilha** | A-G | A-Z (26 colunas) |
| **Checkboxes** | 0 | 2 grupos (multimídia e serviços) |
| **Validações** | Básicas | Completas |

---

## ❓ FAQ - Perguntas Frequentes

### Preciso apagar a planilha antiga?
Não! Mantenha como backup. Crie uma nova planilha para o novo formulário.

### Os dados antigos serão perdidos?
Não, se você criar uma nova planilha. Você pode até migrar os dados antigos manualmente se quiser.

### Preciso mudar a URL no index.html?
Sim, se você criar uma nova planilha ou reimplantar o Apps Script, você precisa atualizar a URL no código.

### Onde fica a URL no index.html?
Procure por `fetch(` no arquivo. A URL está logo depois (aproximadamente linha 505).

### Como sei se está funcionando?
Execute a função `testarFormulario`. Se aparecer uma linha na planilha com 26 campos preenchidos, está funcionando!

### Os checkboxes aparecem como?
Aparecem como texto separado por vírgula. Exemplo: "Projeção no telão, Streaming: canal do YouTube"

---

## 🆘 Problemas Comuns

### "Erro: Cannot find method appendRow"
- Certifique-se de que você está executando o script NA MESMA planilha
- Abra a planilha → Extensões → Apps Script

### "Dados não aparecem na planilha"
1. Verifique se executou a função `criarCabecalhos` ou se os cabeçalhos estão corretos
2. Execute a função `verificarPlanilha` para validar
3. Veja os logs em "Execuções" no Apps Script

### "Apenas alguns campos são preenchidos"
- Os cabeçalhos provavelmente estão errados ou em ordem diferente
- Execute a função `verificarPlanilha` para identificar o problema
- Use a função `criarCabecalhos` para recriar automaticamente

### "URL do Apps Script mudou"
- Normal! Quando você cria uma nova planilha, a URL muda
- Sempre copie a nova URL e atualize no index.html

---

## ✅ Checklist Final

Antes de colocar em produção:

- [ ] Backup da planilha antiga criado
- [ ] Nova planilha criada (ou antiga atualizada)
- [ ] Script atualizado no Apps Script
- [ ] Função `criarCabecalhos` executada (ou cabeçalhos criados manualmente)
- [ ] Função `verificarPlanilha` executada e confirmou 26 cabeçalhos corretos
- [ ] Função `testarFormulario` executada com sucesso
- [ ] Script implantado como Web App
- [ ] URL copiada e colada no index.html
- [ ] Teste real feito pelo navegador
- [ ] Dados chegaram corretamente na planilha com todos os 26 campos

---

## 📚 Arquivos de Referência

- **SCRIPT-GOOGLE-SHEETS-ATUALIZADO.js** - Script completo atualizado
- **CABECALHOS-PLANILHA-ATUALIZADA.txt** - Lista dos 26 cabeçalhos
- **index.html** - Formulário atualizado (3 etapas)

---

**Pronto! Sua planilha está atualizada para o novo formulário! 🎉**
