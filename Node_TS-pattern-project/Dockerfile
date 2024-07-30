FROM node

WORKDIR /app

COPY package*.json ./

RUN npm i --only=prod

COPY /build .

CMD ["node","index.js"]

