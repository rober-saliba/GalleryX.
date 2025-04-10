
// Gallery data for the virtual tour

// Gallery and artifact data
const galleries = [
    {
        id: 'ancientArt',
        name: 'Ancient Art',
        description: 'Discover artifacts from ancient civilizations that shaped our world.',
        artifacts: [
            {
                id: 'ancient1',
                title: 'Greek Amphora',
                image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This beautifully preserved amphora dates back to 5th century BCE Greece. It features intricate black-figure decoration depicting scenes from Greek mythology.',
                additionalInfo: 'Used for storing wine, oil, and other commodities, amphorae were essential vessels in ancient Mediterranean cultures. This example shows the skilled craftsmanship of Athenian potters.',
                audioSrc: '#'
            },
            {
                id: 'ancient2',
                title: 'Roman Sculpture',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'A marble bust of a Roman senator from the 1st century CE. The realistic portrayal captures the dignity and authority of the Roman elite.',
                additionalInfo: 'Roman portraiture was revolutionary for its realism, often depicting subjects with their actual features rather than idealized versions.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'modernMasterpieces',
        name: 'Modern Masterpieces',
        description: 'Experience groundbreaking works that defined contemporary art movements.',
        artifacts: [
            {
                id: 'modern1',
                title: 'Abstract Composition',
                image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'Created in 1945, this abstract composition represents the emotional turmoil of post-war Europe through bold colors and fragmented shapes.',
                additionalInfo: 'The artist pioneered new techniques in abstract expressionism, using unconventional tools and materials to create textured surfaces.',
                audioSrc: '#'
            },
            {
                id: 'modern2',
                title: 'Cubist Portrait',
                image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This Cubist portrait from 1923 deconstructs the human face into geometric forms, challenging traditional notions of representation.',
                additionalInfo: 'Cubism revolutionized European painting by abandoning perspective and showing multiple viewpoints simultaneously.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'contemporaryArt',
        name: 'Contemporary Art',
        description: 'Explore cutting-edge works from today\'s most innovative artists.',
        artifacts: [
            {
                id: 'contemp1',
                title: 'Digital Landscape',
                image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This digital artwork blends traditional landscape painting techniques with algorithmic generation to create an ever-evolving vista.',
                additionalInfo: 'The artist uses custom software to create works that change subtly over time, ensuring no viewer sees exactly the same image.',
                audioSrc: '#'
            },
            {
                id: 'contemp2',
                title: 'Mixed Media Installation',
                image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This immersive installation combines sculpture, video, sound, and light to explore themes of technology and human connection.',
                additionalInfo: 'Visitors are encouraged to interact with elements of the installation, becoming part of the artwork themselves.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'sculpture',
        name: 'Sculpture',
        description: 'Marvel at three-dimensional artworks from various periods and styles.',
        artifacts: [
            {
                id: 'sculpt1',
                title: 'Bronze Figure',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This dynamic bronze sculpture captures the human form in motion, demonstrating the artist\'s mastery of anatomical detail.',
                additionalInfo: 'Created using the lost-wax casting method, a technique that has remained largely unchanged for thousands of years.',
                audioSrc: '#'
            },
            {
                id: 'sculpt2',
                title: 'Modern Abstract Form',
                image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This steel and glass sculpture plays with light, shadow, and negative space to create a constantly changing visual experience.',
                additionalInfo: 'The artist spent two years developing specialized techniques to join the seemingly incompatible materials.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'specialExhibitions',
        name: 'Special Exhibitions',
        description: 'Limited-time exhibits featuring unique collections and themes.',
        artifacts: [
            {
                id: 'special1',
                title: 'Featured Collection',
                image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This traveling exhibition brings together rare artifacts and artworks never before displayed together.',
                additionalInfo: 'Curated specifically for this museum, this unique collection will only be available for viewing until the end of the month.',
                audioSrc: '#'
            },
            {
                id: 'special2',
                title: 'Guest Artist Showcase',
                image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'A showcase of new works by our featured contemporary artist, exploring themes of identity and belonging.',
                additionalInfo: 'The artist will be present for a discussion and Q&A session on Saturday afternoons throughout the exhibition.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'photography',
        name: 'Photography',
        description: 'Witness the world through the lenses of master photographers.',
        artifacts: [
            {
                id: 'photo1',
                title: 'Urban Landscape Series',
                image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This series of black and white photographs documents urban transformation over three decades in major global cities.',
                additionalInfo: 'The photographer returned to the same locations every five years to capture the changing cityscape and its inhabitants.',
                audioSrc: '#'
            },
            {
                id: 'photo2',
                title: 'Portrait Collection',
                image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'These intimate portraits capture the lives and stories of indigenous communities around the world.',
                additionalInfo: 'The photographer spent over a decade building relationships with these communities before being granted permission to create these images.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'naturalHistory',
        name: 'Natural History',
        description: 'Explore the wonders of our natural world and its fascinating history.',
        artifacts: [
            {
                id: 'natural1',
                title: 'Dinosaur Fossil',
                image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This remarkably preserved fossil of a Velociraptor shows exceptional detail, including traces of feather structures.',
                additionalInfo: 'Discovered in Mongolia\'s Gobi Desert in 2015, this specimen has provided valuable information about dinosaur evolution.',
                audioSrc: '#'
            },
            {
                id: 'natural2',
                title: 'Mineral Collection',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This stunning collection of rare minerals showcases the incredible diversity of Earth\'s geological formations.',
                additionalInfo: 'Some specimens in this collection formed under extreme pressure over millions of years before being brought to the surface through volcanic activity.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'interactiveExhibits',
        name: 'Interactive Exhibits',
        description: 'Engage with digital installations that bring art to life.',
        artifacts: [
            {
                id: 'interactive1',
                title: 'Virtual Reality Experience',
                image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'Step into famous paintings and explore them from the inside in this groundbreaking VR installation.',
                additionalInfo: 'Developed by a team of artists and technology specialists, this experience uses advanced spatial mapping to create immersive environments.',
                audioSrc: '#'
            },
            {
                id: 'interactive2',
                title: 'Motion-Responsive Wall',
                image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This large-scale installation responds to visitor movements, creating unique visual compositions for each interaction.',
                additionalInfo: 'The system uses multiple depth sensors and projection mapping to create responsive environments that blend technology and art.',
                audioSrc: '#'
            }
        ]
    },
    {
        id: 'scienceTech',
        name: 'Science & Technology',
        description: 'Discover the intersection of art, science, and technological innovation.',
        artifacts: [
            {
                id: 'tech1',
                title: 'Historic Computing Devices',
                image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This collection traces the evolution of computing from early mechanical calculators to modern microprocessors.',
                additionalInfo: 'Includes working examples of significant machines that visitors can interact with to understand their historical significance.',
                audioSrc: '#'
            },
            {
                id: 'tech2',
                title: 'AI Art Generation',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'This exhibition explores how artificial intelligence is being used as a creative tool in contemporary art practice.',
                additionalInfo: 'Features works created through collaboration between human artists and various AI systems, raising questions about creativity and authorship.',
                audioSrc: '#'
            }
        ]
    }
];

// Function to get a gallery by ID
function getGallery(id) {
    console.log("Getting gallery:", id);
    console.log("Available galleries:", galleries.map(g => g.id));
    return galleries.find(gallery => gallery.id === id);
}

// Function to get an artifact by gallery ID and artifact ID
function getArtifact(galleryId, artifactId) {
    const gallery = getGallery(galleryId);
    if (!gallery) return null;
    
    return gallery.artifacts.find(artifact => artifact.id === artifactId);
}
