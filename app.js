


let x =(Math.floor(Math.random() * 100));
console.log(x);

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
        alert('işte tam orası')
    }
}




