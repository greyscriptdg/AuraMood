#!/bin/bash

# Increase the file descriptor limit
echo "Increasing file descriptor limit..."
sudo launchctl limit maxfiles 65536 200000
ulimit -n 65536

# Clean up Metro bundler cache
echo "Cleaning Metro bundler cache..."
rm -rf node_modules/.cache
rm -rf .expo

# Reinstall dependencies
echo "Reinstalling dependencies..."
npm install

# Start the app
echo "Starting the app..."
npm start 