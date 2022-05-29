describe('Frontend', () => {
  beforeAll(() => {
    require('../__mocks__/Logger')
    require('../__mocks__/Module')
  })

  const name = 'MMM-Google-Driving-Time'

  let MMMGoogleDriveTime

  beforeEach(() => {
    jest.resetModules()
    require('../MMM-Google-Driving-Time')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    MMMGoogleDriveTime = global.Module.create(name)
    MMMGoogleDriveTime.setData({ name, identifier: `Module_1_${name}` })
  })

  test('requires version 2.19', () => {
    expect(MMMGoogleDriveTime.requiresVersion).toBe('2.19.0')
  })

  test('has correct defaults', () => {
    expect(MMMGoogleDriveTime.defaults).toMatchSnapshot()
  })

  test('inits module with state loading === true', () => {
    expect(MMMGoogleDriveTime.loading).toBe(true)
  })
})
