const getHeader = () => document.querySelector('header.pc');
let lastScrollY = window.scrollY;

const handleHeaderScroll = () => {
    const header = getHeader();
    if (!header) return;

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }

    lastScrollY = currentScrollY;
};

const handleHeaderHover = (event) => {
    const header = event.target.closest('header.pc');
    if (!header) return;

    header.classList.remove('on');
};

const handleHeaderLeave = (event) => {
    const header = event.target.closest('header.pc');
    if (!header) return;

    const relatedTarget = event.relatedTarget;
    if (header.contains(relatedTarget)) return;

    handleHeaderScroll();
};

window.addEventListener('scroll', handleHeaderScroll, { passive: true });
window.addEventListener('load', handleHeaderScroll);
document.addEventListener('mouseover', handleHeaderHover);
document.addEventListener('mouseout', handleHeaderLeave);

const headerObserver = new MutationObserver(() => {
    handleHeaderScroll();
});

if (document.body) {
    headerObserver.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

document.addEventListener('click', (e) => {
    const menuButton = e.target.closest('.btn-menu');
    const smartOverlayMenu = document.querySelector('.smart-overlay-menu');

    if (menuButton && smartOverlayMenu) {
        e.preventDefault();
        smartOverlayMenu.classList.add('on');
        return;
    }

    const closeButton = e.target.closest('.btn-menu-close');
    if (closeButton && smartOverlayMenu) {
        e.preventDefault();
        smartOverlayMenu.classList.remove('on');
        return;
    }

    const clickedSmartList = e.target.closest('.gnb-smart > li');
    if (!clickedSmartList) return;

    e.preventDefault();

    const smartLists = [...document.querySelectorAll('.gnb-smart > li')];
    const gnb2depthSmarts = [...document.querySelectorAll('.gnb2depth-smart')];
    const idx = smartLists.indexOf(clickedSmartList);

    if (idx === 0) return;

    smartLists.forEach((listItem) => listItem.classList.remove('on'));
    clickedSmartList.classList.add('on');

    gnb2depthSmarts.forEach((div) => div.classList.remove('on'));
    if (gnb2depthSmarts[idx - 1]) {
        gnb2depthSmarts[idx - 1].classList.add('on');
    }
});
