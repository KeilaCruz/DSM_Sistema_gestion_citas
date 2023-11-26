import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export function PacienteCard({paciente}) {
    
    const navigate = useNavigate()

    const deleteClick = () =>{ navigate(`/paciente-create/${paciente.CURP}`); }

    /* return (
        <>
            <div key={paciente.CURP} style={{background: "gray"}} onClick={deleteClick}>
                <h1>{paciente.CURP}</h1>
                <p>{paciente.nombre}</p>
                <p>{paciente.apePaterno}</p>
            </div>
        </>
    )
 */
    return (
        <div className="col-md-4 mb-4">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">{paciente.nombre} {paciente.apePaterno} {paciente.apeMaterno}</h5>
              <p className="card-text"><b>CURP: {paciente.CURP}</b></p>
              <p className="card-text"><b>Telefono: {paciente.telefono}</b></p>
              {/* <Link
                href=""
                className="btn btn-primary me-3"
                to={`/evento-create/visualizar/${evento.idEvento}`}
              >
                Visualizar
              </Link> */}
              <Link
                href=""
                className="btn btn-primary"
                to={`/paciente-create/${paciente.CURP}`}
              >
                Editar
              </Link>
            </div>
          </div>
        </div>
      );
    
}