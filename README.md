# api-vendas-node
## Requisitos para rodar esse back-end
- Ter nodejs instalado na sua maquina
```
  sudo apt install nodejs
```
- Ter o gerenciador de pacotes yarn instalado
```
  npm install --global yarn
```
- Ter o docker e docker-compose instalado

## Executando o projeto
- Baixar as dependencias
```
  yarn install
```
- Executar docker files e config ambiente
```
  docker-compose up
```
- Rodar as migrations
```
  yarn run typeorm migration:run
```
- Executar
```
  yarn run dev
```
