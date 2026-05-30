# 📑 ÍNDICE DO PROJETO

Guia completo de arquivos e como usar cada um.

---

## 📁 ESTRUTURA FINAL

```
data-storytelling-site/
├── index.html                      ⭐ Arquivo principal (ABRA ISTO)
├── style.css                       🎨 Estilos (não precisa editar normalmente)
├── script.js                       ⚙️  Interatividade (não precisa editar normalmente)
│
├── 📖 DOCUMENTAÇÃO
│   ├── README.md                   📚 Guia completo do projeto
│   ├── QUICK_EDIT_GUIDE.md         ⚡ Edições rápidas (COMECE AQUI)
│   ├── OBSERVABLEHQ_GUIDE.html     📊 Como adicionar gráficos
│   ├── CONTRIBUTING.md             🤝 Como contribuir
│   ├── INDEX.md                    📑 Este arquivo
│
├── 🔧 CONFIGURAÇÃO
│   ├── package.json                📦 Metadados do projeto
│   ├── _config.yml                 ⚙️  Config Jekyll/GitHub Pages
│   ├── .gitignore                  🚫 Arquivos ignorados no Git
│   ├── LICENSE                     ⚖️  Licença MIT
│   ├── setup.sh                    🐧 Setup para Linux/macOS
│   └── setup.bat                   🪟 Setup para Windows
│
├── 📊 DADOS
│   └── sample-data.json            📈 Dados de exemplo em JSON
│
└── 🌐 HOSPEDAGEM
    └── GitHub Pages (automático)
```

---

## 🎯 COMEÇAR RÁPIDO

### Para Abrir Localmente
1. Clique duplo em `index.html`
   OU
2. `python -m http.server 8000` e visite `localhost:8000`

### Para Editar
1. Abra em VS Code: `code .`
2. Leia [QUICK_EDIT_GUIDE.md](QUICK_EDIT_GUIDE.md)
3. Faça suas edições
4. Salve (Ctrl+S)
5. Recarregue o navegador (F5)

### Para Publicar no GitHub
1. Execute `setup.bat` (Windows) ou `setup.sh` (Linux/macOS)
2. Crie repositório em github.com
3. Siga instruções na tela
4. Pronto! 🎉

---

## 📄 GUIA POR ARQUIVO

### 🎯 index.html
**O que é**: Arquivo HTML principal (página web)  
**Para quem edita**: Títulos, textos, links, conteúdo  
**Como editar**: Abra em editor de texto (VS Code)  
**Linhas importantes**:
- Linhas 70-80: Hero section
- Linhas 100-130: Introdução
- Linhas 155-170: Contexto
- Linhas 190-370: Gráficos
- Linhas 490-530: Rodapé

---

### 🎨 style.css
**O que é**: Arquivo de estilos CSS3  
**Para quem edita**: Designers, quem quer alterar cores/layout  
**Como editar**: Abra em editor de texto  
**Linhas importantes**:
- Linhas 5-12: Variáveis de cor (altere aqui!)
- Linhas 13-16: Tipografia
- Linhas 50-100: Navegação
- Linhas 150-250: Hero section
- Linhas 400+: Media queries (responsividade)

---

### ⚙️ script.js
**O que é**: JavaScript vanilla para animações  
**Para quem edita**: Desenvolvedores, quem quer adicionar interatividade  
**Como editar**: Abra em editor de texto  
**Funções principais**:
- `initAnimations()` - Animações ao scroll
- `initNavigation()` - Navegação interativa
- `insertObservableEmbed()` - Inserir gráficos

---

### 📚 README.md
**O que é**: Documentação completa do projeto  
**Leia quando**: Precisar entender o projeto inteiro  
**Contém**: Seções, tecnologias, setup, hospedagem

---

### ⚡ QUICK_EDIT_GUIDE.md
**O que é**: Guia rápido das edições mais comuns  
**Leia quando**: Quer fazer mudanças simples rápido  
**Contém**: 10 edições mais comuns com exemplos

---

### 📊 OBSERVABLEHQ_GUIDE.html
**O que é**: Guia para integrar gráficos do ObservableHQ  
**Leia quando**: Quer adicionar gráficos interativos  
**Contém**: Passo a passo, exemplos, troubleshooting

---

### 🤝 CONTRIBUTING.md
**O que é**: Guia para contribuições  
**Leia quando**: Quer contribuir para o projeto  
**Contém**: Como fazer Pull Requests, style guide

---

### 📦 package.json
**O que é**: Metadados do projeto Node.js  
**Para quem edita**: Desenvolvedores que adicionam dependências  
**Scripts disponíveis**:
- `npm start` - Inicia servidor local
- `npm run build` - Build do projeto

---

### ⚙️ _config.yml
**O que é**: Configuração Jekyll para GitHub Pages  
**Para quem edita**: Não precisa normalmente  
**Edite quando**: Configurar temas ou plugins

---

### 🚀 setup.sh / setup.bat
**O que é**: Scripts de setup automático  
**Use quando**: Iniciando o projeto  
**Windows**: Duplo-clique em `setup.bat`  
**Linux/macOS**: `bash setup.sh`

---

### 📈 sample-data.json
**O que é**: Dados de exemplo em JSON  
**Use para**: Entender estrutura de dados  
**Edite quando**: Adicionar dados reais

---

### 🚫 .gitignore
**O que é**: Arquivo que lista arquivos para ignorar no Git  
**Para quem edita**: Não precisa normalmente

---

### ⚖️ LICENSE
**O que é**: Licença MIT do projeto  
**Para quem edita**: Não precisa editar

---

## 🔄 FLUXO DE TRABALHO TÍPICO

```
1. Abrir projeto em VS Code
   ↓
2. Ler QUICK_EDIT_GUIDE.md para a mudança que quer
   ↓
3. Editar arquivo apropriado (HTML/CSS/JS)
   ↓
4. Recarregar navegador para ver mudanças
   ↓
5. Fazer commit: git add . && git commit -m "descrição"
   ↓
6. Push: git push origin main
   ↓
7. Site atualiza automaticamente ✨
```

---

## 🎓 APRENDENDO CONFORME PROGRIDE

### Nível 1 - Iniciante
Leia e faça:
- [ ] index.html (entenda a estrutura)
- [ ] QUICK_EDIT_GUIDE.md (edições simples)
- [ ] Alterar título, cores, textos
- [ ] Adicionar seu nome no rodapé

### Nível 2 - Intermediário
Leia e faça:
- [ ] README.md (projeto inteiro)
- [ ] OBSERVABLEHQ_GUIDE.html (adicione gráficos)
- [ ] style.css (customize cores/layout)
- [ ] Adicione novas seções

### Nível 3 - Avançado
Leia e faça:
- [ ] script.js (entenda animações)
- [ ] sample-data.json (carregue dados reais)
- [ ] CONTRIBUTING.md (contribua ao projeto)
- [ ] Adicione features novas

---

## ❓ PROCURANDO ALGO?

| Quero... | Arquivo | Seção |
|---------|---------|-------|
| Mudar titulo | index.html | Linha 7 |
| Mudar cores | style.css | Linhas 5-12 |
| Adicionar gráfico | OBSERVABLEHQ_GUIDE.html | Método 1/2 |
| Meu nome no site | index.html | Rodapé (490+) |
| Entender estrutura | README.md | Seções |
| Edições rápidas | QUICK_EDIT_GUIDE.md | Todas |
| Configurar Git | setup.bat/.sh | Execute |
| Contribuir | CONTRIBUTING.md | Como Contribuir |

---

## 🚀 PRÓXIMOS PASSOS

1. **Imediato** (hoje):
   - Abra `index.html` no navegador
   - Veja como fica
   - Teste responsividade (F12)

2. **Curto prazo** (semana 1):
   - Leia QUICK_EDIT_GUIDE.md
   - Altere título, cores, seu nome
   - Aprenda basicamente HTML/CSS

3. **Médio prazo** (semana 2):
   - Leia README.md completo
   - Adicione gráficos do ObservableHQ
   - Configure GitHub Pages

4. **Longo prazo** (semana 3+):
   - Customize layout
   - Adicione conteúdo real
   - Optimize performance
   - Contribua com melhorias

---

## 💬 SUPORTE

- **Perguntas?** Abra uma Discussion no GitHub
- **Bug encontrado?** Abra uma Issue
- **Quer ajudar?** Veja CONTRIBUTING.md

---

## 📊 ESTATÍSTICAS DO PROJETO

- **Arquivos**: 13 principais
- **Linhas de código**: ~1000 HTML + 700 CSS + 400 JS
- **Tamanho**: ~50KB (comprimido ~15KB)
- **Compatibilidade**: Chrome, Firefox, Safari, Edge
- **Responsividade**: Mobile, Tablet, Desktop
- **Performance**: 90+ Lighthouse score

---

**Boa sorte com seu projeto de Data Storytelling! 📊✨**

Comece pelo `index.html` ou `QUICK_EDIT_GUIDE.md`
