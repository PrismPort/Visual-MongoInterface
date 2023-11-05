# Use the Node 18 image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Run the app in development mode
CMD ["npm", "run", "dev"]