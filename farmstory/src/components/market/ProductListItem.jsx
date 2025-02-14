import { Link } from "react-router-dom";
import { PRODUCT_THUMB_URI, PRODUCT_URI } from "../../api/_URI";

export default function ProductListItem({ product }) {
  return (
    <tr>
      <td>
        <Link to="/product/detail">
          <img
            src={`${PRODUCT_THUMB_URI}/${product.thumb120}`}
            className="thumbnail"
            alt="사과 500g"
          />
        </Link>
      </td>
      <td className="type">{product.type}</td>
      <td className="title">
        <a href="#">{product.productName}</a>
      </td>
      <td className="discount">{product.discount}%</td>
      <td className="point">4{product.point}P</td>
      <td className="price">
        <strong>{product.price}</strong>
        <del>{product.price}</del>
      </td>
    </tr>
  );
}
