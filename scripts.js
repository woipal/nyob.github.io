// 1. Animasi saat scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// 2. Efek Hover pada proyek
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});

// 3. Menampilkan modal untuk melihat detail proyek
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const projectLinks = document.querySelectorAll('.project a');

projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Mencegah navigasi
        const projectDetail = `
            <h2>Detail Proyek</h2>
            <p>Ini adalah detail lebih lanjut tentang proyek yang kamu pilih.</p>
            <button class="close-modal">Tutup</button>
        `;
        modal.innerHTML = projectDetail;
        modal.style.display = 'block';

        const closeModalButton = modal.querySelector('.close-modal');
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});
