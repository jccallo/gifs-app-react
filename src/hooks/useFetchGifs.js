import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    if (category === '') {
      setImages(JSON.parse(localStorage.getItem('images')) || []);
      setIsLoading(false);
      return;
    }
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
    localStorage.setItem('images', JSON.stringify(newImages));
  };
  
  useEffect(() => {
    getImages();
  }, [category]);

  return {
    images,
    isLoading,
  };
};
