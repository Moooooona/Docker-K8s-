FROM node:20.0.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=1234

CMD [ "npm" , "start" ]
