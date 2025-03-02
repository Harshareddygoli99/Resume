#!/bin/bash

# This script helps set up your GitHub repository for deployment

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install git first."
    exit 1
fi

# Check if the directory is already a git repository
if [ -d ".git" ]; then
    echo "This directory is already a git repository."
else
    # Initialize git repository
    git init
    echo "Git repository initialized."
fi

# Add all files to git
git add .

# Commit changes
git commit -m "Initial commit for GitHub Pages deployment"

echo "Now run the following commands to connect to your GitHub repository:"
echo "1. Create a new repository on GitHub named 'Resume'"
echo "2. Run: git remote add origin https://github.com/Harshareddygoli99/Resume.git"
echo "3. Run: git push -u origin main"
echo ""
echo "After pushing, GitHub Actions will automatically deploy your site to GitHub Pages."
echo "You can view your site at: https://harshareddygoli99.github.io/Resume/" 