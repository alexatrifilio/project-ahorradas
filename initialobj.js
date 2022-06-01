// AhorrADAs script
// Language: Javascript 
// Authors: Vanessa Neira and Alejandra Trifilio
// Date 05-23-2022

const initialData = {
    categories: [],
    operations: []
};

const init = () => {
    const storage = JSON.parse(localStorage.getItem('ahorradas-data'));

    if(!storage){
        localStorage.setItem('ahorradas-data', JSON.stringify(initialData))
    }
};

init();

const idKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
const randomId = ()=> {
    let finalId = '';
    for(let i = 0; i < 9; i++){
        const random = Math.floor(Math.random()*idKeys.length);
        let elem = idKeys.slice(random, random+1);
        finalId = finalId.concat(elem);
    }
    return finalId
}
const initialCategories = [{
    id: `${randomId()}`,
    cat: 'Comida'
},
{
    id: `${randomId()}`,
    cat: 'Servicios'
},
{
    id: `${randomId()}`,
    cat: 'Salidas'
},
{
    id: `${randomId()}`,
    cat: 'Educación'
},
{
    id: `${randomId()}`,
    cat: 'Transporte'
},
{
    id: `${randomId()}`,
    cat: 'Trabajo'
},
]
const initCat = () => {
    const storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    
        if(storage.categories.length === 0){
            for (let elem of initialCategories){
                storage.categories.push(elem)
            }
            localStorage.setItem('ahorradas-data', JSON.stringify(storage))
            
        }


};

initCat()