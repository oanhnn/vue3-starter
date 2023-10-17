### Stage: base
FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app


### Stage: dependencies
FROM base AS dependencies

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile


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
