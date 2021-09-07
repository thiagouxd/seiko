import Link from "next/link"

const Header = () => {
  return (
    <header>
      {/* <img /> */}<span>Logo</span>
      <h2>Cardápio</h2>
      <Link href="/">Voltar</Link>
    </header>
  )
}