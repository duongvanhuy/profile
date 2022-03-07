const key = 'item_car';
let itemCar = [];
let myArrayTongTien =[];
let donGia = document.getElementById('donGia');
let index= -1;
class sanPham{
    constructor(hinhAnh,maSP, tenSp, soLuong){
        this.hinhAnh = hinhAnh;
        this.maSP = maSP;
        this.tenSp = tenSp;
        this.soLuong =soLuong;
        
    }  
}
function setLocalStorage(key, data){
    window.localStorage.setItem(key,JSON.stringify(data));
}
//  lấy giá trị từ local
function getDataLocalStorage(){
   itemCar = JSON.parse(window.localStorage.getItem(key));
}

// phương thức tính tổng tiền 
function tongTien(){
    let tongtien=0;
    let number =1;
    //  phương thức tính tổng tiền xe này là demo 
    //  tổng tiền chịu ảnh hưởng bởi nhiều yếu tố, bỏ qua các yếu tố để xd phương thức dễ dàng hơn
    // ĐỊNH DẠNG TÊN SẼ ĐƯỢC KHẮC PHỤ SAU: TÊN NHẬP VÀO CHUỖI DC ÉP IN HOA, XÓA BỎ KHAONGR TRẮNG CÁC KIỂU
    getDataLocalStorage();
    for(let i =0; i<  itemCar.length; i++){
        if(itemCar[i].tenSp == 'VINFAST PRESIDENT' ){
            number = 1929E6;
         }
        else if(itemCar[i].tenSp == 'VINFAST VF e34'){
            number = 690E6;
        }
       else if(itemCar[i].tenSp == 'VINFAST LUX A2.0'){
            number += 881695E3;
        }
        tongtien = number * itemCar[i].soLuong;
        myArrayTongTien.push(tongtien.toLocaleString("it-IT"));
        tongtien=0;
    }
    return myArrayTongTien
}  
//  hàm khởi tạo
function init(){
    if(window.localStorage.getItem('item_car') == null){
       let sanpham01 = new sanPham('../img/AH04.png','HDTK210L','VINFAST FADIL', 4)
       let sanpham02 = new sanPham('../img/VFe34.png','HDTK210K','VINFAST VF e34', 7) 
       let sanpham03 = new sanPham('../img/2LuxSA.png','HDTK210N','VINFAST LUX A2.0',10)
       myArrayTongTien.push(sanpham01.tongTien(),sanpham02.tongTien(),sanpham03.tongTien()) 
       itemCar.push(sanpham01,sanpham02,sanpham03);
       setLocalStorage(key,itemCar);
      
    }else{
        getDataLocalStorage()
    }
}
//  hiện thị thông tin
let show = document.getElementById('sale')
function showSP(){
    getDataLocalStorage()
    tongTien()
    for(let  i= 0; i< itemCar.length; i++){
        show.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
            <td>${itemCar[i].maSP}</td>
            <td>${itemCar[i].tenSp}</td>
            <td>${itemCar[i].soLuong}</td>
            <td>${myArrayTongTien[i]}</td>
        </tr>
        `
    }
}
//  TÌM KIẾM SẢN PHẨM
function search() {
    let value_name = document.getElementById('search').value;
    let up_value_name = value_name.toUpperCase();
    let txtValue = '';
    //  định dạng giá trị nhập vào không phân biệt bởi dấu cách
    let tr = show.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        //  duyệt qua hết thẻ tr. 
        //  mình muốn tìm thông tin thông qua name thì phải sử dựng cột name tương ứng với td thứ 1.
        let td = tr[i].getElementsByTagName('td')[3];
        //   nếu có giá trị(data)
        if (td) {
            //  muốn lấy giá trị thằng td thì phải làm 1 trong các cách thức sau:
            // innerText, textContent
            // this.text() trong jquery
            txtValue = td.innerText || td.textContent;
            if (txtValue.toUpperCase().indexOf(up_value_name) > -1) {
                tr[i].style.display = '';
            }
            else {
                tr[i].style.display = 'none';
            }
        }
    }
}
//  SẮP XẾP THÔNG TIN THEO TÊN
function sortABC() {
    itemCar.sort(function (a, b) {
        let nameA = a.tenSp.toUpperCase();
        let nameB = b.tenSp.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    $('#sale tr').remove();
    for (let i = 0; i < itemCar.length; i++) {
        show.innerHTML += `
            <tr> 
                <td>${i+1}</td>
                <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
                <td>${itemCar[i].maSP}</td>
                <td>${itemCar[i].tenSp}</td>
                <td>${itemCar[i].soLuong}</td>
                <td>${myArrayTongTien[i]}</td>
            </tr>
            `;
    }
}
//  sắp xếp theo số lượng cao => thấp
function sortHeight() {

    itemCar.sort(function (a, b) {
        return b.soLuong - a.soLuong;
    })
    $('#sale tr').remove();
    for (let i = 0; i < itemCar.length; i++) {
        show.innerHTML += `
            <tr> 
                <td>${i+1}</td>
                <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
                <td>${itemCar[i].maSP}</td>
                <td>${itemCar[i].tenSp}</td>
                <td>${itemCar[i].soLuong}</td>
                <td>${myArrayTongTien[i]}</td>
            </tr>
        `;
    }
}
//  sắp xếp số lượng thấp => cao
function sortLow() {
    itemCar.sort(function (a, b) {
        return a.soLuong - b.soLuong;
    })
    $('#sale tr').remove();
    for (let i = 0; i < itemCar.length; i++) {
        show.innerHTML += `
            <tr> 
                <td>${i+1}</td>
                <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
                <td>${itemCar[i].maSP}</td>
                <td>${itemCar[i].tenSp}</td>
                <td>${itemCar[i].soLuong}</td>
                <td>${myArrayTongTien[i]}</td>
            </tr>
        `;
    }
}
//sắp xếp tiền cao => thấp
function sortHeightMoney() {
    myArrayTongTien.sort(function (a, b) {
        return b - a;
    })
    $('#sale tr').remove();
    for (let i = 0; i < itemCar.length; i++) {
        show.innerHTML += `
            <tr> 
                <td>${i+1}</td>
                <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
                <td>${itemCar[i].maSP}</td>
                <td>${itemCar[i].tenSp}</td>
                <td>${itemCar[i].soLuong}</td>
                <td>${myArrayTongTien[i]}</td>
            </tr>
        `;
    }
}
//sắp xếp tiền thấp => cao
function sortLowMoney() {
    myArrayTongTien.sort(function (a, b) {
        return a - b;
    })
    $('#sale tr').remove();
    for (let i = 0; i < itemCar.length; i++) {
        show.innerHTML += `
            <tr> 
                <td>${i+1}</td>
                <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
                <td>${itemCar[i].maSP}</td>
                <td>${itemCar[i].tenSp}</td>
                <td>${itemCar[i].soLuong}</td>
                <td>${myArrayTongTien[i]}</td>
            </tr>
        `;
    }
}
 function run(){
     init()
     showSP();
 }
 run();