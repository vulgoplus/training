FROM node:12

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000

VOLUME /usr/src/app

CMD [ "yarn", "dev" ]