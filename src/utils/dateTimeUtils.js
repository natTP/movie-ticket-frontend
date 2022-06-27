export const formatDate = (dateTimeISOString) => {
  const date = new Date(dateTimeISOString)
  return date.toLocaleDateString('th-TH', { dateStyle: 'long' })
}

export const ISOStringtoTime = (dateTimeISOString) => {
  const date = new Date(dateTimeISOString)
  return date.toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const hasPassed = (dateTimeISOString) => {
  const date = new Date(dateTimeISOString)
  const now = new Date()
  return date < now
}
