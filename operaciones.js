//--- Card Operaciones ---//

cardCreator('Operaciones', col2);
const operacionesCard = document.getElementById('operaciones');
const opFirstRow = document.getElementById('operaciones-first-row');
opFirstRow.classList.add('justify-content-between', 'mb-4');

// -- Objeto operaciones (Array) --//

const data = [{
    description: 'Historieta',
    amount: 2000,
    type: 'Gasto',
    category: 'Entretenimiento',
    date: '10/10/2020'
},
{
    description: 'perro',
    amount: 5000,
    type: 'Gasto',
    category: 'Entretenimiento',
    date: '13/10/2019'
}]

console.log(JSON.stringify(data));


//--- Card Operaciones ---//

    // -- Botón Nueva Operación -- // 

const newOpBttn = document.createElement('a');
newOpBttn.setAttribute('href', './nueva-operacion.html');
newOpBttn.setAttribute('class', 'btn');
newOpBttn.classList.add('btn-info', 'text-white', 'op-btn');
const opBttnText = document.createTextNode('+ Nueva operación');
newOpBttn.appendChild(opBttnText);
opFirstRow.appendChild(newOpBttn);

    // -- opCard SIN operaciones -- //

if (data.length === 0){
    const opImg = document.createElement('img');
    const opImgCont = document.createElement('div');
    opImgCont.classList.add('d-flex', 'align-items-center', 'flex-column');
    opImg.setAttribute('src', './assets/savings.png');
    opImg.classList.add('op-img');
    const opSubtitle = document.createElement('h3');
    opSubtitle.appendChild(document.createTextNode('Sin resultados'));
    const opParagraph = document.createElement('p');
    opParagraph.appendChild(document.createTextNode('Cambia los filtros o agrega operaciones.'))
    opImgCont.appendChild(opImg);
    opImgCont.appendChild(opSubtitle);
    opImgCont.appendChild(opParagraph);
    operacionesCard.appendChild(opImgCont);
}else{
    // -- opCard CON operaciones -- //
    
    const columnNames = ['description', 'amount', 'type', 'category', 'date'];
    
    createTable('operaciones', columnNames, 'operaciones');
    appendData(data, 'operaciones');
}

