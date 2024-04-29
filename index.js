const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const slider = document.querySelector('.slider');

nextBtn.addEventListener('click',()=>{
    const item =document.querySelectorAll('.item');
    slider.appendChild(item[0]);
})

prevBtn.addEventListener('click',()=>{
    const item =document.querySelectorAll('.item');
    slider.prepend(item[item.lenght-1]);
})