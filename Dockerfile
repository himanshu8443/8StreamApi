FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production


RUN adduser -D myuser 
USER myuser

ENV PORT=3000 \
    BASE_URL=https://allmovieland.link/player.js?v=60%20128
EXPOSE 3000 

CMD ["npm", "start"]  
