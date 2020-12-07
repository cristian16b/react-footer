import './Footer.css';

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="fondo">
      {/* <!-- Footer Links --> */}
      <div className="container">
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
    <div className="col-lg-3">
      <div className="row" align="left">
        <div className="col-md-12 col-lg-12  text-left" align="left">
          <ul id="lista1" >
              <li>
              <p className="titulo">Nuestros sitios</p>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">Cien Radios</a><span class="separador"> | </span>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">Radio Mitre</a><span class="separador"> | </span>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
              </li>
          </ul>
        </div>
      </div>
      <div className="row" align="left">
        <div className="col-md-6 col-lg-6  text-left" align="left">
          <ul id="lista1" >
              <li>
              <p className="titulo">Seguinos</p>
              </li>
              <li>
                <a class="fb-ic">
                  <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
              </li>
              <li>
                <a class="ins-ic">
                  <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
              </li>
              <li>
                <a class="tw-ic">
                  <i class="fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-6  text-left" align="left">
          <ul id="lista1" >
              <li>
                <p className="titulo">Apps</p>
              </li>
              <li>
                  <a class="fb-ic">
                  <i class="fab fa-android fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </li>
              <li>
                  <a class="fb-ic">
                  <i class="fab fa-apple fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const segundaColumna = ()  => {
  return(
    <div className="col-lg-3">
      <div className="row" align="left">
        <div className="col-md-12 col-lg-12  text-left" align="left">
          <ul id="lista1" >
              <li>
              <p className="titulo">Nuestros sitios</p>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">Cien Radios</a><span class="separador"> | </span>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">Radio Mitre</a><span class="separador"> | </span>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
              </li>
              <li>
                  <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const terceraColumna = () => {
  return (
    <div className="col-lg-3">
    <div className="row" align="left">
      <div className="col-md-12 col-lg-12  text-left" align="left">
        <ul id="lista1" >
            <li>
            <p className="titulo">Nuestros sitios</p>
            </li>
            <li>
                <a className="enlace-footer" href="#!">Cien Radios</a><span class="separador"> | </span>
            </li>
            <li>
                <a className="enlace-footer" href="#!">Radio Mitre</a><span class="separador"> | </span>
            </li>
            <li>
                <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
            </li>
            <li>
                <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
            </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

const cuartaColumna = () => {
  return(
    <div className="col-lg-3">
    <div className="row" align="left">
      <div className="col-md-12 col-lg-12  text-left" align="left">
        <ul id="lista1" >
            <li>
            <p className="titulo">Nuestros sitios</p>
            </li>
            <li>
                <a className="enlace-footer" href="#!">Cien Radios</a><span class="separador"> | </span>
            </li>
            <li>
                <a className="enlace-footer" href="#!">Radio Mitre</a><span class="separador"> | </span>
            </li>
            <li>
                <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
            </li>
            <li>
                <a className="enlace-footer" href="#!">La 100</a><span class="separador"> | </span>
            </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer;
