# Quick Start Guide

Get your portfolio up and running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- Git installed
- Text editor (VS Code recommended)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see:
- Hero section with your name
- Featured projects section (currently showing Policy Diff)
- Tech stack section

### 3. Customize Your Portfolio

#### Update Personal Information

Edit `src/app/page.tsx`:

```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Hi, I'm <span className="text-primary-600">Your Name</span>
</h1>
<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
  Your tagline and description here...
</p>
```

#### Update Tech Stack

In the same file, find the tech array:

```tsx
{['Python', 'TypeScript', 'React', ...].map(tech => (
  // Update with your tech stack
))}
```

#### Update Project Links

Edit `projects-config.json` and replace placeholder URLs:

```json
{
  "links": {
    "github": "https://github.com/YOUR-USERNAME/policy-diff",
    "live": "https://YOUR-DOMAIN.com"
  }
}
```

### 4. Add Projects

To add a new project, edit `projects-config.json`:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "name": "Project Name",
      "tagline": "One-line description",
      "description": "Detailed description...",
      "status": "production",
      "featured": true,
      "techStack": ["Tech1", "Tech2"],
      "categories": ["Category1"],
      "links": {
        "github": "https://github.com/...",
        "live": "https://..."
      },
      "deployment": {
        "type": "cloud-run",
        "subdomain": "project"
      },
      "highlights": [
        "Key feature 1",
        "Key feature 2"
      ]
    }
  ]
}
```

The project will automatically appear on the site!

## Project Organization

### Where to Put Your Projects

Create projects in separate folders:

```
~/Projects/
├── portfolio-hub/           # This repo (the website)
├── policy-diff/             # Your Policy Diff project
├── my-next-project/         # Another project
└── ...
```

Each project should be:
1. In its own directory
2. Have its own Git repository
3. Be independently deployable
4. Listed in `projects-config.json`

### Why Separate Repos?

- ✅ Each project can have different tech stack
- ✅ Better for GitHub showcase (separate repos = more visibility)
- ✅ Cleaner git history
- ✅ Independent deployments
- ✅ Easier to share/open-source individual projects

## Deployment (5 minutes)

### Deploy Portfolio Hub to Vercel

1. **Create GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio-hub.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `portfolio-hub` repository
   - Click "Deploy" (Vercel auto-detects Next.js)

3. **Done!** Your portfolio is live at `your-project.vercel.app`

### Optional: Custom Domain

In Vercel project settings:
1. Go to "Domains"
2. Add your custom domain (e.g., `yourname.com`)
3. Update DNS records as instructed
4. Wait for DNS propagation (~5-60 minutes)

## Next Steps

### For Your Portfolio Hub

- [ ] Customize colors in `tailwind.config.ts`
- [ ] Add your photo/avatar
- [ ] Create an About page
- [ ] Add project screenshots
- [ ] Set up analytics (Google Analytics or Vercel Analytics)

### For Individual Projects

- [ ] Follow DEPLOYMENT.md to deploy Policy Diff to Cloud Run
- [ ] Set up subdomain: `policydiff.yoursite.com`
- [ ] Create more projects!
- [ ] Add each project to `projects-config.json`

## Common Tasks

### Add a project thumbnail

1. Add image to `public/projects/project-id/thumbnail.png`
2. Update `projects-config.json`:
   ```json
   "thumbnail": "/projects/project-id/thumbnail.png"
   ```
3. Update `ProjectCard.tsx` to display image instead of placeholder

### Change color scheme

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: {
    // Change these values
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  },
}
```

### Add Google Analytics

1. Get your GA tracking ID
2. Create `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add Google Analytics script to `src/app/layout.tsx`

## Troubleshooting

### Port 3000 already in use

```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Styles not updating

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Getting Help

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Architecture**: See `README.md`

## Development Tips

1. **Keep it simple**: Start with 1-2 projects, add more later
2. **Test locally first**: Always test with `npm run build` before deploying
3. **Version control**: Commit frequently
4. **Screenshots**: Take high-quality screenshots of your projects
5. **Write good descriptions**: Focus on impact and technical challenges

Happy building! 🚀
