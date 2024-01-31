FROM node:lts-bullseye AS builder
RUN apt-get update && apt-get upgrade -y && \
  apt-get install -y python3 python3-pip libjemalloc2 && \
  rm -rf /var/lib/apt/lists/*; \
  corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app
COPY package.json package-lock.json* ./
RUN \
 corepack prepare npm@latest --activate; \
 if [ -f package-lock.json ]; then npm i; \
 else echo "Lockfile not found." && exit 1; \
 fi

ENV NEXT_TELEMETRY_DISABLED 1
COPY . .
# ENV NODE_ENV development
RUN npm run build

FROM node:lts-bullseye-slim AS runner
RUN apt-get update && apt-get upgrade -y && \
  apt-get install -y libjemalloc2 && \
  rm -rf /var/lib/apt/lists/*; \
  corepack enable && corepack prepare npm@latest --activate

WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.dist ./.dist
COPY --from=builder /app .

ENV LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libjemalloc.so.2
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 4000
ENV PORT 4000
CMD ["npm", "run", "preview"]