

const addbutton = document.querySelector(".add-button");
let notenumber=1;
addbutton.addEventListener("click", () => {
    
    
    addItem(notenumber);
    notenumber++;
   
})


function addItem(x) {
    const note = document.createElement("div");
    note.classList.add("notes");

    

    note.innerHTML =
        `<div class="notes">
            <div class="tools">
            <span class="note-number">Note ${x}</span>
                <button class="btn" id="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
         <div class="main ">
            <textarea class="hidden  " name="note-area" id="ta" cols="" rows=""></textarea>
        </div>

        </div>`
    

    

    const btnEdit = note.querySelector("#edit-btn");
    const btnDelete = note.querySelector("#delete-btn");
    const textArea = note.querySelector("#ta");
    const textvalue = note.querySelector(".main")
    
    
    document.body.appendChild(note);

    btnDelete.addEventListener("click",()=>{
        note.remove();
    })
}