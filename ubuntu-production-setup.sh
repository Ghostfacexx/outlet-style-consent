#!/bin/bash

# Ubuntu 24 Production Setup for Outlet Style Backend
echo "=== Ubuntu 24 Production Setup ==="

# 1. Generate JWT Secret
echo "Generating JWT secret..."
JWT_SECRET=$(openssl rand -hex 32)
echo "Generated JWT Secret: $JWT_SECRET"

# 2. Update backend .env with production values
cd /root/outlet-style-consent/backend
cat > .env << EOF
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=outlet_style
DB_USER=outlet_user
DB_PASSWORD=$(openssl rand -hex 16)
JWT_SECRET=$JWT_SECRET

# Stripe Configuration (UPDATE WITH YOUR KEYS)
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY_HERE

# Server Configuration
PORT=3001
NODE_ENV=production

# Security
CORS_ORIGIN=http://localhost:8080
EOF

echo "✅ Environment file created at /root/outlet-style-consent/backend/.env"
echo "⚠️  IMPORTANT: Update STRIPE_SECRET_KEY with your actual Stripe secret key"

# 3. Update PostgreSQL user password
DB_PASSWORD=$(grep DB_PASSWORD .env | cut -d '=' -f2)
sudo -u postgres psql << EOF
ALTER USER outlet_user WITH PASSWORD '$DB_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE outlet_style TO outlet_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO outlet_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO outlet_user;
EOF

echo "✅ PostgreSQL user password updated"

# 4. Install PM2 for production process management
npm install -g pm2

# 5. Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'outlet-backend',
    script: 'server.js',
    cwd: '/root/outlet-style-consent/backend',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: '/var/log/outlet-backend-error.log',
    out_file: '/var/log/outlet-backend-out.log',
    log_file: '/var/log/outlet-backend.log',
    time: true,
    watch: false,
    max_restarts: 10,
    min_uptime: '10s',
    max_memory_restart: '1G'
  }]
};
EOF

# 6. Create nginx configuration
sudo tee /etc/nginx/sites-available/outlet-style << 'EOF'
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Update with your domain

    # Frontend (React app)
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # CORS headers
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;
    }
}
EOF

# 7. Enable nginx site
sudo ln -sf /etc/nginx/sites-available/outlet-style /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 8. Create startup script
cat > /root/outlet-style-consent/start-production.sh << 'EOF'
#!/bin/bash
echo "Starting Outlet Style Production Server..."

# Start PostgreSQL if not running
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Start backend with PM2
cd /root/outlet-style-consent/backend
pm2 start ecosystem.config.js

# Start frontend build server (for production, you'd typically serve static files)
cd /root/outlet-style-consent
npm run build
npx serve -s dist -l 8080 &

echo "✅ Production servers started:"
echo "   - Backend API: http://localhost:3001"
echo "   - Frontend: http://localhost:8080"
echo "   - Nginx proxy: http://your-domain.com"
echo ""
echo "Monitor with:"
echo "   pm2 status"
echo "   pm2 logs outlet-backend"
EOF

chmod +x /root/outlet-style-consent/start-production.sh

# 9. Create log directories
sudo mkdir -p /var/log
sudo chown root:root /var/log/outlet-*

# 10. Install serve for frontend static hosting
npm install -g serve

echo ""
echo "=== Setup Complete ==="
echo "✅ Backend server.js already created"
echo "✅ Frontend components already updated"
echo "✅ JWT secret generated: $JWT_SECRET"
echo "✅ Environment configured for Ubuntu production"
echo "✅ PM2 process manager configured"
echo "✅ Nginx reverse proxy configured"
echo ""
echo "Next steps:"
echo "1. Update STRIPE_SECRET_KEY in /root/outlet-style-consent/backend/.env"
echo "2. Update domain in /etc/nginx/sites-available/outlet-style"
echo "3. Run: /root/outlet-style-consent/start-production.sh"
echo ""
echo "⚠️  SECURITY REMINDER:"
echo "   - Generated random DB password: $DB_PASSWORD"
echo "   - Generated JWT secret: $JWT_SECRET"
echo "   - These are stored in /root/outlet-style-consent/backend/.env"