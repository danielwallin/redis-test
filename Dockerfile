FROM node:16.1.0
ENV NODE_ENV=production

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY . .

CMD [ "node", "main.js" ]