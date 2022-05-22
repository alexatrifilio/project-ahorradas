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
    return filterCategory; 
}

createFilterArray(data, 'type')

const types = createFilterArray(data, 'type')
const categories = createFilterArray(data, 'category')
const filtSelect = ['Todos', 'Gasto', 'Ganancia', 'Más reciente', 'Menos reciente', 'Mayor monto', 'Menor monto', 'A/Z', 'Z/A'];


createSelectField('filters-form', 'type', 'Tipo', types)
createSelectField('filters-form', 'category', 'Categoría', categories)
createInputField('filters-form', 'date', 'date', 'Fecha', '', false)
createSelectField('filters-form', 'orderBy','Ordenar por', filtSelect)