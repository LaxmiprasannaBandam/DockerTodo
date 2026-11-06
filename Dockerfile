FROM nginx:alpine

COPY index.html /usr/share/nginx/html/

COPY package.js /usr/share/nginx/html/

EXPOSE 80