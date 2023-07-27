import '../styles/style.css'

function cargarDatosJSONConFetch() {
  fetch('../data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => listarAutocaravanas(data))
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Función para mostrar las autocaravanas en el HTML
function listarAutocaravanas(data) {
  const listaAutocaravanasDiv = document.getElementById('listaAutocaravanas');

  // Limpia la lista antes de agregar nuevas autocaravanas
  listaAutocaravanasDiv.innerHTML = '';

  // Recorremos cada autocaravana en la lista
  data.autocaravanas.forEach(autocaravana => {
    const autocaravanaDiv = document.createElement('div');
    autocaravanaDiv.classList.add('autocaravana'); // Agrega una clase para aplicar estilos si es necesario

    autocaravanaDiv.innerHTML = `
      <div class="div-img"></div>
      <div class="div-info">
        <h3 class="card-title">${autocaravana.modelo} Furgoneta Cámper SUNLIGHT Cliff 601</h3>
        <p class="card-text">${autocaravana.caracteristicas} Furgoneta camper de literas para 4 personas con el siguiente equipamiento opcional: Oscurecedores Remis en cabina Toldo Placa solar Convertidor 350W Equipo multimedia Pioneer con cámara trasera TV LE...</p>
        <p class="card-text">${autocaravana.extras.join(", ")}</p>
      </div>
      <div class="div-alquiler">
        <h2 class="card-title"> DESDE </br> ${autocaravana.precio} / Día</h2>
        <button type="button" onclick="location.href='../pages/formulario.html'">MÁS INFORMACIÓN</button>
      </div>
    `;

    listaAutocaravanasDiv.appendChild(autocaravanaDiv);
  });
}

document.querySelector('#app').innerHTML = 
`<body>
      <div class="main">
        <nav class="navbar">
        <!-- LOGO -->
          <div class="logo">!LOGO</div>

          <!-- NAVIGATION MENU -->
          <ul class="nav-links">
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>

            <!-- NAVIGATION MENUS -->
            <!-- NAVIGATION MENUS -->
          <div class="menu">

            <li class="services">
              <a href="/">Services</a>

              <!-- DROPDOWN MENU -->
              <ul class="dropdown">
                <li><a href="/">Dropdown 1 </a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 3</a></li>
                <li><a href="/">Dropdown 4</a></li>
              </ul>

            </li>

            <li><a href="/">Contact</a></li>
            <li><a href="/">About</a></li>
          </div>
          </ul>
        </nav>
        <div class="main-list">
            <div class="side-filter">
            
            </div>
            <div class="list" id="listaAutocaravanas">
                // AQUI VA LA FUNCION
            </div>
        </div>
    </div>
  <footer>
    <div class="footer">
      <div class="row">
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
      <div class="row">
       INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 
      </div>  
    </div>
  </footer> 
</body>
`