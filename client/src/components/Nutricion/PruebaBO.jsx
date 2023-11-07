import React from 'react'

function PruebaBO() {
    return (
        <div>
            <div className="container-fluid">
                <form className="row g-3">
                    {/* Todo el cuerpo del formulario */}
                    <div className="col-md-9 offset-md-1">
                        <label htmlFor="evento" className="form-label">
                            Nombre del evento:
                        </label>
                        <input
                            type="text"
                            id="evento"
                            name="nom_evento"
                            className="form-control"
                            placeholder="Nombre del Evento"
                            {...register("nom_evento", { required: true })}
                            readOnly
                        />
                    </div>

                    <div className="col-md-2 offset-md-1">
                        <label htmlFor="fecha" className="form-label">
                            Fecha del evento:
                        </label>
                        <input
                            type="date"
                            id="fecha"
                            name="fecha"
                            {...register("fecha", { required: true })}
                            className="form-control"
                            readOnly
                        />
                    </div>

                    <div className="col-md-2 offset-md-1">
                        <label htmlFor="hora" className="form-label">
                            Hora del evento:
                        </label>
                        <input
                            type="time"
                            id="hora"
                            name="hora"
                            {...register("hora", { required: true })}
                            className="form-control"
                            readOnly
                        />
                    </div>

                    <div className="col-md-9 offset-md-1">
                        <label htmlFor="ubicacion" className="form-label">
                            Lugar del evento:
                        </label>
                        <input
                            type="text"
                            placeholder="Lugar"
                            id="ubicacion"
                            name="Ubicación"
                            {...register("lugar", { required: true })}
                            className="form-control"
                            readOnly
                        />
                    </div>

                    <div className="col-md-3 offset-md-1">
                        <label htmlFor="notas" className="form-label">
                            Notas adicionales:
                        </label>
                        <textarea
                            placeholder="Notas"
                            id="notas"
                            name="notas"
                            {...register("notas", { required: false })}
                            className="form-control"
                            readOnly
                        ></textarea>
                    </div>

                    <div className="col-md-3 offset-md-1">
                        <label htmlFor="usuario" className="form-label">
                            Creador del evento:
                        </label>
                    </div>
                </form>
                <div className="row g-3">
                    <div className="col-md-2 offset-1 ">
                        <button className="btn btn-primary mt-3">
                            Volver
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PruebaBO