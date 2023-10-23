import { longestCommonPrefix } from '../src/14.js'

it('returns "fl" with strs=["flower","flow","flight"]', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
})

it('returns "" with strs=["dog","racecar","car"]', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
})

it('returns "flower" with strs=["flower","flower","flower","flower"]', () => {
  expect(longestCommonPrefix(['flower', 'flower', 'flower', 'flower'])).toEqual(
    'flower',
  )
})
