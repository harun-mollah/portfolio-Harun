#!/bin/bash

# Portfolio Website Setup Script
echo "================================"
echo "Portfolio Website Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first."
    echo "Download from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "================================"
    echo "Setup Complete!"
    echo "================================"
    echo ""
    echo "To start development server, run:"
    echo "  npm run dev"
    echo ""
    echo "To build for production, run:"
    echo "  npm run build"
    echo "  npm start"
    echo ""
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
