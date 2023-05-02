import { Link } from "react-router-dom";
import "../style/Button.css";

export default function Button() {
  return (
    <Link to="/">
      <button className="button-home">Voltar</button>
    </Link>
  );
}
