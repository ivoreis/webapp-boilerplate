import { FunctionComponent } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/example', label: 'Example' },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href} shallow={false}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
