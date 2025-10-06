import { FaEye, FaRegHeart } from "react-icons/fa";
import Card from "../../components/layout/card/Card";
import styles from "./ProductGrid.module.css";
import Announce from "../../components/layout/customHomepage/Announce/Announce";
import { useDispatch } from "react-redux";
import {
  addproduct,
  addwishlist,
} from "../../features/product/slice/cartSlice";
const ProductGrid = ({ products, announce, variant }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Announce variant={variant}>
        <p>{announce}</p>
      </Announce>
      <div className={styles.productwrape}>
        {products.map((p) => (
          <div key={p.id}>
            <Card
              children={p.price}
              title={p.name}
              subtitle={p.genderName}
              image={`${p.images[0]}`}
              altImage={p.images[1]}
              size={p.size}
              badges={["New", "Sale"]}
              variant="elevated"
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
    </>
  );
};
export default ProductGrid;
