//bu dosya da ana js dosyası olacak. Tüm js dosyalarını kulanabilmek için bu js dosysını  html kısmında projeye en altta dahil etmemiz gerekiyor.

//ADIM 2 ********************************************

const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody2 = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films")

//ADIM 4 ********************************************


eventListeners()

function eventListeners(){
    form.addEventListener("submit", addFilm)
    
    
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage()
        UI.loadAllFilms(films)
    })

    //ADIM 12
    cardBody2.addEventListener("click", deleteFilm )

    // ADIM 14
    clear.addEventListener("click", clearAllFilms ) 

}

function addFilm(e){

    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if (title === "" || director === "" || url === "") {
        
        //hata

        //ADIM 8 DE OLUŞTURULAN FONKSİYON KULLANILDI

        UI.displayMessage("tüm alanları doldurun", "danger")


    }

    else{
       const newFilm = new Film(title,director,url) 

       UI.addFilmToUI(newFilm) //arayüze film ekleme fonksiyonu

       //ADIM 9 DA OLUŞTURULAN FONKSİYONUN KULLANIMI
        Storage.addFilmToStorage(newFilm)


        //ADIM 8 DE OLUŞTURULAN 2. kez kullanıldı

        UI.displayMessage("film başarıyla eklendi" , "primary")

    }
//ADIM 7 DE OLUŞTURULAN FONKSİYON KULLANILDI
    UI.clearInputs(titleElement, urlElement, directorElement)

    e.preventDefault()
}


    function deleteFilm(e){
        if(e.target.id === "delete-film"){
            UI.deleteFilmFromUI(e.target)

            //ADIM 13
            Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)

            UI.displayMessage("Silme işlemi başarılı", "success")
        }
    }







function clearAllFilms (){

    if(confirm("emin misiniz ?")){

        UI.clearAllFilmsFromUI()
        Storage.clearAllFilmsFromStorage()

        
    }

}