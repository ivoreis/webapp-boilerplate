import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  FunctionComponent,
} from 'react'
import rosetta from 'rosetta'
import { Locale } from '~/locales'

// https://github.com/lukeed/rosetta
const i18n = rosetta()

export interface I18nProps {
  locale: string
  langDict: Locale
}

export interface I18nWrapperProps {
  activeLocale: string
  t: typeof i18n.t
  locale: (l: string, dict: Locale) => void
}

export const defaultLanguage = 'en'
export const languages = ['de', 'en']
export const contentLanguageMap = { de: 'de-DE', en: 'en-US' }

export const I18nContext = createContext({} as I18nWrapperProps)

// default language
i18n.locale(defaultLanguage)

const I18n: FunctionComponent<I18nProps> = (props) => {
  const { children, locale, langDict } = props
  const [activeDict, setActiveDict] = useState(() => langDict)
  const activeLocaleRef = useRef(locale || defaultLanguage)
  const [, setTick] = useState(0)
  const firstRender = useRef(true)

  // for initial SSR render
  if (locale && firstRender.current === true) {
    firstRender.current = false
    i18n.locale(locale)
    i18n.set(locale, activeDict)
  }

  useEffect(() => {
    if (locale) {
      i18n.locale(locale)
      i18n.set(locale, activeDict)
      activeLocaleRef.current = locale
      // force rerender
      setTick((tick) => tick + 1)
    }
  }, [locale, activeDict])

  const i18nWrapper: I18nWrapperProps = {
    activeLocale: activeLocaleRef.current,
    t: (...args) => i18n.t(...args),
    locale: (l, dict) => {
      i18n.locale(l)
      activeLocaleRef.current = l
      if (dict) {
        i18n.set(l, dict)
        setActiveDict(dict)
      } else {
        setTick((tick) => tick + 1)
      }
    },
  }

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  )
}

export default I18n
