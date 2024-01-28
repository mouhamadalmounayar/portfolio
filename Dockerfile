FROM node:latest
WORKDIR /app
RUN npm install -g @angular/cli@13
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0" , "--disable-host-check"]


