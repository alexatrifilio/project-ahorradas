// -- LAYOUT -- //
    // - row - //
const row = document.createElement('div');
row.setAttribute('class', 'row');
row.classList.add('row-cols-2');

    // - cols - //
const col1 = document.createElement('div');
col1.setAttribute('class', 'col-3');
const col2 = document.createElement('div');
col2.setAttribute('class', 'col-8');
row.appendChild(col1);
row.appendChild(col2);
mainContainer.appendChild(row);

//--- Card Balance ---//

cardCreator('Balance', col1);
// TableCreator(0,3,2);
const balanceCard = document.getElementById('balance');
const balance = {
    ganancias: 5,
    gastos: 8,
    total: function () {return this.ganancias + this.gastos}
}
const balanceTbCreator = (balance)=>{
    let table = document.createElement('table');
    table.setAttribute('class', 'table');
    table.classList.add('table-borderless');
    let tBody = document.createElement('tbody');
    table.appendChild(tBody);

    for (let prop in balance){
        let row = document.createElement('tr')
        row.setAttribute('scope', 'row');
        let cell = document.createElement('td');
        let textNode = document.createTextNode(prop);
        cell.appendChild(textNode);
        let cell2 = document.createElement('td');
        if (prop === 'total'){
            let textVNode = document.createTextNode(`$ ${balance.total()}`)
            cell2.appendChild(textVNode);
        }else{
            let textVNode = document.createTextNode(`$ ${balance[prop]}`);
            cell2.setAttribute('class', `val-${prop}`);
            cell2.appendChild(textVNode);
        }
        row.appendChild(cell)
        row.appendChild(cell2)
        tBody.appendChild(row)
        
    }
    balanceCard.appendChild(table)
}

balanceTbCreator(balance);


//--- Card Operaciones ---//

cardCreator('Operaciones', col2);
const operacionesCard = document.getElementById('operaciones');
const opFirstRow = document.getElementById('operaciones-first-row');
opFirstRow.classList.add('justify-content-between');

    // -- Objeto operaciones (Array) --//

const operaciones =[];

    // -- Botón Nueva Operación -- // 

const newOpBttn = document.createElement('a');
newOpBttn.setAttribute('href', './nueva-operacion.html');
newOpBttn.setAttribute('class', 'btn');
newOpBttn.classList.add('btn-info', 'text-white', 'op-btn');
const opBttnText = document.createTextNode('+ Nueva operación');
newOpBttn.appendChild(opBttnText);
opFirstRow.appendChild(newOpBttn);

    // -- opCard SIN operaciones -- //

if (operaciones.length === 0){
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
}

    // -- opCard CON operaciones -- //


//--- Card Filtros ---//

cardCreator('Filtros', col1);
const filtrosCard = document.getElementById('filtros');
const filtFirstRow = document.getElementById('filtros-first-row');
filtFirstRow.classList.add('justify-content-between');
const hideFilters = document.createElement('a');
hideFilters.setAttribute('href', '#');
hideFilters.classList.add('d-inline-block');
hideFilters.appendChild(document.createTextNode('Ocultar filtros'));
filtFirstRow.appendChild(hideFilters);

    // -- Filtros Form -- //

const filtInputs = ['tipo', 'categoría', 'desde', 'ordenar-por'];
const filtInputType = ['select', 'select', 'date', 'select'];
const filtSelect = [['Todos', 'Gasto', 'Ganancia'], categorias, ['Más reciente', 'Menos reciente', 'Mayor monto', 'Menor monto', 'A/Z', 'Z/A']];

formCreator(filtInputs, filtInputType, filtrosCard, filtSelect);


