"use strict"

const visibleForm = document.querySelector(".js-new-form");

if (visibleForm.classList.contains('collapsed')) {
    visibleForm.classList.remove("collapsed");

  } else {
    visibleForm.classList.add("collapsed");
  }

const dataAddClass = document.querySelector(".list");
dataAddClass.classList.add("js-list");

const jsListClass = document.querySelector(".js-list");

const kittenOneImg = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio';
const kittenOneBreed = 'British Shorthair';
const kittenOneDesc = 'Ruiseño, juguetón y cariñoso. Le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const kittenOne = `<li class="card"> <article> <img class="card_img" src="${kittenOneImg}" alt="gatito"/><h3class="card_title">${kittenOneName.toUpperCase()}</h3><h4 class="card_race">${kittenOneBreed}</h4><p class="card_description">${kittenOneDesc}</p></article></li>`;

const kittenTwoImg = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName = 'Fiona';
const kittenTwoBreed = 'British Shorthair';
const kittenTwoDesc = 'Ruiseño, juguetona, le gusta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';

const kittenTwo = `<li class="card"><img class="card_img" src="${kittenTwoImg}" alt="gatito"/><h3 class="card_title">${kittenTwoName.toUpperCase()}</h3><h4 class="card_race">${kittenTwoBreed}</h4><p class="card_description">${kittenTwoDesc}</p></li>`;

const kittenThreeImg = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo';
const kittenThreeBreed = 'British Shorthair';
const kittenThreeDesc = 'Glotón, juguetón, le gusta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenThree = `<li class="card"><img class="card_img" src="${kittenThreeImg}"alt="gatito"/><h3 class="card_title">${kittenThreeName.toUpperCase()}</h3><h4 class="card_race">${kittenThreeBreed}</h4><p class="card_description">${kittenThreeDesc}</p></li>`; 

//jsListClass.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector(".js_in_search_desc");

input_search_desc.value = "tranquilo";

const descrSearchText = input_search_desc.value;

if (kittenOneDesc.includes(descrSearchText)) {
    jsListClass.innerHTML = kittenOne + kittenTwo + kittenThree;
}
    
if( kittenOneDesc.includes(descrSearchText) ) {
    jsListClass.innerHTML = kittenOne;
}
    
    if( kittenTwoDesc.includes(descrSearchText) ) {
        jsListClass.innerHTML = kittenTwo;
    }
    
    if( kittenThreeDesc.includes(descrSearchText) ) {
        jsListClass.innerHTML = kittenThree;
    }
    

let html = '';

if (kittenOneBreed === "") {
    html = `No se ha especificado la raza`;
  } else {
    html = kittenOneBreed;
  }