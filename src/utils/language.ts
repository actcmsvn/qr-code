const languageMap: Record<string, string> = {
  vi: 'Tiếng Việt',  
  en: 'English',
}
export const sortedLocales = Object.keys(languageMap).sort((a, b) => {
  return languageMap[a].localeCompare(languageMap[b])
})
