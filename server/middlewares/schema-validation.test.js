import { schemaValidation } from './schema-validation'
import Joi from '@hapi/joi'
describe('schemaValidation', () => {
  let req = {}
  beforeAll(() => {
    req = {
      body: {
        p: 1,
        d: 'foo',
        c: false
      }
    }
  })

  test('next should be called in order to validate body', () => {
    const next = jest.fn()
    schemaValidation(Joi.object({
      p: Joi.number(),
      d: Joi.string(),
      c: Joi.boolean()
    }), 'body')(req, null, next)
    expect(next).toBeCalled()
  })

  test('should give an error', () => {
    schemaValidation(Joi.object({
      x: Joi.number()
    }), 'body')(req, {
      status (arg) {
        expect(arg).toBe(422)
        return this
      },
      json (result) {
        expect(result).toHaveProperty('error')
        expect(result.error).toBe('"p" is not allowed')
        return this
      }
    })
  })

})
