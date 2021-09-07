const Product = ({ name, description, price }) => {
  return (
    <div>
      <p>{name}</p>
      {description && <p>{description}</p>}
      {price && <p>R${price}</p>}
    </div>
  )
}

export default Product