
// Virtual tour functionality

// Display the museum map
function openMap() {
    document.getElementById('mapModal').classList.remove('hidden');
}

// Close the museum map
function closeMap() {
    document.getElementById('mapModal').classList.add('hidden');
}

// Open a specific gallery
function openGallery(galleryId) {
    const gallery = getGallery(galleryId);
    
    if (!gallery) {
        alert('Gallery not found.');
        return;
    }
    
    // Set gallery title
    document.getElementById('galleryTitle').textContent = gallery.name;
    
    // Clear existing content
    const galleryContent = document.getElementById('galleryContent');
    galleryContent.innerHTML = '';
    
    // Add artifacts to the gallery view
    gallery.artifacts.forEach(artifact => {
        const artifactCard = document.createElement('div');
        artifactCard.className = 'bg-white rounded-lg overflow-hidden shadow-lg';
        artifactCard.innerHTML = `
            <img src="${artifact.image}" alt="${artifact.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${artifact.title}</h3>
                <p class="text-gray-600 mb-4">${artifact.description.substring(0, 100)}...</p>
                <button class="view-artifact-btn bg-black text-white px-4 py-2 rounded hover:bg-gray-800" data-gallery-id="${galleryId}" data-artifact-id="${artifact.id}">View Details</button>
            </div>
        `;
        galleryContent.appendChild(artifactCard);
    });
    
    // Add event listeners to the view detail buttons
    document.querySelectorAll('.view-artifact-btn').forEach(button => {
        button.addEventListener('click', function() {
            const galleryId = this.getAttribute('data-gallery-id');
            const artifactId = this.getAttribute('data-artifact-id');
            openArtifact(galleryId, artifactId);
        });
    });
    
    // Hide the map and show the gallery
    document.getElementById('mapModal').classList.add('hidden');
    document.getElementById('galleryViewModal').classList.remove('hidden');
}

// Close the gallery view
function closeGallery() {
    document.getElementById('galleryViewModal').classList.add('hidden');
}

// Open a specific artifact
function openArtifact(galleryId, artifactId) {
    const artifact = getArtifact(galleryId, artifactId);
    
    if (!artifact) {
        alert('Artifact not found.');
        return;
    }
    
    // Set artifact details
    document.getElementById('artifactTitle').textContent = artifact.title;
    document.getElementById('artifactImage').src = artifact.image;
    document.getElementById('artifactImage').alt = artifact.title;
    document.getElementById('artifactDescription').textContent = artifact.description;
    document.getElementById('artifactInfo').textContent = artifact.additionalInfo;
    
    const audioElement = document.getElementById('artifactAudio');
    audioElement.innerHTML = `<source src="${artifact.audioSrc}" type="audio/mpeg">`;
    audioElement.load();
    
    // Store current gallery ID for the back button
    document.getElementById('backToGalleryBtn').setAttribute('data-gallery-id', galleryId);
    
    // Hide the gallery view and show the artifact detail
    document.getElementById('galleryViewModal').classList.add('hidden');
    document.getElementById('artifactModal').classList.remove('hidden');
}

// Close the artifact detail view
function closeArtifact() {
    document.getElementById('artifactModal').classList.add('hidden');
}

// Go back to gallery from artifact view
function backToGallery() {
    const galleryId = document.getElementById('backToGalleryBtn').getAttribute('data-gallery-id');
    
    // Hide artifact view
    document.getElementById('artifactModal').classList.add('hidden');
    
    // Show gallery view and reload gallery content
    openGallery(galleryId);
}

// Go back to map from gallery view
function backToMap() {
    closeGallery();
    openMap();
}

// Set up event listeners for gallery areas on the map
function initializeMapInteraction() {
    const galleryAreas = [
        'ancientArt',
        'modernMasterpieces',
        'contemporaryArt',
        'sculpture',
        'specialExhibitions',
        'photography',
        'naturalHistory',
        'interactiveExhibits',
        'scienceTech'
    ];
    
    galleryAreas.forEach(galleryId => {
        const element = document.getElementById(galleryId);
        if (element) {
            element.addEventListener('click', () => openGallery(galleryId));
        }
    });
}

// Initialize the tour
function initializeTour() {
    // The tour is initialized when the user clicks "Start Tour"
    document.getElementById('beginTourBtn').addEventListener('click', function() {
        document.getElementById('startTourModal').classList.add('hidden');
        openMap();
    });
    
    // Set up map close button
    document.getElementById('closeMapBtn').addEventListener('click', closeMap);
    
    // Set up gallery close button
    document.getElementById('closeGalleryBtn').addEventListener('click', closeGallery);
    
    // Set up artifact close button
    document.getElementById('closeArtifactBtn').addEventListener('click', closeArtifact);
    
    // Set up back to gallery button
    document.getElementById('backToGalleryBtn').addEventListener('click', backToGallery);
    
    // Set up back to map button
    document.getElementById('backToMapBtn').addEventListener('click', backToMap);
    
    // Initialize map interaction
    initializeMapInteraction();
}

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeTour);
