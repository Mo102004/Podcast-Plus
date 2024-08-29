function toggleMenu() {
    var menu = document.querySelector('.navigation-parent');
    var icon = document.querySelector('.icon-menu');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        icon.setAttribute('name', 'close-outline'); // تغيير الأيقونة إلى close-outline
    } else {
        menu.style.display = 'none';
        icon.setAttribute('name', 'menu-outline'); // إعادة الأيقونة إلى menu-outline
    }
}
