FROM node:21-slim
WORKDIR /app
COPY package.json .
RUN yarn install --production=false && yarn cache clean
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]