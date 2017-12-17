import * as supertest from 'supertest'
import app from './App'

describe('App', () => {
  it('works', () =>
    supertest(app)
      .post('/shield/login')
      .expect(200)
  )
});
