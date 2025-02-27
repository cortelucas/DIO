# Versionamento de Código com Git e GitHub

## Primeiros Passos com Git e GitHub

### Criando e Clonando Repositórios

Existem duas formas de obter um repositório Git na sua máquina:

1. Transformando um diretório local que não está sob controle de versão, num repositório Git;
2. Clonando um repositório Git existente.

#### Criando um Repositório Local

Acesse a pasta que deseja transformar em um repositório Git pelo terminal ou clique no atalho em “Git Bash Here”:

1. Inicialize um repositório Git no diretório escolhido:

```sh
git init
```

2.Conecte o repositório local com o repositório remoto:

```sh
git remote add origin https://github.com/username/nome-do-repositorio.git
```

### Desfazendo Alterações no Repositório Local

#### Como alterar a mensagem do último commit

```sh
git commit --amend
```

Alterando a mensagem sem abrir o editor:

```sh
git commit --amend –m"nova mensagem"
```

#### Como desfazer um commit

```sh
git reset
```

```sh
git reset --soft
```

```sh
git reset --mixed
```

```sh
git reset --hard
```
