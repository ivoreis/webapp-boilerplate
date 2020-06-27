/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { NextPage, GetServerSideProps } from 'next'

import Page from '~/layouts/page'
import useI18n, { getLanguageProps, I18nBaseProps } from '~/hooks/i18n/useI18n'
import useStateManager from '~/hooks/stateManager/useStateManager'

const styles = css`
  .hero {
    width: 100%;
    color: #333;
  }
  .title {
    margin: 0;
    width: 100%;
    padding-top: 80px;
    line-height: 1.15;
    font-size: 48px;
  }
  .title,
  .description {
    text-align: center;
  }
`
const Home: NextPage<I18nBaseProps> = () => {
  const i18n = useI18n()
  const { state, dispatch } = useStateManager()

  return (
    <Page title="Home" css={styles}>
      <div className="hero">
        <h1 className="title">
          {i18n.t('intro.welcome', { username: state.profile.name })}
          {state.count}
        </h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
        <button type="button" onClick={() => dispatch({ type: 'INC' })}>
          Increment
        </button>
      </div>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => ({
  props: {
    ...(await getLanguageProps(context)),
    // Get user info from cookie (session / jwt token), if needed call internal apis
    initialState: { profile: { name: 'John' } },
  },
})

export default Home
