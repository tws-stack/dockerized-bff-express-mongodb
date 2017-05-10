const app = require('../../app')
const supertest = require('supertest')

const request = supertest(app)

describe('items api', () => {
  it('GET /items', (done) => {
    request.get('/items').expect('Success!', done)
  })

  it('GET /items/:id', (done) => {
    request.get('/items/1').expect('Success!', done)
  })

  it('POST /items', (done) => {
    request.post('/items').expect('Success!', done)
  })

  it('PUT /items/:id', (done) => {
    request.put('/items/1').expect('Success!', done)
  })

  it('DELETE /items/:id', (done) => {
    request.delete('/items/1').expect('Success!', done)
  })
})
