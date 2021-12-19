import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="nav_items" to="/">
        Accueil
      </Link>
      <Link className="nav_items" to="/DashBoard">
        DashBoard
      </Link>
      <Link className="nav_items" to="/Data">
        Mes données
      </Link>
    </div>
  );
}
