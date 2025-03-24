import travels from "../data/travels"

export default function CardTravel (){
return(
    <>
     <div className="container">
            <h2 className="my-4">I Nostri Viaggi</h2>
            <ul className="list-group">
            {
                travels.map((viaggio) => (
                  
                    <div  key={viaggio.id}>
                        <p>{viaggio.citta}</p>
                        <p>{viaggio.dataPartenza}</p>
                        <p>{viaggio.dataArrivo}</p>
                    </div>
                   
                
                ))
            }

            </ul>
        </div>
    </>
)

}