import bnf from "../assets/imgs/bnf.png";

export default function Footer() {
  return (
    <>
    <footer>
      <div className="container footer">
        <div className="d-flex gap-3 justify-content-center align-items-center p-3">
            <p className="text-lght">product by</p>
        <img src={bnf} width={75} alt="" />
        </div>
      </div>
      </footer>
    </>
  );
}
