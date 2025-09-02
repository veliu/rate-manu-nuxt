FROM node:22-alpine

ARG PNPM_VERSION=9.7.0
ARG API_BASE_URL='https://my.shop/store-api'
ARG NUXT_UI_PRO_LICENSE='key'

ENV PNPM_VERSION=${PNPM_VERSION}
ENV API_BASE_URL=${API_BASE_URL}
ENV NUXT_UI_PRO_LICENSE=${NUXT_UI_PRO_LICENSE}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

RUN npm add --global pnpm@${PNPM_VERSION}

# Files required by pnpm install
COPY . /usr/src/app

RUN pnpm --dir api install

RUN pnpm install --frozen-lockfile --prefer-offline

RUN pnpm build

EXPOSE 3000