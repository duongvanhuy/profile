function setDataLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
}
function getDataLocalStorage() {
    itemKhachHangs = JSON.parse(window.localStorage.getItem('database'));
}
let show = document.getElementById('after_run');
// random một chuỗi ngẫu nhiên cho mã khách hàng
// vẫn chưa kiểm tra mã số không được trùng nhau
function radomMaKH(){
    return myArrays = Math.random().toString(36).substr(2,5).toUpperCase();
}
//  showw sp
function showSP() {
    getDataLocalStorage()
    for (let i = 0; i < itemKhachHangs.length; i++) {
        show.innerHTML += `
        <tr>
            <td> ${radomMaKH()}</td>
            <td>${itemKhachHangs[i].name}</td>
            <td>${itemKhachHangs[i].email}</td>
            <td>${itemKhachHangs[i].passWord}</td>
            <td>chỉnh sửa</td>
            <td>xóa</td>
        </tr>
        `
    }
}
showSP()