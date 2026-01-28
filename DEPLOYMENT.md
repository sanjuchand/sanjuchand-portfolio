# Deployment Guide

This guide covers deploying both the portfolio hub and individual projects.

## Overview

Your portfolio uses a **multi-repo, multi-deployment** architecture:

- **Portfolio Hub**: Main website (this repo) - deployed to Vercel
- **Individual Projects**: Separate repos - deployed to various platforms based on requirements

## Portfolio Hub Deployment

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Built by the creators of Next.js
- Automatic deployments on git push
- Free tier is generous
- Zero configuration for Next.js

**Steps:**

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio hub"
   git remote add origin https://github.com/yourusername/portfolio-hub.git
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain** (optional):
   - In Vercel project settings → Domains
   - Add `yoursite.com`
   - Update DNS records as instructed

**Cost**: Free for personal projects

### Option 2: Static Export to Any Host

If you prefer static hosting (Netlify, Cloudflare Pages, etc.):

1. **Update `next.config.js`**:
   ```js
   const nextConfig = {
     output: 'export',
     // ... rest of config
   }
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Deploy `out/` directory** to your static host

**Limitations**: No server-side features, but portfolio is 100% static anyway.

## Individual Project Deployment

### Cloud Run (for backend projects like Policy Diff)

**Prerequisites**:
- Google Cloud account
- `gcloud` CLI installed
- Docker installed

**Setup**:

1. **Create Dockerfile** in your project:
   ```dockerfile
   FROM python:3.11-slim

   WORKDIR /app

   # Install dependencies
   COPY requirements.txt .
   RUN pip install --no-cache-dir -r requirements.txt

   # Copy application
   COPY . .

   # Expose port
   EXPOSE 8080

   # Run application
   CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
   ```

2. **Build and push to Google Container Registry**:
   ```bash
   # Enable Cloud Run API
   gcloud services enable run.googleapis.com

   # Build image
   gcloud builds submit --tag gcr.io/YOUR-PROJECT-ID/policy-diff
   ```

3. **Deploy to Cloud Run**:
   ```bash
   gcloud run deploy policy-diff \
     --image gcr.io/YOUR-PROJECT-ID/policy-diff \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --memory 4Gi \
     --cpu 2 \
     --min-instances 0 \
     --max-instances 1 \
     --timeout 300s
   ```

4. **Get the service URL**:
   ```bash
   gcloud run services describe policy-diff --region us-central1 --format 'value(status.url)'
   ```

5. **Configure custom subdomain**:
   - In Cloud Run console, go to "Manage Custom Domains"
   - Map `policydiff.yoursite.com` to your service
   - Update DNS with provided records

**Cost**:
- Free tier: 2 million requests/month
- Pay-per-use: ~$0.10-0.50 per analysis
- Scale-to-zero: $0 when idle

### Frontend Projects (Vercel/Netlify)

For React/Vue/static frontend projects:

1. Push to GitHub
2. Import to Vercel/Netlify
3. Configure as subdomain or path

### Docker Compose Projects

For projects with multiple services:

1. **Use a VPS** (DigitalOcean, Linode, etc.)
2. **Setup Docker Compose**:
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "8080:8080"
     database:
       image: postgres:15
       volumes:
         - pgdata:/var/lib/postgresql/data
   ```
3. **Deploy**: SSH to VPS, clone repo, run `docker-compose up -d`
4. **Configure Nginx** as reverse proxy with SSL

## Subdomain Configuration

### DNS Setup

For each project subdomain (e.g., `policydiff.yoursite.com`):

**If using Vercel**:
1. Add domain in Vercel project settings
2. Create CNAME record: `policydiff` → `cname.vercel-dns.com`

**If using Cloud Run**:
1. Map custom domain in Cloud Run console
2. Create A/AAAA records as instructed by Google

**If using VPS**:
1. Create A record: `policydiff` → `your.vps.ip.address`

### SSL Certificates

- **Vercel/Netlify**: Automatic (Let's Encrypt)
- **Cloud Run**: Automatic (Google-managed)
- **VPS**: Use Certbot for Let's Encrypt

## Cost Optimization

### Portfolio Hub
- **Vercel Free Tier**: Sufficient for personal portfolio
- **Bandwidth**: 100 GB/month free

### Backend Projects
- **Strategy**: Scale-to-zero with pay-per-use
- **Cloud Run**: Only pay when processing requests
- **Cold starts**: ~30-60s (acceptable for demos)

### Monthly Cost Estimate

```
Portfolio Hub (Vercel):        $0
Policy Diff (Cloud Run):       $2-10 (low traffic)
Additional projects:           $0-5 each (if static)
Custom domain:                 $12/year
----------------------------------------
Total:                         $2-15/month
```

## Deployment Checklist

### Before Deploying Hub

- [ ] Update `projects-config.json` with all projects
- [ ] Replace placeholder links with actual URLs
- [ ] Add project screenshots to `public/projects/`
- [ ] Test locally: `npm run build && npm start`
- [ ] Update GitHub links
- [ ] Configure custom domain

### Before Deploying Individual Projects

- [ ] Test project locally
- [ ] Create Dockerfile (if backend)
- [ ] Configure environment variables
- [ ] Test Docker image locally
- [ ] Set up CI/CD (optional but recommended)
- [ ] Document API endpoints (if applicable)
- [ ] Add project to `projects-config.json`

## CI/CD (Optional)

### GitHub Actions for Portfolio Hub

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      # Vercel handles deployment automatically
```

### GitHub Actions for Cloud Run

```yaml
name: Deploy to Cloud Run

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: google-github-actions/setup-gcloud@v1
        with:
          service_account_key: ${{ secrets.GCP_SA_KEY }}
      - run: |
          gcloud builds submit --tag gcr.io/$PROJECT_ID/app
          gcloud run deploy app --image gcr.io/$PROJECT_ID/app
```

## Monitoring

### Portfolio Hub
- Vercel Analytics (built-in)
- Google Analytics (add to layout.tsx)

### Backend Projects
- Cloud Run metrics (requests, latency, errors)
- Google Cloud Monitoring
- Uptime checks

## Troubleshooting

### "Module not found" errors
- Run `npm install`
- Check import paths use `@/` alias correctly

### Build fails on Vercel
- Check Node.js version in `package.json` engines
- Verify all dependencies are in `dependencies`, not `devDependencies`

### Cloud Run timeout
- Increase `--timeout` flag
- Check for blocking operations
- Optimize model loading

### Cold starts too slow
- Consider keeping 1 min instance (costs ~$10-20/month)
- OR switch to API-based LLM (OpenAI/Anthropic)

## Next Steps

1. Deploy portfolio hub to Vercel
2. Set up custom domain
3. Deploy first project (Policy Diff) to Cloud Run
4. Configure subdomains
5. Test end-to-end
6. Add analytics
7. Set up monitoring
