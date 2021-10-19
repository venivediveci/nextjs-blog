import Link from 'next/link'
import MenuButton from '../components/MenuButton'
import DarkModeButton from '../components/DarkModeButton'
import SectionLayout from '../components/SectionLayout'

export interface LinkInfo {
  label: string
  href: string
}

const linkInfo: LinkInfo[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Demos', href: '/demo' },
  { label: 'About', href: '/about' },
]

const NavLink: React.FC<LinkInfo> = (props) => {
  const { href, label } = props
  return (
    <li className="px-5 py2">
      <Link href={href}>
        <a className="block hover:text-white focus:text-white whitespace-nowrap text-lg font-medium focus:outline-none text-gray-400">
          {label}
        </a>
      </Link>
    </li>
  )
}

const HeaderSection: React.FC = () => {
  return (
    <SectionLayout>
      <nav className="flex items-center justify-between mx-auto">
        <div>
          <Link href="/">
            <a className="text-gray-100 block whitespace-nowrap text-2xl font-medium focus:outline-none transition">
              <h1>Henry H. Hao</h1>
            </a>
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {linkInfo.map((item) => {
            return <NavLink key={item.label} {...item} />
          })}
        </ul>
        <div className="flex items-center justify-center">
          <div className="mr-2 block lg:hidden">
            <MenuButton />
          </div>
          <div>
            <DarkModeButton />
          </div>
        </div>
      </nav>
    </SectionLayout>
  )
}

export default HeaderSection
