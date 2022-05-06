const body = document.body


// ***** HEADER **** //

const header = document.createElement('header');
header.setAttribute('class', 'bg-info');
header.classList.add('bg-gradient', 'text-white', 'd-flex', 'justify-content-between', 'p-2');
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
brand.appendChild(hIcon);
brandName.appendChild(document.createTextNode('AhorrADAs'));
brand.appendChild(brandName);
navBar.appendChild(brand);
header.appendChild(navBar)
body.appendChild(header)

     // ** Botones Header ** //

const listContainer = document.createElement('div');
listContainer.setAttribute('class', 'd-flex');
listContainer.classList.add('list-nav');
header.appendChild(listContainer);
const navList = document.createElement('ul');
navList.setAttribute('class', 'navbar-nav');
listContainer.appendChild(navList);


const navItemCreator = (iconText, itemText, url) => {
    console.log('hola mundo');
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


// const bttnCreator = (iconText, bttnText) => {
//     const bttn = document.createElement('div');
//     bttn.setAttribute('class', 'mx-3');
//     const bttnIcon = document.createElement('span');
//     bttnIcon.setAttribute('class', 'material-symbols-outlined');
//     bttnIcon.appendChild(document.createTextNode(iconText));
//     bttn.appendChild(bttnIcon);
//     const bttnName = document.createTextNode(bttnText);
//     bttn.appendChild(bttnName);
//     bttnContainer.appendChild(bttn);
// }

navItemCreator('insights', 'Balance', '#');
navItemCreator('sell', 'Categorías', '#');
navItemCreator('pie_chart', 'Reportes', '#');
