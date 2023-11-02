import { ExamenMedicoList } from "../components-ExamenMedico/ExamenMedicoList";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function ExamenMedicoPage() {
  return (
    <div>
      <NavBar />
      <ExamenMedicoList />;
      <Footer />
    </div>
  );
}
