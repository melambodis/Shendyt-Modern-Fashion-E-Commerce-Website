
import AppRouter from "./Approutes/AppRouter.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import Header from "./components/layout/Header/Header.jsx";
function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    
    </>
  );
}
export default App;

/* <div style={{ padding: "20px" }}>
        <h2>اختيار اللون:</h2>
        <Select
          options={colorOptions}
          value={selectedColor}
          onChange={setSelectedColor}
          placeholder="اختر لون..."
          label="لونك المفضل"
        />

        <h2 style={{ marginTop: "20px" }}>اختيار الفاكهة:</h2>
        <Select
          options={fruitOptions}
          value={selectedFruit}
          onChange={setSelectedFruit}
          placeholder="اختر فاكهة..."
          label="فاكهتك المفضلة"
        />

        <div style={{ marginTop: "20px" }}>
          <p>اللون المختار: {selectedColor || "-"}</p>
          <p>الفاكهة المختارة: {selectedFruit ? selectedFruit.label : "-"}</p>
        </div>
      </div> */

/* <Select/> */
/* 
      <Input
        placeholder={"typeyour name"}
        id="UserName"
        type="UserName"
        label={"UserName"}
        disabled={false}
      /> */

/* <Navbar
      Links={Links}
        Logo={<img src="/logo.svg" alt="shendyt" />}
        
      /> */

/* <Dropdown link={Links} /> */

/* <Button
        variant="primary" // نوع الزرار (primary, secondary, danger, success...)
        size="medium" // حجم الزرار (xsmall, small, medium, large, xlarge, fullWidth)
        icon={<FaSearch />} // أيقونة (ممكن تحط أي أيقونة React)
        iconPosition="left" // مكان الأيقونة (left, right, center)
        iconSize="small" // حجم الأيقونة (xsmall, small, medium, large, xlarge)
        disabled={false} // تعطيل الزرار (true/false)
        loading={false} // حالة التحميل (true/false)
        onClick={() => alert("Wishlist!")} // الدالة اللي هتتنفذ عند الضغط
      >
        Search
      </Button> */
/* <Card
        title="Leather Jacket"
        subtitle="$199.99"
        image="../src/assets/imag/clothing/womens_outdoor_clothing_party_chiffon_blue_M (1)(2).jpg.jpg"
        badges={["New", "Sale"]}
        variant="outlined"
        size="large"
        hoverEffect="lift"
        layout="grid"
        footerActions={[
          {
            variant: "secondary",
            size: "small ",
            icon: <FaShoppingCart />,
            iconPosition: "left",
            label: "Add to Cart",
            onClick: () => alert("Added!"),
          },
          {
            variant: "info",
            size: "medium",
            icon: <FaEye />,
            iconPosition: "left",
            label: "Quick View",
            onClick: () => alert("Quick view!"),
          },
          {
            variant: "wishlistBtn",
            size: "wish-btn-size",
            icon: <FaRegHeart />,
            iconPosition: "right",
            onClick: () => alert("Wishlist!"),
          },
        ]}
      >
        <p>High-quality leather jacket, perfect for winter fashion.</p>
      </Card>
      <Card
        title="Leather Jacket"
        subtitle="$199.99"
        image="../src/assets/imag/clothing/womens_outdoor_clothing_party_chiffon_blue_M (1)(2).jpg.jpg"
        badges={["New", "Sale"]}
        variant="elevated"
        size="small"
        hoverEffect="lift"
        footerActions={[
          {
            variant: "danger",
            size: "small",
            icon: <FaHeart />,
            iconPosition: "center",
            label: "Add to Cart",
            onClick: () => alert("Added!"),
          },
          {
            variant: "danger",
            size: "small",
            icon: <FaHeart />,
            iconPosition: "center",
            label: "Wishlist",
            onClick: () => alert("Wishlist!"),
          },
          {
            variant: "wishlist",
            iconSize: "icon5",
            size: "large",
            icon: <FaSearch />,
            iconPosition: "center",
            onClick: () => alert("Wishlist!"),
          },
        ]}
      > */
/* <p>High-quality leather jacket, perfect for winter fashion.</p>
      </Card>
      <Badge text="Primary Badge" />
      <Badge text="Success Badge" variant="success" />
      <Badge text="Featured" variant="warning" icon={<FaStar />} />
      <Badge text="Large Badge" size="large" variant="danger" />
      <Badge text="Custom Badge" className="my-custom-class" /> */
/* <form>
        <Input
          label="Username"
          placeholder="Enter your username"
          value="username"
          // onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          value="email"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value="password"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Error Example"
          value=""
          onChange={() => {}}
          // error={error} // will show the error message below
        />
        <button type="submit">Submit</button>
      </form> */

{
  /* <Button
        variant="light" // نوع الزرار (primary, secondary, danger, success...)
        size="medium" // حجم الزرار (xsmall, small, medium, large, xlarge, fullWidth)
        icon={<FaSearch />} // أيقونة (ممكن تحط أي أيقونة React)
        iconPosition="left" // مكان الأيقونة (left, right, center)
        iconSize="small" // حجم الأيقونة (xsmall, small, medium, large, xlarge)
        disabled={false} // تعطيل الزرار (true/false)
        loading={false} // حالة التحميل (true/false)
        onClick={() => alert("Wishlist!")} // الدالة اللي هتتنفذ عند الضغط
      ></Button> */
}
