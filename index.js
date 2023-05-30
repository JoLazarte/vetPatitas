//MOSTRAR ASIDE
const btnAside = document.getElementById('btn-aside'); //fuera del aside
const boxAside = document.querySelector('.box-aside');
const iconoBarras = document.querySelector('.icono-barras'); //dentro del aside

btnAside.addEventListener('click', () => {
    boxAside.style.display = 'flex';
    iconoBarras.addEventListener('click', () => {
        boxAside.style.display = 'none';
    });
});


//BOTON ASIDE 
iconoBarras.addEventListener('click', () => {
    boxAside.style.display = 'none';
    btnAside.addEventListener('click', () => {
        boxAside.style.display = 'flex';
    });
});

//
const nos = document.getElementById('nos');
const servs =document.getElementById('servs');
nos.addEventListener('click', ()=>{
    boxAside.style.display = 'none';
    btnAside.addEventListener('click', () => {
        boxAside.style.display = 'flex';
    });
});

servs.addEventListener('click', ()=>{
    boxAside.style.display = 'none';
    btnAside.addEventListener('click', () => {
        boxAside.style.display = 'flex';
    });
});
