// Base URL for API
const API_BASE_URL = 'http://localhost:5000/api';

// Get modal elements
const authModal = new bootstrap.Modal(document.getElementById('authModal'));
const showLoginBtn = document.getElementById('show-login');
const showSignupBtn = document.getElementById('show-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const authMsg = document.getElementById('auth-msg');

// Toggle between login and signup forms
showLoginBtn.addEventListener('click', () => {
    showLoginBtn.classList.add('btn-komi-login');
    showLoginBtn.classList.remove('btn-komi-signup');
    showSignupBtn.classList.remove('btn-komi-login');
    showSignupBtn.classList.add('btn-komi-signup');
    loginForm.classList.remove('d-none');
    signupForm.classList.add('d-none');
    authMsg.textContent = '';
});

showSignupBtn.addEventListener('click', () => {
    showSignupBtn.classList.add('btn-komi-login');
    showSignupBtn.classList.remove('btn-komi-signup');
    showLoginBtn.classList.remove('btn-komi-login');
    showLoginBtn.classList.add('btn-komi-signup');
    signupForm.classList.remove('d-none');
    loginForm.classList.add('d-none');
    authMsg.textContent = '';
});

// Handle Signup
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            authMsg.innerHTML = `<span class="text-success">✅ ${data.message}</span>`;
            
            // Store user data and token
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            
            // Update UI
            updateAuthUI(data.user);
            
            // Close modal after 2 seconds
            setTimeout(() => {
                authModal.hide();
                // Reset forms
                signupForm.reset();
                loginForm.reset();
                authMsg.textContent = '';
            }, 2000);
        } else {
            authMsg.innerHTML = `<span class="text-danger">❌ ${data.message}</span>`;
        }
    } catch (error) {
        console.error('Signup error:', error);
        authMsg.innerHTML = '<span class="text-danger">❌ Network error. Please try again.</span>';
    }
});

// Handle Login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            authMsg.innerHTML = `<span class="text-success">✅ ${data.message}</span>`;
            
            // Store user data and token
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            
            // Update UI
            updateAuthUI(data.user);
            
            // Close modal after 2 seconds
            setTimeout(() => {
                authModal.hide();
                // Reset forms
                loginForm.reset();
                signupForm.reset();
                authMsg.textContent = '';
            }, 2000);
        } else {
            authMsg.innerHTML = `<span class="text-danger">❌ ${data.message}</span>`;
        }
    } catch (error) {
        console.error('Login error:', error);
        authMsg.innerHTML = '<span class="text-danger">❌ Network error. Please try again.</span>';
    }
});

// Function to update UI based on authentication status
function updateAuthUI(user) {
    const authSection = document.getElementById('auth-section');
    if (authSection) {
        authSection.innerHTML = `
            <div class="dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    <i class="fas fa-user"></i> ${user.username}
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" id="view-profile">Profile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" id="logout-btn">Logout</a></li>
                </ul>
            </div>
        `;
        
        // Add logout functionality
        document.getElementById('logout-btn')?.addEventListener('click', logout);
    }
    
    // Update cart and other authenticated features
    updateCartBadge();
}

// Function to check authentication status on page load
function checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
        // Verify token with backend
        fetch(`${API_BASE_URL}/auth/verify`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                updateAuthUI(JSON.parse(user));
            } else {
                logout();
            }
        })
        .catch(() => {
            logout();
        });
    }
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    // Reset auth section
    const authSection = document.getElementById('auth-section');
    if (authSection) {
        authSection.innerHTML = `
            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#authModal">
                <i class="fas fa-user"></i>
            </a>
        `;
    }
    
    // Clear cart badge
    updateCartBadge(0);
    
    // Optional: Redirect to home page
    // window.location.href = 'index.html';
}

// Function to update cart badge (you'll need to implement this based on your cart system)
function updateCartBadge(count = null) {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        if (count !== null) {
            cartBadge.textContent = count;
            cartBadge.style.display = count > 0 ? 'inline' : 'none';
        } else {
            // Fetch cart count from backend if authenticated
            const token = localStorage.getItem('token');
            if (token) {
                // Make API call to get cart count
                // Implement this based on your cart API
            }
        }
    }
}

// Initialize authentication check on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
    
    // Add logout event listener if already logged in
    document.getElementById('logout-btn')?.addEventListener('click', logout);
});