# 📋 Formulário de Reserva de Espaço - IG Unicamp

Sistema de reserva de espaços do Instituto de Geociências da Unicamp com integração ao Google Sheets.

![Preview](https://img.shields.io/badge/Status-Pronto-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?logo=google-sheets&logoColor=white)

## ✨ Características

- **Formulário em duas etapas** com navegação fluida sem recarregamento de página
- **Design responsivo** otimizado para dispositivos móveis
- **Integração com Google Sheets** para armazenamento automático das respostas
- **Validação de campos** em tempo real
- **Indicador visual de progresso** entre etapas
- **Alert de sucesso** após envio
- **Logos institucionais** (IG e Unicamp)

## 🎯 Demo

Acesse o formulário: [https://rafacrt.github.io/igunicampeventos/](https://rafacrt.github.io/igunicampeventos/)

## 📦 Estrutura do Projeto

```
├── index.html                          # Formulário principal
├── logo-ig.png                         # Logo do Instituto de Geociências
├── logo-unicamp.png                    # Logo da Unicamp
├── PASSO-A-PASSO-SIMPLES.md           # Guia rápido de configuração
├── CONFIGURAR-GOOGLE-SHEETS.md        # Documentação completa do Google Sheets
├── COMO-DEBUGAR.md                    # Guia de troubleshooting
├── SCRIPT-FINAL-GOOGLE-APPS.js        # Script para Google Apps Script
├── SCRIPT-GOOGLE-APPS-CORRIGIDO.js    # Script alternativo
├── EXEMPLO-PLANILHA-CORRETA.txt       # Template dos cabeçalhos
└── README-LOGOS.md                     # Instruções para as logos
```

## 🚀 Como Usar

### Opção 1: GitHub Pages (Recomendado)

1. Fork este repositório
2. Configure o Google Sheets seguindo [PASSO-A-PASSO-SIMPLES.md](PASSO-A-PASSO-SIMPLES.md)
3. Atualize a URL do Google Apps Script no `index.html` (linha 463)
4. Ative o GitHub Pages nas configurações do repositório
5. Acesse: `https://seu-usuario.github.io/igunicampeventos/`

### Opção 2: Hospedagem Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/rafacrt/igunicampeventos.git
   cd igunicampeventos
   ```

2. Configure o Google Sheets (veja documentação)

3. Abra o `index.html` no navegador

## ⚙️ Configuração do Google Sheets

### Passo 1: Criar a Planilha

1. Crie uma nova planilha no Google Sheets
2. Adicione os seguintes cabeçalhos na primeira linha:

| Timestamp | Email | Data Início | Data Término | Nome do Evento | Local | Descrição |
|-----------|-------|-------------|--------------|----------------|-------|-----------|

### Passo 2: Configurar o Apps Script

1. Na planilha, vá em **Extensões** → **Apps Script**
2. Copie o conteúdo de `SCRIPT-FINAL-GOOGLE-APPS.js`
3. Cole no Apps Script
4. Salve o projeto

### Passo 3: Testar

1. Execute a função `testarFormulario`
2. Verifique se uma linha de teste foi adicionada
3. Execute a função `verificarPlanilha` para validar os cabeçalhos

### Passo 4: Implantar

1. Clique em **Implantar** → **Nova implantação**
2. Tipo: **Aplicativo da Web**
3. Executar como: **Eu**
4. Acesso: **Qualquer pessoa**
5. Copie a URL gerada

### Passo 5: Atualizar o HTML

1. Abra `index.html`
2. Localize a linha 463
3. Substitua a URL pelo link do seu Apps Script
4. Salve o arquivo

**Documentação completa:** [PASSO-A-PASSO-SIMPLES.md](PASSO-A-PASSO-SIMPLES.md)

## 📱 Campos do Formulário

### Etapa 1: Informações Básicas
- Email (obrigatório)
- Data de Início (obrigatório)
- Data de Término (obrigatório)
- Nome do Evento (obrigatório)

### Etapa 2: Detalhes do Evento
- Local (obrigatório)
  - Auditório Milton Santos
  - Saguão 01 (ao lado do Auditório)
  - Saguão 02 (acesso pelo centro acadêmico)
- Descrição do Evento (obrigatório)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura do formulário
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Lógica e navegação entre etapas
- **Pico CSS** - Framework CSS minimalista
- **Google Apps Script** - Backend serverless
- **Google Sheets API** - Armazenamento de dados

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS no `<style>` do `index.html`:

```css
.progress-step.active {
  background: #3b82f6;  /* Cor da etapa ativa */
}

.progress-step.completed {
  background: #10b981;  /* Cor da etapa completa */
}
```

### Adicionar Novos Locais

No `index.html`, adicione novas opções ao select:

```html
<option value="Novo Local">Novo Local</option>
```

### Modificar Etapas

Você pode reorganizar os campos entre as etapas editando os divs `.form-step`.

## 🐛 Troubleshooting

### Formulário envia mas dados não aparecem na planilha

1. Verifique se os cabeçalhos estão exatamente como especificado
2. Veja os logs em **Execuções** no Apps Script
3. Teste a função `verificarPlanilha`
4. Consulte [COMO-DEBUGAR.md](COMO-DEBUGAR.md)

### Erro: "Cannot read properties of undefined"

Você está executando `doPost` diretamente. Execute `testarFormulario` em vez disso.

### Erro de CORS

Isso é normal devido ao `mode: 'no-cors'`. O formulário continua funcionando.

**Guia completo:** [COMO-DEBUGAR.md](COMO-DEBUGAR.md)

## 📖 Documentação

- [PASSO-A-PASSO-SIMPLES.md](PASSO-A-PASSO-SIMPLES.md) - Guia rápido de 5 minutos
- [CONFIGURAR-GOOGLE-SHEETS.md](CONFIGURAR-GOOGLE-SHEETS.md) - Documentação completa
- [COMO-DEBUGAR.md](COMO-DEBUGAR.md) - Solução de problemas
- [EXEMPLO-PLANILHA-CORRETA.txt](EXEMPLO-PLANILHA-CORRETA.txt) - Template dos cabeçalhos

## 🔒 Segurança

- Não compartilhe a URL do Apps Script publicamente
- Configure permissões adequadas na planilha
- Monitore regularmente as submissões
- Esteja ciente dos [limites do Google Apps Script](https://developers.google.com/apps-script/guides/services/quotas)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

## 👥 Autores

- **Instituto de Geociências - Unicamp**
- Desenvolvido com Claude Code

## 📧 Suporte

Para dúvidas ou problemas:

1. Consulte a [documentação](COMO-DEBUGAR.md)
2. Abra uma [issue](https://github.com/rafacrt/igunicampeventos/issues)
3. Entre em contato com a equipe do IG

## ⭐ Agradecimentos

- Instituto de Geociências da Unicamp
- Comunidade Unicamp
- [Pico CSS](https://picocss.com/)

---

**Desenvolvido com ❤️ para o IG Unicamp**
