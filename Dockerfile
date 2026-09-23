# syntax=docker/dockerfile:1

# ---- builder ----
FROM node:22-bookworm-slim AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

# ---- runtime ----
# vinext is in devDependencies but is the actual server runtime, so we
# can't --omit=dev. Keep the full install to match the host setup.
FROM node:22-bookworm-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3102

COPY package.json package-lock.json ./
RUN npm ci --include=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist

RUN mkdir -p .wrangler

EXPOSE 3102
CMD ["npm", "run", "start"]
