function krediHesapla () {
    let cekilecekTutar, vadeSayisi;
    let aylikTaksit, odenecekTutar;

    cekilecekTutar = document.getElementById("tutar").value;
    liste = document.getElementById("vade");
    vadeSayisi = liste.options[liste.selectedIndex].value;

    if(vadeSayisi == 12){
        odenecekTutar = cekilecekTutar * 1.1;
    }else if (vadeSayisi == 24){
        odenecekTutar = cekilecekTutar * 1.2;
    }else if (vadeSayisi == 36){
        odenecekTutar = cekilecekTutar * 1.3;
    }else {
        odenecekTutar = cekilecekTutar * 1.4;
    }
 
    aylikTaksit = odenecekTutar / vadeSayisi;

    document.querySelector('#sonuc').innerHTML = "Geri Ödeme Toplam tutarı : " + 
    odenecekTutar.toFixed(2) ;
    document.querySelector('#sonuc2').innerHTML = "Aylık Taksit Tutarı: " + 
    aylikTaksit.toFixed(2) ;
}