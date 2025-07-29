# 🚀 GitHub Upload Guide

This guide provides step-by-step instructions on how to upload the **Neural Notes** project to GitHub by creating a new repository.

## 📋 Prerequisites

✅ Git repository is initialized  
✅ All files have been committed  
✅ Project is ready locally  

## 🌐 Create a New GitHub Repository

### Step 1: Create a New Repository on GitHub

1. Go to **GitHub.com** and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**

### Step 2: Repository Settings

**Repository details:**
- **Repository name:** `neural-notes`
- **Description:** `🧠 A simple, elegant markdown-based note-taking app inspired by Obsidian`
- **Visibility:** Public (recommended) or Private
- **Initialize repository:** ❌ **Do NOT check this!** (since you already have a local repo)

### Step 3: Create the Repository

Click the **"Create repository"** button.

## 📤 Upload Code to GitHub

After creating the remote repository, run the following commands in your terminal:

```bash
# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/neural-notes.git

# Set the main branch (optional)
git branch -M main

# Push code to GitHub
git push -u origin main
