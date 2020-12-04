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
    <div className="col-md-3 mx-auto">
      <div className="row">
        <div className="col-md-3 mx-auto">
          {/* <!-- Links --> */}
          <p className="titulo">Nuestros sitios</p>
            
            <ul className="list-unstyled">
              <li>
                <a className="enlace-footer" href="#!">Very long link 1</a>
              </li>
            </ul>
        </div>
    </div>
    <div className="row">
      <div className="col-md-3 mx-auto">
        {/* <!-- Links --> */}
        <p className="titulo">Seguinos</p>
          <ul className="list-unstyled">
            <li>
              <a className="enlace-footer" href="#!">Very long link 1</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
  )
}

const segundaColumna = ()  => {
  return(
    <div className="col-md-3 mx-auto">
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
    <div className="col-md-3 mx-auto">
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
    <div className="col-md-3 mx-auto">
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
