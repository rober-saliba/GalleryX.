const VISITOR = 'visitor';
const ADMIN = 'admin';
const USERS_KEY = 'galleryX_users';
const CURRENT_USER_KEY = 'galleryX_current_user';

// Initialize users
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

function getUsers() {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function registerUser(name, email, username, password, type) {
    const users = getUsers();

    if (users.some(user => user.username === username)) {
        return { success: false, message: 'Username already exists' };
    }

    if (users.some(user => user.email === email)) {
        return { success: false, message: 'Email already exists' };
    }

    const newUser = {
        name,
        email,
        username,
        password,
        type,
        hasTicket: type === ADMIN
    };

    users.push(newUser);
    saveUsers(users);

    return { success: true, message: 'Registration successful' };
}

function loginUser(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const currentUser = {
            username: user.username,
            name: user.name,
            email: user.email,
            type: user.type,
            hasTicket: user.hasTicket || user.type === ADMIN
        };

        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));

        return { success: true, user: currentUser };
    }

    return { success: false, message: 'Invalid username or password' };
}

function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

function purchaseTicket() {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;

    if (currentUser.type === ADMIN) return true;

    const users = getUsers();
    const index = users.findIndex(u => u.username === currentUser.username);
    if (index === -1) return false;

    users[index].hasTicket = true;
    saveUsers(users);

    currentUser.hasTicket = true;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));

    return true;
}

function hasTicket() {
    const currentUser = getCurrentUser();
    return currentUser ? (currentUser.hasTicket || currentUser.type === ADMIN) : false;
}

initializeUsers();
