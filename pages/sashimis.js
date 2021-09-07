import TitlePage from "components/title-page"
import Product from "components/product"
import produtos from "db/sashimis"

const Sashimis = () => {
  return (
    <>
      <TitlePage name="Sashimis" description={produtos.textoDescritivo}></TitlePage>

      {produtos.produtos.map((item, index) => {
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

export default Sashimis