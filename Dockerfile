FROM node:4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


EXPOSE 8888
CMD [ "npm", "start" ]