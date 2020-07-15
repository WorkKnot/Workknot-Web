FROM alpine:latest

RUN apk add --no-cache nodejs npm

WORKDIR /workknot-web

COPY . /workknot-web

RUN npm install

EXPOSE 9005

ENTRYPOINT ["node"]

CMD ["index.js"]
