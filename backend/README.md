# ReciclaOleo - *back-end*
Implementação da API REST utilizada pela aplicação front-end ReciclaOleo.

## Organização
A aplicação foi organizada em duas pastas: **api** e **config**.

### API
API REST foi implementada utilizando um módulo node chamado [node-restful](https://github.com/baugarten/node-restful).

- Inserir dados no banco
  1. Você deverá executar o MongoDB no modo *shell*, observando se o caminho está no path ou não:
  ```sh
  $ mongo --shell
  ```
  2. O conteúdo presente no arquivo **docs/bd/data.json** deverá ser copiado e colado no *console* onde foi executado o *shell* do MongoDB, para a inserção dos dados.

## Configuração
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