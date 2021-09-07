import TitlePage from "components/title-page"
import Product from "components/product"
import produtos from "db/festival"

const Festival = () => {
  return (
    <>
      <TitlePage name="Festival"></TitlePage>

      {produtos.map((item, index) => {
        return (
          <Product key={index}
            name={item.nome}
            description={item.descricao}
            price={item.preco}
          />
        )
      })}
    </>
  )
}

export default Festival