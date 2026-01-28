# Portfolio Hub

Modern portfolio website showcasing full-stack and AI/ML projects. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Architecture

This is the **central hub** for a multi-repo portfolio setup:

```
~/Projects/
├── portfolio-hub/           # This repo (main website)
├── policy-diff/             # Separate repo/project
├── project-name-2/          # Separate repo/project
└── ...
```

Each project has its own repository and deployment. This hub serves as the showcase and navigation layer.

## Project Structure

```
portfolio-hub/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   ├── projects/        # Projects listing & detail pages
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable components
│   │   └── ProjectCard.tsx  # Project card component
│   └── lib/                 # Utilities
│       └── projects.ts      # Project data utilities
├── projects-config.json     # Central project registry
├── public/                  # Static assets
└── [config files]
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Adding a New Project

1. **Create the project repository** (separate folder/repo):
   ```bash
   cd ~/Projects
   mkdir my-new-project
   cd my-new-project
   git init
   # ... build your project
   ```

2. **Add project to `projects-config.json`**:
   ```json
   {
     "id": "my-project",
     "name": "My Project",
     "tagline": "Short description",
     "description": "Longer description...",
     "status": "production",
     "featured": true,
     "techStack": ["React", "Python", "PostgreSQL"],
     "categories": ["Web App", "API"],
     "links": {
       "github": "https://github.com/yourusername/my-project",
       "live": "https://myproject.yoursite.com"
     },
     "deployment": {
       "type": "cloud-run",
       "subdomain": "myproject",
       "cost": "pay-per-use"
     },
     "highlights": [
       "Feature 1",
       "Feature 2"
     ]
   }
   ```

3. **Deploy the project** (see DEPLOYMENT.md)

4. **Test locally**: Your project will now appear on the portfolio

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended) or static export

## Development Commands

```bash
# Development
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically on push

### Option 2: Static Export

```bash
# Add to next.config.js:
# output: 'export'

npm run build
# Deploy the 'out' directory to any static host
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Configuration

### Projects Configuration

All projects are defined in `projects-config.json`. This file serves as the single source of truth for:
- Project metadata
- Links (GitHub, live demos)
- Tech stack
- Deployment information

### Environment Variables

Create `.env.local` for local development:

```bash
# No required environment variables yet
# Add as needed for analytics, APIs, etc.
```

## Project Status

- [x] Portfolio hub scaffolding
- [x] Project listing and detail pages
- [x] Responsive design
- [ ] Case study MDX support
- [ ] Project screenshots/thumbnails
- [ ] Analytics integration
- [ ] Contact form

## License

MIT
