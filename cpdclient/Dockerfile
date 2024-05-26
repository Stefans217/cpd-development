FROM node:14 AS development

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["sh", "-c", "HOST=0.0.0.0 npm start"]