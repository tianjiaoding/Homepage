// Keep track of the active filter
let activeFilter = 'all';

// Function to filter publications
function filterPublications(tag) {
    // Update active filter
    activeFilter = tag;
    
    // Remove active class from all buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Get all publication entries
    const publications = document.querySelectorAll('li .row');
    
    publications.forEach(pub => {
        // Get the div with tags
        const tagDiv = pub.querySelector('[tags]');
        if (!tagDiv) return;
        
        const tags = tagDiv.getAttribute('tags');
        
        if (tag === 'all' || tags.split(';').includes(tag)) {
            pub.style.display = ''; // Show the publication
        } else {
            pub.style.display = 'none'; // Hide the publication
        }
    });
}

// Initialize with all publications shown
document.addEventListener('DOMContentLoaded', () => {
    filterPublications('all');
});