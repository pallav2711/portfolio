# 🚀 Deployment Guide

## Environment Variables Setup

### Client (.env)
```env
REACT_APP_API_URL=http://localhost:5000  # Local
# REACT_APP_API_URL=https://your-backend.herokuapp.com  # Production
```

### Server (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio  # Local
# MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio  # Production
```

## Local Development

1. **Install dependencies:**
```bash
npm run install-all
```

2. **Start MongoDB:**
```bash
mongod
```

3. **Start backend:**
```bash
cd server
npm start
```

4. **Start frontend (new terminal):**
```bash
cd client
npm start
```

5. **Access:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Messages: http://localhost:5000/api/contact

## Production Deployment

### Option 1: Vercel (Frontend) + Render/Railway (Backend)

#### Deploy Backend:

1. **Render.com:**
   - Create account at https://render.com
   - Click "New +" → "Web Service"
   - Connect GitHub repo
   - Settings:
     - Root Directory: `server`
     - Build Command: `npm install`
     - Start Command: `npm start`
   - Add Environment Variables:
     ```
     MONGODB_URI=your-mongodb-atlas-uri
     PORT=5000
     ```
   - Deploy!
   - Copy your backend URL (e.g., `https://portfolio-api.onrender.com`)

2. **MongoDB Atlas:**
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Create database user
   - Whitelist IP: 0.0.0.0/0 (allow all)
   - Get connection string
   - Replace in Render environment variables

#### Deploy Frontend:

1. **Vercel:**
   - Install Vercel CLI: `npm i -g vercel`
   - Go to client folder: `cd client`
   - Run: `vercel`
   - Follow prompts
   - Add environment variable in Vercel dashboard:
     ```
     REACT_APP_API_URL=https://your-backend-url.onrender.com
     ```
   - Redeploy: `vercel --prod`

### Option 2: Netlify (Frontend) + Heroku (Backend)

#### Deploy Backend to Heroku:

```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-portfolio-api

# Add MongoDB Atlas URI
heroku config:set MONGODB_URI=your-mongodb-atlas-uri

# Deploy
cd server
git init
git add .
git commit -m "Deploy backend"
heroku git:remote -a your-portfolio-api
git push heroku main
```

#### Deploy Frontend to Netlify:

1. Build frontend:
```bash
cd client
npm run build
```

2. Deploy to Netlify:
   - Drag `build` folder to https://app.netlify.com/drop
   - Or use Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

3. Add environment variable in Netlify:
   - Site settings → Environment variables
   - Add: `REACT_APP_API_URL=https://your-heroku-app.herokuapp.com`

### Option 3: Full Stack on Vercel

Create `vercel.json` in root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "server/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "client/$1"
    }
  ]
}
```

## Environment Variables for Production

### Frontend (Vercel/Netlify):
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (Render/Heroku):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=production
```

## Post-Deployment Checklist

- [ ] Backend is accessible (test: `https://your-backend.com/api/health`)
- [ ] Frontend loads correctly
- [ ] Contact form works (test submission)
- [ ] Check MongoDB for saved messages
- [ ] All social links work
- [ ] Resume download works
- [ ] Mobile responsive
- [ ] HTTPS enabled

## Troubleshooting

### Contact form not working:
1. Check CORS settings in backend
2. Verify REACT_APP_API_URL is correct
3. Check browser console for errors
4. Verify MongoDB connection

### Backend not connecting to MongoDB:
1. Check MongoDB Atlas IP whitelist
2. Verify connection string format
3. Check database user permissions

### Frontend not loading:
1. Check build logs
2. Verify environment variables
3. Clear browser cache

## Custom Domain (Optional)

### Vercel:
1. Go to project settings
2. Add custom domain
3. Update DNS records

### Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS

## Monitoring

- **Backend logs:** Check Render/Heroku dashboard
- **Frontend logs:** Check Vercel/Netlify dashboard
- **Database:** MongoDB Atlas dashboard
- **Messages:** Visit `your-backend-url.com/api/contact`

---

**Your portfolio is ready for the world!** 🌍
