FROM node:13

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json  /app/package.json
COPY . /app

RUN npm install
RUN npm install react-scripts@3.0.1 -g

CMD ["npm", "start"]