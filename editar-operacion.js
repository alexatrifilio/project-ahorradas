// --- CARD --- //

cardCreator('Editar-operacion', mainContainer);
const editOpCard = document.getElementById('editar-operacion');

const container = document.createElement('div');
container.classList.add('col-8')
const editOpForm = document.createElement('form');
editOpForm.setAttribute('id', 'editar-operacion-form');
editOpForm.setAttribute('class', 'form-group');
container.appendChild(editOpForm);
editOpCard.appendChild(container);

function createInputField(formId, type, name, placeholder, required){
    const form = document.getElementById(formId);
    const inputContainer =  document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    inputContainer.classList.add('d-flex', 'flex-column', 'mb-3')
    label.setAttribute('for', name);
    label.appendChild(document.createTextNode(name));
    label.classList.add('mb-1');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', required);
    input.setAttribute('id', `input-${name}`);
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    form.appendChild(inputContainer)
}

function createSelectField(formId, name, options){
    const form = document.getElementById(formId);
    const selectContainer = document.createElement('div');
    const label = document.createElement('label');
    const select = document.createElement('select');
    const option = document.createElement('option');

    selectContainer.classList.add('d-flex', 'flex-column', 'mb-3')
    label.setAttribute('for', name);
    label.classList.add('mb-1');
    label.appendChild(document.createTextNode(name));
    select.setAttribute('name', name);
    option.appendChild(document.createTextNode('Seleccione una opción'));
    select.appendChild(option);
    select.setAttribute('id', `select-${name}`);
    for (let i in options){
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(options[i]));
        select.appendChild(option);
    }
    selectContainer.appendChild(label);
    selectContainer.appendChild(select);
    form.appendChild(selectContainer)
}

fieldNames = ['description', 'amount', 'type', 'category', 'date']

// -- get the table transactions from local storage --//

const transactionsStorage = JSON.parse(window.localStorage.getItem('ahorradas-data'));
const transactions = transactionsStorage.operations;
const categories = transactionsStorage.categories;
const formCategories = []
const loadCategories = cat => {
    for (let obj of cat){
       formCategories.push(obj.cat);
    }
}
loadCategories(categories)

createInputField('editar-operacion-form', 'text', 'descripcion', '', true);
createInputField('editar-operacion-form', 'number', 'monto', '', true);
createSelectField('editar-operacion-form', 'tipo', ['Ingreso', 'Gasto']);
createSelectField('editar-operacion-form', 'categoria', formCategories);
createInputField('editar-operacion-form', 'date', 'fecha', '', true);




// Create a button to submit the form and save the info in an array in the local storage

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-primary');
submitButton.appendChild(document.createTextNode('Guardar'));
editOpForm.appendChild(submitButton);


// Create a function to save the info in an array in the local storage


const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const lS = JSON.parse(localStorage.getItem('ahorradas-data'));
const ops = lS.operations;

const data = ops.find(op => op.id === id);




document.getElementById('input-descripcion').value = data.description;
document.getElementById('input-monto').value = data.amount;
document.getElementById('select-tipo').value = data.type;
document.getElementById('select-categoria').value = data.category;
document.getElementById('input-fecha').value = data.date;




editOpForm.addEventListener('submit', e => {
    e.preventDefault();

    const payload = {
        id: id,
        description: e.target.querySelector('#input-descripcion').value,
        category: e.target.querySelector('#select-categoria').value,
        date: e.target.querySelector('#input-fecha').value,
        amount: e.target.querySelector('#input-monto').value,
        type: e.target.querySelector('#select-tipo').value,
    }

    const editedOps = lS.operations.map(item => {
        if (item.id === id){
            return payload
        }
        return item
    })

    localStorage.setItem('ahorradas-data', JSON.stringify({
        ...lS,
        operations: editedOps
    }))
})

