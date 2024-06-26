interface Input {
  length: number
  charactorSet: string
}

export function randomString({ length, charactorSet }: Input) {
  if (!charactorSet || charactorSet.length === 0) throw new Error('charactorSet is empty')
  let randstr = ''

  for (let i = 0; i < length; i++) {
    randstr = `${randstr}${charactorSet.charAt(Math.floor(Math.random() * charactorSet.length))}`
  }

  return randstr
}
