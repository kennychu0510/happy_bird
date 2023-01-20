export function selectElement(query: string) {
  const element = document.querySelector(query)
  if (!element) throw new Error(query + ' not selected')
  return element
}
