import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";


export const ItemList = ({ lista }) => {
  return (
    <section className="item-list-wrapper">
      

      {lista.length ? (
        <div className="item-list-grid">
          {lista.map((prod) => (
            <Link
              to={`/detail/${prod.id}`}
              key={prod.id}
              className="item-link"
            >
              <Item {...prod} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="item-list-empty">No hay productos</p>
      )}
    </section>
  );
};
