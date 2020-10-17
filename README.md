![Happy](https://user-images.githubusercontent.com/44936493/96325002-0c26a800-0ffb-11eb-878b-6aac8ef5dc6b.png)

Aplicativo desenvolvido na semana do _Dia das Crianças_ promovido pela Aceleração NLW#3 da Rocketseat.
Este app incrível tem como objetivo apresentar os orfanatos em um mapa principal, podendo ser visualizados com mais detalhes e possibilitando o cadastramento de novos orfanatos.

## Mapa Principal
![Mapa Principal](https://user-images.githubusercontent.com/44936493/96325235-958aaa00-0ffc-11eb-83f7-dc79ad0db02f.png)

## Detalhes do Orfanato
![Detalhes do Orfanato](https://user-images.githubusercontent.com/44936493/96325236-9e7b7b80-0ffc-11eb-9885-5f18b510d566.png)

## Cadastro de Orfanato
![Cadastro de Orfanato](https://user-images.githubusercontent.com/44936493/96325240-a4715c80-0ffc-11eb-9348-c173cf7bd8fd.png)

## Configuração com Docker
**Antes de executar os passos à seguir, certifique-se de ter o docker instalado na máquina.**

1. Crie um novo arquivo na raiz do seu projeto chamado _Dockerfile_
2. Informe as configurações abaixo:
```Dockerfile
FROM node:10.19.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5500

ENTRYPOINT [ "npm", "start" ]
```
3. Execute no seu terminal o comando ```docker build -t <nome-do-seu-projeto>:latest .``` para criar a imagem do seu app no docker
4. Execute no seu terminal o comando ```docker docker run -d -p 5500:5500 <nome-do-seu-projeto>```

Se tudo ocorreu tudo bem, você pode acessar seu projeto no browser através do ```localhost:5500```

## Meu repositório no Docker Hub

https://hub.docker.com/repository/docker/lopez12/happy-app/general

![Docker Hub](https://user-images.githubusercontent.com/44936493/96329317-20ca6680-1022-11eb-8e41-684c46d50929.png)

#### Testes com Docker Localmente
```sudo docker build -t happy-app:latest .```

```sudo docker run -d -p 5500:5500 happy-app```
### Referências
Criar imagem com Docker:
https://dev.to/azure/desenvolvendo-aplicacao-node-js-express-js-com-docker-2e7a

Apresentando o Mapbox:
https://www.youtube.com/watch?v=hGIk0ZUKnAc

Leaflet:
https://leafletjs.com/examples/quick-start/
