FROM node

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

# Run the json-server
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]