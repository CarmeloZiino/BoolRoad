import CardTravel from "../components/CardTravel";

export default function HomePage() {
  return (
    <>
      <p className="title-custom text-center">Viaggi in programma</p>

<div className="card m-5 p-2">
  <CardTravel />
</div>
    
    </>
  );
}
