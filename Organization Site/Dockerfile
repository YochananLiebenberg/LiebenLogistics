# Use a base image with compatible GLIBC version
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the desired port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
