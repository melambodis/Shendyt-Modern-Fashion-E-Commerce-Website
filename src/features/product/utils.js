
// export const getFilteredProducts = (categories, products, gender, category) => {
//     const filteredCategories = categories.filter((cat) => cat.gender === gender);

//     const maintype = [
//         ...new Set(filteredCategories.map((main) => main.mainType)),
//     ];

//     const categoryMap = categories.reduce((acc, cat) => {
//         acc[cat.id] = cat;
//         return acc;
//     }, {});

//     const mergedData = products.map((product) => {
//         const cat = categoryMap[product.category_id];
//         return {
//             ...product,
//             categoryName: cat ? cat.name : "Unknown",
//             mainType: cat ? cat.mainType : "Unknown",
//             genderName: cat ? cat.gender : "Unknown",
//         };
//     });

//     const porductgender = mergedData.filter((pro) => pro.genderName === gender);

//     const filteredProducts = category ? porductgender.filter((pro) => pro.mainType === category)
//         : porductgender;

//     return { maintype, filteredProducts };
// };


export const getFilteredProducts = (
  categories = [],
  products = [],
  gender = null,
  category = null
) => {
  const filteredCategories = gender ? categories.filter((cat) => cat.gender === gender)
    : categories;
  const maintype = [
    ...new Set(filteredCategories.map((main) => main.mainType)),
  ];

  const categoryMap = categories.reduce((acc, cat) => {
    acc[cat.id] = cat;
    return acc;
  }, {});

  const mergedData = products.map((product) => {
    const cat = categoryMap[product.category_id];
    return {
      ...product,
      categoryName: cat ? cat.name : "Unknown",
      mainType: cat ? cat.mainType : "Unknown",
      genderName: cat ? cat.gender : "Unknown",
    };
  });

  const genderFiltered = gender
    ? mergedData.filter((pro) => pro.genderName === gender)
    : mergedData;

  // 6️⃣ فلترة حسب الـ mainType (لو تم تمريره)
  const filteredProducts = category
    ? genderFiltered.filter((pro) => pro.mainType === category)
    : genderFiltered;
  return { maintype, filteredProducts };
};
