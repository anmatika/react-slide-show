FROM node:9.6.1 as builder
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn install
COPY . /app
RUN yarn build

FROM zzswang/docker-nginx-react:latest
ENV DEBUG=off
COPY ./build /app
