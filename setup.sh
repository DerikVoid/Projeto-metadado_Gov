#!/bin/bash

# ============================================================================
# SCRIPT DE SETUP - Data Storytelling Site
# Inicializa repositório Git e prepara para GitHub Pages
# ============================================================================

echo " Iniciando setup do Data Storytelling Site..."
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Inicializa Git
echo -e "${BLUE}📦 Inicializando repositório Git...${NC}"
if [ -d .git ]; then
    echo "ℹ  Repositório Git já existe"
else
    git init
    echo -e "${GREEN}✓ Repositório Git inicializado${NC}"
fi

echo ""

# 2. Configura .gitignore
echo -e "${BLUE} Configurando .gitignore...${NC}"
if [ -f .gitignore ]; then
    echo -e "${GREEN}✓ .gitignore já existe${NC}"
else
    touch .gitignore
    echo -e "${GREEN}✓ .gitignore criado${NC}"
fi

echo ""

# 3. Adiciona arquivos
echo -e "${BLUE} Adicionando arquivos ao repositório...${NC}"
git add .
echo -e "${GREEN}✓ Arquivos adicionados${NC}"

echo ""

# 4. Primeiro commit
echo -e "${BLUE} Fazendo primeiro commit...${NC}"
git commit -m "Initial commit: Data Storytelling Site - Análise de Compras Públicas"
echo -e "${GREEN}✓ Primeiro commit realizado${NC}"

echo ""

# 5. Informações finais
echo -e "${YELLOW}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Setup concluído com sucesso!${NC}"
echo -e "${YELLOW}════════════════════════════════════════════════════════════${NC}"

echo ""
echo -e "${BLUE} Próximos passos para GitHub Pages:${NC}"
echo ""
echo "1. Crie um repositório no GitHub:"
echo "   - Acesse https://github.com/new"
echo "   - Nome: data-storytelling-site"
echo "   - Descrição: Análise de Compras Públicas - Data Storytelling"
echo ""
echo "2. Adicione remote e faça push:"
echo "   git remote add origin https://github.com/SEU_USUARIO/data-storytelling-site.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Ative GitHub Pages:"
echo "   - Vá para Settings > Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main / root"
echo "   - Click: Save"
echo ""
echo "4. Seu site estará disponível em:"
echo "   https://SEU_USUARIO.github.io/data-storytelling-site/"
echo ""
echo -e "${YELLOW}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE} Para mais informações:${NC}"
echo "   - Leia: README.md"
echo "   - Guia ObservableHQ: OBSERVABLEHQ_GUIDE.html"
echo "   - Documentação: https://pages.github.com/"
echo ""
echo -e "${GREEN}Happy Data Storytelling! ${NC}"
