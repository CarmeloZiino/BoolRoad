import travels from "../data/travels"
import {Link} from "react-router-dom"

export default function CardTravel (){
return(
    <>
     <div className="container">
            <h2 className="my-4">I Nostri Viaggi</h2>
            <ul className="list-group">
            {
                travels.map((viaggio) => {
                    return(
                        <>

                         <div className="card mb-4"  key={viaggio.id}>
                        <p className="title-card text-center">{viaggio.citta}</p>
                        
                        <div className="card-body text-center">
                            <p className="text-card">{viaggio.dataPartenza}</p>
                            <span className="text-card">{viaggio.dataArrivo}</span>
                        </div>
                        <Link className="btn btn-primary" to={`/travels/${viaggio.id}`}>Scopri di più</Link>
                        </div>
                        </>
                    )
                  
                   
                        
                    
                   
                
                    })
            }

            </ul>
        </div>
    </>
)

}