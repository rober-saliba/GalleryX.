
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
    displayRoomsManagement();
}

// Display rooms management interface
function displayRoomsManagement() {
    const roomsContainer = document.getElementById('roomsManagementContainer');
    if (!roomsContainer) return;
    
    const galleryInfo = [
        { id: 'ancientArt', name: 'Ancient Art', description: 'Discover artifacts from ancient civilizations that shaped our world.' },
        { id: 'modernMasterpieces', name: 'Modern Masterpieces', description: 'Experience groundbreaking works that defined contemporary art movements.' },
        { id: 'contemporaryArt', name: 'Contemporary Art', description: 'Explore cutting-edge works from today\'s most innovative artists.' },
        { id: 'sculpture', name: 'Sculpture', description: 'Marvel at three-dimensional artworks from various periods and styles.' },
        { id: 'specialExhibitions', name: 'Special Exhibitions', description: 'Limited-time exhibits featuring unique collections and themes.' },
        { id: 'photography', name: 'Photography', description: 'Witness the world through the lenses of master photographers.' },
        { id: 'naturalHistory', name: 'Natural History', description: 'Explore the wonders of our natural world and its fascinating history.' },
        { id: 'interactiveExhibits', name: 'Interactive Exhibits', description: 'Engage with digital installations that bring art to life.' },
        { id: 'scienceTech', name: 'Science & Technology', description: 'Discover the intersection of art, science, and technological innovation.' }
    ];
    
    let html = `
        <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">Gallery Management</h3>
            <p class="text-gray-500 mb-4">Manage museum galleries and their descriptions</p>
            <button id="addNewGalleryBtn" class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Add New Gallery
            </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    `;
    
    galleryInfo.forEach(gallery => {
        html += `
            <div class="bg-white rounded-lg p-4 shadow-md">
                <h4 class="text-lg font-semibold">${gallery.name}</h4>
                <p class="text-gray-600 my-2">${gallery.description}</p>
                <div class="flex space-x-2 mt-4">
                    <button class="edit-gallery-btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" data-id="${gallery.id}">
                        Edit
                    </button>
                    <button class="view-artifacts-btn bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" data-id="${gallery.id}">
                        View Artifacts
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    roomsContainer.innerHTML = html;
    
    // Add event listeners
    document.querySelectorAll('.edit-gallery-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const galleryId = this.getAttribute('data-id');
            // Implement edit gallery functionality
            alert('Edit gallery feature will be implemented soon: ' + galleryId);
        });
    });
    
    document.querySelectorAll('.view-artifacts-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const galleryId = this.getAttribute('data-id');
            // Show artifacts for this gallery
            alert('View artifacts feature will be implemented soon: ' + galleryId);
        });
    });
    
    document.getElementById('addNewGalleryBtn')?.addEventListener('click', function() {
        // Add new gallery functionality
        alert('Add new gallery feature will be implemented soon');
    });
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
