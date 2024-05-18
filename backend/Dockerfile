FROM node:14

#set wroking directory
WORKDIR /app

#copy in package json files.
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

#copy in source code
COPY . /app

EXPOSE 80

CMD ["npm", "start"]