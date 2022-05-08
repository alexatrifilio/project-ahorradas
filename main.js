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
navItemCreator('sell', 'Categorías', '#');
navItemCreator('pie_chart', 'Reportes', '#');

const main = document.createElement('main');
body.appendChild(main);
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');
mainContainer.classList.add('pt-5');
main.appendChild(mainContainer);

const categorias = ['Comida', 'Servicios','Trabajo', 'Salidas', 'Educación', 'Transporte'];


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

const TableCreator = (qth, qtr, qtd) =>{
    const table = document.createElement('table');
    table.setAttribute('class', 'table');
    table.classList.add('table-borderless');
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const trh = document.createElement('tr');
    thead.appendChild(trh)
   
    for (let i = 0; i < qth; i++){
        const th = document.createElement('th');
        trh.appendChild(th);
    }
    
    const tBody = document.createElement('tbody');
    table.appendChild(tBody);

    for (let i = 0; i < qtr; i++){

        const tr = document.createElement('tr');
        tBody.appendChild(tr)
     
            for (let k = 0; k < qtd; k++){
                const td = document.createElement('td');
                tr.appendChild(td);
            }

    }

    main.appendChild(table);
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
            for (let index in selectOpt){
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
    // for (let elem of inputType){
    //     input.setAttribute('type', elem)
    // }

    formAppend.appendChild(form);
}