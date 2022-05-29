//--- Card Filtros ---//

cardCreator('Filtros', col1);
const filtrosCard = document.getElementById('filtros');
const filtFirstRow = document.getElementById('filtros-first-row');
const hideFilters = document.createElement('a');

filtrosCard.setAttribute('id', 'filters-form');
filtFirstRow.classList.add('justify-content-between');
hideFilters.setAttribute('href', '#');
hideFilters.classList.add('d-inline-block');
hideFilters.appendChild(document.createTextNode('Ocultar filtros'));
filtFirstRow.appendChild(hideFilters);

// -- Filtros Form -- //

// call local storage
const data = JSON.parse(window.localStorage.getItem('ahorradas-data'));

function createFilterArray(data, filterCategory){
    filterCategoryName = filterCategory
    filterCategory = [];
    for (let i=0; i<data['operations'].length; i++){
        filterCategory.push(data['operations'][i][filterCategoryName]);
    }
    // return unique values of filterCategory
    return [...new Set(filterCategory)];
}


const types = ['Gasto', 'Ingreso'];
const categories = createFilterArray(data, 'category')
const filtSelect = ['Más reciente', 'Menos reciente', 'Mayor monto', 'Menor monto', 'A/Z', 'Z/A'];


createSelectField('filters-form', 'type', 'Tipo', types)
createSelectField('filters-form', 'category', 'Categoría', categories)
createInputField('filters-form', 'date', 'date', 'Desde', '', false)
createSelectField('filters-form', 'orderBy','Ordenar por', filtSelect)

// filter balance-table

function filterTable(selectedFilter, selectedValue, table){
    let filteredTable = [];
    if (selectedValue=="Seleccione una opción")
        filteredTable = table;
    for (i in table){
        if (table[i][selectedFilter] == selectedValue){
            filteredTable.push(table[i]);
        }
    }
    return filteredTable;
}

function filterTableByDate(selectedFilter, selectedValue, table) {
    let filteredTable = [];
    if (selectedValue==null)
        filteredTable = table;
    for (i in table){
        if (table[i][selectedFilter] >= selectedValue){
            filteredTable.push(table[i]);
        }
    }
    return filteredTable;
}


function orderTable(table, orderBy){
    let sortedTable = [];
    if (orderBy=="Seleccione una opción"){
        sortedTable = table
    }
    else if (orderBy=="Más reciente"){
        sortedTable = table.sort(function(a, b){
            return new Date(b['date']) - new Date(a['date']);
        });
    }
    else if (orderBy=="Menos reciente"){
        sortedTable = table.sort(function(a, b){
            return new Date(a['date']) - new Date(b['date']);
        });
    }
    else if (orderBy=="Mayor monto"){
        sortedTable = table.sort(function(a, b){
            console.log(a['ammount'], b['ammount']);
            return b['amount'] - a['amount'];
        });
    }
    else if (orderBy=="Menor monto"){
        sortedTable = table.sort(function(a, b){
            return a['amount'] - b['amount'];
        });
    }
    else if (orderBy=="A/Z"){
        sortedTable = table.sort(function(a, b){
            return a['description'].localeCompare(b['description']);
        });
    }
    else if (orderBy=="Z/A"){
        sortedTable = table.sort(function(a, b){
            return b['description'].localeCompare(a['description']);
        });
    }
    return sortedTable;
}


// -- Filter Form -- //
let form = document.getElementById('filters-form');
form.addEventListener('change', function(e){
    let typeValue = document.getElementById('select-type');
    let categoryValue = document.getElementById('select-category');
    let dateValue = document.getElementById('input-date');
    let orderByValue = document.getElementById('select-orderBy');
    let transactionsResult = filterTable('type', typeValue.value, data['operations']);
    transactionsResult = filterTable('category', categoryValue.value, transactionsResult);
    transactionsResult = filterTableByDate('date', dateValue.value, transactionsResult);
    transactionsResult = orderTable(transactionsResult, orderByValue.value);
    replaceData(transactionsResult, 'transactions');
});

// hide filters
hideFilters.addEventListener('click', function(){
    const filters = document.getElementById('filters-form');
    const filtersFirstRow = document.getElementById('filtros-first-row');
    const filtersSecondRow = document.getElementById('filtros-second-row');
    const hideFilters = document.getElementById('hide-filters');

    if (filters.classList.contains('d-none')){
        filters.classList.remove('d-none');
        filtersFirstRow.classList.remove('d-none');
        filtersSecondRow.classList.remove('d-none');
        hideFilters.innerHTML = 'Ocultar filtros';
    } else {
        filters.classList.add('d-none');
        filtersFirstRow.classList.add('d-none');
        filtersSecondRow.classList.add('d-none');
        hideFilters.innerHTML = 'Mostrar filtros';
    }
});
