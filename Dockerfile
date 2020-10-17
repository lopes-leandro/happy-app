FROM node:10.19.0

WORKDIR /app

ENV PORT=5500

COPY . .

RUN npm install

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]