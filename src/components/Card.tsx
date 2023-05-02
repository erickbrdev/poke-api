import { Link } from "react-router-dom";
import "../style/Card.css";

type Props = {
  name: string;
  url: string;
  onClick: any;
  img: string;
  weigth: string;
  height: string;
  type: string;
  titleBtn: string;
};

export default function Card(props: Props) {
  const { name, url, onClick, img, weigth, height, type, titleBtn } = props;

  return (
    <div className="card">
      <div className="card-border-top">{name}</div>
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <span>{`Peso: ${weigth}g`}</span>
      <span>{`Altura: ${height}cm`}</span>
      <span>{`Tipo: ${type.toLocaleUpperCase()}`}</span>
      <Link to={`/pokemon/:id`}>
        <button onClick={onClick}>{titleBtn}</button>
      </Link>
    </div>
  );
}
