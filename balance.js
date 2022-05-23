// -- LAYOUT -- //
    // - row - //
const row = document.createElement('div');
row.classList.add('row','row-cols-2');

    // - cols - //
const col1 = document.createElement('div');
col1.classList.add('col-12', 'col-lg-3');
const col2 = document.createElement('div');
col2.classList.add('col-12', 'col-lg-8');
row.appendChild(col1);
row.appendChild(col2);
mainContainer.appendChild(row);

//--- Card Balance ---//

cardCreator('Balance', col1);

const balanceCard = document.getElementById('balance');
const income = () =>{
    const storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    const storedTrans = storage.operations;
    const amounts = [];
    for (let obj of storedTrans){
        if(obj.type === 'Ingreso'){
            amounts.push(parseInt(obj.amount))
        }
    }
    const sum = amounts.reduce((acc, curr) => {return acc + curr}, 0);
    return sum;

}

const expenses = () =>{
    const storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    const storedTrans = storage.operations;
    const amounts = [];
    for (let obj of storedTrans){
        if(obj.type === 'Gasto'){
            amounts.push(parseInt(obj.amount))
        }
    }
    const sum = amounts.reduce((acc, curr) => {return acc + curr}, 0);
    return sum;

}


let table = document.createElement('table');
table.setAttribute('id', 'balance-table')
table.setAttribute('class', 'table');
table.classList.add('table-borderless');
let tBody = document.createElement('tbody');
tBody.setAttribute('id', 'balance-tBody');
table.appendChild(tBody);

const balanceTbCreator = ()=>{
    const balance = {
        ganancias: income(),
        gastos: expenses(),
        total: function () {return this.ganancias - this.gastos}
    }

    for (let prop in balance){
        let row = document.createElement('tr')
        row.setAttribute('scope', 'row');
        let cell = document.createElement('td');
        let textNode = document.createTextNode(prop);
        cell.appendChild(textNode);
        let cell2 = document.createElement('td');
        if (prop === 'total'){
            let textVNode = document.createTextNode(`$${balance.total()}`)
            cell2.appendChild(textVNode);
        }else if (prop === 'ganancias'){            
            let textVNode = document.createTextNode(`${balance[prop]}`);
            cell2.setAttribute('class', 'income');
            cell2.appendChild(textVNode);
        } else if (prop === 'gastos'){
            let textVNode = document.createTextNode(`${balance[prop]}`);
            cell2.setAttribute('class', 'expense');
            cell2.appendChild(textVNode);
        }
        row.appendChild(cell)
        row.appendChild(cell2)
        tBody.appendChild(row)
        
    }
    balanceCard.appendChild(table)
}

balanceTbCreator(balance);





