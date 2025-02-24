import React from "react";

const Category = ({ userInput }) => {
  const categories = [
    "sports",
    "politics",
    "entertainment",
    "health",
    "education",
    'finance'
  ];

  // const handleCategoryClick = (e, value) => {
  //   e.preventDefault();
  //   userInput(value); // Call the userInput function with the selected category
  // };

  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-semibold text-lg text-center cursor-pointer md:text-left p-4 md:px-2">
      {categories.map((cat, id) => (
        <li key={id}>
          <button
            value={cat}
            onClick={(e) => userInput(e)}
            className="hover:text-violet-600 cursor-pointer transition-all duration-300"
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;
