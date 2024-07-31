document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 70; // Adjust this value based on your header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const emailButton = document.getElementById('emailButton');
    const emailMenuOverlay = document.getElementById('emailMenuOverlay');
    const emailMenu = document.getElementById('emailMenu');
    const closeButton = document.getElementById('closeMenu');
    const emailAddress = 'ne221194@senshu-u.jp';

    function openMenu() {
        emailMenuOverlay.style.display = 'flex';
    }

    function closeMenu() {
        emailMenuOverlay.style.display = 'none';
    }

    emailButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    emailMenuOverlay.addEventListener('click', function(e) {
        if (e.target === emailMenuOverlay) {
            closeMenu();
        }
    });

    emailMenu.addEventListener('click', function(e) {
        if (e.target.classList.contains('menu-item') || e.target.closest('.menu-item')) {
            const menuItem = e.target.classList.contains('menu-item') ? e.target : e.target.closest('.menu-item');
            const action = menuItem.dataset.action;
            switch(action) {
                case 'gmail':
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`);
                    break;
                case 'outlook':
                    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}`);
                    break;
                case 'yahoo':
                    window.open(`https://compose.mail.yahoo.com/?to=${emailAddress}`);
                    break;
                case 'default':
                    window.location.href = `mailto:${emailAddress}`;
                    break;
            }
            closeMenu();
        }
    });

    const copyButton = document.querySelector('.copy-button');
    copyButton.addEventListener('click', function() {
        const emailCopy = document.getElementById('emailCopy');
        emailCopy.select();
        document.execCommand('copy');
        alert('メールアドレスをコピーしました');
        closeMenu();
    });
});