FROM node:20-alpine3.19 AS base

# Stage 1: Builder
FROM base AS builder

WORKDIR /home/parth-zip/builder

COPY package*.json .
COPY app.config.ts .
COPY tsconfig.json .

RUN npm install

COPY app/ app/

RUN npm run build

# Stage 2: Runner
FROM base AS runner

WORKDIR /home/parth-zip/runner

COPY --from=builder /home/parth-zip/builder/.output .output/
COPY --from=builder /home/parth-zip/builder/.vinxi .vinxi/
COPY package*.json .

RUN npm install --omit=dev

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

USER nodejs

CMD ["npm", "run", "start"]