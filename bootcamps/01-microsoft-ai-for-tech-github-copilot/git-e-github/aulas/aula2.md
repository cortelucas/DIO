# Versionamento de Código com Git e GitHub

## Instalação, Configuração e Autenticação

### Instalando o Git no Windows

- Acesse [Git download page](https://git-scm.com/download/win);
- Faça o download do instalador e execute;
- Aceite a licença e clique em “Next”, e siga configurando como desejar¹ e clicando em “Next”;
- Finalize clicando em “Install”, e “Finish”.

¹Em "Select Components“, deixe as opções “Git Bash Here” e “Git GUI Here” marcadas.

### Instando no Linux (Ubuntu)

- Confira a doc: [Git Linux install](https://git-scm.com/download/linux);
- Instale a última versão estável do Git:

```sh
add-apt-repository ppa:git-core/ppa
```

```sh
apt update
```

```sh
apt install git
```

### Instalando o Git no macOS

- Confira a doc: [Git macOS install](https://git-scm.com/download/mac);
- Instale o Homebrew: [Homebrew install](http://brew.sh);
- Instale o Git:

```sh
brew install git
```

### Configurando o Git

```sh
git config --list
```

#### Configurando seu nome de usuário e e-mail (global)

```sh
git config --global user.name "Nome Sobrenome"
git config --global user.email seuemail@email.com
```

#### Configurando o nome da Branch Padrão

```sh
git config --global init.defaultBranch main
```
