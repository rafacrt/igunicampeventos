# Guia de Configuração - Google Sheets

## Passo 1: Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Na primeira linha (cabeçalho), adicione as seguintes colunas:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Timestamp | Email | Data Início | Data Término | Nome do Evento | Local | Descrição |

## Passo 2: Criar o Google Apps Script

1. Na planilha, clique em **Extensões** > **Apps Script**
2. Apague o código padrão e cole o código abaixo:

```javascript
function doPost(e) {
  try {
    // Log para debug
    Logger.log('Recebido: ' + e.postData.contents);

    // Obter a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse dos dados recebidos
    const dados = JSON.parse(e.postData.contents);

    // Log dos dados parseados
    Logger.log('Dados parseados: ' + JSON.stringify(dados));

    // Criar timestamp
    const timestamp = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    });

    // Adicionar nova linha com os dados
    // IMPORTANTE: A ordem deve corresponder às colunas da planilha:
    // A: Timestamp | B: Email | C: Data Início | D: Data Término | E: Nome do Evento | F: Local | G: Descrição
    sheet.appendRow([
      timestamp,
      dados.email || '',
      dados.data_inicio || '',
      dados.data_termino || '',
      dados.nome_evento || '',
      dados.local || '',
      dados.descricao || ''
    ]);

    Logger.log('Linha adicionada com sucesso');

    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Dados salvos com sucesso' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log do erro
    Logger.log('Erro: ' + error.toString());

    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Teste com GET para verificar se o script está funcionando
function doGet(e) {
  return ContentService
    .createTextOutput('Script funcionando! Use POST para enviar dados.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Função de teste (opcional)
function testarFormulario() {
  const dadosTeste = {
    postData: {
      contents: JSON.stringify({
        email: 'teste@exemplo.com',
        data_inicio: '2025-01-15',
        data_termino: '2025-01-20',
        nome_evento: 'Evento Teste',
        local: 'Auditório Milton Santos',
        descricao: 'Esta é uma descrição de teste para verificar se o formulário está funcionando corretamente.'
      })
    }
  };

  const resultado = doPost(dadosTeste);
  Logger.log(resultado.getContent());
}
```

3. Clique em **Salvar** (ícone de disquete)
4. Dê um nome ao projeto, por exemplo: "Formulário Reserva IG"

## Passo 3: Implantar o Web App

1. Clique em **Implantar** > **Nova implantação**
2. Clique no ícone de engrenagem ao lado de "Selecionar tipo"
3. Escolha **Aplicativo da Web**
4. Configure:
   - **Descrição**: "Formulário de Reserva de Espaço"
   - **Executar como**: "Eu" (sua conta)
   - **Quem tem acesso**: "Qualquer pessoa"
5. Clique em **Implantar**
6. **IMPORTANTE**: Copie a **URL do aplicativo da Web** (algo como: `https://script.google.com/macros/s/XXXXXXXXXXXX/exec`)
7. Clique em **Concluído**

## Passo 4: Autorizar Permissões

Na primeira vez que implantar, você precisará autorizar:

1. Clique em **Revisar permissões**
2. Escolha sua conta do Google
3. Clique em **Avançado**
4. Clique em **Acessar [nome do projeto] (não seguro)**
5. Clique em **Permitir**

## Passo 5: Atualizar o HTML

1. Abra o arquivo `index.html`
2. Localize a linha (aproximadamente linha 507):
   ```javascript
   const response = await fetch('SUBSTITUA_PELA_URL_DO_GOOGLE_APPS_SCRIPT', {
   ```
3. Substitua `'SUBSTITUA_PELA_URL_DO_GOOGLE_APPS_SCRIPT'` pela URL que você copiou no Passo 3
4. Exemplo:
   ```javascript
   const response = await fetch('https://script.google.com/macros/s/XXXXXXXXXXXX/exec', {
   ```
5. Salve o arquivo

## Passo 6: Testar

### Teste 1: Testar o Script (Opcional)
1. No Apps Script, selecione a função `testarFormulario` no menu dropdown
2. Clique em **Executar**
3. Verifique se uma nova linha foi adicionada na planilha

### Teste 2: Testar o Formulário
1. Abra o arquivo `index.html` no navegador
2. Preencha todos os campos
3. Clique em "Avançar" e depois em "Enviar solicitação"
4. Verifique se:
   - Aparece o alert de sucesso
   - Uma nova linha foi adicionada na planilha do Google Sheets

## Formatação Recomendada da Planilha

Para melhor visualização, recomendo:

1. **Congelar a primeira linha** (cabeçalho):
   - Clique na linha 1
   - Vá em **Exibir** > **Congelar** > **1 linha**

2. **Ajustar largura das colunas**:
   - Timestamp: 150px
   - Email: 200px
   - Data Início: 120px
   - Data Término: 120px
   - Nome do Evento: 250px
   - Local: 200px
   - Descrição: 400px

3. **Formatar datas**:
   - Selecione as colunas C e D
   - Vá em **Formatar** > **Número** > **Data**

4. **Negrito no cabeçalho**:
   - Selecione a linha 1
   - Clique em **Negrito**

## Solução de Problemas

### Erro: "Script function not found"
- Verifique se salvou o script
- Certifique-se de que a função se chama `doPost`

### Erro: "Authorization required"
- Refaça o Passo 4 (Autorizar Permissões)

### Formulário não envia
- Verifique se substituiu a URL corretamente no HTML
- Abra o Console do navegador (F12) para ver erros
- Verifique se a URL do Apps Script está correta e ativa

### Dados não aparecem na planilha - PASSO A PASSO DE DEBUG

#### 1. Verificar se o script está recebendo dados:
   - No Google Apps Script, clique em **Execuções** (ícone de relógio no menu lateral)
   - Faça um teste enviando o formulário
   - Você deve ver uma nova execução aparecer
   - Clique nela para ver os logs

#### 2. Ver os logs detalhados:
   - No Apps Script, clique em **Execuções**
   - Clique na execução mais recente
   - Veja o que está sendo registrado nos logs
   - Se aparecer "Linha adicionada com sucesso", o problema não é no script

#### 3. Verificar os nomes das colunas:
   **IMPORTANTE**: Os cabeçalhos da planilha devem ser EXATAMENTE:

   | Coluna A | Coluna B | Coluna C | Coluna D | Coluna E | Coluna F | Coluna G |
   |----------|----------|----------|----------|----------|----------|----------|
   | Timestamp | Email | Data Início | Data Término | Nome do Evento | Local | Descrição |

   **ATENÇÃO**:
   - Não use acentos diferentes (Data Início vs Data Inicio)
   - Certifique-se de que não há espaços extras
   - Os nomes devem estar na linha 1

#### 4. Testar o script diretamente:
   - No Apps Script, selecione a função `testarFormulario`
   - Clique em **Executar**
   - Verifique se uma linha de teste foi adicionada
   - Se funcionar, o problema está na comunicação entre o formulário e o script

#### 5. Verificar modo 'no-cors':
   O formulário usa `mode: 'no-cors'` que não permite ler a resposta. Para debug melhor:

   **Temporariamente**, abra o index.html e encontre a linha 465:
   ```javascript
   mode: 'no-cors',
   ```

   **Comente essa linha** para teste:
   ```javascript
   // mode: 'no-cors',  // Comentado temporariamente para debug
   ```

   Envie o formulário e veja se algum erro aparece no Console (F12)

## Receber Notificações por Email (Opcional)

Se quiser receber um email cada vez que o formulário for preenchido, adicione ao final da função `doPost`:

```javascript
// Antes do return ContentService...
MailApp.sendEmail({
  to: 'seu-email@exemplo.com',
  subject: '🔔 Nova Reserva de Espaço - ' + dados.nome_evento,
  body: `Nova solicitação de reserva recebida:\n\n` +
        `Email: ${dados.email}\n` +
        `Evento: ${dados.nome_evento}\n` +
        `Data: ${dados.data_inicio} a ${dados.data_termino}\n` +
        `Local: ${dados.local}\n` +
        `Descrição: ${dados.descricao}\n\n` +
        `Timestamp: ${timestamp}`
});
```

Após adicionar, salve e reimplante o Apps Script.

## Dicas de Segurança

1. **Não compartilhe a URL do Apps Script publicamente** - ela permite enviar dados para sua planilha
2. **Configure permissões da planilha** - apenas pessoas autorizadas devem ter acesso de edição
3. **Monitore regularmente** - verifique se não há envios suspeitos
4. **Limite de taxa** - O Google Apps Script tem limites de uso. Para alto volume, considere outras soluções

## Recursos Adicionais

- [Documentação Google Apps Script](https://developers.google.com/apps-script)
- [Documentação Spreadsheet Service](https://developers.google.com/apps-script/reference/spreadsheet)
- [Limites do Apps Script](https://developers.google.com/apps-script/guides/services/quotas)
