@echo off
REM ============================================================================
REM SCRIPT DE SETUP - Data Storytelling Site (Windows)
REM Inicializa repositório Git e prepara para GitHub Pages
REM ============================================================================

echo.
echo  Iniciando setup do Data Storytelling Site...
echo.

REM Verifica se está em um repositório Git
if exist .git (
    echo [INFO] Repositório Git já existe
) else (
    echo [SETUP] Inicializando repositório Git...
    git init
    echo [OK] Repositório Git inicializado
)

echo.

REM Verifica .gitignore
if exist .gitignore (
    echo [OK] .gitignore já existe
) else (
    echo [SETUP] Criando .gitignore...
    type nul > .gitignore
    echo [OK] .gitignore criado
)

echo.

REM Adiciona arquivos
echo [SETUP] Adicionando arquivos...
git add .
echo [OK] Arquivos adicionados

echo.

REM Primeiro commit
echo [SETUP] Fazendo primeiro commit...
git commit -m "Initial commit: Data Storytelling Site - Analise de Compras Publicas"
echo [OK] Primeiro commit realizado

echo.
echo ════════════════════════════════════════════════════════════════
echo [SUCESSO] Setup concluído com sucesso!
echo ════════════════════════════════════════════════════════════════

echo.
echo [PRÓXIMOS PASSOS] Para GitHub Pages:
echo.
echo 1. Crie um repositório no GitHub:
echo    - Acesse https://github.com/new
echo    - Nome: data-storytelling-site
echo    - Descrição: Análise de Compras Públicas - Data Storytelling
echo.
echo 2. Adicione remote e faça push:
echo    git remote add origin https://github.com/SEU_USUARIO/data-storytelling-site.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Ative GitHub Pages:
echo    - Vá para Settings ^> Pages
echo    - Source: Deploy from a branch
echo    - Branch: main / root
echo    - Click: Save
echo.
echo 4. Seu site estará disponível em:
echo    https://SEU_USUARIO.github.io/data-storytelling-site/
echo.
echo ════════════════════════════════════════════════════════════════

echo.
echo [RECURSOS] Para mais informações:
echo    - Leia: README.md
echo    - Guia ObservableHQ: OBSERVABLEHQ_GUIDE.html
echo    - Documentação: https://pages.github.com/
echo.
echo Happy Data Storytelling! 
echo.

pause
