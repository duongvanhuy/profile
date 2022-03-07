const keys = 'KhachHang_MuaHang';
let arrayKhachHang =[];
let show = document.getElementById('tableItemKhachHang');
let hoTen = document.getElementById('hoTen');
let CMND = document.getElementById('CMND');
let soDT = document.getElementById('sodienThoai');
let email = document.getElementById('email');
class KhachHangs{
    constructor(maKH, hoTen, CMND, SDT, Email ){
        this.maKH = maKH;
        this.hoTen = hoTen;
        this.CMND = CMND;
        this.SDT = SDT;
        this.Email = Email;
    }
}
function init(){
    if(window.localStorage.getItem('KhachHang_MuaHang') == null){
       let khachHang01 = new KhachHangs(0,'Dương Văn Huy','2002109878','0353133137','duonghuy137@hmail.com')
    //    let khachhang02 = new KhachHangs(2,'Nguyễn Đức Long','2000219800','0984847823','beLeThi98@hmail.com');
       arrayKhachHang.push(khachHang01)
       setLocalStorage(keys, arrayKhachHang);
    }else{
        getDataLocalStorage()
    }
}
function setLocalStorage(keys, data){
    window.localStorage.setItem(keys,JSON.stringify(data));
}
function getDataLocalStorage(){
   arrayKhachHang = JSON.parse(window.localStorage.getItem(keys));
}
//  
function checkMuaHang(){
    let td = 1;
    getDataLocalStorage();
    if(hoTen.value !='' && CMND.value != '' && soDT.value != '' && email.value != ''){
        //  kiểm tra mã khách hàng không được trùng
        for(let i=0; i< arrayKhachHang.length; i++){
            
           while(td == arrayKhachHang[i].maKH){
               td ++;
           }
        }
        // thêm vào local
       let khachang = new KhachHangs(td, hoTen.value, CMND.value, soDT.value, email.value);
        arrayKhachHang.push(khachang);
        setLocalStorage(keys, arrayKhachHang)
    }else{
        alert('Bạn hãy điền đầy đủ thông tin')
        return false;
    }
}
//  show thông tin khách hàng mua xe
function showItemKhachHang(){
    getDataLocalStorage()
    for(let  i= 0; i< arrayKhachHang.length; i++){
        show.innerHTML += `
        <tr>
            <td>${arrayKhachHang[i].maKH}</td>
            <td>${arrayKhachHang[i].hoTen}</td>
            <td>${arrayKhachHang[i].CMND}</td>
            <td>${arrayKhachHang[i].SDT}</td>
            <td>${arrayKhachHang[i].Email}</td>
            <td>${11}</td>
        </tr>
        `
    }
}
function run(){
    showItemKhachHang();
}
run()
