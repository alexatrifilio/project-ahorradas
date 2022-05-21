// --- CARD --- //

cardCreator('Reportes', mainContainer);
const reportesCard = document.getElementById('reportes');
const cont = document.createElement('div');
reportesCard.appendChild(cont);

// - Sections - //

const reportsSections = (sections) => {
    let i = 1
    sections.forEach((title)=>{
        const section = document.createElement('section');
        section.setAttribute('id', `is-section-${i++}`);
        section.classList.add('py-5', 'px-3')
        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(title));
        section.appendChild(h3);
        cont.appendChild(section);
    })
}

const sections = ['Resumen', 'Totales por categorías', 'Totales por mes'];

reportsSections(sections);

// - operations - //

const maxIncome = () =>{
    const ls = JSON.parse(localStorage.getItem('ahorradas-data'));
    const lsOps = ls.operations;
    let acc = 0;
    const income = lsOps.filter(op => {
        if(op.type === 'Ingreso'){
            return op
        }
    })

    for (let elem of income){
            if(parseInt(elem.amount) > acc){
                acc = parseInt(elem.amount)
            }        
    }
    for (let elem of income){
        if(parseInt(elem.amount) === acc){
            return elem;
        }
    }
    
}

const maxExpense = () =>{
    const ls = JSON.parse(localStorage.getItem('ahorradas-data'));
    const lsOps = ls.operations;
    let acc = parseInt(lsOps[1].amount);
    const expense = lsOps.filter(op => {
        if(op.type === 'Gasto'){
            return op
        }
    })

    for (let elem of expense){
            if(parseInt(elem.amount) > acc){
                acc = parseInt(elem.amount)
            }        
    }
    for (let elem of expense){
        if(parseInt(elem.amount) === acc){
            return elem;
        }
    }
    
}



// - Resumen - //

const overviewSection = document.getElementById('is-section-1');


const overviewTable = document.createElement('table');
overviewTable.classList.add('table', 'table-borderless'); 
const tBody = document.createElement('tbody');
overviewTable.appendChild(tBody);
overviewSection.appendChild(overviewTable);

const rowCreator = (elem, obj, elemClass, type) => {  
    const tr = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.appendChild(document.createTextNode(elem));
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    if(type === 'cat'){
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(obj.category));
        span.classList.add('d-inline-block','bg-info', 'bg-opacity-25', 'p-1', 's-tag');
        cell2.appendChild(span);
    } else if(type === 'date'){
        cell2.appendChild(document.createTextNode(obj.date));
    }
    cell3.appendChild(document.createTextNode(obj.amount));
    cell3.classList.add(elemClass);
    tr.appendChild(cell1);
    tr.appendChild(cell2);
    tr.appendChild(cell3);
    tBody.appendChild(tr);
}

rowCreator('Categoría con mayor ganancia', maxIncome(), 'income', 'cat');
rowCreator('Categoría con mayor gasto', maxExpense(), 'expense', 'cat');
// Los de mes están mal pq debería ser la comparación de los totales por mes, el de categoria con mejor balance no lo entiendo!!
// rowCreator('Categoría con mayor ganancia', maxIncome(), 'income');
rowCreator('Mes con mayor ganancia', maxIncome(), 'income', 'date');
rowCreator('Mes con mayor gasto', maxExpense(), 'expense', 'date');

// - Totales por categoría - //

const totalCatSection = document.getElementById('is-section-2');

const totalCatTable = document.createElement('table');
totalCatTable.classList.add('table', 'table-borderless'); 
const totalCatThead = document.createElement('thead');
const tHeadtr = document.createElement('tr');
totalCatThead.appendChild(tHeadtr);
const ths = ['Categoría', 'Ganancias', 'Gastos', 'Balance']
ths.forEach((th)=>{
    const totalCatth = document.createElement('th');
    totalCatth.appendChild(document.createTextNode(th))
    tHeadtr.appendChild(totalCatth);
})

const totalCatTbody = document.createElement('tbody');
const lStore = JSON.parse(localStorage.getItem('ahorradas-data'));
const lStoreCat = lStore.categories;

lStoreCat.forEach((cat)=>{
    const tr = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.appendChild(document.createTextNode(cat.cat));
    const cell2 = document.createElement('td');
    
    const catIncome = lStore.operations.filter((obj) => {
        if(obj.category === cat.cat){
            
        }
    })
    
    
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');
})


totalCatTable.appendChild(totalCatThead);
totalCatTable.appendChild(totalCatTbody);
totalCatSection.appendChild(totalCatTable);






