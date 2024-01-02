// ELEMENTS
const toggleBtn = document.querySelector(".theme-switch__container")
const project = document.querySelector(".project")
const projectOne = document.querySelector("#project-one")
const projectTwo = document.querySelector("#project-two")
const contact = document.querySelector("#contact__location")
const code = document.querySelector(".code__inimation")
const berger = document.querySelector('.berger')
const menuItems = document.querySelector('.items')
const lists = document.querySelectorAll('.item')


// OPEN AND CLOSE BERGER BUTTON WHEN CLICK
berger.addEventListener('click',(e)=>{
    e.preventDefault()
    berger.classList.toggle('exit')
    menuItems.classList.toggle('active__item')
    document.body.classList.toggle('scrol')
})
// CLOSE SLIDES WHEN CLICK ON LISTS
lists.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        berger.classList.toggle('exit')
        menuItems.classList.toggle('active__item')
        document.body.classList.toggle('scrol')
    })
})

// HANDLE DARK AND LIGHT 
toggleBtn.addEventListener("click", (e)=>{
    const classLists = toggleBtn.classList
    if(classLists.length === 1){
        toggleBtn.classList.add('active-toggle');
        document.body.style.backgroundColor = "#f0f0f0"
        document.body.style.color = "#000"
        project.style.backgroundColor = "#00D6FE"
        projectOne.style.backgroundColor = "#00D6FE"
        projectTwo.style.backgroundColor = "#00D6FE"
        contact.style.color = "#000"
    }else{
        toggleBtn.classList.remove('active-toggle');
        document.body.style.backgroundColor = "#1e2730fd"
        document.body.style.color = "#fff"
        project.style.backgroundColor = "#1e2730fd"
        projectOne.style.backgroundColor = "#1e2730fd"
        projectTwo.style.backgroundColor = "#1e2730fd"
        contact.style.color = "#fff"
    }
})



