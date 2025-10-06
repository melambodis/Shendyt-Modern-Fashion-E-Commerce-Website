import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import styles from "./ProductList.module.css";
import useIsMobile from "../../../../hooks/useIsMobile";
import Card from "../../../../components/layout/card/Card";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { getFilteredProducts } from "../../utils";
import useProducts from "../../../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addproduct, addwishlist } from "../../slice/cartSlice";
const ProductList = () => {
  const { gender, category } = useParams();  
  const navigate = useNavigate();
  const isMobile = useIsMobile(768);
  const dispatch = useDispatch();
  const { products, categories, loading, error } = useProducts();
  const { maintype, filteredProducts } = getFilteredProducts(
    categories,
    products,
    gender,
    category
  );
    const allowedGenders = ["men", "women", "kids"];
  if (!allowedGenders.includes(gender)) {
    return <Navigate to="/" replace />;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <>
      {isMobile ? (
        <div className={styles.maintype}>
          <div className={styles.headinGender}>
            <h1 className={`${styles.heading} heading-3 `}>
              {gender} Clothes {" "}
            </h1>
          </div>
          <div className={styles.maintypeSelct}>
            <select
              id="cars"
              name="cars"
              className={styles.typeSelct}
              onChange={(e) => navigate(`/${gender}/${e.target.value}`)}
            >
              {maintype.map((main, indx) => (
                <option key={indx} className={styles.typeoption} value={main}>
                  {main}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <ul className={styles.maintype}>
          <li className={styles.headinGender}>
            <h1 className={`${styles.heading} heading-1`}>{gender}</h1>
          </li>
          <li>
            <ul className={styles.typelist}>
              {maintype.map((main, indx) => (
                <li key={indx}>
                  <Link to={`/${gender}/${main}`}>{main}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      )}

      {/* <div className="container"> */}
        <div className={`${styles.productwrape} `}>
          {filteredProducts.map((p) => (
            <div key={p.id}>
              <Card
                children={p.price}
                title={p.name}
                subtitle={p.genderName}
                image={`${p.images[0]}`}
                altImage={p.images[1]}
                size={p.size}
                badges={["New", "Sale"]}
                variant="outlined"
                hoverEffect="lift"
                layout="grid"
                footerActions={[
                  {
                    variant: "primary",
                    size: "large",
                    iconPosition: "left",
                    label: "Add to Cart",
                    onClick: () => dispatch(addproduct(p)),
                    
                  },
                  {
                    variant: "info",
                    size: "large",
                    icon: <FaEye />,
                    iconPosition: "left",
                    label: "Quick View",
                  },
                  {
                    variant: "wishlist",
                    size: "wish-btn-size",
                    iconSize: "icon-3xl",
                    icon: <FaRegHeart />,
                    iconPosition: "right",
                    onClick: () => dispatch(addwishlist(p)),
                  },
                ]}
              ></Card>
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  );
};
export default ProductList;
