# Deployment Guide

## Backend Deployment on Render

### 1. Prepare Backend Files
- Navigate to the `server` folder
- Files needed: `index.js`, `package.json`, `.env`

### 2. Deploy on Render
1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `sunbliss-backend`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

### 3. Environment Variables on Render
Add these environment variables in Render dashboard:
```
MONGODB_URI=mongodb+srv://gainacredb_db_user:3YYgnkLmpupDfD8s@cluster0.a8kyi3q.mongodb.net/sunbliss
NODE_ENV=production
```

### 4. Note Your Backend URL
After deployment, note your Render URL (e.g., `https://sunbliss-backend.onrender.com`)

---

## Frontend Deployment on Vercel

### 1. Update Environment Variables
1. Update `.env.production` with your actual Render backend URL:
```
VITE_API_URL=https://your-actual-render-url.onrender.com
```

### 2. Deploy on Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3. Environment Variables on Vercel
Add these environment variables in Vercel dashboard:
```
VITE_API_URL=https://your-render-backend-url.onrender.com
VITE_MONGODB_URI=mongodb+srv://gainacredb_db_user:3YYgnkLmpupDfD8s@cluster0.a8kyi3q.mongodb.net/sunbliss
```

### 4. Update CORS Settings
After getting your Vercel URL, update the backend CORS settings in `server/index.js`:
```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-vercel-url.vercel.app']
    : 'http://localhost:8080',
  credentials: true
}));
```

---

## Post-Deployment Steps

### 1. Test the Deployment
1. Visit your Vercel frontend URL
2. Try submitting the inquiry form
3. Check Render logs for backend activity

### 2. Update MongoDB Atlas Network Access
1. Go to MongoDB Atlas dashboard
2. Navigate to Network Access
3. Add `0.0.0.0/0` to allow connections from Render (or add Render's IP ranges)

### 3. Custom Domain (Optional)
- **Vercel**: Project Settings → Domains
- **Render**: Service Settings → Custom Domains

---

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Update CORS origins in backend
2. **Database Connection**: Check MongoDB Atlas network access
3. **Environment Variables**: Ensure all env vars are set correctly
4. **Build Failures**: Check build logs for missing dependencies

### Useful Commands:
```bash
# Test backend locally
cd server && npm start

# Test frontend locally
npm run dev

# Build frontend for production
npm run build
```

### Monitoring:
- **Render**: Check service logs in dashboard
- **Vercel**: Check function logs in dashboard
- **MongoDB**: Monitor connections in Atlas dashboard