#  GUIA COMPLETO: PUBLICAR NO GITHUB

Este guia passo-a-passo mostra como publicar seu site de Data Storytelling no GitHub Pages.

---

##  PRÉ-REQUISITOS

- [ ] Git instalado ([git-scm.com](https://git-scm.com/))
- [ ] Conta GitHub criada ([github.com/join](https://github.com/join))
- [ ] Projeto baixado localmente

---

##  PASSO 1: INSTALAR GIT

### Windows
1. Visite: https://git-scm.com/download/win
2. Baixe o instalador
3. Execute e siga as instruções
4. Abra PowerShell/CMD e verifique:
```bash
git --version
```

### macOS
```bash
# Com Homebrew
brew install git

# Ou com xcode command line tools
xcode-select --install

# Verifique
git --version
```

### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install git

# Verifique
git --version
```

---

##  PASSO 2: CONFIGURAR GIT

```bash
# Configure seu nome
git config --global user.name "Seu Nome"

# Configure seu email
git config --global user.email "seu.email@gmail.com"

# Verifique a configuração
git config --list
```

---

##  PASSO 3: CRIAR REPOSITÓRIO NO GITHUB

1. Acesse: https://github.com/new
2. Preencha os dados:
   - **Repository name**: `data-storytelling-site`
   - **Description**: `Análise de Compras Públicas - Data Storytelling`
   - **Public**:  (importante para GitHub Pages)
   - **Initialize with**: deixe em branco
3. Clique em **"Create repository"**

---

##  PASSO 4: FAZER UPLOAD DOS ARQUIVOS

### Opção A: Via Terminal (Recomendado)

```bash
# 1. Abra terminal/PowerShell na pasta do projeto
cd c:\Users\Helder\Downloads\data-storytelling-site

# 2. Inicialize Git (se não fez ainda)
git init

# 3. Adicione os arquivos
git add .

# 4. Primeiro commit
git commit -m "Initial commit: Data Storytelling Site"

# 5. Renomear branch para 'main' (GitHub padrão)
git branch -M main

# 6. Adicione o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/data-storytelling-site.git

# 7. Faça o push (upload)
git push -u origin main

# Digite seu usuário e senha (ou token) quando pedir
```

### Opção B: Executar Script Automático

**Windows:**
```bash
# Duplo-clique em: setup.bat
# OU abra PowerShell e execute:
.\setup.bat
```

**Linux/macOS:**
```bash
# Abra terminal e execute:
bash setup.sh
```

---

##  PASSO 5: AUTENTICAR NO GITHUB

Se receber erro "fatal: Authentication failed", siga:

### Com HTTPS (Mais Simples)

```bash
# Gere um Personal Access Token em:
# https://github.com/settings/tokens

# Crie um novo token com escopos:
# - repo (full control)
# - workflow

# Copie o token gerado

# Quando pedir senha, use:
# Username: seu-usuario
# Password: cole-o-token-aqui
```

### Com SSH (Mais Seguro)

```bash
# 1. Gere chave SSH
ssh-keygen -t ed25519 -C "seu.email@gmail.com"

# 2. Quando pedir senha, pressione Enter
# 3. Copie a chave pública
cat ~/.ssh/id_ed25519.pub

# 4. Vá em: https://github.com/settings/ssh
# 5. Clique "New SSH key"
# 6. Cole a chave
# 7. Configure o repositório com SSH:
git remote remove origin
git remote add origin git@github.com:SEU_USUARIO/data-storytelling-site.git
```

---

##  PASSO 6: ATIVAR GITHUB PAGES

1. Acesse seu repositório: `https://github.com/SEU_USUARIO/data-storytelling-site`

2. Vá para **Settings** (ícone de engrenagem)

3. No menu esquerdo, clique em **"Pages"**

4. Em "Source", selecione:
   - Branch: **main**
   - Folder: **/ (root)**
   - Clique em **Save**

5. Aguarde 1-2 minutos (GitHub ativa o Pages automaticamente)

6. Seu site estará em:
   ```
   https://seu-usuario.github.io/data-storytelling-site/
   ```

---

##  PASSO 7: VERIFICAR SE FUNCIONOU

```bash
# Após 1-2 minutos, visite:
https://seu-usuario.github.io/data-storytelling-site/

# Seu site deve aparecer! 🎉
```

Se não aparecer:
1. Aguarde mais 2-3 minutos
2. Faça Ctrl+Shift+Delete (limpar cache)
3. Recargue a página
4. Verifique se `index.html` está no root do repositório

---

##  FAZER ATUALIZAÇÕES DEPOIS

Sempre que quiser atualizar o site:

```bash
# 1. Faça suas edições nos arquivos

# 2. Abra terminal na pasta do projeto

# 3. Veja o que mudou
git status

# 4. Adicione os arquivos
git add .

# 5. Commit
git commit -m "Descreva o que mudou aqui"

# 6. Push para GitHub
git push origin main

# Pronto! Site atualiza em 1-2 minutos 🚀
```

---

##  LINKS PERSONALIZADOS (Opcional)

### Usar domínio personalizado

1. Compre um domínio (ex: namecheap.com)
2. Configure os DNS:
   - A: 185.199.108.153
   - A: 185.199.109.153
   - A: 185.199.110.153
   - A: 185.199.111.153
3. Em **Settings > Pages**, adicione o domínio

### Usar subdomínio

1. Compre um domínio
2. Configure CNAME: `seu-usuario.github.io`
3. Em **Settings > Pages**, adicione o subdomínio

---

##  TROUBLESHOOTING

### Erro: "fatal: not a git repository"
```bash
# Solução: Inicialize Git
git init
```

### Erro: "Authentication failed"
```bash
# Solução: Use token ao invés de senha
# Gere em: https://github.com/settings/tokens
```

### Erro: "remote origin already exists"
```bash
# Solução: Remova e reconfigure
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/data-storytelling-site.git
```

### Site não aparece após push
```bash
# Possíveis soluções:
# 1. Aguarde 5 minutos
# 2. Reconfigure Pages (Settings > Pages)
# 3. Verifique se index.html está no root
# 4. Limpe cache: Ctrl+Shift+Delete
```

### URL fica muito comprida
Se seu URL é: `seu-usuario.github.io/data-storytelling-site/`

Pode encurtar adquirindo domínio ou renomeando repositório para `seu-usuario.github.io`

---

##  VERIFICAR STATUS DO SITE

### Ver histórico de commits
```bash
git log --oneline -10
```

### Ver status atual
```bash
git status
```

### Ver diferenças
```bash
git diff
```

### Desfazer último commit (cuidado!)
```bash
git reset --soft HEAD~1
```

---

##  COMANDOS GIT ÚTEIS

| Comando | O que faz |
|---------|-----------|
| `git init` | Inicializa repositório |
| `git add .` | Adiciona todos arquivos |
| `git commit -m "msg"` | Faz commit |
| `git push origin main` | Upload para GitHub |
| `git pull origin main` | Download do GitHub |
| `git status` | Ver status |
| `git log` | Ver histórico |
| `git branch` | Ver branches |
| `git checkout -b nome` | Criar nova branch |

---

##  SEGURANÇA

-  Nunca commite senhas ou tokens
-  Use .gitignore para arquivos sensíveis
-  Revise antes de fazer commit
-  Use commits descritivos
-  Não force-push para main

---

##  COMPARTILHAR O LINK

Sua URL final é:
```
https://seu-usuario.github.io/data-storytelling-site/
```

Compartilhe em:
- LinkedIn: Portfólio de Data Storytelling
- Twitter: Link do projeto
- CV/Portfólio: Projeto acadêmico
- GitHub: Readme do repositório

---

##  CHECKLIST FINAL

- [ ] Git instalado e configurado
- [ ] Repositório criado no GitHub
- [ ] Arquivos enviados (push)
- [ ] GitHub Pages ativado
- [ ] Site acessível em https://seu-usuario.github.io/data-storytelling-site/
- [ ] Seu nome e links no rodapé
- [ ] Testado em mobile
- [ ] Link compartilhado

---

##  PARABÉNS!

Seu site de Data Storytelling está no ar! 📊✨

Próximos passos:
1. Adicione os gráficos do ObservableHQ
2. Customize com seus dados
3. Compartilhe nas redes
4. Contribua com melhorias

---

**Precisa de ajuda?**
- Veja a documentação em: `README.md`
- Abra uma issue no GitHub
- Consulte: `QUICK_EDIT_GUIDE.md`

**Boa sorte! **
