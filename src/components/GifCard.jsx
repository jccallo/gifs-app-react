export const GifCard = ({title, url}) => {
  return (
    <div>
      <div className="card">
        <img src={url} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </div>
  )
}
