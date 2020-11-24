$(document).ready(function()
{
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
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
    
    //Yang Konfirmasi Password
    $("#lihatPw2").click(function()
    {
        if($(this).is(':checked'))
        {
            $("#pw2").attr('type', 'text');
        } else {
            
            $("#pw2").attr('type', 'password');
        }
    }); 
    
    

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    //Keterangan buat akun berhasil
    $("#submit").click(function()
    {
        let akunSukses = true;
        let pw2Salah = false;

        let nama = document.getElementById("nama").value;
        let email = document.getElementById("email").value;
        let pw = document.getElementById("pw").value;
        let pw2 = document.getElementById("pw2").value;

        if (nama.charAt(0) == "")
        {
            akunSukses = false;
            $("#infoNama").html("Nama Pengguna Tidak Boleh Kosong");
        } else {
            $("#infoNama").html("");
        }

        //Menentukan Panjang Kata Sandi
        if (pw.length < 7 )
        {
            akunSukses = false;
            $("#infoPassword").html("Kata Sandi tidak boleh kurang dari 7");
        } else {
            $("#infoPassword").html("");
        }

        //Mengecek Terdapat @
        if ((email.charAt(email.length - 6) == '.' && email.charAt(email.length - 3) == '.') || email.charAt(email.length - 4) == '.')
        {
            $("#infoEmail").html("");
        } else {
            $("#infoEmail").html("Masukan Email dengan benar");
        }
        




        //Mengecek Kata Sanda Dengan Konfirmasi Kata Sandi Sama
        
        for (let x = 0 ; x < pw.length ; x++)
        {
            if ((pw.charAt(x) != pw2.charAt(x)) || (pw.length != pw2.length))
            {
                akunSukses = false;
                pw2Salah = true;
            }
        }
        
        if (pw2Salah)
        {
            $("#infoPassword2").html("Kata Sandi yang dimasukan tidak sama");
        } else {
            $("#infoPassword2").html("");
        }
        

        //Jika BErhasil Akun dapat DIbuat
        //Dicek Berhasil tidak nya
        if (akunSukses)
        {
            alert("Akun Berhasil Dibuat");
            //Jika BErhasil akan kembali ke Halaman Pertama
            $("form").attr("action", "index.html");
        }
    })

});
