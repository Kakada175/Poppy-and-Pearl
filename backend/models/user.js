const db = require('../config/database');
const bcrypt = require('bcryptjs');

const User = {
    async create(userData) {
        const { username, email, password } = userData;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const result = await db.execute(sql, [username, email, hashedPassword]);
        
        return {
            id: result.lastInsertRowid,  // Changed from insertId
            username,
            email
        };
    },
    
    // Rest of the file stays EXACTLY the same!
    async findByEmail(email) {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const users = await db.query(sql, [email]);
        return users[0];
    },
    
    async findByUsername(username) {
        const sql = 'SELECT * FROM users WHERE username = ?';
        const users = await db.query(sql, [username]);
        return users[0];
    },
    
    async findById(id) {
        const sql = 'SELECT id, username, email, created_at FROM users WHERE id = ?';
        const users = await db.query(sql, [id]);
        return users[0];
    },
    
    async verifyPassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
};

module.exports = User;