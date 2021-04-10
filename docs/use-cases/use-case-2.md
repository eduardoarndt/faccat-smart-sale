# Smart Sale

## Especificação de Caso de Uso: Manter Assinatura do Smart Sale

Este caso de uso tem por finalidade documentar os fluxos necessários para antendar a funcionalidade de realizar assinaturas dos produtos Smart Sale.

| Versão | Comentário      |
| ------ | --------------- |
| 1.0    | Versão inicial. |

## Pré-condições

O cliente precisa estar registrado e logado, conforme passos do [Caso de Uso: Manter Cadastro de Clientes](./use-case-1.md)

## Fluxo de eventos

### Fluxo Básico

### A. Assinar um plano

|     | Ação do ator                                                    | Resposta do sistema                                                                                               |
|-----|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 1   | O cliente acessa o menu de assinaturas.                         | O sistema abre a página de assinaturas do sistema Smart Sale.                                                     |
| 2   | O cliente seleciona o plano de assinatura desejado.             | O sistema abre a página de detalhes do plano.                                                                     |
| 3   | O cliente seleciona a opção de contratar.                       | O sistema abre a página de realização de assinatura.                                                              |
| 3.1 |                                                                 | O sistema pede os dados do cartão de crédito do cliente (número do cartão, dígito verificador, data de validade). |
| 3.2 | O cliente preenche todos dados do cartão de crédito solictados. | O sistema solicita a confirmação dos termos e condições do serviço                                                |
| 3.3 | O cliente aceita os termos e condições do serviço.              | O sistema pede a confirmação da assinatura.                                                                       |
| 3.4 | O cliente confirma a assinatura.                                | O sistema valida os dados do cartão de crédito informado.                                                         |
| 3.5 |                                                                 | O sistema salva os dados da assinatura.                                                                           |
| 3.6 |                                                                 | O sistema gera as credenciais de acesso ao serviço para esta assinatura.                                          |
| 3.7 |                                                                 | O sistema envia ao cliente um e-mail de confirmação da assinatura, contendo as credenciais de acesso ao serviço.  |
| Fim |

### Fluxos Alternativos

### A. Trocar de plano assinado

#### Pré-condições

O cliente necessita ter uma assinatura ativa.

|     | Ação do ator                                                            | Resposta do sistema                                                                                              |
|-----|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| 1   | O cliente acessa o menu de assinaturas.                                 | O sistema abre a página de assinaturas do sistema Smart Sale.                                                    |
| 2   | O cliente seleciona o plano de assinatura desejado, diferente do atual. | O sistema abre a página de detalhes do plano.                                                                    |
| 3   | O cliente seleciona a opção de atualizar contrato.                      | O sistema abre a página de realização de assinatura.                                                             |
| 3.1 |                                                                         | O sistema reutiliza os dados do pagamento anterior.                                                              |
| 3.2 |                                                                         | O sistema solicita a confirmação dos termos e condições do serviço.                                              |
| 3.3 | O cliente aceita os termos e condições do serviço.                      | O sistema pede a confirmação da assinatura.                                                                      |
| 3.4 | O cliente confirma a assinatura.                                        | O sistema valida os dados do cartão de crédito salvos.                                                           |
| 3.5 |                                                                         | O sistema salva os dados da assinatura.                                                                          |
| 3.6 |                                                                         | O sistema apaga os dados da assinatura anterior, incluindo as credenciais.                                       |
| 3.7 |                                                                         | O sistema gera as novas credenciais de acesso ao serviço para esta assinatura.                                   |
| 3.8 |                                                                         | O sistema envia ao cliente um e-mail de confirmação da assinatura, contendo as credenciais de acesso ao serviço. |
| Fim |                                                                         |                                                                                                                  |

### B. Cancelar assinatura 

#### Pré-condições

O cliente necessita ter uma assinatura ativa.

|     | Ação do ator                                             | Resposta do sistema                                                                |
|-----|----------------------------------------------------------|------------------------------------------------------------------------------------|
| 1   | O cliente acessa o menu de assinaturas.                  | O sistema abre a página de assinaturas do sistema Smart Sale.                      |
| 2   | O cliente seleciona a assinatura atual.                  | O sistema abre a página de detalhes da assinatura.                                 |
| 3   | O cliente seleciona a opção configurações da assinatura. | O sistema abre a página de configurações da assinatura.                            |
| 4   | O cliente seleciona a opção de cancelar assinatura.      | O sistema pede a confirmação da ação.                                              |
| 4.1 | O cliente confirma o cancelamento da sua assinatura.     | O sistema envia ao cliente um e-mail de confirmação do cancelamento da assinatura. |
| 4.2 |                                                          | O sistema altera as informações da assinatura para cancelada.                      |
| 4.3 |                                                          | O sistema cancela as operações de cobrança.                                        |
| 4.4 |                                                          | O sistema informa que o cancelamento foi realizado com sucesso.                    |
| Fim |                                                          |                                                                                    |

### Fluxos de Exceção

### A. Usuário informa dados incorretos

|     | Ação do ator                                                                      | Resposta do sistema                                                                                               |
|-----|-----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 1   | O cliente acessa o menu de assinaturas.                                           | O sistema abre a página de assinaturas do sistema Smart Sale.                                                     |
| 2   | O cliente seleciona o plano de assinatura desejado.                               | O sistema abre a página de detalhes do plano.                                                                     |
| 3   | O cliente seleciona a opção de contratar.                                         | O sistema abre a página de realização de assinatura.                                                              |
| 3.1 |                                                                                   | O sistema pede os dados do cartão de crédito do cliente (número do cartão, dígito verificador, data de validade). |
| 3.2 | O cliente preenche **incorretamente** algum dado solicitado do cartão de crédito. | O sistema solicita a confirmação dos termos e condições do serviço                                                |
| 3.3 | O cliente aceita os termos e condições do serviço.                                | O sistema pede a confirmação da assinatura.                                                                       |
| 3.4 | O cliente confirma a assinatura.                                                  | O sistema valida os dados do cartão de crédito informado.                                                         |
| 3.5 |                                                                                   | O sistema informa que há dados incorretos no preenchimento do cliente.                                            |
| Fim |                                                                                   |                                                                                                                   |

### B. Usuário não aceita os termos e condições

|     | Ação do ator                                                    | Resposta do sistema                                                                                               |
|-----|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 1   | O cliente acessa o menu de assinaturas.                         | O sistema abre a página de assinaturas do sistema Smart Sale.                                                     |
| 2   | O cliente seleciona o plano de assinatura desejado.             | O sistema abre a página de detalhes do plano.                                                                     |
| 3   | O cliente seleciona a opção de contratar.                       | O sistema abre a página de realização de assinatura.                                                              |
| 3.1 |                                                                 | O sistema pede os dados do cartão de crédito do cliente (número do cartão, dígito verificador, data de validade). |
| 3.2 | O cliente preenche todos dados do cartão de crédito solictados. | O sistema solicita a confirmação dos termos e condições do serviço.                                               |
| 3.3 | O cliente **não** aceita os termos e condições do serviço.      | O sistema cancela o processo de assinatura.                                                                       |
| Fim |                                                                 |                                                                                                                   |


## Pontos de Extensão

## Pós-condições

## Requisitos Especiais

## Observações
