import { NextPage } from 'next'
import clsx from 'clsx'

import Page from '~/layouts/page'
import useI18n, { I18nBaseProps } from '~/hooks/i18n/useI18n'
import useStateManager from '~/hooks/stateManager/useStateManager'

// Using tailwind utility classes
const buttonClasses = [
  'rounded-lg',
  'px-4',
  'md:px-5',
  'xl:px-4',
  'py-3',
  'md:py-4',
  'xl:py-3',
  'bg-default',
  'md:text-lg',
  'text-primary',
  'font-semibold',
  'leading-tight',
  'shadow-md',
  'border',
  'transition',
  'duration-150',
  'ease-in-out',
]

const Home: NextPage<I18nBaseProps> = () => {
  const i18n = useI18n()
  const { state, dispatch } = useStateManager()

  return (
    <Page title="Home">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-default transition duration-150 ease-in-out">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="p-4">
              <h1 className="title text-default transition duration-150 ease-in-out">
                {i18n.t('intro.welcome', { username: state?.profile?.name })}
                {state.count}
              </h1>
              <button
                type="button"
                className={clsx(buttonClasses)}
                onClick={() => dispatch({ type: 'INC' })}
              >
                Increment
              </button>
            </div>
          </div>
        </main>
      </div>
    </Page>
  )
}

export default Home
