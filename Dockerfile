FROM node:10.16.0-alpine
WORKDIR /app
COPY package.json ./
RUN apk add --no-cache git
RUN npm install
RUN npm audit fix
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]