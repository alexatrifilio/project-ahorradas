// AhorrADAs script
// Language: Javascript 
// Authors: Vanessa Neira and Alejandra Trifilio
// Date 05-23-2022

// --- CARD --- //

cardCreator('Editar-categoria', mainContainer);
const editCatCard = document.getElementById('editar-categoria');
singleRowForm('editar-cat-form', editCatCard, 'Editar');
const editCatForm = document.getElementById('editar-cat-form');
const bttnCont = document.createElement('div');
bttnCont.classList.add('d-flex','justify-content-end', 'my-3', 'col-10')
const cancelBttn = document.createElement('a');
cancelBttn.setAttribute('href', './categorias.html')
cancelBttn.appendChild(document.createTextNode('Cancelar'));
cancelBttn.classList.add('btn', 'btn-outline-secondary', 'me-2');
const bttn = editCatForm.querySelector('button');
bttnCont.appendChild(cancelBttn);
bttnCont.appendChild(bttn);
editCatForm.appendChild(bttnCont)




const params = new URLSearchParams(window.location.search);


const id = params.get('id');

const lS = JSON.parse(localStorage.getItem('ahorradas-data'));

const data = lS.categories.find(cat => cat.id === id);

editCatForm.querySelector('#nombre-cat').value = data.cat

editCatForm.addEventListener('submit', e => {
    e.preventDefault();

    const payload = {
        id: id,
        cat: e.target.querySelector('#nombre-cat').value
    }

    const editedCat = lS.categories.map(item => {
        if (item.id === id){
            return payload
        }
        return item
    })

    localStorage.setItem('ahorradas-data', JSON.stringify({
        ...lS,
        categories: editedCat
    }))
})