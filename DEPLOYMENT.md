# 🚀 GitHub Deployment Guide

This guide explains how to upload and deploy the Neural Notes project to GitHub.

## 📋 Preparation

- Initialize a git repository
- Commit all files
- Ensure the project is ready locally

## 🌐 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** button in the top right
3. Select **New repository**
4. Name it `neural-notes` and add a description
5. Set visibility to Public or Private
6. Do not initialize with a README (your local repo already has one)
7. Click **Create repository**

## 📤 Upload Code to GitHub

In your terminal, run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/neural-notes.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 🔧 Alternative: SSH

If you use SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/neural-notes.git
git branch -M main
git push -u origin main
```

## 📱 Deploy with GitHub Pages (Optional)

1. Go to your repository on GitHub
2. Click **Settings**
3. Select **Pages** from the left menu
4. Under **Source**, choose **Deploy from a branch**
5. Select the `main` branch
6. Click **Save**

Your site will be live at:  
`https://YOUR_USERNAME.github.io/neural-notes/`

## 📊 Repository Info

- `index.html` - Main app file
- `styles.css` - Styles and themes
- `script.js` - JavaScript functionality
- `README.md` - Documentation
- `.gitignore` - Ignore rules

**Tech stack:** HTML, CSS, JavaScript

## 🏷️ Create a Release Tag

To tag your first release:

```bash
git tag -a v1.0.0 -m "Neural Notes v1.0.0 - Initial Release"
git push origin v1.0.0
```

Add release notes on GitHub under **Releases** if desired.

## 🔗 Useful Links

- [GitHub CLI](https://cli.github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Git Documentation](https://git-scm.com/doc)

---

**Good luck! Your project is now live on GitHub!** 