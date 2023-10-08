export function BodyLogin() {
  return (
    <div>
      {/* Img grande de la página */}
      <section className="main mt-3">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="/images/LogoBarco.png"
                className="img-fluid img-thumbnail"
                alt="Sample image"
              />
            </div>

            {/* Formulario */}
            <div
              className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-150"
              
            >
              <form action="" method="POST">
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-2  display-4">
                    Inicio de sesión
                  </p>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label fw-bold" htmlFor="id_username">
                    Correo electrónico
                  </label>
                  <input
                    type="text"
                    name="username"
                    maxLength="150"
                    required=""
                    id="id_username"
                    className="form-control form-control-lg border-3"
                    placeholder="Ingrese un correo valido"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label fw-bold" htmlFor="id_password">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    required=""
                    id="id_password"
                    className="form-control form-control-lg border-3"
                    placeholder="Ingrese contraseña"
                  />
                </div>
                {/* Recuperar contraseña */}
                <div className="d-flex justify-content-between align-items-center">
                  <a href="#!" className="text-body">
                    Recuperar contraseña
                  </a>
                </div>

                <div className="text-center text-lg-start mt-2 pt-2">
                  <button
                    type="submit"
                    className="btn btn-lg btn-danger button-login">
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}