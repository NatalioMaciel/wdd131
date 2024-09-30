const input = document.querySelector('#favchap'); 
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const chapterText = input.value.trim();

    if (chapterText !== '') {
        const li = document.createElement('li');
        li.textContent = chapterText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        // Add event listener for the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton); 
        list.appendChild(li);
        
        // Clear the input field
        input.value = '';
        input.focus();
        
    } else {
        alert('Please enter an item!');
    }
});