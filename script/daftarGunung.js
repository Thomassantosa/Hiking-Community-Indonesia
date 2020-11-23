$(document).ready(function()
{
    var i = 0;
    var img = new Array( "bg.jpg", "bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jp  g");
   
   function changeBg() {
    $('#headerDaftarGunung').css("background-image", "url(images/" + img[i] + " )"); 
    i++;
   
   if(i == img.length) {
    i = 0;
    }
   
   setTimeout(changeBg, 5000);
    }
   
   changeBg();

    //====================================
    //Script untuk Article Daftar Gunung
    //====================================

    //Hide Awal di Load
    $(".rute , .biaya").hide();


    //Function menampilkan Rute atau Biaya
    $("#ruteG1").click(function()
    {$(".descRute1").toggle(1000);});
    $("#biayaG1").click(function()
    {$(".descBiaya1").toggle(1000);});

    $("#ruteG2").click(function()
    {$(".descRute2").toggle(1000);});
    $("#biayaG2").click(function()
    {$(".descBiaya2").toggle(1000);});
    
    $("#ruteG3").click(function()
    {$(".descRute3").toggle(1000);});
    $("#biayaG3").click(function()
    {$(".descBiaya3").toggle(1000);});
    
    $("#ruteG4").click(function()
    {$(".descRute4").toggle(1000);});
    $("#biayaG4").click(function()
    {$(".descBiaya4").toggle(1000);});
    
    $("#ruteG5").click(function()
    {$(".descRute5").toggle(1000);});
    $("#biayaG5").click(function()
    {$(".descBiaya5").toggle(1000);});
    
    
});
