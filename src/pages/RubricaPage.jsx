import Rubrica from "../components/Rubrica"
import { Link } from "react-router-dom";


export default function RubricaPage() {
  return (
    <>

    <Rubrica/> 
    <div className="mt-4 text-center mb-4">
        <Link to="/" className="button">Torna alla Home</Link>
    </div>
    
    </>
  );
}