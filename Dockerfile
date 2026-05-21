FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy source files
COPY . .

# Expose port
EXPOSE 10000

# Set environment
ENV PORT=10000
ENV NODE_ENV=production

# Start the server
CMD ["node", "server.js"]
