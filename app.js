


let x =(Math.floor(Math.random() * 100));
console.log(x);
let tahmin = document.querySelector('.display');

let btnGiris = document.querySelector('#buton')
btnGiris.addEventListener('click',formSubmit)

function formSubmit(){
    let sayiGiris = document.querySelector('#yaz')
    console.log(sayiGiris.value)

    if(x < sayiGiris.value){
        alert('hopp hemşerim çok gittin')
    }else if(x > sayiGiris.value){
        alert('az daha çıktın mı tamamdır bu iş')
    }else {
        alert('işte tam orası ')
        alert('tekrar oynamak için refresh atın')
    }
}

function arttir(){
    var sonuc=document.getElementById("sonuc");
    sonuc.value=Number(sonuc.value)+1;

}




