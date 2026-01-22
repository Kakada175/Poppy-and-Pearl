const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Health check route
app.get('/api/health', async (req, res) => {
    const dbConnected = await db.testConnection();
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: dbConnected ? 'connected' : 'disconnected'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start server
const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        // Test database connection
        const dbConnected = await db.testConnection();
        
        if (!dbConnected) {
            console.log('⚠️  Starting server without database connection...');
        }
        
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`📁 Database: ${process.env.DB_NAME}`);
            console.log(`🔐 Auth API: http://localhost:${PORT}/api/auth`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
}

startServer();