import './Footer.css';

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="fondo">
      {/* <!-- Footer Links --> */}
      <div className="container text-center text-md-left">
        {/* <!-- Grid row --> */}
        <div className="row">
          {/* <!-- Grid column --> */}
          <>{primeraColumna()}</>
          {/* <!-- Grid column --> */}
          {/* <!-- Grid column --> */}
          <>{segundaColumna()}</>
          {/* <!-- Grid column --> */}
          {/* <!-- Grid column --> */}
          <>{terceraColumna()}</>
          {/* <!-- Grid column --> */}
          {/* <!-- Grid column --> */}
          <>{cuartaColumna()}</>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Footer Links --> */}
    </footer>
  );
}

const primeraColumna = () => {
  return(
    <div className="col-md-3">
      <div className="row">
        <p className="titulo">Nuestros sitios</p>
      </div>
      <div className="row">
          {/* <!-- Links --> */}     
          <a className="enlace-footer" href="#!">Cien Radios</a><p className="separador">&nbsp;|&nbsp;</p>
          <a className="enlace-footer" href="#!">Radio Mitre</a><p className="separador">&nbsp;|&nbsp;</p>
          <a className="enlace-footer" href="#!">La 100</a><p className="separador">&nbsp;|&nbsp;</p>
          <a className="enlace-footer" href="#!">Mía FM</a><p className="separador">&nbsp;|&nbsp;</p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          {/* <!-- Links --> */}
          <div className="row">
            <p className="titulo">Seguinos</p>
          </div>
          <div className="row">
          {/* <!-- Facebook --> */}
            <a class="fb-ic">
              <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            {/* <!--Instagram--> */}
            <a class="ins-ic">
              <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            {/* <!-- Twitter --> */}
            <a class="tw-ic">
              <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            <a class="tw-ic">
              <i class="fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
          </div>
      </div>
      <div className="col-md-6 col-lg-6">
        {/* <!-- Links --> */}
        <div className="row">
          <p className="titulo">Apps</p>
        </div>
      </div>
    </div>
  </div>
  )
}

const segundaColumna = ()  => {
  return(
    <div className="col-md-3 ">
    {/* <!-- Links --> */}
      <p className="titulo">Secciones</p>
      <ul className="list-unstyled">
      <li>
        <a className="enlace-footer" href="#!">Link 1</a>
      </li>
    </ul>
  </div>
  )
}

const terceraColumna = () => {
  return (
    <div className="col-md-3 ">
      {/* <!-- Links --> */}
      <p className="titulo">Figuras</p>
      <ul className="list-unstyled">
        <li>
          <a className="enlace-footer" href="#!">Link 1</a>
        </li>
      </ul>
    </div>
  )
}

const cuartaColumna = () => {
  return(
    <div className="col-md-3 ">
    {/* <!-- Links --> */}
      <p className="titulo">Institucional</p>
      <ul className="list-unstyled">
        <li>
          <a className="enlace-footer" href="#!">Link 1</a>
        </li>
      </ul>
  </div>
  )
}

export default Footer;
