FROM node:22.11.0
WORKDIR /app
ENV PORT 8080
ENV MODEL_URL='https://storage.googleapis.com/prediction-skin-cancer-storage/model-in-prod/model.json'
ENV HOST 0.0.0.0

COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start"]