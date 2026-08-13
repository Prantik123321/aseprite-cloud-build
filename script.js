// Download function
function downloadAseprite(platform) {
    const downloadBtn = event.target;
    const loadingBar = document.getElementById('loading-bar');
    
    // Show loading animation
    loadingBar.style.display = 'block';
    downloadBtn.disabled = true;
    downloadBtn.innerHTML = '<span class="btn-icon">⏳</span> Preparing Download...';
    
    // Simulate download preparation
    setTimeout(() => {
        // Replace with your actual download URL
        const downloadUrl = `https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.3.3-portable/Aseprite-Portable-Windows-x64.zip`;
        
        // Create temporary link and click
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'Aseprite-Portable-Windows-x64.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset button
        loadingBar.style.display = 'none';
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = '<span class="btn-icon">⬇️</span> Download for Windows';
        
        // Show success message
        showToast('Download started! Check your downloads folder.');
    }, 2000);
}

// Show older versions
function showOlderVersions() {
    const olderVersions = document.getElementById('older-versions');
    if (olderVersions.style.display === 'none') {
        olderVersions.style.display = 'block';
        olderVersions.scrollIntoView({ behavior: 'smooth' });
    } else {
        olderVersions.style.display = 'none';
    }
}

// FAQ toggle
function toggleFAQ(element) {
    element.classList.toggle('active');
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add toast styles dynamically
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s;
        z-index: 9999;
    }
    
    .toast.show {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(toastStyles);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with fade-in
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease';
    });
    
    // Trigger initial animation
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});

// Track downloads (optional - replace with your analytics)
function trackDownload(platform) {
    console.log(`Download initiated for ${platform}`);
    // You can integrate Google Analytics or other tracking here
}
