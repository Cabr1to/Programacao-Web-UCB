document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');
    const counterDisplay = document.querySelector('.counter');
    const textInput = document.getElementById('textInput');
    const textContainer = document.getElementById('textContainer');
    const charCounter = document.querySelector('.char-counter');
    const addListButton = document.getElementById('addListButton');
    const listTypeSelect = document.getElementById('listType');
    const listsContainer = document.getElementById('listsContainer');
    const resetButton = document.getElementById('resetButton');


    let clickCount = 0;
    let listCounter = 1;

    incrementButton.addEventListener('click', function() {
        clickCount++;
        updateCounter();
    });

    decrementButton.addEventListener('click', function() {
        if (clickCount > 0) {
            clickCount--;
            updateCounter();
        } else {
            alert('O contador já está em zero!');
        }
    });

    function updateCounter() {
        counterDisplay.textContent = clickCount;
    }

    // Adicionar texto dinâmico
    textInput.addEventListener('keyup', function(e) {
        const textWithoutSpaces = textInput.value.replace(/\s/g, '');
        charCounter.textContent = `Caracteres: ${textWithoutSpaces.length}`;

        if (e.key === 'Enter' && textInput.value.trim() !== '') {
            const paragraph = document.createElement('p');
            paragraph.textContent = textInput.value;
            textContainer.appendChild(paragraph);
            textInput.value = '';
            charCounter.textContent = 'Caracteres: 0';
        }
    });

    addListButton.addEventListener('click', function() {
        const listType = listTypeSelect.value;
        const list = document.createElement(listType);
        
        for (let i = 1; i <= 3; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Item ${listCounter}.${i}`;
            list.appendChild(listItem);
        }
        
        listsContainer.appendChild(list);
        listCounter++;
    });


    resetButton.addEventListener('click', function() {
        clickCount = 0;
        updateCounter();
        

        textContainer.innerHTML = '';
        textInput.value = '';
        charCounter.textContent = 'Caracteres: 0';
        
        listsContainer.innerHTML = '';
        listCounter = 1;
    });
});