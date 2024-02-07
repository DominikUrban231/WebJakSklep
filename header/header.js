const dropDownMenus = document.querySelectorAll('#drop_down_menu');

dropDownMenus.forEach(function(menu) {
    menu.addEventListener('mouseover', function() {
        const submenu = menu.children[1];
        submenu.classList.remove('hidden');
    });

    menu.addEventListener('mouseout', function() {
        const submenu = menu.children[1];
        submenu.classList.add('hidden');
    });
});
