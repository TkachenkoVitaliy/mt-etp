import { navbarItems } from '../model/navbarItems'

export function Navbar() {
  return (
    <ul style={{ height: '100%' }}>
      {navbarItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
