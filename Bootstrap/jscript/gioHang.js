function getDataLocalStorage() {
    arraySanPham = JSON.parse(window.localStorage.getItem('TTSanPham'));
}
function setDataLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
}
//  hiện thị thông tin
let show = document.getElementById('gioHangs')
function showSP() {
    getDataLocalStorage()
    for (let i = 0; i < arraySanPham.length; i++) {
        show.innerHTML += `
        <tr>
            <td> <img src='${arraySanPham[i].hinhAnh}' width='100px' height='70px'></td>
            <td>${arraySanPham[i].tenSp}</td>
            <td>${arraySanPham[i].giaTien}</td>
            <td class="text-decoration-underline"><a href='#' onclick='xoaSanPham(${i})'>Xóa khỏi giỏ hàng</a></td>
            <td class="text-center"><a href="" onclick="xemThongTin(${i})" > <span class='btn border text-primary border-primary'>Mua ngay</span></a></td>
        </tr>
        `
    }
}
// xóa sản phẩm
function xoaSanPham(id) {
    getDataLocalStorage();
    arraySanPham.splice(id, 1);
    setDataLocalStorage('TTSanPham', arraySanPham)
    $('#gioHangs tr').remove();
    // window.location.reload();
    showSP();
}
// function run() {
//     showSP();
// }
// run();
showSP()