const tape = require('tape')
const ReferanceMap = require('../index.js')

tape('referance mapping', t => {
  t.plan(12)
  const referanceMap = new ReferanceMap()
  const obj1 = {}
  const obj2 = {}
  const ref1 = referanceMap.add(obj1)
  const ref2 = referanceMap.add(obj2)
  t.equals(ref1, 0, 'should produce correct refs')
  t.equals(ref2, 1, 'should produce correct refs')

  t.equals(referanceMap.has(ref1), true, 'should detect if it has the ref')

  const foundObj1 = referanceMap.get(ref1)
  const foundObj2 = referanceMap.get(ref2)

  t.equals(foundObj1, obj1, 'should get the correct object')
  t.equals(foundObj2, obj2, 'should get the correct object')

  t.equals(referanceMap.size, 2, 'should return the correct size')

  const dupRef = referanceMap.add(obj2)

  t.equals(dupRef, ref2, 'detect duplicate refs')

  referanceMap.delete(ref1)
  try {
    referanceMap.get(ref1)
  } catch (e) {
    t.true(true, 'should delete refances')
  }

  t.equals(referanceMap.has(ref1), false, 'should detect if it does not has the ref')

  referanceMap.clear()
  try {
    referanceMap.get(ref2)
  } catch (e) {
    t.true(true, 'should clear refances')
  }

  const aMap = new Map()
  const ref3 = referanceMap.add(aMap, 'set')
  t.equals(referanceMap.get(ref3, 'set'), aMap)
  try {
    referanceMap.get(ref3, 'lol')
  } catch (e) {
    t.true(true, 'should throw if wrong type')
  }
})

tape('get failures', t => {
  t.plan(2)
  const referenceMap = new ReferanceMap()
  const obj1 = {}
  const obj2 = {}
  const ref1 = referenceMap.add(obj1, 'correctType')
  const ref2 = referenceMap.add(obj2, 'someType')
  try {
    referenceMap.get(ref1, 'wrongType')
  } catch (e) {
    t.equal(e.toString(), `Error: invalid reference "${ref1}". Expected type: "wrongType" actual type: "correctType"`)
  }
  referenceMap.delete(ref2)
  try {
    referenceMap.get(ref2)
  } catch (e) {
    t.equal(e.toString(), `Error: invalid reference "${ref2}". Object doesn't exist`)
  }
  t.end()
})

tape('failures', t => {
  t.plan(2)
  const referanceMap = new ReferanceMap()
  const buf = Buffer.from('hello')
  referanceMap.add(buf)
  referanceMap.clear()
  const ref = referanceMap.add(buf)
  t.deepEquals(referanceMap.get(ref), buf)

  try {
    referanceMap.add(1)
  } catch (e) {
    t.equal(e.toString(), 'Error: invalid object "1"')
  }
  t.end()
})
