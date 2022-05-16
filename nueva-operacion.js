// --- CARD --- //

cardCreator('nueva-operacion', mainContainer);
const nuevaOpCard = document.getElementById('nueva-operacion');

const nuevaOpForm = document.createElement('form');
nuevaOpForm.setAttribute('id', 'nueva-operacion-form');
nuevaOpForm.setAttribute('class', 'form-group');
nuevaOpCard.appendChild(nuevaOpForm);

function createInputField(formId, type, name, placeholder, required){
    const form = document.getElementById(formId);
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', name);
    label.appendChild(document.createTextNode(name));
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', required);
    input.setAttribute('id', `input-${name}`);
    form.appendChild(label);
    form.appendChild(input);
}

function createSelectField(formId, name, options){
    const form = document.getElementById(formId);
    const label = document.createElement('label');
    const select = document.createElement('select');
    const option = document.createElement('option');

    label.setAttribute('for', name);
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
    form.appendChild(label);
    form.appendChild(select);
}

fieldNames = ['description', 'amount', 'type', 'category', 'date']

createInputField('nueva-operacion-form', 'text', 'description', '', true);
createInputField('nueva-operacion-form', 'number', 'amount', '', true);
createSelectField('nueva-operacion-form', 'type', ['Ingreso', 'Gasto']);
createSelectField('nueva-operacion-form', 'category', ['Entretenimiento', 'Salud', 'Renta', 'Otros']);
createInputField('nueva-operacion-form', 'date', 'date', '', true);

// -- get the table transactions from local storage --//

const transactions = JSON.parse(window.localStorage.getItem('transactions'));
console.log(transactions);

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
        description,
        amount,
        type,
        category,
        date
    }

    transactions.push(newTransaction);
    window.localStorage.setItem('transactions', JSON.stringify(transactions));
    console.log(transactions);
}

// Add an event listener to the submit button to save the info in an array in the local storage

submitButton.addEventListener('click', saveOperation);

// Create a function to show the info in the table



    // -- Form fields -- //



    // -- Description -- //


