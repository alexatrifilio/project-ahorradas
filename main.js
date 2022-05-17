const body = document.body


// ***** HEADER ***** //

const header = document.createElement('header');
header.setAttribute('class', 'bg-info');
header.classList.add('bg-gradient', 'text-white', 'd-flex', 'justify-content-between', 'px-5', 'py-2');
const navBar = document.createElement('nav');
navBar.setAttribute('class', 'navbar');
const brand = document.createElement('a');
brand.setAttribute('class', 'navbar-brand');
brand.classList.add('d-flex', 'text-white')
brand.setAttribute('href', '#');
const hIcon = document.createElement('span');
hIcon.setAttribute('class', 'material-symbols-outlined');
hIcon.classList.add('brand')
hIcon.appendChild(document.createTextNode('savings'));
const brandName = document.createElement('h1');
brandName.classList.add('ms-3');
brand.appendChild(hIcon);
brandName.appendChild(document.createTextNode('AhorrADAs'));
brand.appendChild(brandName);
navBar.appendChild(brand);
header.appendChild(navBar)
body.appendChild(header)

     // ** Header Buttons ** //

const listContainer = document.createElement('div');
listContainer.setAttribute('class', 'd-flex');
listContainer.classList.add('list-nav');
header.appendChild(listContainer);
const navList = document.createElement('ul');
navList.setAttribute('class', 'navbar-nav');
listContainer.appendChild(navList);


const navItemCreator = (iconText, itemText, url) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'nav-item');
    const link = document.createElement('a');
    link.setAttribute('class', 'nav-link');
    link.classList.add('text-white');
    link.setAttribute('href', url);
    const linkContainer = document.createElement('div');
    linkContainer.setAttribute('class', 'd-flex');
    linkContainer.classList.add('mx-3')
    const itemIcon = document.createElement('span');
    const itemP = document.createElement('p');
    itemP.setAttribute('class', 'ms-2')
    const itemPText = document.createTextNode(itemText);
    itemP.appendChild(itemPText);
    itemIcon.setAttribute('class', 'material-symbols-outlined');
    itemIcon.appendChild(document.createTextNode(iconText));
    linkContainer.appendChild(itemIcon);
    linkContainer.appendChild(itemP);
    link.appendChild(linkContainer);
    listItem.appendChild(link);
    navList.appendChild(listItem);
}

navItemCreator('insights', 'Balance', './index.html');
navItemCreator('sell', 'Categorías', './categorias.html');
navItemCreator('pie_chart', 'Reportes', './reportes.html');

const main = document.createElement('main');
body.appendChild(main);
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');
mainContainer.classList.add('pt-5');
main.appendChild(mainContainer);


// ***** Functions ***** //

// ** Card Creator Function ** //

const cardCreator = (cardTitle, cardAppend) =>{
    const card = document.createElement('div');
    let intCardTitle = cardTitle.toLowerCase();
    card.setAttribute('class','card');
    card.setAttribute('id', intCardTitle);
    card.classList.add('mb-4', 'p-4','shadow', 'p-3', 'mb-5', 'bg-body', 'rounded');
    const firstCardRow = document.createElement('div');
    firstCardRow.setAttribute('class', 'd-flex');
    firstCardRow.setAttribute('id', `${intCardTitle}-first-row`);
    const cTitle = document.createElement('h2');
    const cardTitleText = document.createTextNode(cardTitle);
    cTitle.appendChild(cardTitleText);
    firstCardRow.appendChild(cTitle);
    card.appendChild(firstCardRow);
    cardAppend.appendChild(card);
}

// ** Table Creator Function ** //

// Hasta ahora no la usé porque no supe como ingresarle datos a la table. - Ale
const createTable = (tableName, columnNames, cardId) =>{
    
   
    const table = document.createElement('table');
    
    
    table.setAttribute('class', 'table');
    table.setAttribute('id', tableName);
    table.classList.add('table-borderless');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    table.appendChild(thead);
    var card = document.getElementById(cardId);
    card.appendChild(table)

    columnNames.forEach(function(object) {
        var th = document.createElement('th');
        th.setAttribute('id', object)
        th.appendChild(document.createTextNode(object));
        tr.appendChild(th);
    });

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

}

function appendData(data, tableName){
    var table = document.getElementById(tableName);
    let tbody = table.querySelector('tbody')
    for (let obj of data){
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        for(i in obj){
            if(i === 'type' || i === 'id'){continue}  
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(obj[i]));
            tr.appendChild(td);
        }
    }
    // data.forEach(function(object) {
    //     if(data.type || data.id){break}
    //     var tr = document.createElement('tr');
    //     tbody.appendChild(tr);
    //     for(i in object){
    //         var td = document.createElement('td');
    //         td.appendChild(document.createTextNode(object[i]));
    //         tr.appendChild(td);
    //     }
    // });
}


// ** Form Creator ** //

const formCreator = (inputName, inputType, formAppend, selectOpt) => {
    const form = document.createElement('form');
    
    for (const index in inputName){
        const formItemCont = document.createElement('div');
        formItemCont.classList.add('d-flex', 'flex-column');
        const label = document.createElement('label');
        label.setAttribute('for', `is-${inputName[index]}`);
        label.appendChild(document.createTextNode(inputName[index]));
        label.classList.add('mb-2');
        if(inputType[index] === 'select'){
            const select = document.createElement('select');
            select.classList.add('mb-2');
            for (let index in selectOpt){                  // Este loop está incluyendo TODAS las opciones dentro de todas las categorias en lugar de agregar cada una a un select. Los array que mandan la info estan en balance.js en la seccion de Card Filtros - Filtros form 
                for (elem of selectOpt[index]){
                    const option = document.createElement('option');
                    option.appendChild(document.createTextNode(elem));
                    select.appendChild(option);
                }
            }
            formItemCont.appendChild(label);
            formItemCont.appendChild(select);

        } else{

            const input = document.createElement('input');
            input.classList.add('mb-2')
            input.setAttribute('id', `is-${inputName[index]}`);
            input.setAttribute('type', inputType[index]);
            formItemCont.appendChild(label);
            formItemCont.appendChild(input);
        }
        form.appendChild(formItemCont);         
    }

    formAppend.appendChild(form);
}

  // -- Single row forms -- //

  const singleRowForm = (formId, formAppend, bttnAction) => {
    const singleRowForm = document.createElement('form');
    singleRowForm.setAttribute('action', 'submit');
    singleRowForm.setAttribute('id', formId);
    let row = document.createElement('div');
    row.classList.add('row');
    let col1 = document.createElement('div');
    col1.classList.add('col', 'col-10');
    let col2 = document.createElement('div');
    col2.classList.add('col', 'col-2');
    singleRowForm.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
    const inpCont = document.createElement('div');
    inpCont.classList.add('d-flex', 'flex-column');
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.setAttribute('id', 'nombre-cat');
    input.setAttribute('type', 'text');
    label.setAttribute('for', 'nombre-cat');
    inpCont.appendChild(label);
    inpCont.appendChild(input);
    col1.appendChild(inpCont);
    const catFormBttn = document.createElement('button');
    catFormBttn.setAttribute('type', 'submit');
    catFormBttn.classList.add('btn','btn-info', 'text-white')
    catFormBttn.appendChild(document.createTextNode(bttnAction));
    col2.appendChild(catFormBttn);
    
    formAppend.appendChild(singleRowForm);
}