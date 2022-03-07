function getDataLocalStorage(){
    arraySanPham = JSON.parse(window.localStorage.getItem('TTSanPham'));
 }

let apDungs = document.getElementById('maGiamGia');
//  ĐỊNH NGHĨA SẴN MÃ GIẢM GIÁ
let myGiamGia = ['HKL0949ON', 'JKFPSKSUU', '097KAJOPL', 'JSOS009PS', 'LLASPOER0']
// 
let giaNiemYet = document.getElementById('giaNiemYet')
let uaDai = document.getElementById('uaDai');
let giaDonHang = document.getElementById('donGia');
// 1 thẻ div - khi voucher không đúng thì hiện thị voucher không hợp lệ
let checkvouCher = document.getElementById('vouCher');
let e_voucher = document.getElementById('e-voucher')
//  demo 1 sản phẩm có các giá trị ban đầu là const
//  phát triển đề tài thì phải tạo các trang chi tiết khác để mua
//  từ đó mới tạo mảng dữ liệu để lưu thông tin
let vouCher = 0;
let giaBD = 1552E6;
let giaUaDai = 425925E3;
let tongGia = giaBD - giaUaDai;
let check = true;
//  check voucher=> suy ra giá
function checkGia() {
    for (let i = 0; i < myGiamGia.length; i++) {
        check = true
        if (apDungs.value == myGiamGia[i]) {
            vouCher = 5E7
            break;
        } else {
            check = false;
        }
    }
    if (check) {
        tongGia -= vouCher
        e_voucher.innerHTML = vouCher.toLocaleString('it-IT')
    }
    else {
        checkvouCher.innerHTML = 'E-VouCher không hợp lệ'
    }
    tongGia -= vouCher;
    //  khi bấm vào ô áp dụng thì nó sẽ định nghĩa lại các giá trị của giá 
    giaNiemYet.innerHTML = giaBD.toLocaleString('it-IT')
    uaDai.innerHTML = giaUaDai.toLocaleString("it-IT");
    giaDonHang.innerHTML = tongGia.toLocaleString("it-IT")
}
//  nếu không bấm vào ô áp dụng thì các giá trị vẫn hiện thị như thường
// giaNiemYet.innerHTML = giaBD.toLocaleString('it-IT')
// uaDai.innerHTML = giaUaDai.toLocaleString("it-IT");
// giaDonHang.innerHTML = tongGia.toLocaleString("it-IT")





//  thay đổi tỉnh thành
$(document).ready(function () {
    let tinhThanhs = document.getElementById('tinhThanh');
    let chonHuyens = document.getElementsByClassName('chonHuyen');
    let showrooms = document.getElementById('showroom');

    $('#tinhThanh').change(function () {
        if (tinhThanhs.value == 'Hà Nội') {
            $('.HCM').attr('style', 'display: none !important');
            $('.HN').attr('style', 'display: block !important');
        } else {
            $('.HCM').attr('style', 'display: block !important');
            $('.HN').attr('style', 'display: none !important');
        }

    })
    //  còn nhiều trường hợp nữa
    // $('.chonHuyen').change(function(){
    //     if(chonHuyens.v =='Quận Long Biên'){
    //         alert('jj')
    //         $('.HCM01').attr('style','display: none !important');
    //         $('.HN01').attr('style','display: block !important');
    //     }
    //     else{
    //         alert('ê')
    //         $('.HCM01').attr('style','display: block !important');
    //         $('.HN01').attr('style','display: none !important');

    //     }
    // })

    //  tùy từng mã mà giảm n tiền 
    // nhưng giờ làm 1 cái mã đã rồi có thời gian phát triển tiếp


})
//  slie img
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}