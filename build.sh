#!/bin/bash
# Script to build with npm

echo "Starting build process with npm..."
npm install --no-package-lock
npm run build
echo "Build process completed."