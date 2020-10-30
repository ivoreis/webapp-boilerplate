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
  'bg-primary',
  'md:text-lg',
  'xl:text-base',
  'text-primary',
  'font-semibold',
  'leading-tight',
  'shadow-md',
]

const Home: NextPage<I18nBaseProps> = () => {
  const i18n = useI18n()
  const { state, dispatch } = useStateManager()

  return (
    <Page title="Home">
      <div className="hero p-4">
        <h1 className="title">
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
    </Page>
  )
}

export default Home
