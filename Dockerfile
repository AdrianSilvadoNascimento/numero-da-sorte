FROM nginx:latest
COPY dist/numero-da-sorte/* package.json /usr/share/nginx/html/
RUN npm install && ng serve