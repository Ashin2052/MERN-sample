FROM  node:14-slim

WORKDIR /usr/scr/app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD ["npm","start"]