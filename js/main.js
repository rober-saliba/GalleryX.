// Main application functionality

// Initialize modals and UI interactions
function initializeUI() {
    // Login button
    document.getElementById('loginBtn').addEventListener('click', function () {
        document.getElementById('loginModal').classList.remove('hidden');
    });

    // Close login modal
    document.getElementById('closeLoginBtn').addEventListener('click', function () {
        document.getElementById('loginModal').classList.add('hidden');
    });

    // Switch between visitor and admin login
    document.getElementById('visitorLoginBtn').addEventListener('click', function () {
        this.classList.add('bg-black', 'text-white');
        this.classList.remove('bg-gray-200', 'text-gray-800');
        document.getElementById('adminLoginBtn').classList.remove('bg-black', 'text-white');
        document.getElementById('adminLoginBtn').classList.add('bg-gray-200', 'text-gray-800');
    });

    document.getElementById('adminLoginBtn').addEventListener('click', function () {
        this.classList.add('bg-black', 'text-white');
        this.classList.remove('bg-gray-200', 'text-gray-800');
        document.getElementById('visitorLoginBtn').classList.remove('bg-black', 'text-white');
        document.getElementById('visitorLoginBtn').classList.add('bg-gray-200', 'text-gray-800');
    });

    // Register button
    document.getElementById('registerBtn').addEventListener('click', function () {
        document.getElementById('loginModal').classList.add('hidden');
        document.getElementById('registerModal').classList.remove('hidden');
    });

    // Close register modal
    document.getElementById('closeRegisterBtn').addEventListener('click', function () {
        document.getElementById('registerModal').classList.add('hidden');
    });

    // Back to login from register
    document.getElementById('backToLoginBtn').addEventListener('click', function () {
        document.getElementById('registerModal').classList.add('hidden');
        document.getElementById('loginModal').classList.remove('hidden');
    });

    // Switch between visitor and admin register
    document.getElementById('visitorRegisterBtn').addEventListener('click', function () {
        this.classList.add('bg-black', 'text-white');
        this.classList.remove('bg-gray-200', 'text-gray-800');
        document.getElementById('adminRegisterBtn').classList.remove('bg-black', 'text-white');
        document.getElementById('adminRegisterBtn').classList.add('bg-gray-200', 'text-gray-800');
    });

    document.getElementById('adminRegisterBtn').addEventListener('click', function () {
        this.classList.add('bg-black', 'text-white');
        this.classList.remove('bg-gray-200', 'text-gray-800');
        document.getElementById('visitorRegisterBtn').classList.remove('bg-black', 'text-white');
        document.getElementById('visitorRegisterBtn').classList.add('bg-gray-200', 'text-gray-800');
    });

    // Close ticket purchase modal
    document.getElementById('closeTicketBtn').addEventListener('click', function () {
        document.getElementById('ticketModal').classList.add('hidden');
    });

    // Close start tour modal
    document.getElementById('closeStartTourBtn').addEventListener('click', function () {
        document.getElementById('startTourModal').classList.add('hidden');
    });

    // Login form submission with role-based validation
    document.getElementById('loginSubmitBtn').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginType = document.getElementById('adminLoginBtn').classList.contains('bg-black') ? 'admin' : 'visitor';

        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        const result = loginUser(username, password);

        if (result.success) {
            if (result.user.type !== loginType) {
                alert(`You are not logged in as a ${loginType}.`);
                return;
            }

            document.getElementById('loginModal').classList.add('hidden');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';

            updateLoginStatus();

            if (result.user.type === 'admin') {
                showAdminDashboard();
            } else {
                if (result.user.hasTicket) {
                    showStartTour();
                } else {
                    showTicketPurchase();
                }
            }
        } else {
            alert(result.message || 'Login failed. Please try again.');
        }
    });

    // ✅ Registration form submission (Fixed)
    document.getElementById('registerSubmitBtn').addEventListener('click', function () {
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;

        const type = document.getElementById('visitorRegisterBtn').classList.contains('bg-black') ? 'visitor' : 'admin';

        if (!name || !email || !username || !password) {
            alert('Please fill in all fields');
            return;
        }

        const result = registerUser(name, email, username, password, type);

        if (result.success) {
            const loginResult = loginUser(username, password);
            if (loginResult.success) {
                const currentUser = loginResult.user;
                document.getElementById('registerModal').classList.add('hidden');
                updateLoginStatus();

                if (currentUser.type === 'admin') {
                    showAdminDashboard();
                } else {
                    showTicketPurchase();
                }

                // Clear fields
                document.getElementById('registerName').value = '';
                document.getElementById('registerEmail').value = '';
                document.getElementById('registerUsername').value = '';
                document.getElementById('registerPassword').value = '';
            } else {
                alert('Registration succeeded but auto-login failed.');
            }
        } else {
            alert(result.message || 'Registration failed. Please try again.');
        }
    });

    document.getElementById('purchaseBtn').addEventListener('click', function () {
        if (purchaseTicket()) {
            document.getElementById('ticketModal').classList.add('hidden');
            showStartTour();
        } else {
            alert('There was a problem purchasing your ticket. Please try again.');
        }
    });

    document.getElementById('exploreBtn').addEventListener('click', function () {
        const currentUser = getCurrentUser();

        if (currentUser) {
            if (currentUser.type === 'admin') {
                showAdminDashboard();
            } else if (currentUser.hasTicket) {
                showStartTour();
            } else {
                showTicketPurchase();
            }
        } else {
            document.getElementById('loginModal').classList.remove('hidden');
        }
    });

    document.getElementById('ctaLoginBtn').addEventListener('click', function () {
        const currentUser = getCurrentUser();

        if (currentUser) {
            if (currentUser.type === 'admin') {
                showAdminDashboard();
            } else if (currentUser.hasTicket) {
                showStartTour();
            } else {
                showTicketPurchase();
            }
        } else {
            document.getElementById('loginModal').classList.remove('hidden');
        }
    });
}

function showTicketPurchase() {
    document.getElementById('ticketModal').classList.remove('hidden');
}

function showStartTour() {
    document.getElementById('startTourModal').classList.remove('hidden');
}

function updateLoginStatus() {
    const currentUser = getCurrentUser();

    if (currentUser) {
        document.getElementById('loginBtn').textContent = 'Logout';
        document.getElementById('loginBtn').addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            logoutUser();
            updateLoginStatus();
            location.reload();
        }, { once: true });
    } else {
        document.getElementById('loginBtn').textContent = 'Login';
        document.getElementById('loginBtn').addEventListener('click', function () {
            document.getElementById('loginModal').classList.remove('hidden');
        }, { once: true });
    }
}

function checkAutologin() {
    const currentUser = getCurrentUser();

    if (currentUser) {
        updateLoginStatus();

        if (currentUser.type === 'admin') {
            showAdminDashboard();
        } else if (currentUser.hasTicket) {
            document.getElementById('startTourBtn')?.classList.remove('hidden');
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initializeUI();
    checkAutologin();
});
