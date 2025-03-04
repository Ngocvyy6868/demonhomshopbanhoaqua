let slide_danhgia = document.querySelector('.danhgia_1 .slide_danhgia');
            let comment = document.querySelectorAll('.danhgia_1 .slide_danhgia .comment');
            let dot_comment = document.querySelectorAll('.danhgia_1 .dot_comment li');
            let pre_comment = document.getElementById('pre_comment');
            let next_comment = document.getElementById('next_comment');

            let active_comment = 0;
            let lengthItems = comment.length;
            // function tạo nút chuyển tới các ảnh khác
            next_comment.onclick = function(){
                // active += 1;
                if(active_comment + 1 > lengthItems)
                {
                    active_comment = 0;
                }
                else{
                    active_comment = active_comment + 1;
                }
                reloadSlider();
            }
            // function tạo nút chuyển lùi các ảnh khác
            pre_comment.onclick = function(){
                if(active_comment - 1 <0){
                    active_comment = lengthItems;
                }
                else{
                    active_comment = active_comment -1;
                }
                reloadSlider();
            }
            // biến tạo nút refesh lại slide
            let refreshSlider = setInterval(()=> {next_comment.click()},5000);
            // function chuyển slide
            function reloadSlider(){
                let checkleft = comment[active_comment].offsetLeft;
                slide_danhgia.style.left = -checkleft + 'px';
                let lastActiveDot = document.querySelector('.danhgia_1 .dot_comment li .active_comment');
                lastActiveDot.classList.remove('active_comment');
                dot_comment[active_comment].classList.add('active_comment');
                clearInterval(refreshSlider);
                refreshSlider = setInterval(()=> {next_comment.click()},5000);
            }
            // chuyển nút dots bên dưới tương ứng với mỗi slide
            dot_comment.forEach((li, key)=>{
                li.addEventListener('click',function(){
                    active_comment = key;
                    reloadSlider();
                })
            })