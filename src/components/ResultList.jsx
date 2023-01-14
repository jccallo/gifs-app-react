import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const ResultList = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h5>Cargando...</h5>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {images.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
