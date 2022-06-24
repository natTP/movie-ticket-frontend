export const formatDate = (dateTimeISOString) => {
  const date = new Date(dateTimeISOString)
  return date.toLocaleDateString('th-TH', { dateStyle: 'long' })
}
