FROM node:12
ADD main.js ./
ADD package.json ./
RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]