// -- LAYOUT -- //
    // - row - //
const row = document.createElement('div');
row.setAttribute('class', 'row');
row.classList.add('row-cols-2');

    // - cols - //
const col1 = document.createElement('div');
col1.setAttribute('class', 'col-4');
const col2 = document.createElement('div');
col2.setAttribute('class', 'col-8');
row.appendChild(col1);
row.appendChild(col2);
mainContainer.appendChild(row);

//--- Card Balance ---//

cardCreator('Balance', col1);
// TableCreator(0,3,2);
const balanceCard = document.getElementById('Balance');
const balance = {
    ganancias: 5,
    gastos: 8,
    total: function () {this.ganancias + this.gastos}
}
const balanceTbCreator = (balance)=>{
    let table = document.createElement('table');
    table.setAttribute('class', 'table');
    table.classList.add('table-borderless');
    let tBody = document.createElement('tbody');
    table.appendChild(tBody);

    for (let prop in balance){
        console.log(prop)
        console.log(balance[prop]);
        let row = document.createElement('tr')
        row.setAttribute('scope', 'row');
        let cell = document.createElement('td');
        let textNode = document.createTextNode(prop);
        cell.appendChild(textNode);
        let textVNode = document.createTextNode(balance[prop]);
        cell.appendChild(textVNode);
        row.appendChild(cell)
        tBody.appendChild(row)
        
    }
    balanceCard.appendChild(table)
}

balanceTbCreator(balance);


// Tabla //



//--- Card Operaciones ---//

cardCreator('Operaciones', col2);
const operacionesCard = document.getElementById('Operaciones');
const newOpBttn = document.createElement('button');
newOpBttn.setAttribute('type', 'button');
newOpBttn.setAttribute('class', 'btn');
operacionesCard.appendChild(newOpBttn);



//--- Card Filtros ---//

cardCreator('Filtros', col1);