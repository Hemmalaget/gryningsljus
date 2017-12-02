FROM node:9.2.0
WORKDIR /usr/src
COPY . .
RUN npm install
