import { useContext } from 'react'
import { GetServerSidePropsContext } from 'next'
import { I18nContext, defaultLanguage, I18nProps } from '.'

export type I18nBaseProps = I18nProps

const useI18n = () => useContext(I18nContext)
export default useI18n

export const getLanguageProps = async (
  context: GetServerSidePropsContext,
): Promise<I18nProps> => {
  const {
    query: { locale = defaultLanguage },
  } = context

  let langDict
  try {
    langDict = (await import(`~/locales/${locale}`)).default
  } catch (error) {
    langDict = (await import(`~/locales/${defaultLanguage}`)).default
  }
  return {
    locale: locale as string,
    langDict,
  }
}
