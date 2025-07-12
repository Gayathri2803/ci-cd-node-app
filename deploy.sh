#!/bin/bash

echo "Stopping existing Node app..."
pkill -f "node app.js" || true

echo "Installing dependencies..."
npm install --omit=dev

echo "Starting app in background..."
nohup npm start > output.log 2>&1 &

echo "App deployed and running!"
