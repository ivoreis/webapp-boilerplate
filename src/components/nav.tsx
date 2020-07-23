/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FunctionComponent } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/example', label: 'Example' },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const styles = css`
  nav {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
  }
  nav > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #0756a7;
    text-decoration: none;
    font-size: 13px;
  }
`

const Nav: FunctionComponent = () => {
  return (
    <nav css={styles}>
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
