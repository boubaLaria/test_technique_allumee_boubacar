# Étape 1 : Build de l'application Next.js
FROM node:20-alpine AS builder

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et package-lock.json pour installer uniquement les dépendances
COPY package.json package-lock.json ./

# Installation des dépendances en mode production
RUN npm ci --legacy-peer-deps

# Copie du code source
COPY . .

# Build de l'application
RUN npm run build

# Suppression des dépendances inutiles après le build
RUN npm prune --production


# Étape 2 : Exécution de l'application en mode production
FROM node:20-alpine AS runner

WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis l'étape de build
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./

# Définition des variables d'environnement optimisées
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Exposition du port utilisé par Next.js
EXPOSE 3000

# Commande de démarrage
CMD ["node", "./node_modules/next/dist/bin/next", "start"]