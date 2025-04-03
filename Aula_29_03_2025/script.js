document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const itemSelect = document.getElementById('itemSelect');
    const markButton = document.getElementById('markButton');
    const unmarkButton = document.getElementById('unmarkButton');
    const removeButton = document.getElementById('removeButton');
    const tableBody = document.getElementById('tableBody');
    const messageDiv = document.getElementById('message');

    // Array para armazenar os itens
    let items = [];

    // Função para adicionar item
    function addItem() {
        const itemText = itemInput.value.trim();
        
        if (itemText === '') {
            showMessage('Por favor, digite um item válido.');
            return;
        }

        // Verifica se o item já existe
        if (items.some(item => item.text === itemText)) {
            showMessage('Este item já foi adicionado.');
            return;
        }

        // Cria o novo item
        const newItem = {
            text: itemText,
            marked: false
        };

        // Adiciona ao array
        items.push(newItem);

        // Atualiza a tabela e o select
        updateTable();
        updateSelect();

        // Limpa o input
        itemInput.value = '';
        hideMessage();
    }

    // Função para atualizar a tabela
    function updateTable() {
        tableBody.innerHTML = '';
        
        items.forEach(item => {
            const row = document.createElement('tr');
            if (item.marked) {
                row.classList.add('marked');
            }
            
            const cellText = document.createElement('td');
            cellText.textContent = item.text;
            
            const cellStatus = document.createElement('td');
            cellStatus.textContent = item.marked ? 'Marcado' : 'Não marcado';
            
            row.appendChild(cellText);
            row.appendChild(cellStatus);
            tableBody.appendChild(row);
        });
    }

    // Função para atualizar o select
    function updateSelect() {
        itemSelect.innerHTML = '<option value="">Selecione um item</option>';
        
        items.forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = item.text;
            itemSelect.appendChild(option);
        });
    }

    // Função para marcar item
    function markItem() {
        const selectedIndex = itemSelect.value;
        
        if (selectedIndex === '') {
            showMessage('Por favor, selecione um item.');
            return;
        }
        
        items[selectedIndex].marked = true;
        updateTable();
        hideMessage();
    }

    // Função para desmarcar item
    function unmarkItem() {
        const selectedIndex = itemSelect.value;
        
        if (selectedIndex === '') {
            showMessage('Por favor, selecione um item.');
            return;
        }
        
        if (!items[selectedIndex].marked) {
            showMessage('Este item já está desmarcado.');
            return;
        }
        
        items[selectedIndex].marked = false;
        updateTable();
        hideMessage();
    }

    // Função para remover item
    function removeItem() {
        const selectedIndex = itemSelect.value;
        
        if (selectedIndex === '') {
            showMessage('Por favor, selecione um item.');
            return;
        }
        
        items.splice(selectedIndex, 1);
        updateTable();
        updateSelect();
        hideMessage();
    }

    // Funções auxiliares para mensagens
    function showMessage(msg) {
        messageDiv.textContent = msg;
        messageDiv.style.display = 'block';
    }

    function hideMessage() {
        messageDiv.style.display = 'none';
    }

    // Event Listeners
    addButton.addEventListener('click', addItem);
    
    itemInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
    
    markButton.addEventListener('click', markItem);
    unmarkButton.addEventListener('click', unmarkItem);
    removeButton.addEventListener('click', removeItem);
});