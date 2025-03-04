document.getElementById("showgiohang").style.display="none";
        document.getElementById("gioithieu").style.display="block";
        document.getElementById("nhanvien").style.display="none";
        document.getElementById("muctieu").style.display="none";
        document.getElementById("ykienkhac").style.display="none";
        document.getElementById("chinhsach").style.display="none";
        let x = document.getElementById("gioithieu");
        let y =  document.getElementById("nhanvien");
        let z = document.getElementById("muctieu");
        let s =  document.getElementById("ykienkhac");
        let a = document.getElementById("chinhsach");
        function showgioithieu(){
            if(x.style.display == "block")
            {
                x.style.display = "block";
            }
            else{
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
                s.style.display = "none";
                a.style.display = "none";
            }   
        }
        function showaboutus(){
            if(y.style.display == "block")
            {
                y.style.display = "block";
            }
            else{
                y.style.display = "block";
                x.style.display = "none";
                z.style.display = "none";
                s.style.display = "none";
                a.style.display = "none";
            }
        }
        function showmuctieu(){
            if(z.style.display == "block")
            {
                z.style.display = "block";
            }
            else{
                z.style.display = "block";
                y.style.display = "none";
                x.style.display = "none";
                s.style.display = "none";
                a.style.display = "none";
            }
        }
        function showykien(){
            if(s.style.display == "block")
            {
                s.style.display = "block";
            }
            else{
                s.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
                x.style.display = "none";
                a.style.display = "none";
            }
        }
        function showchinhsach(){
            if(a.style.display == "block")
            {
                a.style.display = "block";
            }
            else{
                a.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
                x.style.display = "none";
                s.style.display = "none";
            }
        }