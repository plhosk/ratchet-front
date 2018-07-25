const apiHost = 'http://localhost:3000'

const statusHandler = (response) => {
  if (response.status === 200) {
    return response
  }
  throw new Error(response.statusText)
}

export {
  apiHost,
  statusHandler,
}
