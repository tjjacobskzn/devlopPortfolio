import Link from 'next/link'
// this is the header component tha will be used to navigate between 'pages'

// css in JSX format
const linkStyle = {
  marginRight: 15
}

// below we use "Link" to specify which page/file to use for which page
const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
    </div>
)

export default Header