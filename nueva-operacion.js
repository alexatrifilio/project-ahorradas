// AhorrADAs script
// Language: Javascript 
// Authors: Vanessa Neira and Alejandra Trifilio
// Date 05-23-2022

// --- CARD --- //

cardCreator('Nueva-operacion', mainContainer);
const nuevaOpCard = document.getElementById('nueva-operacion');
const container = document.createElement('div');
const nuevaOpForm = document.createElement('form');

container.classList.add('col')
nuevaOpForm.setAttribute('id', 'nueva-operacion-form');
nuevaOpForm.setAttribute('class', 'form-group');
container.appendChild(nuevaOpForm);
nuevaOpCard.appendChild(container);



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

createInputField('nueva-operacion-form', 'text', 'description', 'Descripción', '', true);
createInputField('nueva-operacion-form', 'number', 'amount', 'Monto', '', true);
createSelectField('nueva-operacion-form', 'type', 'Tipo', ['Ingreso', 'Gasto']);
createSelectField('nueva-operacion-form', 'category', 'Categoría', formCategories);
createInputField('nueva-operacion-form', 'date', 'date', 'Fecha', '', true);




// Create a button to submit the form and save the info in an array in the local storage
const bttnCont = document.createElement('div');
bttnCont.classList.add('d-flex','justify-content-end')
const cancelBttn = document.createElement('a');
cancelBttn.setAttribute('href', './index.html')
cancelBttn.appendChild(document.createTextNode('Cancelar'));
cancelBttn.classList.add('btn', 'btn-outline-secondary', 'me-2');
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-info text-white');
submitButton.appendChild(document.createTextNode('Guardar'));
bttnCont.appendChild(cancelBttn);
bttnCont.appendChild(submitButton);
nuevaOpForm.appendChild(bttnCont);


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
}


submitButton.addEventListener('click', saveOperation);


