// AhorrADAs script
// Language: Javascript 
// Authors: Vanessa Neira and Alejandra Trifilio
// Date 05-23-2022

// --- CARD --- //

cardCreator('Editar-categoria', mainContainer);
const editCatCard = document.getElementById('editar-categoria');
singleRowForm('editar-cat-form', editCatCard, 'Editar');
const editCatForm = document.getElementById('editar-cat-form');
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