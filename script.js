const notesSection = document.querySelector('.notesSection');
const createBtn = document.querySelector('#btn');

showNotes();

createBtn.addEventListener('click', addInputBox);

function addInputBox() {
    const inputBox = document.createElement('p');
    const img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'assests/delete.png';
    notesSection.appendChild(inputBox).appendChild(img);
}

notesSection.addEventListener('click', (e) => {
    deleteInputBox(e);
});

function deleteInputBox(e) {
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P'){
        const notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage(); 
            }
        });
    }
}

function updateStorage() {
    localStorage.setItem('notes', notesSection.innerHTML);
}

function showNotes() {
    notesSection.innerHTML = localStorage.getItem('notes');
}