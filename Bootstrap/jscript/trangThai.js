const key = 'TTSanPham';
let show = document.getElementById('sale')
let show01 = document.getElementById('sale01')
// 4 bẳng trậng thái đơn hàng
let showKH = document.getElementById('khachHang');
let showsp = document.getElementById('sanpham');
let DHdaHuy = document.getElementById('DHdaGiao');
let DHdaGiao = document.getElementById('DHdaHuy');
// 
//  show bảng thông tin khách hàng mua
let khachHang_mua = document.getElementById('KhachHang_Mua');
let show04 = document.getElementById('sale04')
// 
let arraySanPham  =[];
let arrVanChuyen =[];
let index = -1
let number =-1
let checkMaKH = -1;
// 
class SanPhams{
    constructor(hinhAnh, maSP, tenSp, giaTien){
        this.hinhAnh = hinhAnh;
        this.maSP = maSP;
        this.tenSp = tenSp;
        this.giaTien = giaTien;
    }  
}
// localStorage.removeItem('KhachHang_MuaHang')
//  hàm khởi tạo
function init(){
    if(window.localStorage.getItem('TTSanPham') == null){
       let sanpham01 = new SanPhams('../img/AH04.png','HDTK210L','VINFAST FADIL', 1200000000)
       let sanpham02 = new SanPhams('../img/VFe34.png','HDTK210K','VINFAST VF e34',896000000 );
       arraySanPham.push(sanpham01,sanpham02);
       setLocalStorage(key, arraySanPham);
      
    }else{
        getDataLocalStorage(key, number)
    }
}
//  hiện thị thông tin - trangThaiMua.html
function showSP(){
    if(index == -1){
        getDataLocalStorage(key, number)
        $('#sale tr').remove()
        for(let  i= 0; i< arraySanPham.length; i++){
            show.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td> <img src='${arraySanPham[i].hinhAnh}' width='100px' height='70px'></td>
                <td>${arraySanPham[i].maSP}</td>
                <td>${arraySanPham[i].tenSp}</td>
                <td>${arraySanPham[i].giaTien}</td>
                <td class="text-center"><a href="javascript:;" onclick="xemThongTin(${i})" > <i class="fa fa-address-card-o"  aria-hidden="true"></i><span class="px-4"> Xem ngay </span></a></td>
                <td class="text-center"><a href="javascript:;"  onclick="xacNhanDonHang(${i})"> <i class="fa fa-check-square-o" aria-hidden="true"></i><span class="px-4"> Xác nhận </span></a></td>
                <td class="text-center "><a href="" onclick='xoaSP(${i})'><i class="fa fa-window-close-o text-danger" aria-hidden="true"></i></a></td>
            </tr>
            `;
        }
    }if(index==1){ 
        getDataLocalStorage('TTVanChuyen', 1);
        $('#sale01 tr').remove()
        for(let  i= 0; i< arrVanChuyen.length; i++){
            show01.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td> <img src='${arrVanChuyen[i].hinhAnh}' width='100px' height='70px'></td>
                <td>${arrVanChuyen[i].maSP}</td>
                <td>${arrVanChuyen[i].tenSp}</td>
                <td>${arrVanChuyen[i].giaTien}</td>
                <td class="text-center"><a href="" onclick="xemThongTin(${i})" > <i class="fa fa-address-card-o"  aria-hidden="true"></i><span class="px-4"> Xem ngay </span></a></td>
                <td class="text-center"><a href=""  onclick="xacNhanDonHang(${i})"> <i class="fa fa-check-square-o" aria-hidden="true"></i><span class="px-4"> Xác nhận </span></a></td>
                <td class="text-center "><a href="" onclick='xoaSP(${i})'><i class="fa fa-window-close-o text-danger" aria-hidden="true"></i></a></td>
            </tr>
            `;
        }
        
    }
    if(index ==4){
        getDataLocalStorage('KhachHang_MuaHang', 4);
        // alert(arrayKhachHang[checkMaKH])
        $('#sale04 tr').remove()
        for(let i =0; i< arrayKhachHang.length; i++){
            show04.innerHTML = `
            <tr>
                <td>${arrayKhachHang[checkMaKH+1].maKH}</td>
                <td>${arrayKhachHang[checkMaKH].hoTen}</td>
                <td>${arrayKhachHang[checkMaKH].CMND}</td>
                <td>${arrayKhachHang[checkMaKH].SDT}</td>
                <td>${arrayKhachHang[checkMaKH].Email}</td>
               
            </tr>
            `
        }
        // alert(arrayKhachHang[i-1].CMND)
       
      
    }

   
}
function setLocalStorage(key, data){
    window.localStorage.setItem(key,JSON.stringify(data));
}
function getDataLocalStorage(data, number){
    switch(number){
        case -1:
            arraySanPham = JSON.parse(window.localStorage.getItem(data));
            break;
        case 1 :
            arrVanChuyen = JSON.parse(window.localStorage.getItem(data));
            break;
            //  case 2 và 3 chưa chỉnh sửa
        case 2 :
            tinhtrangVC = JSON.parse(window.localStorage.getItem(data));
            break;
        case 3 :
            tinhtrangVC = JSON.parse(window.localStorage.getItem(data));
            break;
            //  case 4 để lấy dữ liệu thông tin khách hàng mua
        case 4: 
            arrayKhachHang =  JSON.parse(window.localStorage.getItem(data));
        break;
    }
  
}
//  phương thức aad  sản phẩm 
// khi khách hàng bấm nút mua hàng ở file thanhToan_UaDai.html

//  điều hương
// document.getElementById('datMua').addEventListener('click', function(){
//     window.location.href = 'gioHang.html'
// })

function addSanPham(){
    //    1.kiểm tra mã sản phẩm không được trùng
    //    2. kiểm tra tên sản phẩm bằng những gía trị gì để từ đó suy ra được ảnh mình cần lưu
    //    2. add thông tin
    //    lẽ ra mã sản phẩm phải được định nghãi từ ngoài sản ohaamr
    //  nhưng tránh mất thời gian, maSP mình sẽ cho radom cho nhanh
    getDataLocalStorage(key, number)
        let maSp = Math.random().toString(36).substr(2, 8).toUpperCase()
        let tenSP = document.getElementById('mauxe').innerHTML;
        let tongTien = document.getElementById('donGia').innerHTML
        let sanpham = new SanPhams('../img/AH04.png', maSp, tenSP,tongTien);
        arraySanPham.push(sanpham)
        setLocalStorage(key, arraySanPham);  
        window.location.href = 'thanhToan.html'
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
function xacNhanDonHang(i){
    index=i
    getDataLocalStorage(key, -1)
    getDataLocalStorage('TTVanChuyen', 1)
    arrVanChuyen.push(arraySanPham[i]);
    setLocalStorage('TTVanChuyen', arrVanChuyen);
    arraySanPham.splice(i, 1);
    setLocalStorage(key, arraySanPham);
}
function xoaSP(i){
     if(confirm('Bạn chắc chắn muốn xóa')){
         alert(i)
        getDataLocalStorage(key, -1)
        getDataLocalStorage('KhachHang_MuaHang', 4)
        arraySanPham.splice(i, 1);
        arrayKhachHang.splice(i,1)
        setLocalStorage(key, arraySanPham);
        setLocalStorage('KhachHang_MuaHang', arrayKhachHang);
        $('#sale tr').remove();
        // window.location.reload();
        showSP();
     }else{
        return false
     }
}
//  show thông tin khách hàng
function showTTKhachHang(i){
    getDataLocalStorage('KhachHang_MuaHang', 4);
    $('#sale04 tr').remove()
    show04.innerHTML += `
    <tr>
        <td>${arrayKhachHang[i-1].maKH}</td>
        <td>${arrayKhachHang[i-1].hoTen}</td>
        <td>${arrayKhachHang[i-1].CMND}</td>
        <td>${arrayKhachHang[i-1].SDT}</td>
        <td>${arrayKhachHang[i-1].Email}</td>
        <td>${i-1}</td>
        </tr>
    `
 
}
//  xem thong tin khach hang mua xe
function xemThongTin(i){
    showsp.style.display = 'none'
    showKH.style.display = 'none'
    DHdaGiao.style.display = 'none'
    DHdaHuy.style.display = 'none'
    khachHang_mua.style.display = 'table'
    checkMaKH = i;
    index =4
    showSP()
    
}


//  các hàm xử lý ngoài thẻ html
document.getElementById('xacnhan').addEventListener('click', function(){
    showsp.style.display = 'table'
    showKH.style.display = 'none'
    DHdaGiao.style.display = 'none'
    DHdaHuy.style.display = 'none'
    khachHang_mua.style.display = 'none'
    index = -1
    showSP();
})
document.getElementById('dangvanchuyen').addEventListener('click', function(){
    showsp.style.display = 'none'
    showKH.style.display = 'table'
    DHdaGiao.style.display = 'none'
    DHdaHuy.style.display = 'none'
    khachHang_mua.style.display = 'none'
    // number =1
    // getDataLocalStorage('TTVanChuyen', number);
    index = 1;
    showSP();
    
})
document.getElementById('dagiao').addEventListener('click', function(){
    showsp.style.display = 'none'
    showKH.style.display = 'none'
    DHdaGiao.style.display = 'table'
    DHdaHuy.style.display = 'none'
    khachHang_mua.style.display = 'none'

})
document.getElementById('dahuy').addEventListener('click', function(){
    showsp.style.display = 'none'
    showKH.style.display = 'none'
    DHdaGiao.style.display = 'none'
    DHdaHuy.style.display = 'table'
    khachHang_mua.style.display = 'none'
})
 function run(){
     init()
     showSP();
    //  return false
    //  addSanPham()
 }
 run()
