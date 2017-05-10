const td = require('testdouble')
const Controller = require('../../controllers/item-controller')

describe('ItemController', () => {
  let controller

  beforeEach(() => {
    controller = new Controller()
  })

  it('#index', () => {
    const res = td.object(['send'])
    controller.index({}, res)
    td.verify(res.send('Success!'))
  })

  it('#show', () => {
    const res = td.object(['send'])
    controller.show({}, res)
    td.verify(res.send('Success!'))
  })

  it('#create', () => {
    const res = td.object(['send'])
    controller.create({}, res)
    td.verify(res.send('Success!'))
  })

  it('#update', () => {
    const res = td.object(['send'])
    controller.update({}, res)
    td.verify(res.send('Success!'))
  })

  it('#destroy', () => {
    const res = td.object(['send'])
    controller.destroy({}, res)
    td.verify(res.send('Success!'))
  })
})
