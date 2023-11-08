// 2849. Determine if a Cell Is Reachable at a Given Time

export const isReachableAtTime = (
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number,
): boolean => {
  if (sx === fx && sy === fy && t === 1) return false
  return t >= Math.max(Math.abs(sx - fx), Math.abs(sy - fy))
}

// yDiff + sx-fx - yDiff
