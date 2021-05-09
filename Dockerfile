FROM node:14.16.0-alpine3.13 AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN apk add --update --no-cache --virtual build-deps \
    python3 \
    g++ \
    git \
    libtool \
    automake \
    autoconf

# Add libvips
RUN apk add --upgrade --no-cache vips-dev build-base --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/
COPY . .

# install production dependencies
RUN yarn install --pure-lockfile --production

# Note also that prisma generate is automatically invoked when you're installing the @prisma/client npm package
RUN npx prisma generate

# Save production depenencies installed so we can later copy them in the production image
RUN cp -R node_modules /tmp/node_modules

# install all dependencies including devDependencies
RUN yarn install --pure-lockfile
RUN yarn build

###########
FROM node:14.16.0-alpine3.13
WORKDIR /app

RUN apk add --no-cache curl tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/.blitz ./.blitz
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/db ./

ENV PORT 80
EXPOSE 80

CMD [ "npm","run","start:prd" ]
# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl
