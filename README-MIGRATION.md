# Supabase to Local PostgreSQL Migration Guide

This project has been migrated from Supabase to a local PostgreSQL + Node.js backend setup.

## What Was Changed

### Backend
- **Replaced Supabase Edge Functions** with Express.js API
- **Replaced Supabase Auth** with JWT-based authentication
- **Replaced Supabase Database** with local PostgreSQL
- **Removed sensitive data logging** - no more credit card or personal info stored

### Frontend
- **Removed Supabase client** dependency
- **Added local API client** (`src/lib/api.ts`)
- **Added Auth context** for session management
- **Updated payment flows** to use local backend

### Security Improvements
- ✅ **No sensitive data logging** (credit card info, names, etc.)
- ✅ **Proper authentication** flow with JWT tokens
- ✅ **Input validation** on both client and server
- ✅ **CORS protection** configured

## Quick Start

1. **Start the backend:**
   ```bash
   cd /root/outlet-style-consent/backend
   chmod +x ../start.sh
   ../start.sh
   ```

2. **Start the frontend:**
   ```bash
   cd /root/outlet-style-consent
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3001
   - Health check: http://localhost:3001/health

## API Endpoints

### Authentication
- `POST /auth/register` - Create new user account
- `POST /auth/login` - User login
- `GET /auth/user` - Get current user info
- `POST /auth/logout` - User logout

### Payments
- `POST /payment/create-payment` - Create Stripe checkout session
- `POST /payment/log` - Log payment events (non-sensitive data only)
- `GET /payment/logs` - Get user's payment history

## Environment Configuration

Update your `backend/.env` file with:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=outlet_style
DB_USER=outlet_user
DB_PASSWORD=your_password_here
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=your_stripe_key_here
PORT=3001
```

## Database Schema

The local PostgreSQL database includes:

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Payment Logs Table (Secure)
```sql
CREATE TABLE payment_form_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  session_id VARCHAR(255),
  product_name TEXT,
  amount INTEGER,
  currency VARCHAR(10) DEFAULT 'usd',
  otp_verified BOOLEAN DEFAULT false,
  form_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Testing

1. **Test authentication:**
   - Visit http://localhost:8080/auth
   - Create an account or login
   - Verify JWT token is stored in localStorage

2. **Test payments:**
   - Add items to cart
   - Go through payment flow
   - Verify Stripe checkout opens in new tab

3. **Test API:**
   ```bash
   curl http://localhost:3001/health
   ```

## Production Deployment

For production deployment:

1. **Update environment variables** for production
2. **Configure nginx** reverse proxy
3. **Set up SSL certificates**
4. **Configure systemd service** (already created)
5. **Set up database backups**

## Troubleshooting

- **Backend won't start:** Check PostgreSQL is running and database exists
- **Frontend API errors:** Verify backend is running on port 3001
- **Authentication issues:** Check JWT_SECRET is set and consistent
- **Payment errors:** Verify STRIPE_SECRET_KEY is configured

## Security Notes

- JWT tokens are stored in localStorage (consider httpOnly cookies for production)
- All sensitive payment data logging has been removed
- Rate limiting should be added for production
- Consider implementing refresh token rotation