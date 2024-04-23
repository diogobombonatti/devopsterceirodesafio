
FROM node:lts-alpine3.19


USER node


WORKDIR /app-money


COPY . .

RUN npm install


EXPOSE 3000

CMD ["node", "index.js"]
