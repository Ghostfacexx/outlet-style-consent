#!/bin/bash

# Quick Ubuntu Production Deployment Script
echo "🚀 Starting Ubuntu Production Deployment..."

# Run the full setup
chmod +x ubuntu-production-setup.sh
./ubuntu-production-setup.sh

echo ""
echo "📝 Manual steps required:"
echo ""
echo "1. ADD YOUR STRIPE SECRET KEY:"
echo "   nano /root/outlet-style-consent/backend/.env"
echo "   Replace: STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY_HERE"
echo "   With your actual Stripe secret key from: https://dashboard.stripe.com/apikeys"
echo ""
echo "2. UPDATE DOMAIN (if needed):"
echo "   nano /etc/nginx/sites-available/outlet-style"
echo "   Replace 'your-domain.com' with your actual domain"
echo ""
echo "3. START PRODUCTION SERVERS:"
echo "   /root/outlet-style-consent/start-production.sh"
echo ""
echo "4. VERIFY EVERYTHING IS RUNNING:"
echo "   curl http://localhost:3001/health"
echo "   pm2 status"
echo "   pm2 logs outlet-backend"
echo ""
echo "🔥 Your Ubuntu production setup is ready!"
echo "Backend API will be available at: http://your-server-ip:3001"
echo "Frontend will be available at: http://your-server-ip:8080"
echo ""
echo "🔒 Security Notes:"
echo "- All sensitive payment data logging has been removed"
echo "- JWT authentication is properly configured"
echo "- Database passwords are randomly generated"
echo "- CORS is configured for security"