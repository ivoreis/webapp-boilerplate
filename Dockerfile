# Install Stage
FROM node:12.18.1-alpine as build
ARG GITHUB_TOKEN

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm ci &&\
  npm run build &&\
  npm prune --production &&\
  rm -rf ~/.npmrc

FROM node:12.18.1-alpine as run

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/next.config.js ./next.config.js

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
CMD npm run start
