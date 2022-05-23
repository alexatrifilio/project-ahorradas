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

function orderTableByDate(selectedFilter, selectedValue, table){
    let orderedTable = [];
    if (selectedValue=="Más reciente")
        orderedTable = table.sort((a, b) => (a[selectedFilter] < b[selectedFilter]) ? 1 : -1);
    if (selectedValue=="Menos reciente")
        orderedTable = table.sort((a, b) => (a[selectedFilter] > b[selectedFilter]) ? 1 : -1);
    return orderedTable;
}

function orderTableByAmount(selectedFilter, selectedValue, table){
    let orderedTable = [];
    if (selectedValue=="Mayor monto")
        orderedTable = table.sort((a, b) => (a[selectedFilter] < b[selectedFilter]) ? 1 : -1);
    if (selectedValue=="Menor monto")
        orderedTable = table.sort((a, b) => (a[selectedFilter] > b[selectedFilter]) ? 1 : -1);
    return orderedTable;
}


// -- Filter Form -- //
let form = document.getElementById('filters-form');
form.addEventListener('change', function(e){
    let typeValue = document.getElementById('select-type');
    let categoryValue = document.getElementById('select-category');
    let dateValue = document.getElementById('input-date');
    let orderByValue = document.getElementById('select-orderBy');
    console.log(dateValue.value);
    let transactionsFiltered = filterTable('type', typeValue.value, data['operations']);
    transactionsFiltered = filterTable('category', categoryValue.value, transactionsFiltered);
    transactionsFiltered = filterTableByDate('date', dateValue.value, transactionsFiltered);
    let transactionsOrdered = orderTableByDate('date', orderByValue.value, transactionsFiltered);
    //console.log(orderTableByAmount('amount', orderByValue.value, transactionsOrdered));
    replaceData(transactionsOrdered, 'transactions');
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
