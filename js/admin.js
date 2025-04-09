
// Admin dashboard functionality

// Local storage keys for analytics data
const VISITOR_STATS_KEY = 'galleryX_visitor_stats';
const STAFF_KEY = 'galleryX_staff';

// Initialize default admin data if none exists
function initializeAdminData() {
    // Initialize visitor statistics
    if (!localStorage.getItem(VISITOR_STATS_KEY)) {
        const defaultStats = {
            daily: [
                { date: '2023-10-25', count: 356 },
                { date: '2023-10-24', count: 318 },
                { date: '2023-10-23', count: 287 }
            ],
            weekly: [
                { week: 'Week 4', count: 2145 },
                { week: 'Week 3', count: 1987 },
                { week: 'Week 2', count: 1876 },
                { week: 'Week 1', count: 1654 }
            ],
            monthly: [
                { month: 'Oct 2023', count: 8972 },
                { month: 'Sep 2023', count: 7802 },
                { month: 'Aug 2023', count: 8124 }
            ],
            popular_galleries: [
                { gallery: 'Modern Masterpieces', views: 1245, avgTime: 18.5, trend: 12 },
                { gallery: 'Ancient Art', views: 987, avgTime: 15.2, trend: 8 },
                { gallery: 'Interactive Exhibits', views: 842, avgTime: 22.7, trend: 15 },
                { gallery: 'Photography', views: 756, avgTime: 12.3, trend: -3 }
            ]
        };
        
        localStorage.setItem(VISITOR_STATS_KEY, JSON.stringify(defaultStats));
    }
    
    // Initialize staff data
    if (!localStorage.getItem(STAFF_KEY)) {
        const defaultStaff = [
            {
                id: 1,
                name: 'Sarah Johnson',
                position: 'Museum Director',
                department: 'Administration',
                email: 'sjohnson@museum.com',
                phone: '555-0101'
            },
            {
                id: 2,
                name: 'David Kim',
                position: 'Curator',
                department: 'Exhibits',
                email: 'dkim@museum.com',
                phone: '555-0102'
            },
            {
                id: 3,
                name: 'Maria Rodriguez',
                position: 'Education Coordinator',
                department: 'Education',
                email: 'mrodriguez@museum.com',
                phone: '555-0103'
            },
            {
                id: 4,
                name: 'James Wilson',
                position: 'Security Manager',
                department: 'Security',
                email: 'jwilson@museum.com',
                phone: '555-0104'
            }
        ];
        
        localStorage.setItem(STAFF_KEY, JSON.stringify(defaultStaff));
    }
}

// Show admin dashboard (if user is admin)
function showAdminDashboard() {
    const currentUser = getCurrentUser();
    
    if (!currentUser || currentUser.type !== ADMIN) {
        console.error('Unauthorized access to admin dashboard');
        return;
    }
    
    document.getElementById('adminDashboardModal').classList.remove('hidden');
    showDashboardPanel();
}

// Hide admin dashboard
function hideAdminDashboard() {
    document.getElementById('adminDashboardModal').classList.add('hidden');
}

// Show dashboard panel
function showDashboardPanel() {
    hideAllPanels();
    document.getElementById('dashboardPanel').classList.remove('hidden');
    setActiveNavButton('dashboardNavBtn');
}

// Show artifacts management panel
function showArtifactsPanel() {
    hideAllPanels();
    document.getElementById('artifactsPanel').classList.remove('hidden');
    setActiveNavButton('artifactsNavBtn');
}

// Show rooms management panel
function showRoomsPanel() {
    hideAllPanels();
    document.getElementById('roomsPanel').classList.remove('hidden');
    setActiveNavButton('roomsNavBtn');
}

// Show visitor analytics panel
function showVisitorsPanel() {
    hideAllPanels();
    document.getElementById('visitorsPanel').classList.remove('hidden');
    setActiveNavButton('visitorsNavBtn');
}

// Show staff directory panel
function showStaffPanel() {
    hideAllPanels();
    document.getElementById('staffPanel').classList.remove('hidden');
    setActiveNavButton('staffNavBtn');
}

// Hide all admin panels
function hideAllPanels() {
    const panels = document.querySelectorAll('.admin-panel');
    panels.forEach(panel => panel.classList.add('hidden'));
}

// Set active navigation button
function setActiveNavButton(buttonId) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.classList.add('bg-gray-700');
        } else {
            button.classList.remove('bg-gray-700');
        }
    });
}

// Initialize admin dashboard
function initializeAdminDashboard() {
    // Initialize admin data
    initializeAdminData();
    
    // Set up event listeners for navigation
    document.getElementById('dashboardNavBtn').addEventListener('click', showDashboardPanel);
    document.getElementById('artifactsNavBtn').addEventListener('click', showArtifactsPanel);
    document.getElementById('roomsNavBtn').addEventListener('click', showRoomsPanel);
    document.getElementById('visitorsNavBtn').addEventListener('click', showVisitorsPanel);
    document.getElementById('staffNavBtn').addEventListener('click', showStaffPanel);
    
    // Set up logout button
    document.getElementById('adminLogoutBtn').addEventListener('click', function() {
        logoutUser();
        hideAdminDashboard();
        updateLoginStatus();
    });
}

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeAdminDashboard);
