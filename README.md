# ReciclaOleo

## Sobre o projeto
Esse projeto é avaliação final do programa de capacitação gratuita Students to Business (S2B), edição 2018/1, na trilha de desenvolvimento de sistemas web JavaScript com Node.js.
É um sistema que exibe para o usuário a localização dos pontos de coleta de óleo de cozinha usado em Porto Alegre, RS.

## Desenvolvedor
Rodrigo Antônio Menezes Maria

## Configuração
Passo à passo da configuração necessária para deixar o ambiente e o projeto prontos para o desenvolvimento da aplicação.

## Instalação dos frameworks MEAN, seguindo a ordem de instalação correspondente:
### MongoDB
  1. Você deve realizar o download do [Mongo Community Server](https://www.mongodb.com/download-center#community) 
  2. Realizar a instalação selecioando a opção completa;
  3. Criar pasta no caminho c:\data\db
  4. Adicionar o Mongo no caminho path:
    a) Botão Direito Meu Computador;
    b) Propriedades;
    c) Configurações avançadas do sistema; 
    d) Variáveis de Ambiente;
    e) Selecionar PATH nas variáveis de usuário e clicar em editar;
    f) Novo
    g) Colar caminho C:\Program Files\MongoDB\Server\3.6\bin, onde 3.6 é a versão que tenho instalada;
    Pronto, pode testar executando mongod no seu console de preferência em qualquer diretório de seu computador.
    h) Se não tiver permissão para incluir o MongoDB nas váriaveis path, deve-se executar o comando mongod no seguinte caminho:
    C:\Program Files\MongoDB\Server\SUA VERSÃO\bin

### NodeJS
  1. Você deve realizar o download da versão [NodeJS](https://nodejs.org/en/) recomendada pelos usuários (LTS). 
  2. Realizar a instalação;

### Express
  1. Ao executar o comando ```$ npm install ``` dentro da pasta backend, ele instalará automaticamente a dependência.

### AngularJS
  1. Ao executar o comando ```$ npm install ``` dentro da pasta frontend, ele instalará automaticamente a dependência.

- Inserir dados no banco
  1. Você deverá executar o MongoDB no modo *shell*, observando se o caminho está no path ou não:
  ```sh
  $ mongo --shell
  ```
  2. O conteúdo presente no arquivo **docs/bd/data.json** deverá ser copiado e colado no *console* onde foi executado o *shell* do MongoDB, para a inserção dos dados.

## Configuração back-end
  1. Instalar os módulos do node utilizando o **npm**.
  ```sh
  $ cd ReciclaOleo/backend
  $ npm install
  ```

  2. Inicializar a aplicação em **modo desenvolvimento** (utilizado o Nodemon).
  ```sh
  $ npm run dev
  ```

  3. Inicializar a aplicação em **modo produção** (utilizando o pm2).
  ```sh
  $ npm run production
  ```
  
  4. Nossa API estará disponível em *http://localhost:3003*

## Configuração front-end
1. Instalar os módulos do node utilizando o **npm**.
  ```sh
  $ cd ReciclaOleo/frontend
  $ npm install
  ```

  2. Inicializar a aplicação em **modo desenvolvimento** (utilizando o gulp).
  ```sh
  $ npm run dev
  ```

  3. Inicializar a aplicação em **modo produção** (utilizando o gulp).
  ```sh
  $ npm run production
  ```

   4. Nossa API estará disponível em *http://localhost:4000*
