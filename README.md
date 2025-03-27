# Exemplo prático e visual com Nuxt e Nitro Server, implementando AWS S3

Este repositório demonstra a implementação prática de um projeto utilizando **Nuxt** e **Nitro Server**, seguindo os princípios do **SOLID** e integrando o **AWS S3** para armazenamento de arquivos.

## Por que usar Nuxt?

O **Nuxt** é um framework baseado em Vue.js, focado em **performance** e **automatização**, oferecendo suporte nativo ao **Nitro Server**. O **Nitro** utiliza o **H3**, um framework leve e performático, semelhante ao **Fastify** ou **Express** do Node.js.

## Exemplo Express
```
/**
 * Express.js example app.
 */
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
console.log("Express started on port 3000");

```

## Exemplo NITRO(h3)

```
/**
 * h3 example app.
 */
import { createApp, defineEventHandler } from "h3";

export const app = createApp();

app.use(
  "/",
  defineEventHandler((event) => {
    return "Hello World";
  }),
);


```


Como o **Nuxt** é uma solução fullstack, optei por utilizá-lo para unificar frontend e backend, em vez de separá-los em projetos distintos. Para gerenciar os conteineres da aplicação, utilizo **Docker**.

## Estrutura do projeto

A organização do código segue a seguinte estrutura:

```
/
├── app.vue      # Componente principal da aplicação
├── /server/     # Backend integrado com testes unitários
```

Com essa abordagem, garantimos um projeto modular, escalável e de fácil manutenção.

