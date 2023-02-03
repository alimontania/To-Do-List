const input = document.querySelector("input");
const btnAdd = document.querySelector(".btnAdd");
const ul = document.querySelector("ul");
const empaty = document.querySelector(".empaty");

btnAdd.addEventListener("click" , (e) =>{
    e.preventDefault();

    const text = input.value;
    if (text !== ""){

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empaty.style.display = "none";
    }
}); 

function addDeleteBtn (){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X';
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click' , (e)  => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");
        if( items.length === 0) {
            empaty.style.display ="block";
        }
    });

    return deleteBtn;

}