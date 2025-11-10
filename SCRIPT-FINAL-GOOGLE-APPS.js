// ============================================================================
// SCRIPT FINAL PARA GOOGLE APPS SCRIPT - FORMULÁRIO DE RESERVA IG
// ============================================================================
// Cole este código completo no Google Apps Script (Extensões > Apps Script)
// Depois execute a função "testarFormulario" para verificar se está funcionando
// ============================================================================

function doPost(e) {
  try {
    // Verificar se recebeu dados
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Nenhum dado foi recebido');
    }

    Logger.log('=== INÍCIO DA EXECUÇÃO ===');
    Logger.log('📥 Dados recebidos (raw): ' + e.postData.contents);

    // Obter a planilha ativa
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();

    Logger.log('📊 Planilha: ' + sheet.getName());

    // Parse dos dados recebidos
    const dados = JSON.parse(e.postData.contents);

    // Log dos dados parseados
    Logger.log('📋 Dados parseados:');
    Logger.log('  • Email: ' + (dados.email || 'VAZIO'));
    Logger.log('  • Data Início: ' + (dados.data_inicio || 'VAZIO'));
    Logger.log('  • Data Término: ' + (dados.data_termino || 'VAZIO'));
    Logger.log('  • Nome do Evento: ' + (dados.nome_evento || 'VAZIO'));
    Logger.log('  • Local: ' + (dados.local || 'VAZIO'));
    Logger.log('  • Descrição: ' + (dados.descricao ? dados.descricao.substring(0, 50) + '...' : 'VAZIO'));

    // Criar timestamp formatado (Brasil)
    const agora = new Date();
    const timestamp = Utilities.formatDate(agora, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss');

    Logger.log('🕐 Timestamp: ' + timestamp);

    // Preparar array com os dados na ordem das colunas
    // IMPORTANTE: A ordem DEVE ser igual aos cabeçalhos da planilha
    // Colunas: Timestamp | Email | Data Início | Data Término | Nome do Evento | Local | Descrição
    const novaLinha = [
      timestamp,                     // A: Timestamp
      dados.email || '',             // B: Email
      dados.data_inicio || '',       // C: Data Início
      dados.data_termino || '',      // D: Data Término
      dados.nome_evento || '',       // E: Nome do Evento
      dados.local || '',             // F: Local
      dados.descricao || ''          // G: Descrição
    ];

    Logger.log('📝 Dados a inserir: ' + JSON.stringify(novaLinha));

    // Adicionar nova linha
    sheet.appendRow(novaLinha);

    const ultimaLinha = sheet.getLastRow();
    Logger.log('✅ SUCESSO! Dados inseridos na linha ' + ultimaLinha);
    Logger.log('=== FIM DA EXECUÇÃO ===');

    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Dados salvos com sucesso!',
        linha: ultimaLinha,
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log detalhado do erro
    Logger.log('=== ERRO NA EXECUÇÃO ===');
    Logger.log('❌ Tipo de erro: ' + error.name);
    Logger.log('❌ Mensagem: ' + error.message);
    Logger.log('❌ Stack trace: ' + error.stack);

    // Retornar erro em formato JSON
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.message,
        stack: error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================================
// Função GET - Para testar se a URL do script está ativa
// ============================================================================
function doGet(e) {
  return ContentService
    .createTextOutput('✅ Script está ATIVO e FUNCIONANDO!\n\nVersão: 1.0\nData: ' + new Date())
    .setMimeType(ContentService.MimeType.TEXT);
}

// ============================================================================
// FUNÇÃO DE TESTE - EXECUTE ESTA FUNÇÃO PARA TESTAR!
// ============================================================================
// No Apps Script:
// 1. Selecione "testarFormulario" no menu dropdown de funções
// 2. Clique em "Executar" (botão play)
// 3. Vá em "Execuções" (menu lateral) para ver os logs
// 4. Verifique na planilha se apareceu uma nova linha
// ============================================================================
function testarFormulario() {
  Logger.log('');
  Logger.log('╔════════════════════════════════════════════════════════════╗');
  Logger.log('║           INICIANDO TESTE DO FORMULÁRIO                   ║');
  Logger.log('╚════════════════════════════════════════════════════════════╝');
  Logger.log('');

  // Simular dados enviados pelo formulário
  const dadosSimulados = {
    postData: {
      contents: JSON.stringify({
        email: 'teste@unicamp.br',
        data_inicio: '2025-11-15',
        data_termino: '2025-11-20',
        nome_evento: '🧪 TESTE - Semana de Geociências',
        local: 'Auditório Milton Santos',
        descricao: 'Este é um evento de TESTE para verificar se o formulário está salvando corretamente os dados na planilha do Google Sheets. Se você está vendo esta linha na planilha, significa que está FUNCIONANDO! 🎉'
      })
    }
  };

  Logger.log('🧪 Simulando envio do formulário...');
  Logger.log('');

  // Chamar a função doPost com os dados simulados
  const resultado = doPost(dadosSimulados);

  Logger.log('');
  Logger.log('📤 Resposta do servidor:');
  Logger.log(resultado.getContent());
  Logger.log('');
  Logger.log('╔════════════════════════════════════════════════════════════╗');
  Logger.log('║                    TESTE CONCLUÍDO                         ║');
  Logger.log('║                                                            ║');
  Logger.log('║  Agora verifique:                                          ║');
  Logger.log('║  1. Se apareceu uma nova linha na planilha                 ║');
  Logger.log('║  2. Se os dados estão corretos                             ║');
  Logger.log('║  3. Se o timestamp está no formato brasileiro              ║');
  Logger.log('╚════════════════════════════════════════════════════════════╝');
  Logger.log('');
}

// ============================================================================
// FUNÇÃO AUXILIAR - Limpar última linha (útil para remover testes)
// ============================================================================
function limparUltimaLinha() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const ultimaLinha = sheet.getLastRow();

  if (ultimaLinha > 1) { // Não apagar o cabeçalho
    sheet.deleteRow(ultimaLinha);
    Logger.log('🗑️ Linha ' + ultimaLinha + ' removida com sucesso');
  } else {
    Logger.log('⚠️ Não há linhas para remover (apenas cabeçalho)');
  }
}

// ============================================================================
// FUNÇÃO AUXILIAR - Verificar estrutura da planilha
// ============================================================================
function verificarPlanilha() {
  Logger.log('');
  Logger.log('═══════════════════════════════════════════════════════════');
  Logger.log('    VERIFICAÇÃO DA ESTRUTURA DA PLANILHA');
  Logger.log('═══════════════════════════════════════════════════════════');

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  Logger.log('📊 Nome da planilha: ' + sheet.getName());
  Logger.log('📏 Total de linhas: ' + sheet.getLastRow());
  Logger.log('📐 Total de colunas: ' + sheet.getLastColumn());
  Logger.log('');
  Logger.log('📋 Cabeçalhos encontrados (linha 1):');

  const cabecalhos = sheet.getRange(1, 1, 1, 7).getValues()[0];

  for (let i = 0; i < cabecalhos.length; i++) {
    const coluna = String.fromCharCode(65 + i); // A, B, C, etc
    const valor = cabecalhos[i];
    Logger.log('  • Coluna ' + coluna + ': "' + valor + '"');
  }

  Logger.log('');
  Logger.log('✅ Cabeçalhos ESPERADOS:');
  Logger.log('  • Coluna A: "Timestamp"');
  Logger.log('  • Coluna B: "Email"');
  Logger.log('  • Coluna C: "Data Início"');
  Logger.log('  • Coluna D: "Data Término"');
  Logger.log('  • Coluna E: "Nome do Evento"');
  Logger.log('  • Coluna F: "Local"');
  Logger.log('  • Coluna G: "Descrição"');
  Logger.log('');

  // Verificar se os cabeçalhos estão corretos
  const esperados = ['Timestamp', 'Email', 'Data Início', 'Data Término', 'Nome do Evento', 'Local', 'Descrição'];
  let todosCorretos = true;

  for (let i = 0; i < esperados.length; i++) {
    if (cabecalhos[i] !== esperados[i]) {
      Logger.log('❌ ERRO na coluna ' + String.fromCharCode(65 + i) + ':');
      Logger.log('   Esperado: "' + esperados[i] + '"');
      Logger.log('   Encontrado: "' + cabecalhos[i] + '"');
      todosCorretos = false;
    }
  }

  if (todosCorretos) {
    Logger.log('✅ TODOS OS CABEÇALHOS ESTÃO CORRETOS!');
  } else {
    Logger.log('❌ Existem erros nos cabeçalhos. Corrija conforme indicado acima.');
  }

  Logger.log('═══════════════════════════════════════════════════════════');
  Logger.log('');
}
