// const dropDown = document.querySelectorAll('.drop_down');
const makeup_list = document.querySelector('#makeup_list');
const face_list = document.querySelector('#face_list');
const drop_down_menu_makeup = document.querySelector('#drop_down_menu_makeup');
const drop_down_menu_face = document.querySelector('#drop_down_menu_face');



drop_down_menu_makeup.addEventListener('mouseover', function() {
    makeup_list.classList.remove('hidden');
    });

drop_down_menu_makeup.addEventListener('mouseout', function() {
    makeup_list.classList.add('hidden');
});

drop_down_menu_face.addEventListener('mouseover', function() {
    face_list.classList.remove('hidden');
    });

    drop_down_menu_face.addEventListener('mouseout', function() {
    face_list.classList.add('hidden');
});
