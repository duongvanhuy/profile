
//  về trang adim
//  phần trái
//  ẩn hiện
function turn_on(number) {
    let element01 = document.getElementById('options01');
    let element02 = document.getElementById('options02');
    let element03 = document.getElementById('options03');
    switch(number){
        case 1:
            if (element01.style.display === 'none') {
                element01.style.display = 'block';
            } else {
                element01.style.display = 'none';
            }
            break;
        case 2:
            if (element02.style.display === 'none') {
                element02.style.display = 'block';
            } else {
                element02.style.display = 'none';
            }
            break;
        case 3:
            if (element03.style.display === 'none') {
                element03.style.display = 'block';
            } else {
                element03.style.display = 'none';
            }
            break;
    }
}