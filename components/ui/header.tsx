import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link href="/" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                {/*/about*/}
                <Link href="#details" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Details</Link>
              </li>
              <li>
                {/*/blog*/}
                <Link href="#register" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Register</Link>
              </li>
              <li>
                {/*/wall-of-love*/}
                <Link href="#posts" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Newsfeed</Link>
              </li>
              {/* 1st level: hover */}
              {/*<Dropdown title="Resources">*/}
              {/*  <li>*/}
              {/*    <Link href="/404" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">404</Link>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <Link href="/support" className="font-medium text-sm text-gray-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Support</Link>*/}
              {/*  </li>*/}
              {/*</Dropdown>*/}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/*<li>*/}
              {/*  <Link href="/signin" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Sign in</Link>*/}
              {/*</li>*/}
              <li>
                <Link href="https://libertysailing.clubexpress.com/" target="_blank" className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">
                  Liberty Sailing Club<span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
