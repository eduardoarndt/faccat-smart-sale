# Smart Sale

## Especificação de Caso de Uso: Manter Cadastro de Clientes

Este caso de uso tem por finalidade documentar os fluxos necessários para antendar a funcionalidade de cadastro de clientes do sistema Smart Sale.

| Versão | Comentário      |
| ------ | --------------- |
| 1.0    | Versão inicial. |

## Pré-condições

Nenhuma.

## Fluxo de eventos

### Fluxo Básico

### A. Incluir um cliente

|     | Ação do ator                                         | Resposta do sistema                                                                    |
| --- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1   | O cliente acessa a opção de cadastro de clientes.    | O sistema solicita os dados de e-mail do cliente e senha.                              |
| 2   | O cliente informa os dados solicitados corretamente. | O sistema valida as entradas de acordo com cada campo e pede a confirmação do cliente. |
| 3   | O cliente confirma os dados informados.              | O sistema salva os dados.                                                              |
| 3.1 |                                                      | O sistema envia ao cliente um e-mail de confirmação do cadastro.                       |
| 3.2 |                                                      | O sistema informa que o cadastro foi realizado com sucesso.                            |
| Fim |                                                      |                                                                                        |

### Fluxos Alternativos

### A. Usuário cancela o cadastro

|     | Ação do ator                                         | Resposta do sistema                                                                    |
| --- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1   | O cliente acessa a opção de cadastro de clientes.    | O sistema solicita os dados de e-mail do cliente e senha.                              |
| 2   | O cliente informa os dados solicitados corretamente. | O sistema valida as entradas de acordo com cada campo e pede a confirmação do cliente. |
| 3   | O cliente **não** confirma os dados informados.      | O sistema informa que o cadastro será cancelado.                                       |
| 3.1 |                                                      | O sistema fecha o cadastro de cliente.                                                 |
| Fim |  

### B. Usuário deleta o cadastro
#### Pré-condições

O cliente precisa estar cadastrado e logado.

|     | Ação do ator                                        | Resposta do sistema                                                      |
|-----|-----------------------------------------------------|--------------------------------------------------------------------------|
| 1   | O cliente acessa a opção de perfil do cliente.      | O sistema abre a página do perfil do cliente.                            |
| 2   | O cliente acessa a opção de configurações da conta. | O sistema abre a página de configurações da conta do cliente.            |
| 3   | O cliente acessa a opção de deletar conta.          | O sistema informa que o processo é irreversível.                         |
| 3.1 |                                                     | O sistema pede a confirmação da ação.                                    |
| 4   | O cliente confirma a deleção da conta.              | O sistema envia ao cliente um e-mail de confirmação da deleção da conta. |
| 4.1 |                                                     | O sistema deleta as informações do cliente.                              |
| 4.2 |                                                     | O sistema informa que a deleção foi realizada com sucesso.               |


### Fluxos de Exceção

### A. Usuário informa dados incorretos

|     | Ação do ator                                                   | Resposta do sistema                                           |
| --- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| 1   | O cliente acessa a opção de cadastro de clientes.              | O sistema solicita os dados de e-mail do cliente e senha.     |
| 2   | O cliente informa os dados solicitados com um e-mail inválido. | O sistema valida as entradas de acordo com cada campo.        |
| 2.1 |                                                                | O sistema informa o cliente que o e-mail informado é inválido |
| Fim |

### B. Usuário previamente cadastrado

|     | Ação do ator                                                        | Resposta do sistema                                                   |
| --- | ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 1   | O cliente acessa a opção de cadastro de clientes.                   | O sistema solicita os dados de e-mail do cliente e senha.             |
| 2   | O cliente informa os dados solicitados com um e-mail já cadastrado. | O sistema valida as entradas de acordo com cada campo.                |
| 2.1 |                                                                     | O sistema informa o cliente que o e-mail informado já está cadastrado |
| Fim |

## Pontos de Extensão

## Pós-condições

## Requisitos Especiais

## Observações