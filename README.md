Desafio Docker: nginx com node
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
Para executar o desafio execute os comandos abaixo:
    $ git clone https://github.com/gapasquantonio/desafio-nginx-node.git

    $ cd desafio-nginx-node

    $ docker-compose up -d --build

    $ acessar porta porta: 8080.
