// - Layout -- //

const row = document.createElement('div');
row.classList.add('row', 'justify-content-center');

// - cols - //
const col1 = document.createElement('div');
col1.classList.add('col');
row.appendChild(col1);
mainContainer.appendChild(row);

// --- CARD --- //

cardCreator('Categorias', col1);
const categoriasCard = document.getElementById('categorias');
    // -- Form -- //

singleRowForm('categorias-form', categoriasCard, 'Agregar');

const catFields = document.createElement('div');
categoriasCard.appendChild(catFields);


    // -- Show categories -- //

const showCategories = () => {
    const lsdata = JSON.parse(localStorage.getItem('ahorradas-data'));

    lsdata.categories.forEach(cat =>{
        const newCat = cat.cat;
            let row = document.createElement('div');
            row.classList.add('row', 'p-3');
            let col1 = document.createElement('div');
            col1.classList.add('col', 'col-9');
            let col2 = document.createElement('div');
            col2.classList.add('col', 'col-3', 'd-flex','align-items-center');
            let span = document.createElement('span');
            span.appendChild(document.createTextNode(newCat));
            span.classList.add('d-inline-block','bg-info', 'bg-opacity-50', 'p-1');
            col1.appendChild(span);
            let editar = document.createElement('a');
            editar.setAttribute('href', `./editar-categoria.html?id=${cat.id}`);
            editar.classList.add('me-2', 's-link');
            editar.appendChild(document.createTextNode('Editar'));
            col2.appendChild(editar);
            let eliminar = document.createElement('a');
            eliminar.setAttribute('href', '#');
            eliminar.setAttribute('id', `${cat.id}`);
            eliminar.classList.add('s-link');
            eliminar.appendChild(document.createTextNode('Eliminar'));
            col2.appendChild(eliminar);
            row.appendChild(col1);
            row.appendChild(col2);
    
            catFields.appendChild(row);            


            // -- Eliminar event -- //
        
        eliminar.addEventListener('click', (e)=> {
            const lS = JSON.parse(localStorage.getItem('ahorradas-data'));
            const categs = lS.categories
            for (let i = 0; i < categs.length; i++){
                if(categs[i].id === e.target.id){
                    categs.splice(categs[i], 1);
                }
            }
            localStorage.setItem('ahorradas-data', JSON.stringify({
                ...lS,
                categories: categs
            }))
            catFields.innerHTML = "";

            showCategories()
            

        })

    })    
}

showCategories();

    // -- Add Category Event -- //

    const categoriasForm = document.getElementById('categorias-form');

    categoriasForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const lsData = JSON.parse(localStorage.getItem('ahorradas-data'));
        const newCatName = e.target.querySelector('#nombre-cat').value;
        const newCat = {id:`${randomId()}`, cat: `${newCatName}`};
        lsData.categories.push(newCat);
        localStorage.setItem('ahorradas-data', JSON.stringify(lsData));
        
        catFields.innerHTML = "";
        
        showCategories();
    
    })  

     
 