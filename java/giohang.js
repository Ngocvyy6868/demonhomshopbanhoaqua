document.getElementById("showgiohang").style.display="none";

let giohang = new Array();
// 

function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var tensp = boxsp[0].children[1].children[0].innerText;
    var gia = boxsp[0].children[1].children[1].children[1].innerText;
    var soluong = parseInt(boxsp[1].children[0].value);
    var sp =new Array(hinh, tensp, gia, soluong);

    var kt = 0;
    for(let i = 0; i < giohang.length; i++)
    {
        if(giohang[i][1] == tensp)
        {
            kt = 1;
            soluong += parseInt(giohang[i][3]);
            giohang[i][3] = soluong;
            break;
        }
    }
    if(kt == 0){
        giohang.push(sp);
    }
    console.log(giohang);
    showcountsp();

    
}
function showcountsp(){
    document.getElementById("countsp").innerHTML = giohang.length;
}
function showmycart(){
    var ttgh = "";
    var tong = 0;
    for(let i = 0; i <giohang.length; i++){
        var thanhtien = giohang[i][2]*giohang[i][3];
        tong += thanhtien;
        ttgh += '<tr>'+
        '<td>'+(i +1 )+'</td>'+
        '<td><img src="'+giohang[i][0]+'"alt=""></td>'+
        '<td>'+giohang[i][1]+'</td>'+
        '<td>'+giohang[i][2]+'</td>'+
        '<td>'+giohang[i][3]+'</td>'+
        '<td>'+
        '<div>'+thanhtien+'</div>'+
        '</td>'+
        '<td>'+
        '<button onclick="xoasanpham(this)">Xóa</button>'+
        '</td>'+
        '</tr>';
    }
    ttgh += '<tr>'+
    '<th colspan="5">Tổng đơn hàng</th>'+
    '<th colspan="2">'+
    '   <div>'+tong+'</div>'+
    '</th>'+
    '</tr>';
    document.getElementById("cart").innerHTML = ttgh;
    sessionStorage.setItem("giohang",JSON.stringify(giohang));
}
function xoasanpham(x){
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    tr.remove();
    for(let i = 0; i <giohang.length; i++)
    {
        if(giohang[i][1] == tensp){
            giohang.splice(i,1);
        }
    }
    showmycart();
    showcountsp();
}
function xoatatca(){
    giohang = [];
    showmycart();
    showcountsp();
}
function showgiohang(){
    var x = document.getElementById("showgiohang");
    if(x.style.display == "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
    showmycart();
}
function showthanhtoan(){
    var gh = sessionStorage.getItem("giohang");
    var giohang  = JSON.parse(gh);
    var ttgh = "";
    var tong = 40000;
    if (giohang && giohang.length > 0) {
        for (let i = 0; i < giohang.length; i++) {
            var thanhtien = giohang[i][2] * giohang[i][3];
            tong += thanhtien;
            ttgh += '<tr>' +
                '<td>' + (i + 1) + '</td>' +
                '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
                '<td>' + giohang[i][1] + '</td>' +
                '<td>' + giohang[i][2] + '</td>' +
                '<td>' + giohang[i][3] + '</td>' +
                '<td>' +
                '<div>' + thanhtien + '</div>' +
                '</td>' +
                '</tr>';
        }
        ttgh += '<tr>' +
            '<th colspan="5">Tổng đơn hàng</th>' +
            '<th>' +
            '   <div>' + tong + '</div>' +
            '</th>' +
            '</tr>';
    } else {
        ttgh = '<tr><td colspan="6">Giỏ hàng đang trống</td></tr>';
    }
    document.getElementById("cart").innerHTML = ttgh;
}
function dongydathang(){
    var gh = sessionStorage.getItem("giohang");
    var giohang  = JSON.parse(gh);
    var ttnh =  document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var dienthoai = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;

    var nguoinhan = new Array(hoten, diachi, dienthoai, email);
    if (hoten === '' || diachi === '' || dienthoai === '' || email === '') {
        alert('Vui lòng nhập đầy đủ thông tin.');
        return false;
    }
    if (giohang && giohang.length <= 0)
    {
        alert('Bạn cần thêm hàng vào giỏ');
        return false;
    }
    sessionStorage.setItem("nguoinhan",JSON.stringify(nguoinhan));
    window.location.assign("donhang.html");
}
function showthongtinnguoinhan(){
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);

    var tt = '<tr>'+
    '<td width="20%">Họ tên</td>'+
    '<td style="height: 30px;">'+thongtin[0]+'</td>'+
    '</tr>'+
    '<tr>'+
    '<td>Địa chỉ</td>'+
    '<td style="height: 30px;">'+thongtin[1]+'</td>'+
    '</tr>'+
    '<tr>'+
    '<td>Điện thoại</td>'+
    '<td style="height: 30px;">'+thongtin[2]+'</td>'+
    '</tr>'+
    '<tr>'+
    '<td>Email</td>'+
    '<td style="height: 30px;">'+thongtin[3]+'</td>'+
    '</tr>'+
    '<tr>'+
    '<td>Phí Vận Chuyển</td>'+
    '<td style="height: 30px;">40.000đ</td>'+
    '</tr>';
    document.getElementById("thongtinnhanhang").innerHTML = tt;
}
// 
function addGioHang() {

    
    // Hiển thị thông báo thêm vào giỏ hàng 
    alert("Đã thêm vào giỏ hàng thành công! ");

}
// tắt nút giỏ hàng
function tatgiohang()
{
    document.getElementById('showgiohang').style.display='none';
}