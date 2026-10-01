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
