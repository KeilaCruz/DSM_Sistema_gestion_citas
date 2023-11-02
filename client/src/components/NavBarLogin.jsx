
export function NavBarLogin() {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <div className="container-fluid">
            
            <img
              src="/images/logo-1.png"
              alt="Logo-coatza"
              width="130"
              height="35"
              className="d-inline-block align-text-top"
            />
          </div>
        </nav>
        <div
          aria-label="breadcrumb"
          style={{ backgroundColor: "#dedad0", height: "30px" }}
        ></div>
      </div>

    <div className="container " >
      <div className="text-with-lines">
        <div className="line line-top"></div>
        <p className="display-5 fw-bold">DIRECCIÓN DE SALUD MUNICIPAL PÚBLICA</p>
        <div className="line line-bottom"></div>
      </div>
      
    </div>
    
    </div>
  );
}
