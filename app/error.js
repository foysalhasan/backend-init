const notFound = (_req, _res, next) => {
  const error = new Error('Resource is not Found !')
  error.status = 400
  next(error)
}

const handleErr = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message })
  }
  res.status(500).json({ message: error.message })
}

module.exports = {
  notFound,
  handleErr,
}
