let btnAdd = document.getElementById("agregar");
let btnClear = document.getElementById("limpiar");
let inputItem = document.getElementById("item");
let contenedor = document.getElementById("contenedor");

    function addItem(item) {
        contenedor.innerHTML += `<li class="list-group-item">` + item + `</li>`;
    }

    const savedItems = JSON.parse(localStorage.getItem("item")) || [];
    savedItems.forEach(item => {
        addItem(item);
    });

    btnAdd.addEventListener("click", () => {
        const newItem = inputItem.value;
        
        if (newItem !== "") {
          addItem(newItem);
          savedItems.push(newItem);
          localStorage.setItem("item", JSON.stringify(savedItems));
          
          inputItem.value = "";
        }
    });
    
    btnClear.addEventListener("click", () => {
        localStorage.removeItem("item");
        contenedor.innerHTML = "";
    });


