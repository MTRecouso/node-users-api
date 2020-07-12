FROM node:10.9.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
RUN npm rebuild bcrypt --build-from-source
COPY . .
EXPOSE 3000
CMD ["npm", "start"]