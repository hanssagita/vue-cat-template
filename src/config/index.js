const basePath = '/backend/gki'
const app = {

}

const api = {
  user: (data) => `${basePath}/user?username=${data.username}&password=${data.password}`
}

const page = {

}

export {
  app,
  api,
  page
}
