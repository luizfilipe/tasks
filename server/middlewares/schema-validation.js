import Joi from '@hapi/joi'
export const schemaValidation = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property] || {})
    if (error == null) {
      next()
    } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')
      console.error(message)
      res.status(422).json({ error: message })
    }
  }
}
