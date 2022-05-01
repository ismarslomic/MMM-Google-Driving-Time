describe('Backend', () => {
  let helper

  beforeEach(() => {
    helper = require('../src/backend/Backend')

    helper.setName('MMM-Google-Driving-Time')
  })

  test('start prints module name', () => {
    helper.start()

    expect(console.log).toHaveBeenCalledWith('Starting module helper: MMM-Google-Driving-Time')
  })
})
