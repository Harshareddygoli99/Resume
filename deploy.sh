#!/bin/bash

# Automated deployment script for Resume website

echo "🚀 Starting deployment process..."

# Kill any running Next.js processes
pkill -f next || true

# Build the project
echo "🔨 Building the project..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Exiting."
  exit 1
fi

# Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
echo "📄 Creating .nojekyll file..."
touch out/.nojekyll

# Commit changes to main branch
echo "💾 Committing changes to main branch..."
git add .
git commit -m "Update resume content"
if [ $? -ne 0 ]; then
  echo "⚠️ No changes to commit or commit failed. Continuing anyway..."
fi

# Push to main branch
echo "⬆️ Pushing to main branch..."
git push origin main
if [ $? -ne 0 ]; then
  echo "❌ Push to main branch failed. Exiting."
  exit 1
fi

# Deploy to gh-pages
echo "🚀 Deploying to gh-pages branch..."
git add -f out/
git commit -m "Deploy to GitHub Pages"
if [ $? -ne 0 ]; then
  echo "❌ Failed to commit build files. Exiting."
  exit 1
fi

# Push the out directory to gh-pages branch
echo "⬆️ Pushing to gh-pages branch..."
git subtree push --prefix out origin gh-pages
if [ $? -ne 0 ]; then
  echo "❌ Push to gh-pages branch failed. Trying force push..."
  git push origin `git subtree split --prefix out main`:gh-pages --force
  if [ $? -ne 0 ]; then
    echo "❌ Force push to gh-pages branch failed. Exiting."
    exit 1
  fi
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be live at: https://harshareddygoli99.github.io/Resume/" 