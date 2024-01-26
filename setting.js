const sideMenu = document.getElementById('sideMenu');
const sideMenuContainer = document.getElementById('sideMenuContainer');

function sideMenuOnClick() {
    sideMenuContainer.style.transform = 'translate(-100%,0%)';

}

function sideMenuButtonOnClick() {
    sideMenuContainer.style.transform = 'translate(0%, 0%)';

}