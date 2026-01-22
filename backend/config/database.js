const Database = require('better-sqlite3');
const path = require('path');

// Create SQLite database file in backend folder
const db = new Database(path.join(__dirname, 'poppy_pearl.db'));

// Create users table
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

module.exports = {
    query: (sql, params = []) => {
        const stmt = db.prepare(sql);
        return stmt.all(...params);
    },
    
    execute: (sql, params = []) => {
        const stmt = db.prepare(sql);
        return stmt.run(...params);
    },
    
    testConnection: async () => {
        console.log('✅ SQLite database connected!');
        return true;
    }
};