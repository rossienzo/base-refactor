# Anotações

## Funcionamento

1- Services chamam repositórios e thirdparty  
2- Repositories acessam o banco de dados por meio do typeorm  
3- Controllers chamam os services e trabalham com o controle das requisições e respostas  
4- Os services trabalham com a integração para executar uma funcionalidade  
5- Factories vão ser chamadas em route e vão retornar uma instancia do controlador com as dependencias injetadas  

## Ordem de Chamadas

Roteador  
|  
| chama, para as rotas especificadas,  
|  
v  
Factories  
|  
| criam, injetam dependências e retornam  
|  
v  
Controllers  
|  
| criam e chamam  
|  
v  
Services  
|  
| chamam   
|-----------------------> Thirdparty  
v  
Repository  
|  
| acessa  
|  
v  
Banco de Dados

## Exemplo

Como exemplo da estrutura, segue uma implementação de uma requisição para retornar todos os usuários registrados no sistema.

Pré-requisitos: ter no banco de dados a representação do usuário. Além disso, a camada `domain` deve ter a classe correspondente a usuário em `/entities`.

1. Criar o repositório de acesso.
    - Como necessitamos acesso ao banco de dados, quem nos fornecerá tal possibilidade é um `repository`.
    - O repositório do usuário possuirá funções que lidam com o usuário a nível de banco de dados. Nesse sentido, verifica, valida, atualiza, remove e modifica dados relacionados.
    - > src\sgrh\repositories\user

2. Agora, criaremos o serviço (`service`) associado à funcionalidade que queremos que seja executada.
    - Um `service` é uma classe que possui um construtor - que vai receber as *dependências* necessárias para rodar as intruções - e também uma função de execução.
    - > src\sgrh\services\users

Obs.: No caso, se tivéssemos que montar um serviço associado a uma ferramenta externa, criaríamos também um `thirdparty`. Entretetando, para esse exemplo, não será necessário.

3. Falta o `controller`. Ele que realizará o controle da requisição e sua resposta.
    - > src\sgrh\presentation\controllers

4. Agora que temos tanto o `repository`, quanto o `service` de que precisamos, falta realmente instanciar esses objetos, a começar pelo `controller`. Para tal, montaremos uma `factory`, que o criará.
    - *Factories* são funções que instanciam, injetam dependências e retornam objetos.
    - Para fins de praticidade, apenas *controllers* contarão com *factories*. Outros objetos que contam com injeção de dependência podem ser instanciados diretamente pelo construtor, recebendo os dados de quem os chamar.
    - > src\sgrh\presentation\factories

5. Por último, chegamos à etapa de configurar a rota. Para tal, montamos a requisição no roteador (`routes`, src\sgrh\routes), documentamos o caminho com `swagger` e chamamos a `factory` desejada, para que possa retornar o controlador que será chamado pelo roteador.