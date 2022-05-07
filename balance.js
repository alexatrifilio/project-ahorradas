// Balance //


//--- Card Balance ---//

cardCreator('Balance');
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

cardCreator('Operaciones');
const operacionesCard = document.getElementById('Operaciones');
const newOpBttn = document.createElement('button');
operacionesCard.appendChild(newOpBttn);



//--- Card Filtros ---//

cardCreator('Filtros');