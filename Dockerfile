FROM node:23-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

RUN npx prisma generate
# Build your Next.js project
RUN npm run build

# Expose the port that your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
