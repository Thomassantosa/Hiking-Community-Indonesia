$(document).ready(function()
{
    //Melihat Password
    $("#lihatPw").click(function()
    {
        if($(this).is(':checked'))
        {
            $("#pw").attr('type', 'text');
        } else {
            
            $("#pw").attr('type', 'password');
        }
    });
    
    $("#lihatPw2").click(function()
    {
        if($(this).is(':checked'))
        {
            $("#pw2").attr('type', 'text');
        } else {
            
            $("#pw2").attr('type', 'password');
        }
    }); 
    






    //Keterangan buat akun berhasil
    $("#submit").click(function()
    {
        let akunSukses = true;
        let namaSalah = false;
        let emailSalah = false;
        let nama = document.getElementById("nama").value;
        let email = document.getElementById("email").value;


        if (nama == "")
        {
            akunSukses = false;
            $("#infoNama").html("Nama Pengguna Tidak Valid");
        }

        
        if (namaSalah)
        {
            akunSukses = false;
            $("#infoEmail").html("Email Tidak Valid");
        }



        //Dicek Berhasil tidak nya
        if (akunSukses)
        {
            alert("Akun Berhasil Dibuat");
        }
    })

});
