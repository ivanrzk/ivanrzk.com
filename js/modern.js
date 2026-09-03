(() => {
    const header = document.querySelector('[data-header]');
    const menu = document.querySelector('[data-menu]');
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const backTop = document.querySelector('[data-back-top]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const closeMenu = () => {
        menu?.classList.remove('open');
        menuToggle?.setAttribute('aria-expanded', 'false');
    };

    menuToggle?.addEventListener('click', () => {
        const isOpen = menu?.classList.toggle('open') ?? false;
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        });
    });

    const updateScrollState = () => {
        header?.classList.toggle('scrolled', window.scrollY > 24);
    };
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    backTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });

    if (!reduceMotion && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    } else {
        document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
    }
})();
