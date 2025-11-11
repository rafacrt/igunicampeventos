// ============================================================================
// SCRIPT ATUALIZADO PARA GOOGLE APPS SCRIPT - FORMULÁRIO COMPLETO (3 ETAPAS)
// ============================================================================
// Cole este código no Google Apps Script (Extensões > Apps Script)
// Este script foi atualizado para incluir TODOS os novos campos do formulário
// ============================================================================

function doPost(e) {
  try {
    // Verificar se recebeu dados
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Nenhum dado foi recebido');
    }

    Logger.log('=== INÍCIO DA EXECUÇÃO ===');
    Logger.log('📥 Dados recebidos: ' + e.postData.contents);

    // Obter a planilha ativa
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();

    Logger.log('📊 Planilha: ' + sheet.getName());

    // Parse dos dados recebidos
    const dados = JSON.parse(e.postData.contents);

    // Criar timestamp formatado (Brasil)
    const agora = new Date();
    const timestamp = Utilities.formatDate(agora, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss');

    Logger.log('🕐 Timestamp: ' + timestamp);

    // Processar checkboxes (campos múltiplos)
    const servicosMultimidia = dados.servicos_multimidia || '';
    const prestadoresServico = dados.prestadores_servico || '';

    // Preparar array com os dados na ordem das colunas
    const novaLinha = [
      timestamp,                                    // A: Timestamp
      dados.email || '',                            // B: Email
      dados.data_inicio || '',                      // C: Data Início
      dados.data_termino || '',                     // D: Data Término
      dados.hora_evento_inicio || '',               // E: Hora Evento Início
      dados.hora_evento_termino || '',              // F: Hora Evento Término
      dados.hora_montagem_inicio || '',             // G: Hora Montagem Início
      dados.hora_montagem_termino || '',            // H: Hora Montagem Término
      dados.nome_evento || '',                      // I: Nome do Evento
      dados.local || '',                            // J: Local
      dados.publico_estimado || '',                 // K: Público Estimado
      dados.descricao || '',                        // L: Descrição
      dados.entidade_promotora || '',               // M: Entidade Promotora
      dados.coordenador_nome || '',                 // N: Coordenador Nome
      dados.coordenador_email || '',                // O: Coordenador Email
      dados.coordenador_telefone || '',             // P: Coordenador Telefone
      dados.contato_nome || '',                     // Q: Contato Nome
      dados.contato_email || '',                    // R: Contato Email
      dados.contato_telefone || '',                 // S: Contato Telefone
      dados.haverao_expositores || '',              // T: Haverão Expositores?
      dados.evento_patrocinio || '',                // U: Evento Possui Patrocínio?
      dados.evento_inscricao_paga || '',            // V: Evento Possui Inscrição Paga?
      servicosMultimidia,                           // W: Serviços Multimídia
      prestadoresServico,                           // X: Prestadores de Serviço
      dados.observacoes || '',                      // Y: Observações
      dados.declaracao_responsabilidade || ''       // Z: Declaração de Responsabilidade
    ];

    Logger.log('📝 Total de campos: ' + novaLinha.length);

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
    .createTextOutput('✅ Script está ATIVO e FUNCIONANDO!\n\nVersão: 2.0 (Formulário Completo - 3 Etapas)\nData: ' + new Date())
    .setMimeType(ContentService.MimeType.TEXT);
}

// ============================================================================
// FUNÇÃO DE TESTE - EXECUTE ESTA FUNÇÃO PARA TESTAR!
// ============================================================================
function testarFormulario() {
  Logger.log('');
  Logger.log('╔════════════════════════════════════════════════════════════╗');
  Logger.log('║     INICIANDO TESTE DO FORMULÁRIO (VERSÃO COMPLETA)       ║');
  Logger.log('╚════════════════════════════════════════════════════════════╝');
  Logger.log('');

  // Simular dados enviados pelo formulário completo
  const dadosSimulados = {
    postData: {
      contents: JSON.stringify({
        email: 'teste@unicamp.br',
        data_inicio: '2025-11-15',
        data_termino: '2025-11-20',
        hora_evento_inicio: '09:00',
        hora_evento_termino: '17:00',
        hora_montagem_inicio: '08:00',
        hora_montagem_termino: '18:00',
        nome_evento: '🧪 TESTE - Semana de Geociências 2025',
        local: 'Auditório Milton Santos',
        publico_estimado: '150',
        descricao: 'Evento de teste para validar o novo formulário com 3 etapas e todos os campos adicionais.',
        entidade_promotora: 'Instituto de Geociências - Unicamp',
        coordenador_nome: 'Dr. João Silva',
        coordenador_email: 'joao.silva@unicamp.br',
        coordenador_telefone: '(19) 3521-4500',
        contato_nome: 'Maria Santos',
        contato_email: 'maria.santos@unicamp.br',
        contato_telefone: '(19) 99999-9999',
        haverao_expositores: 'Sim',
        evento_patrocinio: 'Não',
        evento_inscricao_paga: 'Não',
        servicos_multimidia: 'Projeção no telão, Streaming: canal do YouTube',
        prestadores_servico: 'Buffet contratado, Gravação',
        observacoes: 'Este é um teste do formulário atualizado.',
        declaracao_responsabilidade: 'Aceito'
      })
    }
  };

  Logger.log('🧪 Simulando envio do formulário completo...');
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
  Logger.log('║  Verifique na planilha:                                    ║');
  Logger.log('║  - Se apareceu uma nova linha                              ║');
  Logger.log('║  - Se TODOS os 26 campos estão preenchidos                 ║');
  Logger.log('║  - Se o timestamp está correto                             ║');
  Logger.log('╚════════════════════════════════════════════════════════════╝');
  Logger.log('');
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

  const totalColunas = 26; // A até Z
  const cabecalhos = sheet.getRange(1, 1, 1, totalColunas).getValues()[0];

  for (let i = 0; i < cabecalhos.length; i++) {
    const coluna = String.fromCharCode(65 + i); // A, B, C, etc
    const valor = cabecalhos[i];
    Logger.log('  • Coluna ' + coluna + ': "' + valor + '"');
  }

  Logger.log('');
  Logger.log('✅ Cabeçalhos ESPERADOS (26 colunas):');
  const esperados = [
    'Timestamp',                          // A
    'Email',                              // B
    'Data Início',                        // C
    'Data Término',                       // D
    'Hora Evento Início',                 // E
    'Hora Evento Término',                // F
    'Hora Montagem Início',               // G
    'Hora Montagem Término',              // H
    'Nome do Evento',                     // I
    'Local',                              // J
    'Público Estimado',                   // K
    'Descrição',                          // L
    'Entidade Promotora',                 // M
    'Coordenador Nome',                   // N
    'Coordenador Email',                  // O
    'Coordenador Telefone',               // P
    'Contato Nome',                       // Q
    'Contato Email',                      // R
    'Contato Telefone',                   // S
    'Haverão Expositores?',               // T
    'Evento Possui Patrocínio?',          // U
    'Evento Possui Inscrição Paga?',      // V
    'Serviços Multimídia',                // W
    'Prestadores de Serviço',             // X
    'Observações',                        // Y
    'Declaração de Responsabilidade'      // Z
  ];

  for (let i = 0; i < esperados.length; i++) {
    Logger.log('  • Coluna ' + String.fromCharCode(65 + i) + ': "' + esperados[i] + '"');
  }

  Logger.log('');

  // Verificar se os cabeçalhos estão corretos
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
    Logger.log('✅ TODOS OS 26 CABEÇALHOS ESTÃO CORRETOS!');
  } else {
    Logger.log('❌ Existem erros nos cabeçalhos. Corrija conforme indicado acima.');
  }

  Logger.log('═══════════════════════════════════════════════════════════');
  Logger.log('');
}

// ============================================================================
// FUNÇÃO AUXILIAR - Criar cabeçalhos automaticamente
// ============================================================================
function criarCabecalhos() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const cabecalhos = [
    'Timestamp',
    'Email',
    'Data Início',
    'Data Término',
    'Hora Evento Início',
    'Hora Evento Término',
    'Hora Montagem Início',
    'Hora Montagem Término',
    'Nome do Evento',
    'Local',
    'Público Estimado',
    'Descrição',
    'Entidade Promotora',
    'Coordenador Nome',
    'Coordenador Email',
    'Coordenador Telefone',
    'Contato Nome',
    'Contato Email',
    'Contato Telefone',
    'Haverão Expositores?',
    'Evento Possui Patrocínio?',
    'Evento Possui Inscrição Paga?',
    'Serviços Multimídia',
    'Prestadores de Serviço',
    'Observações',
    'Declaração de Responsabilidade'
  ];

  // Inserir cabeçalhos na primeira linha
  sheet.getRange(1, 1, 1, cabecalhos.length).setValues([cabecalhos]);

  // Formatar cabeçalhos
  const headerRange = sheet.getRange(1, 1, 1, cabecalhos.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');

  // Congelar primeira linha
  sheet.setFrozenRows(1);

  Logger.log('✅ Cabeçalhos criados com sucesso!');
  Logger.log('Total de colunas: ' + cabecalhos.length);
}

// ============================================================================
// FUNÇÃO AUXILIAR - Limpar última linha (útil para remover testes)
// ============================================================================
function limparUltimaLinha() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const ultimaLinha = sheet.getLastRow();

  if (ultimaLinha > 1) {
    sheet.deleteRow(ultimaLinha);
    Logger.log('🗑️ Linha ' + ultimaLinha + ' removida com sucesso');
  } else {
    Logger.log('⚠️ Não há linhas para remover (apenas cabeçalho)');
  }
}
