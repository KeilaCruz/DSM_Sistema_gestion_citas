import { HojaEvaluacionList } from "../components-HojaEvaluacion/HojaEvaluacionList";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function HojaEvaluacionPage() {
    return (
        <>
            <NavBar/>
            <HojaEvaluacionList/>
            <Footer/>
        </>
    );
    
}