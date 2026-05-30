# CONTRIBUINDO PARA O PROJETO

Obrigado por considerar contribuir para o projeto de Data Storytelling! Este guia ajuda a garantir que suas contribuições sejam bem-vindas e bem integradas.

##  Código de Conduta

Todos os contribuidores concordam em manter um ambiente respeitoso e inclusivo.

##  Como Contribuir

### 1. Fork e Clone

```bash
# Fork no GitHub clicando em "Fork"

# Clone seu fork
git clone https://github.com/seu-usuario/data-storytelling-site.git
cd data-storytelling-site

# Adicione upstream (repositório original)
git remote add upstream https://github.com/usuario-original/data-storytelling-site.git
```

### 2. Crie uma Branch

```bash
# Atualize master
git checkout main
git pull upstream main

# Crie sua branch
git checkout -b feature/sua-feature
# ou
git checkout -b fix/seu-bug
```

### 3. Faça Suas Mudanças

- Mantenha as mudanças focadas e pequenas
- Teste em múltiplos navegadores
- Valide responsividade (mobile/tablet/desktop)
- Não quebre código existente

### 4. Commit com Mensagens Claras

```bash
git commit -m "type: descrição clara e concisa

- Detalhe 1
- Detalhe 2
"
```

**Tipos de commit recomendados:**
- `feat:` - Nova feature
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, sem mudança lógica
- `refactor:` - Refatoração sem mudança de comportamento
- `test:` - Adição de testes
- `chore:` - Mudanças de build, dependencies

### 5. Push e Create Pull Request

```bash
git push origin feature/sua-feature
```

Abra um Pull Request no GitHub com:
- Título claro
- Descrição do que foi feito
- Screenshots se houver mudanças visuais
- Link para issues relacionadas

##  Guia de Estilo

### HTML
```html
<!-- Use indentação de 4 espaços -->
<section id="exemplo" class="section">
    <div class="container">
        <!-- Código aqui -->
    </div>
</section>

<!-- Mantenha classes em ordem: layout, estado, tipo -->
<div class="card intro-card fade-in">
```

### CSS
```css
/* Organize por seção e responsividade */
/* SEÇÃO PRINCIPAL */
.section {
    /* propriedades */
}

/* Mantenha ordem: box-model → display → animação → responsivo */
.elemento {
    margin: 0;
    padding: 1rem;
    background: var(--color-primary);
    display: flex;
    transition: all 0.3s ease;
}

@media (max-width: 768px) {
    .elemento {
        padding: 0.5rem;
    }
}
```

### JavaScript
```javascript
// Use camelCase para variáveis e funções
const myVariable = 'value';

function myFunction() {
    // Código aqui
}

// Use comentários claros
// Explicação do que faz
const result = complexCalculation();

// Use arrow functions quando apropriado
const items = data.map(item => item.name);
```

##  Checklist Antes de Submeter PR

- [ ] Código testado em Chrome, Firefox, Safari
- [ ] Testado em mobile/tablet
- [ ] Sem console errors (F12)
- [ ] Lint/validação passou
- [ ] Commits com mensagens claras
- [ ] README atualizado se necessário
- [ ] Comentários explicativos adicionados
- [ ] Sem mudanças não relacionadas

##  Reportando Bugs

Crie uma issue com:

```markdown
## Descrição do Bug
Descreva o bug claramente.

## Steps para Reproduzir
1. Acesse...
2. Clique em...
3. Veja o erro...

## Comportamento Esperado
O que deveria acontecer?

## Screenshots
Se aplicável, adicione screenshots.

## Ambiente
- Navegador: Chrome 120
- SO: Windows 10
- Resolução: 1920x1080
```

##  Sugestões de Features

Crie uma issue com:

```markdown
## Descrição da Feature
O que você gostaria de adicionar?

## Caso de Uso
Por que isso seria útil?

## Solução Proposta
Como você propõe implementar?

## Alternativas
Outras abordagens possíveis?
```

##  Melhorias Bem-Vindas

- ✅ Novos gráficos/visualizações
- ✅ Melhorias de performance
- ✅ Melhor acessibilidade
- ✅ Documentação
- ✅ Suporte a mais idiomas
- ✅ Temas alternativos
- ✅ Testes automatizados
- ✅ CI/CD setup

##  Não Faça

- ❌ Não adicione dependências pesadas sem discussão
- ❌ Não quebre compatibilidade com browsers antigos
- ❌ Não remova features sem abrir issue primeiro
- ❌ Não adicione código comentado/debug
- ❌ Não faça commits muito grandes (faça vários pequenos)

##  Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [GitHub Help](https://help.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [CSS Best Practices](https://css-tricks.com/)

##  Comunidade

- Dúvidas? Abra uma Discussion
- Encontrou um bug? Reporte uma Issue
- Quer ajudar? Veja issues com label `good-first-issue`

##  Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (MIT).

---

**Obrigado por contribuir! **
