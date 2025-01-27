FROM node

WORKDIR /app

COPY . /app

RUN npm install
# Run the json-server
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]