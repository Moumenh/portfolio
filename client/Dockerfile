FROM node:14.15.0-alpine as build

WORKDIR /app/frontend

COPY package.json package-lock.json ./

RUN npm install 

# RUN npm install react-scripts@3.4.1 -g 

COPY . ./

RUN npm run build

FROM nginx 

# EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/frontend/build /usr/share/nginx/html