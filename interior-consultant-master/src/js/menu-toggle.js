function showMenu(){
    const showMenu = document.querySelector('.mobile-menu');
    showMenu.style.visibility = 'visible';
    //showMenu.style.height = '100vh';
    showMenu.style.width = '100%';
}

function hideMenu(){
    const closeMenu = document.querySelector('.mobile-menu');
    closeMenu.style.visibility = 'hidden';
    //closeMenu.style.height = '0';
    closeMenu.style.width = '0';
}