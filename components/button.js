import Link from 'next/link'

const Button = ({ route, name }) => {
  return (
    <Link href={route}>{name}</Link>
  )
}

export default Button