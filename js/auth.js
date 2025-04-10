
// Authentication-related functionality

// User type constants
const VISITOR = 'visitor';
const ADMIN = 'admin';

// Local storage keys
const USERS_KEY = 'galleryX_users';
const CURRENT_USER_KEY = 'galleryX_current_user';

// Initialize default users if none exist
function initializeUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
        const defaultUsers = [
            {
                username: 'admin',
                password: 'admin123',
                email: 'admin@galleryx.com',
                name: 'Admin User',
                type: ADMIN
            },
            {
                username: 'visitor',
                password: 'visitor123',
                email: 'visitor@example.com',
                name: 'Test Visitor',
                type: VISITOR,
                hasTicket: false
            }
        ];
        
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
}

// Get all users from local storage
function getUsers() {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
}

// Save users to local storage
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Register a new user
function registerUser(name, email, username, password, type) {
    const users = getUsers();
    
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        return {
            success: false,
            message: 'Username already exists'
        };
    }
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
        return {
            success: false,
            message: 'Email already exists'
        };
    }
    
    // Create new user - admin users don't need tickets
    const newUser = {
        name,
        email,
        username,
        password,
        type,
        hasTicket: type === ADMIN ? true : false
    };
    
    users.push(newUser);
    saveUsers(users);
    
    return {
        success: true,
        message: 'Registration successful'
    };
}

// Login user
function loginUser(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Set current user in local storage
        const currentUser = {
            username: user.username,
            name: user.name,
            email: user.email,
            type: user.type,
            hasTicket: user.hasTicket || user.type === ADMIN // Admin users always have access
        };
        
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
        
        return {
            success: true,
            user: currentUser
        };
    }
    
    return {
        success: false,
        message: 'Invalid username or password'
    };
}

// Get current logged in user
function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
}

// Logout current user
function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

// Purchase ticket for current user
function purchaseTicket() {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    // Admin users don't need tickets
    if (currentUser.type === ADMIN) return true;
    
    // Update user in local storage
    const users = getUsers();
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    
    if (userIndex === -1) return false;
    
    users[userIndex].hasTicket = true;
    saveUsers(users);
    
    // Update current user
    currentUser.hasTicket = true;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    
    return true;
}

// Check if current user has a ticket
function hasTicket() {
    const currentUser = getCurrentUser();
    // Admin users always have access, visitors need tickets
    return currentUser ? (currentUser.hasTicket || currentUser.type === ADMIN) : false;
}

// Initialize default users
initializeUsers();
