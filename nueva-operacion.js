// --- CARD --- //

cardCreator('Nueva-operacion', mainContainer);
const nuevaOpCard = document.getElementById('nueva-operacion');

const container = document.createElement('div');
container.classList.add('col-8')
const nuevaOpForm = document.createElement('form');
nuevaOpForm.setAttribute('id', 'nueva-operacion-form');
nuevaOpForm.setAttribute('class', 'form-group');
container.appendChild(nuevaOpForm);
nuevaOpCard.appendChild(container);

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

createInputField('nueva-operacion-form', 'text', 'description', '', true);
createInputField('nueva-operacion-form', 'number', 'amount', '', true);
createSelectField('nueva-operacion-form', 'type', ['Ingreso', 'Gasto']);
createSelectField('nueva-operacion-form', 'category', formCategories);
createInputField('nueva-operacion-form', 'date', 'date', '', true);




// Create a button to submit the form and save the info in an array in the local storage

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-primary');
submitButton.appendChild(document.createTextNode('Guardar'));
nuevaOpForm.appendChild(submitButton);


// Create a function to save the info in an array in the local storage

function saveOperation(e){
    e.preventDefault();
    const description = document.getElementById('input-description').value;
    const amount = document.getElementById('input-amount').value;
    const type = document.getElementById('select-type').value;
    const category = document.getElementById('select-category').value;
    const date = document.getElementById('input-date').value;

    const newTransaction = {
        id : `${randomId()}`,
        description,
        category,
        date,
        amount,
        type
    }

    transactions.push(newTransaction);
    window.localStorage.setItem('ahorradas-data', JSON.stringify({
        ...transactionsStorage,
        operations: transactions
    }));
    console.log(transactionsStorage);
}

// Add an event listener to the submit button to save the info in an array in the local storage

submitButton.addEventListener('click', saveOperation);

// Create a function to show the info in the table



    // -- Form fields -- //



    // -- Description -- //


