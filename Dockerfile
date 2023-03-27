### Stage: base
FROM node:18-alpine AS base

WORKDIR /app
RUN npm i -g pnpm


### Stage: dependencies
FROM base AS dependencies

COPY package.json pnpm-lock.yaml ./
RUN pnpm install


### Stage: build
FROM base AS build

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm run build


### Stage: deploy
FROM nginx:stable-alpine AS deploy

COPY --from=build /app/dist /usr/share/nginx/html


### Stage: deploy from CI
FROM nginx:stable-alpine AS deploy-ci

COPY dist /usr/share/nginx/html
