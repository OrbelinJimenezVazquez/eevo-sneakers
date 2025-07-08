import '/src/styles/components/layout/Nav-foot.css'; 


export default function Footer() {
  return (
    <footer className="footer">
      <div class="gp1">
        <div class="box_image">
          <figure>
            <a href="#">
              <img src="src/assets/images/Logos/logo1-2.png" alt="Logo de Eevo SNEAKERS" />
            </a>
          </figure>
        </div>
        <div class="box_about">
          <h2>Sobre nosotros</h2>
          <p>
            Somos alumnos de la Universidad del Caribe realizando una práctica
            con el fin de aprender y mejorar nuestras habilidades de desarrollo
            y cooperación.
          </p>
          <p>
            Estamos comprometidos en aplicar los conocimientos adquiridos en
            nuestras ces y trabajar en equipo para llevar a cabo este
            proyecto de manera exitosa.
          </p>
          <div class="politicas">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
          </div>
        </div>

        <div class="box_follow">
          <h2>Siguenos</h2>
          <div class="social-icons">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div class="gp2">
        <small> 
          &copy; 2025 <b>EEVO SNEAKERS</b> <br></br>- Todos los derechos reservados.
          Esta pagina fue realiza por <b>Orbelin Jimenez Vazquez</b> -
        </small>
      </div>
    </footer>
  );
}