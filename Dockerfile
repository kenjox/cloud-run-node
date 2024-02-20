FROM node:alpine as build

WORKDIR /usr/app

ENV NAME="John Doe"

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Ship only js
FROM node:alpine as production

WORKDIR /usr/app

ENV NAME="Jane Doe"

COPY package.json yarn.lock ./

RUN yarn install --production

COPY --from=build /usr/app/dist ./dist

EXPOSE 3000

CMD [ "node", "dist/index.js" ]