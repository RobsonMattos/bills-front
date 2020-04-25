FROM nginx

# COPY /media/robson/Robson-D/Desenvolvimento/projetos/bills/dist/bills /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf

VOLUME /home/robson/dese/dist/bills /usr/share/nginx/html
# VOLUME /etc/nginx