
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
    console.log("Opening gallery:", galleryId);
    const gallery = getGallery(galleryId);
    
    if (!gallery) {
        alert('Gallery not found.');
        console.error('Gallery not found:', galleryId);
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

// Create interactive text-based map
function createInteractiveMap() {
    const mapContainer = document.getElementById('museumMapContainer');
    
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }
    
    // Clear any existing content
    mapContainer.innerHTML = '';
    
    // Create the museum map layout - REMOVED facility blocks as requested
    const mapHTML = `
        <div class="museum-map-layout w-full max-w-5xl mx-auto p-4">
            <!-- Top Row -->
            <div class="flex justify-center mb-8">
                <div id="modernMasterpieces" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-pink-50 hover:bg-pink-100 hover:shadow-lg transition cursor-pointer mx-4 flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">MODERN MASTERPIECES</h3>
                    <p class="text-sm text-center">(Gallery B)</p>
                </div>
            </div>
            
            <!-- Middle Row -->
            <div class="flex justify-center space-x-8 mb-8">
                <div id="ancientArt" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-amber-50 hover:bg-amber-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">ANCIENT ART</h3>
                    <p class="text-sm text-center">(Gallery A)</p>
                </div>
                
                <div id="specialExhibitions" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-green-50 hover:bg-green-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">SPECIAL EXHIBITIONS</h3>
                    <p class="text-sm text-center">(Gallery F)</p>
                </div>
                
                <div id="contemporaryArt" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-purple-50 hover:bg-purple-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">CONTEMPORARY ART</h3>
                    <p class="text-sm text-center">(Gallery C)</p>
                </div>
            </div>
            
            <!-- Bottom Row -->
            <div class="flex justify-center space-x-8">
                <div id="sculpture" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-orange-50 hover:bg-orange-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">SCULPTURE</h3>
                    <p class="text-sm text-center">(Gallery E)</p>
                </div>
                
                <div id="naturalHistory" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-blue-50 hover:bg-blue-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">NATURAL HISTORY</h3>
                    <p class="text-sm text-center">(Gallery D)</p>
                </div>
                
                <div id="interactiveExhibits" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-cyan-50 hover:bg-cyan-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">INTERACTIVE EXHIBITS</h3>
                    <p class="text-sm text-center">(Gallery I)</p>
                </div>
            </div>
            
            <!-- Bottom Row 2 -->
            <div class="flex justify-center space-x-8 mt-8">
                <div id="photography" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-indigo-50 hover:bg-indigo-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">PHOTOGRAPHY</h3>
                    <p class="text-sm text-center">(Gallery H)</p>
                </div>
                
                <div id="scienceTech" class="gallery-block w-64 h-36 border-2 border-gray-300 rounded-lg bg-yellow-50 hover:bg-yellow-100 hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center p-4">
                    <h3 class="text-lg font-bold text-center">SCIENCE & TECH</h3>
                    <p class="text-sm text-center">(Gallery J)</p>
                </div>
            </div>
        </div>
    `;
    
    mapContainer.innerHTML = mapHTML;
    
    // Add event listeners to gallery blocks
    document.querySelectorAll('.gallery-block').forEach(block => {
        block.addEventListener('click', function() {
            console.log("Gallery block clicked:", this.id);
            openGallery(this.id);
        });
    });
}

// Initialize the tour
function initializeTour() {
    console.log("Initializing tour");
    
    // The tour is initialized when the user clicks "Start Tour"
    document.getElementById('beginTourBtn').addEventListener('click', function() {
        document.getElementById('startTourModal').classList.add('hidden');
        openMap();
        // Create the interactive text-based map
        createInteractiveMap();
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
}

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing tour");
    initializeTour();
});
