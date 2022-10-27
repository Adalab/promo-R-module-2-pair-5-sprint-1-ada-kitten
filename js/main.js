"use strict"

/*---------------------- SECCIÓN DESPLEGABLE CREACIÓN DE GATITOS -------------------------------------*/

const newFormElement = document.querySelector(".js-new-form");
const crossBtn = document.querySelector(".js-cross-btn");

// crossBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (newFormElement.classList.contains('collapsed')) {
//         newFormElement.classList.remove("collapsed");
    
//       } else {
//         newFormElement.classList.add("collapsed");
//       }
// })

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
  
crossBtn.addEventListener('click', handleClickNewCatForm);

/*---------------------------- FORMULARIO NUEVO GATITO ----------------------------------------------*/

/*Declaramos nuestras variables con los elementos seleccionados*/
const form = document.querySelector('.form');
const addBtn = document.querySelector('.js-btn-add');
const cancelBtn = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const dataAddClass = document.querySelector(".list");
const labelMesageError = document.querySelector('.js-label-error');

/* Creamos nuestra función, que nos sirve a modo de plantilla. Tenemos unos parametros que no están definidos, pero que empleamos dentro de nuestras instrucciones.*/
function renderKitten(url, desc, name, race) {
  const newKitten = `<li class="card"> <article> <img class="card_img" src="${url}" alt="gatito"/><h3class="card_title">${name.toUpperCase()}</h3><h4 class="card_race">${race}</h4><p class="card_description">${desc}</p></article></li>`;
  return newKitten;
}
/*Creamos nuestro evento donde guardaremos nuestras constantes con los valores de los inputs*/
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const valueBreed = inputBreed.value;
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  /*Condicionales para que el navegador sepa qué hacer*/
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    /*Le decimos que añada un nuevo <li></li> a la lista de gatitos. Llamamos a nuestra función plantilla con las variables que contienen los valores de los inputs*/
    dataAddClass.innerHTML += renderKitten(valuePhoto, valueDesc, valueName, valueBreed);
  }
})

cancelBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  form.reset();
  /*Lo que hacemos en el siguiente paso es usar la función setTimeout. Con esto le decimos que ejecute la función hideNewCatForm al cabo de medio segundo. Los segundos se especifican en milisegundos*/
  setTimeout(hideNewCatForm, 500);
})


/*---------------------------------------- TARJETA GATITOS ---------------------------------------------------*/


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


/*------------------------------------------ OBJETOS GATITOS ----------------------------------------------------*/

const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

const kittenData_2 = {
  image: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Fiona',
  desc: 'British Shorthair',
  race: 'Ruiseño, juguetona, le gusta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!',
};

const kittenData_3 = {
  image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Cielo',
  desc: 'British Shorthair',
  race: 'Glotón, juguetón, le gusta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
console.log(kittenDataList);



/*----------------------------------------- BUSCADOR DE GATITOS -------------------------------------------------*/

const input_desc = document.querySelector(".js_in_search_desc");
const input_breed = document.querySelector('.js_input_breed');
const btn_search = document.querySelector('.js-button-search');


const descrSearchText = input_desc.value

const filterKitten = (event) => {
  debugger;
  event.preventDefault;
  if (kittenOneDesc.includes(descrSearchText)) {
    jsListClass.innerHTML = kittenOne + kittenTwo + kittenThree;
  } else if (kittenOneDesc.includes(descrSearchText)) {
    jsListClass.innerHTML = kittenOne;
  } else if (kittenTwoDesc.includes(descrSearchText)) {
    jsListClass.innerHTML = kittenTwo;
  } else if (kittenThreeDesc.includes(descrSearchText)) {
    jsListClass.innerHTML = kittenThree;
  }
}

btn_search.addEventListener('click', filterKitten);

let html = '';

if (kittenOneBreed === "") {
    html = `No se ha especificado la raza`;
  } else {
    html = kittenOneBreed;
}