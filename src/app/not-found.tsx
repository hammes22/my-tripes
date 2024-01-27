import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <p>Não foi possível encontrar o recurso solicitado</p>
      <Link href="/">voltar a Home</Link>
    </div>
  )
}
