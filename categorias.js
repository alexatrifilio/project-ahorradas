// --- CARD --- //

cardCreator('Categorias', mainContainer);
const categoriasCard = document.getElementById('categorias');


    // -- Form -- //

const categoriasForm = document.createElement('form');
categoriasForm.setAttribute('action', 'submit');
let row = document.createElement('div');
row.classList.add('row');
let col1 = document.createElement('div');
col1.classList.add('col', 'col-10');
let col2 = document.createElement('div');
col2.classList.add('col', 'col-2');
categoriasForm.appendChild(row);
row.appendChild(col1);
row.appendChild(col2);
const inpCont = document.createElement('div');
inpCont.classList.add('d-flex', 'flex-column');
let label = document.createElement('label');
let input = document.createElement('input');
input.setAttribute('id', 'nombre-cat');
input.setAttribute('type', 'text');
label.setAttribute('for', 'nombre-cat');
inpCont.appendChild(label);
inpCont.appendChild(input);
col1.appendChild(inpCont);
const catFormBttn = document.createElement('button');
catFormBttn.setAttribute('type', 'submit');
catFormBttn.classList.add('btn','btn-info', 'text-white')
catFormBttn.appendChild(document.createTextNode('agregar'));
col2.appendChild(catFormBttn);

categoriasCard.appendChild(categoriasForm);

const catFields = document.createElement('div');
categoriasCard.appendChild(catFields);


// - Categories in local storage - //
const initialCate = ['Comida', 'Servicios','Trabajo', 'Salidas', 'Educación', 'Transporte'];
localStorage.setItem('categories', JSON.stringify(initialCate)); 

    // -- Show categories -- //

const showCategories = () => {
    const categories = JSON.parse(localStorage.getItem('categories'));

    categories.forEach((cat)=> {
        let lowerCaseCat = cat.toLowerCase();
        let row = document.createElement('div');
        row.classList.add('row', 'p-3');
        let col1 = document.createElement('div');
        col1.classList.add('col', 'col-9');
        let col2 = document.createElement('div');
        col2.classList.add('col', 'col-3', 'd-flex','align-items-center');
        let span = document.createElement('span');
        span.appendChild(document.createTextNode(cat));
        span.classList.add('d-inline-block','bg-info', 'bg-opacity-50', 'p-1');
        col1.appendChild(span);
        let editar = document.createElement('a');
        editar.setAttribute('href', './editar-categoria.html');
        editar.classList.add('me-2');
        editar.appendChild(document.createTextNode('Editar'));
        col2.appendChild(editar);
        let eliminar = document.createElement('a');
        eliminar.setAttribute('href', '#');
        eliminar.setAttribute(`data-${lowerCaseCat}`, lowerCaseCat);
        eliminar.appendChild(document.createTextNode('Eliminar'));
        col2.appendChild(eliminar);
        row.appendChild(col1);
        row.appendChild(col2);

        catFields.appendChild(row);

        // -- Eliminar event -- //

        eliminar.addEventListener('click', (e)=> {
            const lsCategories = JSON.parse(localStorage.getItem('categories'));
            console.log('holi');
            lsCategories.forEach((ct) => {
                const lowerCaseCt = ct.toLowerCase()
                console.log(e.target.querySelector([`data-${lowerCaseCt}="${lowerCaseCt}"`]));
                if(e.target.querySelector(`data-${lowerCaseCt}`).includes(lowerCaseCt)){
                    lsCategories.splice(parseInt(index),1);
                    console.log(lsCategories);
                }
            })
        })

    })
    
}

showCategories();

    // -- Submit Event -- //

    categoriasForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const lsCategories = JSON.parse(localStorage.getItem('categories'));
        const newCat = e.target.querySelector('#nombre-cat').value;
        lsCategories.push(newCat);
        
        localStorage.setItem('categories', JSON.stringify(lsCategories));
        
        catFields.innerHTML = "";
        
        showCategories();
    
    })  


