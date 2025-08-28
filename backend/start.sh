#!/bin/bash

# Start script for Outlet Style backend
echo "Starting Outlet Style Backend..."

# Check if PostgreSQL is running
if ! systemctl is-active --quiet postgresql; then
    echo "Starting PostgreSQL..."
    sudo systemctl start postgresql
fi

# Check if database exists
if ! sudo -u postgres psql -lqt | cut -d \| -f 1 | grep -qw outlet_style; then
    echo "Database does not exist. Please run the setup commands first."
    exit 1
fi

# Change to backend directory
cd /root/outlet-style-consent/backend

# Start the backend server
echo "Starting backend server on port 3001..."
npm start