//--- Card Operaciones ---//

//col2 = document.getElementById('col2')
//console.log(col2);

cardCreator('transactions', col2);
const operacionesCard = document.getElementById('transactions');
const opFirstRow = document.getElementById('transactions-first-row');
opFirstRow.classList.add('justify-content-between', 'mb-4');


// -- create local storage for operaciones --//
const transactions = JSON.parse(window.localStorage.getItem('transactions')) === null ? [] : JSON.parse(window.localStorage.getItem('transactions'));

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

if (transactions.length === 0){
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
    
    createTable('transactions', columnNames, 'transactions');
    appendData(transactions, 'transactions');
}

