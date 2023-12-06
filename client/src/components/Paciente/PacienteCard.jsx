
export function PacienteCard({ paciente }) {
    return (
        <>
            <div className="card" key={paciente.CURP} style={{ width: "70rem" }}>
                <div className="card-body cards">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text">{paciente.CURP}</p>
                                <p className="card-text">{paciente.nombre} {paciente.apePaterno} {paciente.apeMaterno}</p>
                                <p className="card-text">{paciente.estado_civil}</p>
                                <p className="card-text">{paciente.escolaridad}</p>
                            </div>
                            <div className="col-md-6">
                                <p className="card-text">{paciente.colonia}</p>
                                <p className="card-text">{paciente.calle} {paciente.numero_exterior}</p>
                                <p className="card-text">{paciente.telefono}</p>
                                <p className="card-text">{paciente.derecho_habiencia}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
