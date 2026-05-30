# GUIA RÁPIDO DE EDIÇÃO - Data Storytelling Site

##  Sumário de Arquivos

```
data-storytelling-site/
├── index.html                    # Arquivo principal (estrutura HTML)
├── style.css                     # Estilos CSS3 (design e responsividade)
├── script.js                     # JavaScript vanilla (animações)
├── sample-data.json              # Dados de exemplo em JSON
├── README.md                     # Documentação completa
├── OBSERVABLEHQ_GUIDE.html       # Guia para integração de gráficos
├── _config.yml                   # Configuração Jekyll/GitHub Pages
├── .gitignore                    # Configuração Git
├── setup.sh                      # Script setup para Linux/macOS
├── setup.bat                     # Script setup para Windows
└── QUICK_EDIT_GUIDE.md           # Este arquivo
```

---

##  Abrindo no VS Code

```bash
# Abra a pasta do projeto no VS Code
code .

# Ou abra direto o arquivo
code index.html
```

---

##  EDIÇÕES RÁPIDAS MAIS COMUNS

###  Alterar Título do Site

**Arquivo**: `index.html`  
**Linhas**: 7-8

```html
<!-- ANTES -->
<title>Análise de Contratações e Compras Públicas no Brasil</title>

<!-- DEPOIS -->
<title>Seu Novo Título</title>
```

---

###  Alterar Cores do Site

**Arquivo**: `style.css`  
**Linhas**: 5-12

```css
/* Altere as variáveis de cor */
:root {
    --color-primary: #0A2540;      /* Azul escuro - altere aqui */
    --color-secondary: #1D4E89;    /* Azul médio - altere aqui */
    --color-accent: #3B82F6;       /* Azul claro - altere aqui */
    --color-light-bg: #F3F4F6;     /* Cinza claro - altere aqui */
    --color-white: #FFFFFF;        /* Branco - altere aqui */
    /* ... */
}
```

---

###  Adicionar Seu Nome no Rodapé

**Arquivo**: `index.html`  
**Linhas**: ~490-510 (procure por `<!-- RODAPÉ -->`)

```html
<div class="footer-section">
    <h4>Equipe</h4>
    <ul>
        <li><strong>Integrantes:</strong> Seu Nome Aqui</li>
        <li><strong>Curso:</strong> Seu Curso</li>
        <li><strong>Universidade:</strong> Sua Universidade</li>
    </ul>
</div>
```

---

###  Adicionar Links do GitHub no Rodapé

**Arquivo**: `index.html`  
**Linhas**: ~510-520

```html
<div class="footer-section">
    <h4>Recursos</h4>
    <ul>
        <li><a href="https://github.com/seu-usuario/seu-repo" target="_blank">📱 GitHub do Projeto</a></li>
        <li><a href="https://observablehq.com/@seu-usuario" target="_blank">📊 ObservableHQ</a></li>
        <li><a href="#" target="_blank">📖 Documentação</a></li>
    </ul>
</div>
```

---

###  Inserir Gráfico do ObservableHQ

**Arquivo**: `index.html`  
**Procure por**: `<!-- INSERIR EMBED DO OBSERVABLEHQ AQUI -->`

**Opção A - Cole o código de embed:**

```html
<div class="chart-container">
    <div id="observablehq-chart"></div>
    <script type="module">
        import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
        import define from "https://api.observablehq.com/@seu-usuario/seu-notebook.js";
        const runtime = new Runtime();
        const main = runtime.module(define, name => {
            if (name === "viewof data") {
                return new Inspector(document.querySelector("#observablehq-chart"));
            }
        });
    </script>
</div>
```

**Opção B - Use a função auxiliar:**

```html
<!-- Adicione no script.js, dentro de DOMContentLoaded: -->
insertObservableEmbed('observablehq-chart', '@seu-usuario/seu-notebook', 'viewof data');
```

---

###  Alterar Tipografia

**Arquivo**: `style.css`  
**Linhas**: 13-16

```css
--font-primary: 'Inter', sans-serif;           /* Corpo do texto */
--font-heading: 'Poppins', sans-serif;         /* Títulos */
--font-secondary: 'Roboto', sans-serif;        /* Alternativa */
```

Para adicionar nova fonte do Google Fonts, altere também no `index.html` (linhas 9-10):

```html
<link href="https://fonts.googleapis.com/css2?family=NovaFonte:wght@400;700&display=swap" rel="stylesheet">
```

---

###  Editar Textos das Seções

**Arquivo**: `index.html`

**Hero Section** (linhas ~70-80):
```html
<h1 class="hero-title">Seu Novo Título</h1>
<p class="hero-subtitle">Seu novo subtítulo</p>
<p class="hero-description">Sua descrição</p>
```

**Introdução** (linhas ~90-120):
```html
<h3>Seu Título de Card</h3>
<p>Seu texto descritivo aqui</p>
```

---

###  Adicionar Nova Seção

1. **No HTML**, antes de `</body>`:
```html
<section id="nova-secao" class="section section-light">
    <div class="container">
        <div class="section-header">
            <h2>Minha Nova Seção</h2>
            <div class="header-line"></div>
        </div>
        <!-- Seu conteúdo aqui -->
    </div>
</section>
```

2. **Adicione o link na navegação** (linhas ~35-40):
```html
<li><a href="#nova-secao">Nova Seção</a></li>
```

---

###  Ativar Modo Escuro (CSS Extra)

**Arquivo**: `style.css` (adicione ao final)

```css
/* Modo Escuro */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1F2937;
        color: #F3F4F6;
    }
    .intro-card {
        background-color: #374151;
        color: #F3F4F6;
    }
    /* Adicione mais ajustes conforme necessário */
}
```

---

###  Carregar Dados do JSON Dinamicamente

**Arquivo**: `script.js` (adicione ao final)

```javascript
// Carregar dados de exemplo
fetch('sample-data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Dados carregados:', data);
        // Use data.ministerios, data.modalidades_contratacao, etc.
    })
    .catch(error => console.error('Erro ao carregar dados:', error));
```

---

##  PALETA DE CORES PRONTA

Copie e cole para usar em outros projetos:

```css
/* Azul Escuro - Primário */
#0A2540

/* Azul Médio - Secundário */
#1D4E89

/* Azul Claro - Destaque */
#3B82F6

/* Cinza Claro - Fundo */
#F3F4F6

/* Branco - Contraste */
#FFFFFF

/* Variações úteis */
#6B7280  /* Cinza médio */
#D1D5DB  /* Cinza claro 2 */
#FFA500  /* Laranja (alerta) */
#10B981  /* Verde (sucesso) */
```

---

##  TESTING RESPONSIVO NO VS CODE

Instale a extensão **Live Server**:

1. Abra Extensions (Ctrl+Shift+X)
2. Procure por "Live Server"
3. Instale a extensão by Ritwick Dey
4. Clique com botão direito em `index.html` → "Open with Live Server"
5. Abra DevTools (F12) e teste responsividade

---

##  ATALHOS ÚTEIS NO VS CODE

| Atalho | Ação |
|--------|------|
| `Ctrl+H` | Find and Replace |
| `Ctrl+Shift+F` | Find in Files |
| `Ctrl+Alt+Down` | Copiar linha para baixo |
| `Alt+Up/Down` | Mover linha |
| `Ctrl+/` | Comentar linha |
| `Ctrl+Shift+P` | Paleta de Comandos |
| `Ctrl+L` | Selecionar linha |
| `Ctrl+Shift+X` | Abrir Extensions |

---

##  CONVERTER DADOS PARA JSON

Se tiver dados em CSV, use este comando online:

```bash
# Copie seu CSV e use:
# https://www.convertcsv.com/csv-to-json.htm

# Ou use Python:
python -c "import csv, json; print(json.dumps(list(csv.DictReader(open('file.csv')))))"
```

---

##  PUBLICAR MUDANÇAS NO GITHUB

```bash
# 1. Faça suas edições no VS Code

# 2. Abra terminal integrado (Ctrl+`)

# 3. Adicione arquivos
git add .

# 4. Commit
git commit -m "Descreva suas mudanças aqui"

# 5. Push
git push origin main

# Seu site atualiza automaticamente em 1-2 minutos!
```

---

##  CHECKLIST ANTES DE PUBLICAR

- [ ] Título atualizado
- [ ] Seu nome no rodapé
- [ ] Links do GitHub/ObservableHQ adicionados
- [ ] Gráficos do ObservableHQ inseridos
- [ ] Textos revisados (sem erros)
- [ ] Testado em mobile (F12 → Responsive)
- [ ] Todas as cores adequadas
- [ ] Animações funcionando
- [ ] Links funcionam
- [ ] Sem erros no console (F12)

---

##  SOLUÇÃO DE PROBLEMAS

### "Gráfico não aparece"
- [ ] Verifique o notebook ID no ObservableHQ
- [ ] Certifique que o notebook está publicado
- [ ] Veja erros no console (F12)

### "Site muito lento"
- [ ] Reduza quantidade de dados
- [ ] Comprima imagens
- [ ] Verifique scripts pesados

### "Layout quebrado"
- [ ] Limpe cache (Ctrl+Shift+Delete)
- [ ] Teste em outro navegador
- [ ] Verifique media queries em CSS

### "Git não funciona"
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

##  REFERÊNCIAS ÚTEIS

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use?](https://caniuse.com/)
- [Google Fonts](https://fonts.google.com/)
- [ColorPalette Generator](https://coolors.co/)
- [ObservableHQ Docs](https://observablehq.com/@observablehq/documentation)

---

##  DICAS FINAIS

1. **Commit frequente**: Faça commits pequenos e descritivos
2. **Teste sempre**: Verifique mobile antes de publicar
3. **Use DevTools**: F12 é seu melhor amigo
4. **Documente mudanças**: Descreva no commit o que foi alterado
5. **Backup local**: Mantenha cópia em seu computador

---

**Boa sorte com seu projeto de Data Storytelling! **

Para dúvidas, consulte o `README.md` ou `OBSERVABLEHQ_GUIDE.html`
