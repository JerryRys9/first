
const nameContact = document.querySelector('.addtext');
const nametz = document.querySelector('.addtz');
const namephoto = document.querySelector('.addphoto');
const inviz = document.querySelector('.inviz');
const area = document.querySelector(".area");
const play = document.querySelector('.play');
const rolik = document.querySelector('.rolikplay');
const but = document.querySelector('.but');

const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

let unikumId = 0;


$(document).ready(function(){
   $('.slider').slick({
           infinite: true,
           slidesToShow: 3,
           slidesToScroll: 1,
           dots : true,
           arrows : false,
           autoplay: true,
           autoplaySpeed: 3000,
           responsive: [
               {
                   breakpoint: 1024,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                   }
               },
               {
                   breakpoint: 600,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                   }
               }
           ]
   }
   );
});





but.addEventListener('click', ()=>{
    if(rolik.paused) {
    play.style.display = 'none';
    rolik.play();
}
  else  {
        play.style.display = 'block';
        rolik.pause();
}
});



fileSelect.addEventListener("click", function (e) {
    if (fileElem) {
        fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
    inviz.style.display = 'block';
    namephoto.style.display = 'block';
    if (!this.files.length) {
        fileList.innerHTML = "<p>Прикрепите файл</p>";        
    } else {       
        const list = document.createElement("div");
        fileList.appendChild(list);
        for (let i = 0; i < this.files.length; i++) {
            const li = document.createElement("div");
            const del = document.createElement("div");
            list.appendChild(li);
            li.appendChild(del);
            del.classList.add('del');
            li.classList.add('foo');
            del.id = unikumId;
            unikumId++;
            del.addEventListener("click", function (e) {
                console.log(e.srcElement.id);
                list.removeChild(e.srcElement.parentElement);
                if (!document.querySelector('.foo')) {
                    namephoto.style.display = 'none';
                    test();
                }
            }, false);

            const img = document.createElement("img");
            img.src = URL.createObjectURL(this.files[i]);
            img.height = 100;
            img.onload = function() {
                URL.revokeObjectURL(this.src);
            }
            li.appendChild(img);
            const info = document.createElement("p");
            info.innerHTML = this.files[i].name;
            info.classList.add('doo');
            li.appendChild(info);
        }
    }
}

const fileSelect1 = document.getElementById("fileSelect1"),
    fileElem1 = document.getElementById("fileElem1"),
    fileList1 = document.getElementById("fileList1");

fileSelect1.addEventListener("click", function (e) {
    if (fileElem1) {
        fileElem1.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem1.addEventListener("change", handleFiles1, false);

function handleFiles1() {
    inviz.style.display = 'block';
    nametz.style.display = 'block';
    if (!this.files.length) {
        fileList1.innerHTML = "<p>Прикрепите файл</p>";
    } else {
        const list = document.createElement("div");
        fileList1.appendChild(list);
        for (let i = 0; i < this.files.length; i++) {
            const li = document.createElement("div");
            const del = document.createElement("div");
            list.appendChild(li);
            li.classList.add('foo1');
            del.id = unikumId;
            unikumId++;
            del.addEventListener("click", function (e) {
                console.log(e.srcElement.id);
                list.removeChild(e.srcElement.parentElement);
                if (!document.querySelector('.foo1')) {
                    nametz.style.display = 'none';
                    test();
                }
            }, false);

            const img = document.createElement("img");
            img.src = "icon/file.png";
            img.height = 20;
            img.onload = function() {
                URL.revokeObjectURL(this.src);
            }
            li.appendChild(img);
            const info = document.createElement("span");
            info.innerHTML = " " + this.files[i].name;
            info.classList.add('doo');
            li.appendChild(info);
            li.appendChild(del);
            del.classList.add('del1');
        }
    }
}



area.oninput = function() {
    if (area.value.trim()) {
        nameContact.style.display = 'block';
        document.querySelector(".way").innerHTML = area.value
        inviz.style.display = 'block';
    }
    else {
    document.querySelector(".way").innerHTML = 'Опишите товар';
    test();
}
};

function test () {
    if (!(document.querySelector('.foo1')) && !(document.querySelector('.foo')) && !(area.value.trim())) {
        inviz.style.display = 'none';
        console.log('yes');
    }
    else console.log('no');
}