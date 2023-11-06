export const isExternalLink = (path: string) => {
  return path.startsWith('http') || path.startsWith('https')
}
