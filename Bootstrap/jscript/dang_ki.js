let khachHangs = [];
const key = 'database-c2002';
let index = -1;
let danhSachKhachHang = 'ItemsKhachHang';
class khachHang {
    constructor(id, name, sdt, email, diaChi, mauXe, time) {
        this.id = id;
        this.name = name;
        this.sdt = sdt;
        this.email = email;
        this.diaChi = diaChi;
        this.mauXe = mauXe;
        this.time = time
    }
}
function setDataLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
}
function getDataLocalStorage() {
    khachHangs = JSON.parse(window.localStorage.getItem(key));
}
function init() {
    if (window.localStorage.getItem('database-c2002') == null) {
        let khachHang_01 = new khachHang(1, 'Huy', 972323348, 'duonghuy137@gmail.com', 'Hà Nội', 'VINFAST SA2.0', '21/07/2021');
        let khachHang_02 = new khachHang(2, 'Tiến', 973920938, 'tienVan09@gmail.com', 'TP.Hồ Chí Minh', 'VINFAST FADIL', '21/07/2021');
        let khachHang_03 = new khachHang(3, 'Long', 923242323, 'longnguyen73@gmail.com', 'TP.Hồ Chí Minh', 'VINFAST LUX 2.0', '21/07/2021');
        let khachHang_04 = new khachHang(4, 'Khánh', 997208739, 'duongKhanh091@gmail.com', 'Hà Nội', 'VINFAST FADIL', '21/07/2021');
        let khachHang_05 = new khachHang(5, 'Toàn', 972323348, 'dinhToan19@gmail.com', 'Hà Nội', 'VINFAST LUX 2.0', '21/07/2021');
        let khachHang_06 = new khachHang(6, 'Bình', 909368750, 'BìnhLongAn@gmail.com', 'Hà Nội', 'VINFAST A2.0', '21/07/2021');
        khachHangs.push(khachHang_01, khachHang_02, khachHang_03, khachHang_04, khachHang_05, khachHang_06);
        setDataLocalStorage(key, khachHangs);
    } else {
        getDataLocalStorage();
    }
}
function addkhachHangItem() {
    td = khachHangs.length + 1;
    let name = document.getElementById('inputEmail3').value;
    // định dạng tên nhập vào sẽ viết hoa các chữ cái đầu, xóa bỏ khoảng trắng
    let myName = myFormat(name);
    let sdt = document.getElementById('inputPassword3').value;
    let email = document.getElementById('inputPassword4').value;
    let diaChi = document.getElementById('inlineFormSelectPref').value;
    let mauXe = document.getElementById('inlineFormSelectPref2').value;
    let time = document.getElementById('inputPassword99').value
    if (myName != '' && sdt != 0 && email != '') {
        let khachang = new khachHang(td, myName, sdt, email, diaChi, mauXe, time);
        // kiểm tra ID nhập vào không được trùng
        for (let i = 0; i < khachHangs.length; i++) {
            if (td == khachHangs[i].id) {
                td = khachHangs[i].id + 1;
            }
        }
        khachHangs.push(khachang);
        setDataLocalStorage(key, khachHangs)
        //  ..............................................
        document.getElementById('inputEmail3').value = '';
        document.getElementById('inputPassword3').value = 0;
        document.getElementById('inputPassword4').value = '';
        document.getElementById('inlineFormSelectPref').value = '';
        document.getElementById('inlineFormSelectPref2').value = '';
        document.getElementById('inputPassword99').value = ''
    } else {
        alert('Thông tin  không hợp lệ!!!')
    }
}
// định dạng tên 
function myFormat(name) {
    let myString = name.toLowerCase().split(' ');
    for (let i = 0; i < myString.length; i++) {
        myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].substring(1);
    }
    return myString.join(' ');
}