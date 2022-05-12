// --- CARD --- //

cardCreator('Nueva-operacion', mainContainer);
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











    // -- Form fields -- //



    // -- Description -- //


