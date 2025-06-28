(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){console.log("Página cargada correctamente");const r=document.querySelector("form");r&&r.addEventListener("submit",function(t){t.preventDefault(),alert("Gracias por tu mensaje. Te contactaré pronto."),r.reset()})});document.querySelector("#app").innerHTML=`
<header>
  <div class="brand">
    <img class="brand-image" src="ruta/a/tu/foto.jpg" alt="Foto de perfil" />
    <h1>Mi Portafolio Profesional</h1>
  </div>
  <div class="search">
    <form action="#" method="get">
      <input type="text" placeholder="Buscar proyectos..." name="searchquery" />
      <button type="submit">Buscar</button>
    </form>
  </div>
  <nav>
    <ul>
      <li><a href="#bio">Biografía</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#testimonios">Testimonios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="bio" class="profile">
    <img class="profile-image" src="ruta/a/tu/foto.jpg" alt="Foto de perfil" />
    <div>
      <h2>Sobre mí</h2>
      <p>Soy un desarrollador web apasionado por crear sitios y aplicaciones funcionales, atractivos y responsivos. Tengo experiencia en HTML, CSS, JavaScript, y desarrollo de proyectos desde cero.</p>
    </div>
  </section>

  <section id="proyectos">
    <h2>Mis Proyectos</h2>
    <div class="card">
      <div class="header">
        <img src="https://picsum.photos/id/1011/600/300" alt="Proyecto 1" />
        <strong>Proyecto 1</strong>
      </div>
      <div class="content">
        <p>Este proyecto es una aplicación web para gestión de tareas, desarrollada con HTML, CSS y JavaScript.</p>
      </div>
      <div class="footer">
        <button class="rounded">Ver más</button>
      </div>
    </div>
    <div class="card">
      <div class="header">
        <img src="https://picsum.photos/id/1012/600/300" alt="Proyecto 2" />
        <strong>Proyecto 2</strong>
      </div>
      <div class="content">
        <p>Un sitio institucional para una empresa local, completamente responsivo y accesible.</p>
      </div>
      <div class="footer">
        <button class="rounded">Ver más</button>
      </div>
    </div>
  </section>

  <section id="testimonios">
    <h2>Testimonios</h2>
    <div class="testimonial">
      <p>"Excelente trabajo, muy profesional y cumplido en los plazos." – Cliente A</p>
    </div>
    <div class="testimonial">
      <p>"El sitio quedó mejor de lo esperado. ¡Gracias!" – Cliente B</p>
    </div>
  </section>

  <section id="contacto">
    <h2>Contacto</h2>
    <form action="#" method="post">
      <div class="form-control">
        <label for="txtNombre">Nombre:</label>
        <input type="text" id="txtNombre" name="txtNombre" placeholder="Ej. Juan Pérez" />
      </div>
      <div class="form-control">
        <label for="txtEmail">Correo electrónico:</label>
        <input type="email" id="txtEmail" name="txtEmail" placeholder="ejemplo@email.com" />
      </div>
      <div class="form-control">
        <label for="cmbInterest">Interés:</label>
        <select id="cmbInterest" name="cmbInterest">
          <option value="web">Desarrollo Web</option>
          <option value="apps">Aplicaciones</option>
          <option value="otros">Otros</option>
        </select>
      </div>
      <div class="form-control form-actions">
        <button type="reset">Limpiar</button>
        <button type="submit">Enviar</button>
      </div>
    </form>
  </section>
</main>

<footer>
  <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
</footer>
`;
