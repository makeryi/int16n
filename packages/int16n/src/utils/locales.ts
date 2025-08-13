import { LOCALE_LIST, LOCALE_MAP, type Locale } from '../constants/locales'

export function getLocale(locale: Locale) {
  return LOCALE_MAP[locale]
}

export function getName(locale: Locale) {
  return LOCALE_MAP[locale].name
}

export function getAllNames() {
  return LOCALE_LIST.map((item) => item.name)
}

export function getNativeName(locale: Locale) {
  return LOCALE_MAP[locale].nativeName
}

export function getAllNativeNames() {
  return LOCALE_LIST.map((item) => item.nativeName)
}
