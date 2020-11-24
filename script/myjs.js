var mybutton = document.getElementById("myBtn");

// Ketika User Scroll ke bawah sebanyak 20px Buttonnya akan muncul
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//ketika user mengklik Buttonnya maka akan otomatis ke scroll ke paling atas page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}