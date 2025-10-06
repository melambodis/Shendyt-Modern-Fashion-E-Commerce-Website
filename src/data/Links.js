import {
  FaTshirt,
  FaRing,
  FaShoppingBag,
  FaBabyCarriage,
  FaGamepad,
} from "react-icons/fa";
import {
  GiConverseShoe,
  GiRazor,
  GiLipstick,
  GiAmpleDress,
} from "react-icons/gi";

const NavItems = [
  { label: "New Arievs", href: "/NewArrivals" },
  {
    label: "Women",
    href: "/women",
    dropdown: [
      {
        title: "Clothing",
        icon: GiAmpleDress,
        items: [
          "Pants & Jeans",
          "Shirts & Blouses",
          "Jackets & Coats",
          "Sweatshirts",
          "Beachwear",
          "partydress",
          "Lingerie",
          "outdoor ",
          "Skirts",
          "Dress",
          "Tops",
        ],
      },
      {
        title: "Footwear",
        icon: GiConverseShoe,
        items: ["Sneakers", "Slippers", "Sandals", "Flats", "Heels", "Boots"],
      },
      {
        title: "Bags",
        icon: FaShoppingBag,
        items: [
          "Shoulder Bags",
          "Clutch",
          "Tote Bags",
          "Backpacks",
          "Laptop Bags",
        ],
      },
      {
        title: "Jew & Acc",
        icon: FaRing,
        items: [
          "Bracelets & Anklets",
          "Hair Accessories",
          "Necklaces",
          "Earrings",
          "Scarves",
          "Rings",
          "Socks",
        ],
      },
      {
        title: "Beauty",
        icon: GiLipstick,
        items: [
          "Beauty & Body",
          "Skincare",
          "Haircare",
          "Bodycare"],
      },
    ],
  },
  {
    label: "Men",
    href: "/men",
    dropdown: [
      {
        title: "Clothing",
        icon: FaTshirt,
        items: [
          "Sweatshirts & Hoodies",
          "Jackets & Coats",
          "Pants & Jeans",
          "Underwear",
          "Swimwear",
          "T-Shirts",
          "Shirts",
          "Suits",
          "Shorts",
        ],
      },
      {
        title: "Footwear",
        icon: GiConverseShoe,
        items: ["Sneakers", "Formal Shoes", "Boots", "Sandals", "Slippers"],
      },
      {
        title: "Accessories",
        icon: FaRing,
        items: [
          "Hats & Caps",
          "Sunglasses",
          "Wallets",
          "Watches",
          "Belts",
          "Ties",
        ],
      },
      {
        title: "Bags",
        icon: FaShoppingBag,
        items: [
          "Messenger Bags",
          "Duffle Bags",
          "Laptop Bags",
          "Briefcases",
          "Backpacks",
        ],
      },
      {
        title: "Grooming",
        icon: GiRazor,
        items: ["Shaving Products", "Fragrances", "Skincare", "Haircare"],
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    dropdown: [
      {
        title: "Clothing",
        icon: FaTshirt,
        items: [
          "Pants & Leggings",
          "Jackets & Hoodies",
          "Swimwear",
          "Underwear",
          "T-Shirts",
          "Dresses",
          "Pajamas",
          "Shorts",
          "Skirts",
        ],
      },
      {
        title: "Footwear",
        icon: GiConverseShoe,
        items: ["Sneakers", "Sandals", "Boots", "Slippers", "School Shoes"],
      },
      {
        title: " Accessories",
        icon: FaRing,
        items: [
          "Hair Accessories",
          "Hats & Caps",
          "Sunglasses",
          "Backpacks",
          "Watches",
          "Socks",
        ],
      },
      {
        title: "Baby Essentials",
        icon: FaBabyCarriage,
        items: ["Bodysuits", "Blankets", "Diaper Bags", "Pacifiers","Bibs"],
      },
      {
        title: "Toys & Games",
        icon: FaGamepad,
        items: [
          "Educational Toys",
          "Stuffed Animals",
          "Building Blocks",
          "Board Games",
          "Puzzles",
        ],
      },
    ],
  },
  { label: "Shop", href: "/Shop" },
  { label: "Best Sellers", href: "/BestSellers" },
  { label: "Offers", href: "/Offers" },
  
];


export default NavItems;


