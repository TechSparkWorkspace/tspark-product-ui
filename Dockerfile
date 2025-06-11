# -------- Stage 1: Build Angular app --------
FROM node:20 AS build

WORKDIR /app
# Copy entire Angular project into the container
COPY . .   
# Install dependencies  
RUN npm install  
# Build the Angular app for production
RUN npm run build --prod 


# -------- Stage 2: Serve using Nginx --------
FROM nginx:alpine
COPY --from=build /app/dist/tspark-product-ui/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080