FROM node:10.19.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5500

ENTRYPOINT [ "node", "src/server.js" ]