import './styles/style.css'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

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
        <div class="card">
          <h1>Fácil , rápido y barato</h1>
          <p>Escoge uno de nuestros modelos disponibles y disfruta de tu autocaravana en unos sencillos pasos.</p>
          <button type="button" class="b-catalogo" onclick="location.href='./pages/listadocaravanas.html'">AQUÍ</button>
          
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
