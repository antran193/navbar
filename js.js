



var dro = document.getElementsByClassName('drolist');
for (var i = 0; i < dro.length; i++) {
    dro[i].addEventListener("click", function () {
        // this.classList.toggle("active");
        var drocontent = this.nextElementSibling;
        if (drocontent.style.display === "block") {
            drocontent.style.display = "none";

        }
        else {
            drocontent.style.display = "block";

        }
    });

}

// var drolist = dro.getElementsByClassName('drocontain');
// for (var i = 0; i < dro.length; i++) {
//     dro[i].addEventListener("click", function () {
//         var drolist =this.nextSibling;
//         if (drolist.style.display[i] === "block") {
//             drolist.style.display[i] = "none";
//         }
//         else {
//             drolist.style.display[i] = "block";
//         }
//     })
// }

function change() {
    var x = document.getElementById('right');
    var y = document.getElementById('left');
    // var x = document.getElementsByClassName("fa-angle-right");
    // var y = document.getElementsByClassName("fa-angle-down");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }
    else {
        x.style.display = "none";
        y.style.display = "block";
    }
}
function close1() {
  
    var y = document.getElementById('navbarid')
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    // var c = document.getElementsByClassName('opennavdiv');
    // var x = c.classList.add('opennavdivid')
    document.getElementById('opennavdivid').style.display="none";
    var x = document.getElementById('opennavdivid');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  
}

function open1(){
    var x = document.getElementById('opennavdivid');

    var y = document.getElementById('navbarid')
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}





// function drocom()
// {
//     document.getElementById('listcom').classList.toggle('show');
//     document.getElementById('drolistcom').style.height="100px"
// }

// window.onclick = function (event) {
//     if (!event.target.matches('.drocom1')) {
//         var drodowns = document.getElementsByClassName('listcomcl');
//         var i;
//         for (i = 0; i < drodowns.length; i++) {
//             var opendrodown = drodowns[i];
//             if (opendrodown.classList.contains('show')) {
//                 opendrodown.classList.remove('show');
//                 document.getElementById('drolistcom').style.height = '35px';
//             }
//             else {
//                 opendrodown.classList.add('show');
//                 document.getElementById('drolistcom').style.height = '100px';
//             }
//         }

//     }
// }

// function drocom()
// {
//     document.getElementById('listcom').classList.toggle('show');
//     // var x =document.getElementById('listcom');
//     // if(x.style.display==="none")
//     // {
//     //     x.style.display="block";
//     // }
//     // else{
//     //     x.style.display="none";
//     // }
//     document.getElementById('drolistcom').style.height='100px';  
// }

// function demo(x) {
//     x.classList.toggle("fa-angle-left");
// }