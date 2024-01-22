var girilen, secilen;
var eklenen, btnTamamla, btnSil, btnGeri, sonuc;


function listeyeEkle() {
    girilen = document.getElementById("txtYapilacaklar").value;


    if (girilen != "") {
        eklenen = document.createElement("li");
        document.getElementById("listeYapilacaklar").appendChild(eklenen);
        eklenen.innerHTML = girilen;

        btnTamamla = document.createElement("img");
        eklenen.appendChild(btnTamamla);
        btnTamamla.setAttribute("src", "tik.jpg");
        btnTamamla.setAttribute("id", "resimTamamla");
        btnTamamla.addEventListener("click", tamamla);

        btnSil = document.createElement("img");
        eklenen.appendChild(btnSil);
        btnSil.setAttribute("src", "çarpı.png");
        btnSil.setAttribute("id", "resimSil");
        btnSil.addEventListener("click", sil);
        console.log(btnSil);
    }
    else alert("Boş bırakılamaz!")

}

function sil() {
    secilen = event.currentTarget.parentNode;
    secilen.remove();
    document.getElementById("sonuc").innerHTML = "Seciminiz silindi";
}

function tamamla() {
    secilen = event.currentTarget.parentNode;
    document.getElementById("listeTamamlananlar").appendChild(eklenen);
    secilen = event.currentTarget.parentNode;
    secilen.childNodes[1].style.display = "none";
    secilen.childNodes[2].setAttribute("onclick", "sil();", "geri();");
    eklenen.innerHTML = secilen.innerHTML;

    sil();
    document.getElementById("sonuc").innerHTML = "Seçiminiz taşındı"
}

function geri() {
    secilen = event.currentTarget.parentNode;

}



