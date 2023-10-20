import { EventoList } from "../components-Evento/EventoList";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function EventoPage() {
    return (
        <div>
            <NavBar />

            
            <EventoList  />
            
            <Footer />
        </div>
    );  
}