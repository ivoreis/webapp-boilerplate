import { useContext } from 'react'
import { AppContext } from 'next/app'
import { I18nContext, defaultLanguage, I18nProps } from '.'

export type I18nBaseProps = I18nProps

const useI18n = () => useContext(I18nContext)
export default useI18n

export const getLanguageProps = async (
  context: AppContext,
): Promise<I18nProps> => {
  const { locale = defaultLanguage } = context?.ctx?.query

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
