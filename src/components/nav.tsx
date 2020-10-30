import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Transition } from '@headlessui/react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/example', label: 'Example' },
  { href: '/about', label: 'About' },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const profileLinks = [
  { href: '#', label: 'Your Profile' },
  { href: '#', label: 'Settings' },
  { href: '#', label: 'Sign out' },
].map((link) => ({
  ...link,
  key: `profile-link-${link.href}-${link.label}`,
}))

const Nav: FunctionComponent = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const dropdownClasses = [
    'origin-top-right',
    'absolute',
    'right-0',
    'mt-2',
    'w-48',
    'rounded-md',
    'shadow-lg',
  ]
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="hidden sm:-my-px sm:ml-6 space-x-8 sm:flex">
              {navLinks.map((l) => (
                <Link href={l.href} shallow={false} key={l.key}>
                  <a className="inline-flex items-center px-1 pt-1 border-opacity-0 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                    {l.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              className="p-1 border-2 border-opacity-0 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
              aria-label="Notifications"
              type="button"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div className="ml-3 relative">
              <div>
                <button
                  className="flex text-sm border-2 border-opacity-0 rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <Transition
                show={isProfileOpen}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                {(ref) => (
                  <div ref={ref} className={clsx(dropdownClasses)}>
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      {profileLinks.map((l) => (
                        <Link href={l.href} shallow={false} key={l.key}>
                          <a className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                            {l.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Transition>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              type="button"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <svg
                className={clsx([
                  isMobileNavOpen ? 'hidden' : 'block',
                  'h-6',
                  'w-6',
                ])}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={clsx([
                  isMobileNavOpen ? 'block' : 'hidden',
                  'h-6',
                  'w-6',
                ])}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={clsx([isMobileNavOpen ? 'block' : 'hidden', 'sm:hidden'])}
      >
        <div className="pt-2 pb-3 space-y-1">
          {navLinks.map((l) => (
            <Link href={l.href} shallow={false} key={l.key}>
              <a className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">
                {l.label}
              </a>
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4 space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div>
              <div className="text-base font-medium leading-6 text-gray-800">
                Tom Cook
              </div>
              <div className="text-sm font-medium leading-5 text-gray-500">
                tom@example.com
              </div>
            </div>
          </div>
          <div
            className="mt-3 space-y-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            {profileLinks.map((l) => (
              <Link href={l.href} shallow={false} key={l.key}>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  {l.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
