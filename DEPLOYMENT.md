# AWS Amplify Deployment Guide

Complete guide for deploying **revised-scenarios-modal** to AWS Amplify with GitHub integration.

## Project Configuration

- **GitHub Repo:** `vivien-anayian/revised-scenarios-modal`
- **Tech Stack:** React 18 + Vite 6 + TypeScript
- **Build Output:** `dist/`
- **Build Command:** `npm run build`
- **Node Version:** 18.x or 20.x

## Branch Strategy

```
staging (default branch)
   ↓
   PR → main (protected branch)
```

### Branches:
- **`staging`** - Development branch, auto-deploys to Staging environment
- **`main`** - Production branch, requires PR approval, auto-deploys to Production

## Files Created

✅ **`amplify.yml`** - AWS Amplify build configuration
✅ **`public/_redirects`** - SPA routing redirects (ensures all routes work)
✅ **`.gitignore`** - Updated with Amplify artifacts
✅ **`vite.config.ts`** - Changed output to `dist/`

---

## Step 1: Push to GitHub

### 1.1 Initialize Git Repository

```bash
cd /Users/vivien.anayian/VivLocalDev/ProposalAI/Revised-Scenarios-Modal

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Add AWS Amplify deployment configuration"
```

### 1.2 Create GitHub Repository

1. Go to: https://github.com/new
2. **Repository name:** `revised-scenarios-modal`
3. **Description:** "React component for comparing multiple scenario options with interactive UI"
4. **Visibility:** Public or Private (your choice)
5. **DO NOT** initialize with README (we already have one)
6. Click **Create repository**

### 1.3 Push to GitHub

```bash
# Add remote
git remote add origin https://github.com/vivien-anayian/revised-scenarios-modal.git

# Create and push main branch
git branch -M main
git push -u origin main

# Create staging branch
git checkout -b staging
git push -u origin staging
```

### 1.4 Configure GitHub Branches

1. Go to: `https://github.com/vivien-anayian/revised-scenarios-modal/settings/branches`
2. **Change default branch to `staging`:**
   - Click the switch icon next to `main`
   - Select `staging`
   - Confirm the change
3. **Add branch protection rules for `main`:**
   - Click "Add branch protection rule"
   - Branch name pattern: `main`
   - ✅ Check "Require a pull request before merging"
   - ✅ Check "Require approvals" (set to 1)
   - Click "Create" at the bottom

---

## Step 2: AWS Amplify Setup

### 2.1 Access AWS Amplify Console

1. Go to: https://console.aws.amazon.com/amplify/
2. Sign in with your AWS account
3. Click **"New app"** → **"Host web app"**

### 2.2 Connect to GitHub

1. **Source code provider:** Select **GitHub**
2. Click **"Connect GitHub"**
3. Authorize AWS Amplify to access your GitHub account
4. **Repository:** Select `vivien-anayian/revised-scenarios-modal`
5. **Branch:** Select `staging` (we'll add main later)
6. Click **"Next"**

### 2.3 Configure Build Settings

1. **App name:** `revised-scenarios-modal` (or your preferred name)
2. **Environment name:** `staging`
3. **Build settings:** AWS should auto-detect the `amplify.yml` file
4. **Verify the configuration shows:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Click **"Advanced settings"** (if you need environment variables)
6. Click **"Next"**

### 2.4 Review and Deploy

1. Review all settings
2. Click **"Save and deploy"**
3. Wait for the build to complete (usually 2-5 minutes)
4. You'll get a URL like: `https://staging.xxxxx.amplifyapp.com`

### 2.5 Add Production Branch (main)

1. In Amplify console, go to your app
2. Click **"Connect branch"** in the left sidebar
3. **Branch:** Select `main`
4. **Environment name:** `production` (or just `prod`)
5. Use the same build settings
6. Click **"Save and deploy"**
7. You'll get a second URL: `https://main.xxxxx.amplifyapp.com`

### 2.6 Configure Branch Settings

1. Go to **App settings** → **Branch settings**
2. Set up automatic deployments:
   - **staging branch:** Auto-deploy ON
   - **main branch:** Auto-deploy ON

---

## Step 3: Workflow in Action

### Daily Development:
```bash
# Work on staging branch
git checkout staging

# Make changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Add new feature"
git push origin staging
```
→ **Automatically deploys to Staging URL**

### Deploy to Production:
```bash
# Create PR from staging to main
gh pr create --base main --head staging --title "Release v1.0.0"

# Or via GitHub UI:
# 1. Go to: https://github.com/vivien-anayian/revised-scenarios-modal/compare/main...staging
# 2. Click "Create pull request"
# 3. Add description
# 4. Request review (if needed)
# 5. Merge PR
```
→ **Automatically deploys to Production URL**

---

## Environment Variables (Optional)

If you need to add environment variables:

### In AWS Amplify Console:
1. Go to **App settings** → **Environment variables**
2. Click **"Manage variables"**
3. Add variables for each environment:
   ```
   KEY: VITE_API_URL
   staging value: https://staging-api.example.com
   production value: https://api.example.com
   ```
4. Click **"Save"**

### In Your Code:
```typescript
// Access with:
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## URLs After Setup

You'll have two environments:

| Environment | Branch | URL | Auto-Deploy |
|------------|--------|-----|-------------|
| **Staging** | `staging` | `https://staging.xxxxx.amplifyapp.com` | ✅ On push |
| **Production** | `main` | `https://main.xxxxx.amplifyapp.com` | ✅ On PR merge |

---

## Custom Domain (Optional)

### To add a custom domain:

1. In Amplify console: **App settings** → **Domain management**
2. Click **"Add domain"**
3. Enter your domain (e.g., `scenarios.yourdomain.com`)
4. Follow the DNS configuration steps
5. Map branches to subdomains:
   - `staging` → `staging.scenarios.yourdomain.com`
   - `main` → `scenarios.yourdomain.com`

---

## Troubleshooting

### Build Fails:
1. Check **Build logs** in Amplify console
2. Common issues:
   - Node version mismatch (add in `amplify.yml` under `preBuild`)
   - Missing dependencies (check `package.json`)
   - TypeScript errors (run `npm run build` locally first)

### 404 on Routes:
- Make sure `public/_redirects` file exists
- Content should be: `/*    /index.html   200`

### Environment Variables Not Working:
- Must prefix with `VITE_` for Vite projects
- Rebuild after adding variables

---

## Monitoring & Logs

### View Build Logs:
1. Amplify Console → Your App
2. Click on a build
3. View logs for each phase

### View Access Logs:
1. **App settings** → **Monitoring**
2. View CloudWatch logs

---

## Rollback

To rollback to a previous deployment:

1. Amplify Console → Your App
2. Find the successful build you want to rollback to
3. Click **"Redeploy this version"**

---

## Cost Estimate

AWS Amplify pricing (as of 2024):
- **Build minutes:** $0.01 per build minute
- **Hosting:** $0.15 per GB served
- **Free tier:** 1000 build minutes + 15 GB served per month

Estimated cost for this project: **~$0-5/month** (usually covered by free tier)

---

## Quick Reference Commands

```bash
# Daily work on staging
git checkout staging
git pull origin staging
# ... make changes ...
git add .
git commit -m "Your message"
git push origin staging

# Create release PR
git checkout staging
git pull origin staging
gh pr create --base main --head staging --title "Release v1.x.x"

# Hotfix to production
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug
# ... fix bug ...
git add .
git commit -m "Fix critical bug"
git push origin hotfix/critical-bug
# Create PR to main via GitHub UI
```

---

## Next Steps After Deployment

1. ✅ Test both Staging and Production URLs
2. ✅ Set up custom domain (optional)
3. ✅ Add team members with appropriate permissions
4. ✅ Set up notifications (Slack/Email) for build status
5. ✅ Configure CloudWatch alarms for monitoring

---

**Ready to deploy!** 🚀

Follow the steps above and you'll have a professional CI/CD pipeline in about 15 minutes.

