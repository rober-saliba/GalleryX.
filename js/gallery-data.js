
// Gallery and artifacts data management

// Local storage key for gallery data
const GALLERY_DATA_KEY = 'galleryX_gallery_data';

// Initialize default gallery data if none exists
function initializeGalleryData() {
    if (!localStorage.getItem(GALLERY_DATA_KEY)) {
        const defaultGalleries = {
            'ancientArt': {
                id: 'ancientArt',
                name: 'Ancient Art',
                description: 'Discover artifacts from ancient civilizations that shaped our world.',
                artifacts: [
                    {
                        id: 'ancient1',
                        title: 'Greek Amphora',
                        description: 'This beautifully preserved amphora dates back to 500 BCE. It features intricate paintings depicting scenes from Greek mythology, specifically the twelve labors of Heracles. Amphorae like this were commonly used to store wine, olive oil, and grain.',
                        image: 'public/lovable-uploads/01f4464d-9d73-4532-8c52-76837d58b8d2.png',
                        audioSrc: 'https://example.com/audio/ancient1.mp3',
                        additionalInfo: 'Created during the height of Athenian pottery, this piece showcases the black-figure technique that was popular during this period. The artist, while unknown, was likely part of a well-established workshop in Athens.'
                    },
                    {
                        id: 'ancient2',
                        title: 'Egyptian Hieroglyphics Tablet',
                        description: 'This limestone tablet contains hieroglyphic inscriptions from the New Kingdom period. The text appears to be a passage from the Book of the Dead, containing spells to help the deceased navigate the afterlife.',
                        image: 'public/lovable-uploads/01f4464d-9d73-4532-8c52-76837d58b8d2.png',
                        audioSrc: 'https://example.com/audio/ancient2.mp3',
                        additionalInfo: 'The tablet was discovered in a tomb near the Valley of the Kings in 1922. The preservation of the pigments is remarkable, giving us insight into how vibrant these inscriptions would have appeared to ancient Egyptians.'
                    }
                ]
            },
            'modernMasterpieces': {
                id: 'modernMasterpieces',
                name: 'Modern Masterpieces',
                description: 'Experience groundbreaking works that defined contemporary art movements.',
                artifacts: [
                    {
                        id: 'modern1',
                        title: 'Abstract Expressionism No. 5',
                        description: 'This large-scale canvas exemplifies the spontaneous, intuitive approach of abstract expressionism. The artist used dynamic brushstrokes and dripping techniques to create a sense of movement and emotional intensity.',
                        image: 'public/lovable-uploads/64deeb94-180d-4260-92c9-1c2b0ac5c3f2.png',
                        audioSrc: 'https://example.com/audio/modern1.mp3',
                        additionalInfo: 'Created in 1952, this work represents the post-war American art movement that emphasized freedom of expression and raw emotion over traditional techniques. The artist was influenced by surrealism and Eastern philosophy.'
                    },
                    {
                        id: 'modern2',
                        title: 'Cubist Portrait',
                        description: 'This revolutionary portrait breaks down its subject into geometric forms, showcasing multiple perspectives simultaneously. The fragmented planes and muted color palette are hallmarks of analytical cubism.',
                        image: 'public/lovable-uploads/64deeb94-180d-4260-92c9-1c2b0ac5c3f2.png',
                        audioSrc: 'https://example.com/audio/modern2.mp3',
                        additionalInfo: 'Painted in 1912, this work challenged traditional notions of perspective and representation. The artist collaborated with several contemporaries to develop cubism, which would go on to influence numerous art movements throughout the 20th century.'
                    }
                ]
            },
            'contemporaryArt': {
                id: 'contemporaryArt',
                name: 'Contemporary Art',
                description: 'Explore cutting-edge works by today\'s most innovative artists.',
                artifacts: [
                    {
                        id: 'contemp1',
                        title: 'Digital Landscape',
                        description: 'This mixed-media installation combines digital projection with physical sculpture to create an immersive landscape experience. The piece responds to viewer movement, creating a unique interactive experience.',
                        image: 'public/lovable-uploads/64deeb94-180d-4260-92c9-1c2b0ac5c3f2.png',
                        audioSrc: 'https://example.com/audio/contemp1.mp3',
                        additionalInfo: 'Created in 2019, this work explores the intersection of technology, nature, and human perception. The artist used custom software and motion sensors to generate an ever-changing visual environment.'
                    }
                ]
            },
            'sculpture': {
                id: 'sculpture',
                name: 'Sculpture Gallery',
                description: 'Witness the evolution of three-dimensional art throughout history.',
                artifacts: [
                    {
                        id: 'sculpt1',
                        title: 'Bronze Figure',
                        description: 'This life-sized bronze sculpture depicts a human figure in motion, capturing a moment of dynamic tension. The surface treatment creates interesting light patterns that change as you move around the piece.',
                        image: 'public/lovable-uploads/01f4464d-9d73-4532-8c52-76837d58b8d2.png',
                        audioSrc: 'https://example.com/audio/sculpt1.mp3',
                        additionalInfo: 'Cast using the lost-wax method, this sculpture demonstrates the artist\'s masterful understanding of human anatomy and movement. The patina was carefully developed to give the bronze a unique coloration.'
                    }
                ]
            },
            'specialExhibitions': {
                id: 'specialExhibitions',
                name: 'Special Exhibitions',
                description: 'Rotating exhibits featuring unique collections and themes.',
                artifacts: [
                    {
                        id: 'special1',
                        title: 'Light Installation',
                        description: 'This immersive light installation transforms the gallery space into a sea of color and movement. Hundreds of LED lights are programmed to create patterns that evolve over time.',
                        image: 'public/lovable-uploads/5ab958aa-e5a6-42aa-9917-9ecb0dab1d18.png',
                        audioSrc: 'https://example.com/audio/special1.mp3',
                        additionalInfo: 'This installation is part of our "Art and Technology" special exhibition, running for three months. The artist spent over a year developing the custom software that controls the light patterns.'
                    }
                ]
            },
            'photography': {
                id: 'photography',
                name: 'Photography',
                description: 'Capturing moments in time through the lens of master photographers.',
                artifacts: [
                    {
                        id: 'photo1',
                        title: 'Urban Landscape',
                        description: 'This large-format photograph captures the urban landscape at dawn, when the city transitions from night to day. The long exposure creates a dreamlike quality, with streaks of light showing the movement of early morning traffic.',
                        image: 'public/lovable-uploads/5ab958aa-e5a6-42aa-9917-9ecb0dab1d18.png',
                        audioSrc: 'https://example.com/audio/photo1.mp3',
                        additionalInfo: 'The photographer spent three weeks scouting locations before finding this perfect vantage point. The image is printed using archival pigment inks on museum-quality paper.'
                    }
                ]
            },
            'naturalHistory': {
                id: 'naturalHistory',
                name: 'Natural History',
                description: 'Exploring the natural world through specimens and interactive displays.',
                artifacts: [
                    {
                        id: 'natural1',
                        title: 'Fossil Collection',
                        description: 'This collection of fossils spans over 100 million years of evolution, from early marine invertebrates to mammalian specimens. Each fossil has been carefully prepared to highlight its key features.',
                        image: 'public/lovable-uploads/01f4464d-9d73-4532-8c52-76837d58b8d2.png',
                        audioSrc: 'https://example.com/audio/natural1.mp3',
                        additionalInfo: 'Many of these specimens were collected during expeditions in the 1950s. Modern scanning techniques have allowed researchers to study the internal structures without damaging these priceless artifacts.'
                    }
                ]
            },
            'scienceTech': {
                id: 'scienceTech',
                name: 'Science & Technology',
                description: 'Innovations and discoveries that shaped our modern world.',
                artifacts: [
                    {
                        id: 'science1',
                        title: 'Early Computing Device',
                        description: 'This early mechanical computing device from the 1940s was used for complex mathematical calculations. It represents a crucial step in the development of modern computers.',
                        image: 'public/lovable-uploads/5ab958aa-e5a6-42aa-9917-9ecb0dab1d18.png',
                        audioSrc: 'https://example.com/audio/science1.mp3',
                        additionalInfo: 'Only five of these devices were ever built, and this is one of only two that remain functional. It contains over 3,000 precision-engineered parts and can perform calculations that would have taken human computers days to complete.'
                    }
                ]
            },
            'interactiveExhibits': {
                id: 'interactiveExhibits',
                name: 'Interactive Exhibits',
                description: 'Hands-on experiences that make learning fun and engaging.',
                artifacts: [
                    {
                        id: 'interactive1',
                        title: 'Virtual Reality Experience',
                        description: 'This VR installation allows visitors to step inside famous paintings and explore them in three dimensions. Using custom-developed software, artworks are transformed into immersive environments.',
                        image: 'public/lovable-uploads/5ab958aa-e5a6-42aa-9917-9ecb0dab1d18.png',
                        audioSrc: 'https://example.com/audio/interactive1.mp3',
                        additionalInfo: 'Developed in collaboration with digital artists and art historians, this experience offers new perspectives on familiar masterpieces. The programming team spent over a year recreating the details of each painting in 3D space.'
                    }
                ]
            }
        };
        
        localStorage.setItem(GALLERY_DATA_KEY, JSON.stringify(defaultGalleries));
    }
}

// Get all gallery data
function getAllGalleries() {
    const data = localStorage.getItem(GALLERY_DATA_KEY);
    return data ? JSON.parse(data) : {};
}

// Get a specific gallery by ID
function getGallery(galleryId) {
    const galleries = getAllGalleries();
    return galleries[galleryId] || null;
}

// Get a specific artifact by ID
function getArtifact(galleryId, artifactId) {
    const gallery = getGallery(galleryId);
    if (!gallery) return null;
    
    return gallery.artifacts.find(artifact => artifact.id === artifactId) || null;
}

// Add a new gallery
function addGallery(gallery) {
    const galleries = getAllGalleries();
    galleries[gallery.id] = gallery;
    localStorage.setItem(GALLERY_DATA_KEY, JSON.stringify(galleries));
    return gallery;
}

// Update an existing gallery
function updateGallery(gallery) {
    const galleries = getAllGalleries();
    
    if (!galleries[gallery.id]) {
        return false;
    }
    
    galleries[gallery.id] = gallery;
    localStorage.setItem(GALLERY_DATA_KEY, JSON.stringify(galleries));
    return gallery;
}

// Delete a gallery
function deleteGallery(galleryId) {
    const galleries = getAllGalleries();
    
    if (!galleries[galleryId]) {
        return false;
    }
    
    delete galleries[galleryId];
    localStorage.setItem(GALLERY_DATA_KEY, JSON.stringify(galleries));
    return true;
}

// Add a new artifact to a gallery
function addArtifact(galleryId, artifact) {
    const galleries = getAllGalleries();
    
    if (!galleries[galleryId]) {
        return false;
    }
    
    galleries[galleryId].artifacts.push(artifact);
    localStorage.setItem(GALLERY_DATA_KEY, JSON.stringify(galleries));
    return artifact;
}

// Update an existing artifact
function updateArtifact(galleryId, artifact) {
    const galleries = getAllGalleries();
    
    if (!galleries[galleryId]) {
        return false;
    }
    
    const artifactIndex = galleries[galleryId].artifacts.findIndex(a => a.id === artifact.id);
    
    if (artifactIndex === -1) {
        return false;
    }
    
    galleries[galleryId].artifacts[artifactIndex] = artifact;
    localStorage.setItem(GALLERY_DATA_KEY, JSON.stringify(galleries));
    return artifact;
}

// Delete an artifact
function deleteArtifact(galleryId, artifactId) {
    const galleries = getAllGalleries();
    
    if (!galleries[galleryId]) {
        return false;
    }
    
    const artifactIndex = galleries[galleryId].artifacts.findIndex(a => a.id === artifactId);
    
    if (artifactIndex === -1) {
        return false;
    }
    
    galleries[galleryId].artifacts.splice(artifactIndex, 1);
    localStorage.setItem(GALLERY_DATA_KEY, JSON.stringify(galleries));
    return true;
}

// Initialize gallery data
initializeGalleryData();
