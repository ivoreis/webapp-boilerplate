import { useContext } from 'react'
import { I18nContext, I18nProps } from '.'

export type I18nBaseProps = I18nProps

const useI18n = () => useContext(I18nContext)
export default useI18n
