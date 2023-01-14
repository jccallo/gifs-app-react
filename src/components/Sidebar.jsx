import { useEffect, useState } from "react";

export const Sidebar = ({ category }) => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = () => {
    if (category === '') {
      setCategories(JSON.parse(localStorage.getItem('categories')) || []);
      return;
    }
    const newCategory = category.trim().toLowerCase();
    if (categories.includes(newCategory)) return;
    const newCategories = [newCategory, ...categories].splice(0, 10);
    setCategories(newCategories);
    localStorage.setItem('categories', JSON.stringify(newCategories));
  }

  useEffect(() => {
    onAddCategory();
  }, [category]);

  return (
    <>
      <h2 className="mt-3">GiftsApp</h2>
      <hr />
      <ul className="list-group">
        {categories.map((category, index) => (
          <a className="list-group-item" key={index}>
            [{index + 1}] {category}
          </a>
        ))}
      </ul>
    </>
  )
}
