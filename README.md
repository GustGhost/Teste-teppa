# Teste-teppa

## Desenvolvedor:
Luis Gustavo Rodrigues de Paula

## Tecnologias usadas:
Firestore, NodeJS, Typescript, Cors, React, Axios, CSSType

## Link para acessar a api:
https://us-central1-teppa-teste-db.cloudfunctions.net/api/todo

## Como utilizar a api:
A API tem 4 endpoints;

1 - o endpoint get retorna todos os dados

ex.:

axios.get('https://us-central1-teppa-teste-db.cloudfunctions.net/api/todo')

2 - o endpoint post adiciona novos dados a api

ex.:
axios.post('https://us-central1-teppa-teste-db.cloudfunctions.net/api/todo')
   
3 - o endpoint delete remove um dado específico usando o id do dado que deseja remover

ex.:

axios.delete('https://us-central1-teppa-teste-db.cloudfunctions.net/api/todo')    

4 - o endpoint put para alterar um dado, usando o id do dado que deseja alterar e alterando o dados pelo body, mais específicamente {"description": ""}

ex.:

axios.put('https://us-central1-teppa-teste-db.cloudfunctions.net/api/todo')
