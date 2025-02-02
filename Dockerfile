FROM node

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

###################################################
## Start Run JSON Server And Next In Same Container
###################################################
# Install json-server globally
# RUN npm install -g json-server

# COPY . /app

# # Run json-server in the background on port 3001
# CMD ["sh", "-c", "json-server --watch db.json --port 3001 & npm run build && npm start"]

# EXPOSE 3000 3001

###################################################
## End Run JSON Server And Next In Same Container
###################################################

######################################################################
## Use Json Server Container For Run Json Server In Seperate Container
#docker pull vimagick/json-server
######################################################################

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]