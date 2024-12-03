# Define the base Docker image
FROM node:alpine

# Define the default application directory (Created if it does not exist)
WORKDIR /usr/src/app

# Copy the local application files and directories to the defined directory
COPY . /usr/src/app/

# Installs the global command line dependency for Angular
RUN npm install -g @angular/cli

# Installs the Angular application dependencies
RUN npm install

# Creates and runs the Angular application for external access
CMD ["ng", "serve", "--host", "0.0.0.0"]