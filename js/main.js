"use strict"

//const visibleForm = document.querySelector(".js-new-form");
//visibleForm.classList.remove("collapsed");

const dataAddClass = document.querySelector(".list");
dataAddClass.classList.add("js-list");

const jsListClass = document.querySelector(".js-list");

const kittenOne = '<li class="card"> <article> <img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito"/><h3class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!</p></article></li>';

const kittenTwo = '<li class="card"><img class="card_img" src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito"/><h3 class="card_title">Fiona</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';

const kittenThree = '<li class="card"><img class="card_img" src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"alt="gatito"/><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>'; 

jsListClass.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector(".js_in_search_desc");

input_search_desc.value = "cariñoso";

const descrSearchText = input_search_desc.value;

if( kittenDesc1.includes(descrSearchText) ) {
    //Completa el código
    }
    
    if( kittenDesc2.includes(descrSearchText) ) {
    //Completa el código
    }
    
    if( kittenDesc3.includes(descrSearchText) ) {
    //Completa el código
    }
    


