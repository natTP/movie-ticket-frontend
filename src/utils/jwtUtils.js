export const parseJWT = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

export const getToken = () => {
  const data = JSON.parse(localStorage.getItem('persist:root'))
  const { token } = JSON.parse(data.user)
  return token
}
