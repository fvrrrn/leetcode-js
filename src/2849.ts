// 2849. Determine if a Cell Is Reachable at a Given Time

export const isReachableAtTime = (
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number,
): boolean => {
  if (sx === fx && sy === fy && t === 1) return false
  const yDiff = Math.abs(sy - fy)
  let xDiff = Math.abs(sx - fx) - yDiff
  xDiff = xDiff < 0 ? 0 : xDiff
  return t >= yDiff + xDiff
}

// yDiff + sx-fx - yDiff
