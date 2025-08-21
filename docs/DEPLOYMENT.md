# LifeBalance Deployment Guide

## Overview

This guide provides comprehensive instructions for deploying the LifeBalance application to various hosting platforms and environments. LifeBalance is a React-based single-page application that can be deployed to any static hosting service.

## 🚀 Prerequisites

### Development Environment
- Node.js (version 16 or higher)
- npm (version 8 or higher)
- Git

### Build Requirements
- All dependencies installed (`npm install`)
- Environment variables configured (if needed)
- Build process working locally (`npm run build`)

## 🏗️ Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory if you need environment-specific variables:

```bash
# .env
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_ANALYTICS_ID=your-analytics-id
REACT_APP_VERSION=1.0.0
```

### 3. Build the Application
```bash
npm run build
```

This command will:
- Create an optimized production build
- Minify and bundle all assets
- Generate static files in the `build/` directory
- Optimize for performance and SEO

### 4. Verify Build Output
The build process creates a `build/` directory containing:
```
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── asset-manifest.json
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

## 🌐 Deployment Options

### 1. Netlify (Recommended)

#### Automatic Deployment
1. **Connect Repository**
   - Sign up/login to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: build
   Node version: 16 (or higher)
   ```

3. **Environment Variables** (if needed)
   - Go to Site settings > Environment variables
   - Add your environment variables

4. **Deploy**
   - Netlify will automatically deploy on every push to main branch
   - Custom domains can be configured in site settings

#### Manual Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=build
```

### 2. Vercel

#### Automatic Deployment
1. **Connect Repository**
   - Sign up/login to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   ```
   Framework Preset: Create React App
   Build Command: npm run build
   Output Directory: build
   Install Command: npm install
   ```

3. **Deploy**
   - Vercel will automatically deploy on every push
   - Custom domains available in project settings

#### Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

#### Setup
1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/lifebalance",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

#### S3 Setup
1. **Create S3 Bucket**
   - Create a new S3 bucket
   - Enable static website hosting
   - Configure bucket policy for public read access

2. **Upload Files**
   ```bash
   aws s3 sync build/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront** (optional)
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain and SSL

### 5. Firebase Hosting

#### Setup
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "build",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

## 🔧 Environment-Specific Configurations

### Development
```bash
npm start
```
- Runs on http://localhost:3000
- Hot reloading enabled
- Development tools available

### Staging
```bash
npm run build
npm run serve
```
- Production build served locally
- Test production behavior
- Verify all features work

### Production
```bash
npm run build
# Deploy build/ directory to hosting service
```

## 📱 Progressive Web App (PWA) Configuration

### 1. Update manifest.json
```json
{
  "short_name": "LifeBalance",
  "name": "LifeBalance - Life Assessment Tool",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#B79BFF",
  "background_color": "#13112F"
}
```

### 2. Service Worker (Optional)
For offline functionality, consider adding a service worker:
```javascript
// public/sw.js
const CACHE_NAME = 'lifebalance-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

## 🔒 Security Considerations

### 1. HTTPS
- Ensure all production deployments use HTTPS
- Configure SSL certificates (automatic with most hosting services)
- Redirect HTTP to HTTPS

### 2. Security Headers
Add security headers to your hosting configuration:

```bash
# Netlify (_headers file)
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
```

### 3. Environment Variables
- Never commit sensitive data to version control
- Use environment variables for configuration
- Validate all user inputs

## 📊 Performance Optimization

### 1. Build Optimization
- Enable gzip compression
- Optimize images and assets
- Minimize bundle size
- Enable caching headers

### 2. CDN Configuration
- Use CDN for static assets
- Configure proper cache headers
- Enable compression

### 3. Monitoring
- Set up performance monitoring
- Track Core Web Vitals
- Monitor error rates
- Set up uptime monitoring

## 🧪 Testing Deployment

### 1. Pre-deployment Checklist
- [ ] Build completes without errors
- [ ] All tests pass
- [ ] Performance metrics acceptable
- [ ] Accessibility requirements met
- [ ] Cross-browser compatibility verified

### 2. Post-deployment Testing
- [ ] Application loads correctly
- [ ] All features work as expected
- [ ] Performance meets requirements
- [ ] Mobile responsiveness verified
- [ ] Error handling works properly

### 3. Rollback Plan
- Keep previous deployment versions
- Document rollback procedures
- Test rollback process regularly

## 🔄 Continuous Deployment

### 1. GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

### 2. Automated Testing
- Run tests before deployment
- Check build quality
- Validate deployment success

## 📈 Monitoring and Analytics

### 1. Performance Monitoring
- **Lighthouse**: Regular performance audits
- **WebPageTest**: Performance testing
- **Real User Monitoring**: User experience metrics

### 2. Error Tracking
- **Sentry**: Error monitoring and reporting
- **LogRocket**: Session replay and debugging
- **Custom Error Boundaries**: React error handling

### 3. Analytics
- **Google Analytics**: User behavior tracking
- **Hotjar**: Heatmaps and user recordings
- **Custom Metrics**: Application-specific analytics

## 🆘 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Deployment Issues
- Check build output directory
- Verify hosting service configuration
- Check environment variables
- Review error logs

#### Performance Issues
- Analyze bundle size
- Check image optimization
- Verify caching configuration
- Monitor Core Web Vitals

### Support Resources
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Documentation](https://pages.github.com/)

## 📚 Additional Resources

- [Web Performance Best Practices](https://web.dev/performance/)
- [PWA Development Guide](https://web.dev/progressive-web-apps/)
- [Security Headers Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [Deployment Best Practices](https://web.dev/fast/)

---

## 🔄 Version History

- **v1.0.0**: Initial deployment guide
- **v0.2.0**: Added PWA and security sections
- **v0.1.0**: Basic deployment instructions

---

*This deployment guide is maintained by the LifeBalance development team.*
