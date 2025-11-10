// SCRIPT CORRIGIDO PARA GOOGLE APPS SCRIPT
// Cole este código no Google Apps Script (Extensões > Apps Script)

function doPost(e) {
  try {
    // Log para debug - IMPORTANTE: Veja em "Execuções" no menu lateral
    Logger.log('=== INÍCIO DA EXECUÇÃO ===');
    Logger.log('Recebido: ' + e.postData.contents);

    // Obter a planilha ativa
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();

    // Log do nome da planilha
    Logger.log('Planilha: ' + sheet.getName());

    // Parse dos dados recebidos
    const dados = JSON.parse(e.postData.contents);

    // Log dos dados parseados
    Logger.log('Dados parseados:');
    Logger.log('- email: ' + dados.email);
    Logger.log('- data_inicio: ' + dados.data_inicio);
    Logger.log('- data_termino: ' + dados.data_termino);
    Logger.log('- nome_evento: ' + dados.nome_evento);
    Logger.log('- local: ' + dados.local);
    Logger.log('- descricao: ' + dados.descricao);

    // Criar timestamp formatado
    const agora = new Date();
    const timestamp = Utilities.formatDate(agora, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss');

    Logger.log('Timestamp criado: ' + timestamp);

    // Preparar array com os dados
    // A ordem DEVE corresponder às colunas da planilha:
    // A: Timestamp | B: Email | C: Data Início | D: Data Término | E: Nome do Evento | F: Local | G: Descrição
    const novaLinha = [
      timestamp,                     // Coluna A: Timestamp
      dados.email || '',             // Coluna B: Email
      dados.data_inicio || '',       // Coluna C: Data Início
      dados.data_termino || '',      // Coluna D: Data Término
      dados.nome_evento || '',       // Coluna E: Nome do Evento
      dados.local || '',             // Coluna F: Local
      dados.descricao || ''          // Coluna G: Descrição
    ];

    Logger.log('Array a ser inserido: ' + JSON.stringify(novaLinha));

    // Adicionar nova linha
    sheet.appendRow(novaLinha);

    Logger.log('✅ Linha adicionada com SUCESSO na linha ' + sheet.getLastRow());
    Logger.log('=== FIM DA EXECUÇÃO ===');

    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Dados salvos com sucesso',
        linha: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log detalhado do erro
    Logger.log('❌ ERRO: ' + error.toString());
    Logger.log('Stack trace: ' + error.stack);

    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função GET para testar se o script está ativo
function doGet(e) {
  return ContentService
    .createTextOutput('✅ Script está FUNCIONANDO! Use POST para enviar dados.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Função de teste - Execute esta função para testar se está funcionando
function testarFormulario() {
  Logger.log('=== TESTE DO FORMULÁRIO ===');

  const dadosTeste = {
    postData: {
      contents: JSON.stringify({
        email: 'teste@exemplo.com',
        data_inicio: '2025-01-15',
        data_termino: '2025-01-20',
        nome_evento: 'Evento de Teste',
        local: 'Auditório Milton Santos',
        descricao: 'Esta é uma descrição de teste para verificar se o formulário está funcionando corretamente.'
      })
    }
  };

  const resultado = doPost(dadosTeste);
  Logger.log('Resultado: ' + resultado.getContent());
  Logger.log('=== FIM DO TESTE ===');

  // Abra "Execuções" no menu lateral para ver todos os logs
}

// Função para limpar dados de teste (opcional)
function limparUltimaLinha() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const ultimaLinha = sheet.getLastRow();

  if (ultimaLinha > 1) { // Não apagar o cabeçalho
    sheet.deleteRow(ultimaLinha);
    Logger.log('Última linha removida. Linha ' + ultimaLinha + ' apagada.');
  } else {
    Logger.log('Não há linhas para apagar além do cabeçalho.');
  }
}
