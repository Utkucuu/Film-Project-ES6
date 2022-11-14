//burada arayüz işlemmlerini gerçekleştireceğiz




//ADIM 3 ********************************************



class UI{
  

    

//ADIM 5 ********************************************

 static addFilmToUI(newFilm){
    // console.log(newFilm)
 
//ADIM 6 
    const filmList = document.getElementById("films")

    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> `

}

//ADIM 7
static clearInputs (element1, element2, element3){
    element1.value=""
    element2.value=""
    element3.value=""
}


//ADIM 8

static displayMessage (message,type){
    const cardBody = document.querySelectorAll(".card-body")[0]

    const div = document.createElement("div")

    div.className = `alert alert-${type}`
    div.textContent = message

    cardBody.appendChild(div)

    setTimeout(function(){
        div.remove()
    },1000)
}

//ADIM 11

static loadAllFilms (films){
const filmList = document.getElementById("films")
    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        `
    })
}

 static deleteFilmFromUI (element){
    element.parentElement.parentElement.remove()
 }


 static clearAllFilmsFromUI(){
    const filmList = document.getElementById("films")
    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove()
    }
 }

 


}

