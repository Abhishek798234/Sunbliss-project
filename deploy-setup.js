#!/usr/bin/env node

console.log('🚀 SunBliss Deployment Setup\n');

console.log('📋 Pre-deployment Checklist:');
console.log('✅ Backend files prepared in /server folder');
console.log('✅ Frontend configured with environment variables');
console.log('✅ MongoDB Atlas network access configured');
console.log('✅ Vercel.json configuration created');

console.log('\n🔧 Next Steps:');
console.log('1. Deploy Backend to Render:');
console.log('   - Go to render.com');
console.log('   - Create new Web Service');
console.log('   - Connect GitHub repo');
console.log('   - Set root directory to "server"');
console.log('   - Add environment variables');

console.log('\n2. Deploy Frontend to Vercel:');
console.log('   - Go to vercel.com');
console.log('   - Import GitHub repository');
console.log('   - Framework will auto-detect as Vite');
console.log('   - Add environment variables');

console.log('\n3. Update URLs:');
console.log('   - Update .env.production with Render backend URL');
console.log('   - Update server CORS with Vercel frontend URL');
console.log('   - Redeploy both services');

console.log('\n📚 See DEPLOYMENT.md for detailed instructions');
console.log('🎉 Happy deploying!');