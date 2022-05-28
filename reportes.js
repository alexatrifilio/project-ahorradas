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
    let acc = 0;
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

// - para calcular por mes - //


rowCreator('Categoría con mayor ganancia', maxIncome(), 'income', 'cat');
rowCreator('Categoría con mayor gasto', maxExpense(), 'expense', 'cat');
// Los de mes están mal pq debería ser la comparación de los totales por mes, el de categoria con mejor balance no lo entiendo!!
// rowCreator('Categoría con mayor ganancia', maxIncome(), 'income');



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




for(let cat of lStoreCat){
    const activeCats = [];
    const objCat = [];
    const amountsInc = []; 
    const amountsExp =[];

    lStore.operations.forEach((obj)=>{
        if(parseInt(obj.amount) > 0){
            activeCats.push(obj.category) //Creo que lo puedo sacar, miedo tocar
        }
        if(obj.category === cat.cat){

                objCat.push(obj)
        }    
    })

    objCat.forEach((obj)=>{
        if(obj.type === 'Ingreso'){
            amountsInc.push(parseInt(obj.amount));
        }
    })
    
    objCat.forEach((obj)=>{
        if(obj.type === 'Gasto'){
            amountsExp.push(parseInt(obj.amount));
        }
    })

    const totalInc = amountsInc.reduce((acc, current) =>{
        return acc + current
    }, 0)

    const totalExp = amountsExp.reduce((acc, current) =>{
        return acc + current
    }, 0)

    const balance = () => {return `$${totalInc - totalExp}`};

    
    
    const tr = document.createElement('tr');
    let uniqueCats = [];

    for (elem of objCat){
            if(!uniqueCats.includes(elem.category)){
                uniqueCats.push(elem.category);
            }
        }
    for(elem of uniqueCats){            
        const cell1 = document.createElement('td');

        cell1.appendChild(document.createTextNode(elem));
        const cell2 = document.createElement('td');
        cell2.appendChild(document.createTextNode(totalInc));
        cell2.classList.add('income');    
        const cell3 = document.createElement('td');
        cell3.appendChild(document.createTextNode(totalExp));
        cell3.classList.add('expense');  
        const cell4 = document.createElement('td');
        cell4.appendChild(document.createTextNode(balance()));
        tr.appendChild(cell1);
        
        tr.appendChild(cell2);
        tr.appendChild(cell3);
        tr.appendChild(cell4);
        totalCatTbody.appendChild(tr)
    }
};


totalCatTable.appendChild(totalCatThead);
totalCatTable.appendChild(totalCatTbody);
totalCatSection.appendChild(totalCatTable);

// - Totales por mes - //

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const opsByMonth = {};


const opsByDate = lStore.operations.forEach((op)=>{
    const opDate = new Date (op.date);
   
    opsByMonth[months[opDate.getMonth()]] = []



 })

 const pushOpsByDate = lStore.operations.forEach((op)=>{
    const opDate = new Date (op.date);

    
    opsByMonth[months[opDate.getMonth()]].push(op)


 })

 const maxByMonth = ()=> {
     let maxMonth ={};
     let maxIncome = 0;
    for (let month in opsByMonth){
        const incByMonth = [];
        let maxIncByMonth = 0;
        const property = month;
        const {[property]: monthName} = opsByMonth;
        for(let elem of monthName){
            if(elem.type === 'Ingreso'){
                incByMonth.push(parseInt(elem.amount))
                if(parseInt(elem.amount) > maxIncByMonth){
                    maxIncByMonth = parseInt(elem.amount);
                }
            }
            if(maxIncByMonth > maxIncome){
                maxIncome = maxIncByMonth;
            }
            if(parseInt(elem.amount) === maxIncome){
                maxMonth = elem;
            }
             
        }
    } 
    return maxMonth
 }

 const minByMonth = ()=> {
    let minMonth ={};
    let maxExpense = 0;
   for (let month in opsByMonth){
       const expByMonth = [];
       let maxExpByMonth = 0;
       const property = month;
       const {[property]: monthName} = opsByMonth;
       for(let elem of monthName){
           if(elem.type === 'Gasto'){
               expByMonth.push(parseInt(elem.amount))
               if(parseInt(elem.amount) > maxExpByMonth){
                   console.log(elem.amount);
                   maxExpByMonth = parseInt(elem.amount);
               }
           }
           if(maxExpByMonth > maxExpense){
               maxExpense = maxExpByMonth;
           }
           if(parseInt(elem.amount) === maxExpense){
               minMonth = elem;
           }
            
       }
   } 
   return minMonth
}

 rowCreator('Mes con mayor ganancia', maxByMonth(), 'income', 'date');
 rowCreator('Mes con mayor gasto', minByMonth(), 'expense', 'date');



 const totalMonthSection = document.getElementById('is-section-3');

 const totalMonthTable = document.createElement('table');
 totalMonthTable.classList.add('table', 'table-borderless'); 
 const totalMonthThead = document.createElement('thead');
 const monthTheadtr = document.createElement('tr');
 totalMonthThead.appendChild(monthTheadtr);
 const monthColNames = ['Mes', 'Ganancias', 'Gastos', 'Balance'];
 monthColNames.forEach((th)=>{
    const totalMonthth = document.createElement('th');
    totalMonthth.appendChild(document.createTextNode(th))
    monthTheadtr.appendChild(totalMonthth);
})
const totalMonthTbody = document.createElement('tbody');



 for (let month in opsByMonth){
    const incByMonth = [];
    const expByMonth = [];
    let totalByMonth = 0;
    const property = month;
    const {[property]: monthName} = opsByMonth;
    for(let elem of monthName){
        if(elem.type === 'Ingreso'){
            incByMonth.push(parseInt(elem.amount))
        } else if(elem.type === 'Gasto'){
            expByMonth.push(parseInt(elem.amount))
        }
    }
    const totalIncMonth = incByMonth.reduce((acc, current) =>{
        return acc + current
    }, 0)
    const totalExpMonth = expByMonth.reduce((acc, current) =>{
        return acc + current
    }, 0)

    totalByMonth = totalIncMonth - totalExpMonth;
    
    const monthRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.appendChild(document.createTextNode(month));
    const cell2 = document.createElement('td');
    cell2.appendChild(document.createTextNode(totalIncMonth));
    cell2.classList.add('income');
    const cell3 = document.createElement('td');
    cell3.appendChild(document.createTextNode(totalExpMonth));
    cell3.classList.add('expense');
    const cell4 = document.createElement('td');
    cell4.appendChild(document.createTextNode(`$${totalByMonth}`));


    totalMonthTbody.appendChild(monthRow)
    monthRow.appendChild(cell1);
    monthRow.appendChild(cell2);
    monthRow.appendChild(cell3);
    monthRow.appendChild(cell4);


 }


totalMonthTable.appendChild(totalMonthThead);
totalMonthTable.appendChild(totalMonthTbody);
totalMonthSection.appendChild(totalMonthTable);

