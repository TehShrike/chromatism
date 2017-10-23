export default {
  hsl: value => {
    const normalized = Object.assign({}, value, {
      h: value.h / 360,
      s: value.s / 100,
      v: value.v / 100
    })

    const h = normalized.h
    const sNumerator = normalized.s * normalized.v
    const sDenominator = (2 - normalized.s) * normalized.v < 1
      ? ((2 - normalized.s) * normalized.v)
      : (2 - (2 - normalized.s) * normalized.v)

    const s = (sDenominator === 0 || sDenominator === 0) ? 0 : sNumerator / sDenominator
    const l = ((2 - normalized.s) * normalized.v) / 2

    return { h: h * 360, s: s * 100, l: l * 100 }
  }
}
