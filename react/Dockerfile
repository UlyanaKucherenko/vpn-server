FROM node:16.14.2-alpine3.15 as build-stage
RUN apk update  \
        && apk upgrade --no-cache  --force-overwrite --force-refresh --purge --available --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main \
	&& apk add python3 make g++

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install \
    && npx browserslist@latest --update-db
COPY ./ .
COPY ./.env.test_server ./.env
RUN yarn run build

FROM nginx:1.22-alpine as production-stage

RUN set -xe \
    && sed -i 's/v3.15/v3.16/g' /etc/apk/repositories \
    && apk update \
    && apk upgrade --no-cache  --force-overwrite --force-refresh --purge --available --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main \
    && apk upgrade busybox --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main \
    && sync

RUN mkdir -p /www/react/public
COPY --from=build-stage /app/build /www/react/public
COPY ./production.conf /etc/nginx/nginx.conf
