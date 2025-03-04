// ------------------------ slide---------------------------------
let items = document.querySelectorAll('.slider-main .list-main .item-text');
let next = document.getElementById('next-one');
let prev = document.getElementById('prev-one');
let thumbnails = document.querySelectorAll('.thumbnail-main .item-text');

let countItem = items.length;
let itemActive = 0;


//  Khi nút next được click, tăng giá trị itemActive lên 1. Nếu giá trị vượt quá số lượng ảnh (countItem) thì quay về 0 (ảnh đầu tiên). 
// Sau đó gọi hàm showSlider() để hiển thị ảnh tương ứng.
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// Khi nút prev được click, giảm giá trị itemActive xuống 1. Nếu giá trị nhỏ hơn 0 thì chuyển sang ảnh cuối cùng (countItem - 1).
//  Sau đó gọi hàm showSlider() để hiển thị ảnh tương ứng.
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// Tạo một khoảng thời gian 5000 mili giây (5 giây) để tự động gọi hàm next.click()
// nghĩa là tự động chuyển sang ảnh tiếp theo sau mỗi 5 giây.
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){

    let itemActiveOld = document.querySelector('.slider-main .list-main .item-text.active-main');
    let thumbnailActiveOld = document.querySelector('.thumbnail-main .item-text.active-main');
    itemActiveOld.classList.remove('active-main');
    thumbnailActiveOld.classList.remove('active-main');


    items[itemActive].classList.add('active-main');
    thumbnails[itemActive].classList.add('active-main');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
// Duyệt qua từng ảnh thu nhỏ (thumbnails.forEach(...)) và thêm sự kiện click cho chúng:
// Khi một ảnh thu nhỏ được click, thay đổi giá trị itemActive thành chỉ số của ảnh thu nhỏ đó 
// và gọi hàm showSlider() để hiển thị ảnh tương ứng.

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
// -----------popup-------------
function run()
{
   document.getElementById('popup').style.display='none';
}
// 
