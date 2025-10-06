import CategoryCircle from "./CategoryCircle/CategoryCircle";
import Hero from "../../components/ui/Hero/Hearo";
import { getFilteredProducts } from "../../features/product/utils";
import useProducts from "../../hooks/useProducts";
import ProductGrid from "./ProductGrid ";
export default function Home() {
  const { products, categories } = useProducts();
  const { filteredProducts } = getFilteredProducts(categories, products);

    const cirrcelcat = filteredProducts
    .filter((item) => item.name?.toLowerCase().includes("dress"))
    .slice(0, 6);

  const dresswome = filteredProducts
    .filter((item) => item.name?.toLowerCase().includes("dress"))
    .slice(0, 8);

  const jacketMen = filteredProducts
    .filter((item) => item.name?.toLowerCase().includes("pants_&_jeans"))
    .slice(0,4);
  return (
    <>
      <Hero />
      <CategoryCircle products={cirrcelcat} />
      <ProductGrid variant={"gradient"} products={dresswome} announce={"Limited Offer && Get 50% off on premium plans until Sunday"} />
      <ProductGrid variant={"announceheader"} products={jacketMen} announce={"Limited Offer && Get 50% off on premium plans until Sunday"} />
    </>
  );
}

{
  /* <nav
        className={styles.categories}
        role="navigation"
        aria-label="Product categories"
      >
        <div className={styles.chips} tabIndex={0}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </nav> */
}

{
  /* Promotional strip */
}
{
  /* <section className={styles.promoStrip} aria-hidden="false">
        <ul className={styles.promoList}>
          <li>
            <span className={styles.promoIcon} aria-hidden="true">
              🔁
            </span>
            <span className={styles.promoText}>Free returns</span>
          </li>
          <li>
            <span className={styles.promoIcon} aria-hidden="true">
              🚚
            </span>
            <span className={styles.promoText}>Fast delivery</span>
          </li>
          <li>
            <span className={styles.promoIcon} aria-hidden="true">
              🔒
            </span>
            <span className={styles.promoText}>Secure payment</span>
          </li>
        </ul>
      </section> */
}

{
  /* Featured products */
}
{
  /* <main id="featured" className={styles.main} aria-live="polite">
        <div className={styles.sectionHeader}>
          <h2>Featured Products</h2>
          <p className={styles.sectionMeta}>
            {isLoading
              ? "Loading products..."
              : `${filtered.length} item${filtered.length !== 1 ? "s" : ""} found`}
          </p>
        </div>

        {isLoading ? (
          <div className={styles.loading} role="status" aria-busy="true">
            <svg
              className={styles.spinner}
              width="48"
              height="48"
              viewBox="0 0 50 50"
              aria-hidden="true"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <p>Loading products…</p>
          </div>
        ) : Array.isArray(products) && products.length === 0 ? (
          <div className={styles.empty}>
            <p>We don't have items yet — check back soon or try a different filter.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>
              No products match your search. Try removing filters or searching for
              another term.
            </p>
            <button
              className={styles.btn}
              onClick={() => {
                setSearchText("");
                setSelectedCategory("All");
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <section className={styles.grid} aria-label="Product list">
            {filtered.map((p, index) => (
              <article
                key={p.id}
                className={styles.card}
                tabIndex={0}
                onKeyDown={(e) => handleCardKeyDown(e, p)}
                aria-labelledby={`product-${p.id}-title`}
              >
                <div className={styles.cardMedia}>
                  <img
                    src={p.image || "https://via.placeholder.com/400x400.png?text=Product"}
                    alt={p.name || "Product image"}
                    className={styles.productImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 id={`product-${p.id}-title`} className={styles.productName}>
                    {p.name}
                  </h3>

                  <div className={styles.productMeta}>
                    <span className={styles.price} aria-label={`Price $${p.price}`}>
                      ${p.price?.toFixed ? p.price.toFixed(2) : p.price}
                    </span>
                    <span className={styles.rating} aria-label={`Rating ${p.rating} of 5`}>
                      {renderStars(p.rating)}
                    </span>
                  </div>

                  <div className={styles.cardActions}>
                    <button
                      ref={index === 0 ? firstProductRef : null}
                      className={`${styles.btn} ${styles.addBtn}`}
                      onClick={() => onAddToCart?.(p)}
                      aria-label={`Add ${p.name} to cart`}
                    >
                      Add to Cart
                    </button>

                    <button
                      className={`${styles.btn} ${styles.viewBtn}`}
                      onClick={() => onView?.(p)}
                      aria-label={`View ${p.name}`}
                    >
                      View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main> */
}

{
  /* Footer CTA: newsletter */
}
{
  /* <footer className={styles.footer}>
        <div className={styles.newsletter}>
          <h3>Join our newsletter</h3>
          <p>Get 10% off your first order — exclusive offers & style tips.</p>
          <form
            className={styles.newsForm}
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.target.elements?.email;
              // Normally you'd call a prop or API - here just simulate
              alert(`Subscribed: ${input?.value || "(empty)"}`);
              input.value = "";
            }}
          >
            <label htmlFor="email" className={styles.srOnly}>
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.newsInput}
              placeholder="Email address"
              required
              aria-required="true"
            />
            <button className={`${styles.btn} ${styles.subscribeBtn}`} type="submit">
              Subscribe
            </button>
          </form>
        </div>

        <div className={styles.bottomMeta}>
          <small>© {new Date().getFullYear()} Nova Clothing. All rights reserved.</small>
        </div>
      </footer> */
}
