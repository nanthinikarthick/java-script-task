const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.content');
tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{

   
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');
    var line= document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";
    
    all_content.forEach(content=>{content.classList.remove('active')})
    all_content[index].classList.add('active');
    })
})






































// const tabBox = document.querySelector('.tab-box');
// const tabs = tabBox.querySelectorAll('.tab-btn');
// const contents = document.querySelectorAll('.content');

// tabs.forEach((tab) => {
//     tab.addEventListener('click', () => {
//         tabs.forEach((tab) => {
//             tab.classList.remove('active');
//         });
//         tab.classList.add('active');

//         contents.forEach((content) => {
//             content.classList.remove('active');
//         });
//         document.querySelector(`#${tab.dataset.target}`).classList.add('active');
//     });
// });


