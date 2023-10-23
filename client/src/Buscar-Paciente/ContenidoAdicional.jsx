export function ContenidoAdicional({ resultado }) {
  return (
    <div className="contenido-adicional">
      {/* Aquí puedes colocar el contenido HTML adicional */}
      <p>Información adicional:</p>
      <p>Edad: {resultado.edad}</p>
      <p>CURP: {resultado.CURP}</p>
    </div>
  );
}
