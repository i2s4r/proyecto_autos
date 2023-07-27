import '../styles/style.css'

function validarFormulario() {
  const formulario = document.getElementById('miFormulario');
  const inputs = formulario.querySelectorAll('input[required]');

  let isValid = true;

  inputs.forEach(input => {
    const value = input.value.trim();
    if (value === '') {
      isValid = false;
      alert(`El campo ${input.name} es obligatorio.`);
    } else if (input.type === 'email' && !isValidEmail(value)) {
      isValid = false;
      alert(`El campo ${input.name} debe ser un correo electrónico válido.`);
    } else if (input.type === 'tel' && !isValidPhoneNumber(value)) {
      isValid = false;
      alert(`El campo ${input.name} debe ser un número de teléfono válido.`);
    }
  });

  if (isValid) {
    formulario.submit();
  }
}

function isValidEmail(email) {
  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
  // Expresión regular para validar un número de teléfono (solo dígitos)
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phoneNumber);
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
        <div class="form-div">
          <form action="/enviar_datos" method="post" id="miFormulario">
          <fieldset>
            <legend>Datos de Alquiler</legend>

            <label for="num_pasajeros">Número de Pasajeros:</label>
            <input type="number" id="num_pasajeros" name="num_pasajeros" min="1" required><br>

            <label for="fecha_inicio">Fecha de inicio del alquiler:</label>
            <input type="date" id="fecha_inicio" name="fecha_inicio" required><br>

            <label for="fecha_final">Fecha final del alquiler:</label>
            <input type="date" id="fecha_final" name="fecha_final" required><br>
          </fieldset>
            <div class="carta-auto-form">
                    <div class="form-div-img"></div>
                    <h3 class="card-title">Furgoneta Cámper SUNLIGHT Cliff 601</h3>
                    <h2> PRECIO TOTAL : </h2>
                    <p class="card-title"> 100$ / Día</p>
           </div>
            <fieldset>
              <legend>Datos Personales</legend>

              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required><br>

              <label for="apellidos">Apellidos:</label>
              <input type="text" id="apellidos" name="apellidos" required><br>

              <label for="dni">DNI:</label>
              <input type="text" id="dni" name="dni" required><br>

              <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
              <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required><br>

              <label for="fecha_carnet">Fecha de Carnet de Conducir:</label>
              <input type="date" id="fecha_carnet" name="fecha_carnet" required><br>
            </fieldset>
            <fieldset>
            <legend>Datos de Contacto</legend>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required><br>

                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" required><br>

                <label for="codigo_postal">Código Postal:</label>
                <input type="text" id="codigo_postal" name="codigo_postal" required><br>

                <label for="poblacion">Población:</label>
                <input type="text" id="poblacion" name="poblacion" required><br>

                <label for="provincia">Provincia:</label>
                <input type="text" id="provincia" name="provincia" required><br>
            </fieldset>
            <input type="submit" value="Enviar" class="btn-enviar">
        </form>

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