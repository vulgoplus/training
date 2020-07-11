export function toNumber(value: string | number): number {
  const number = String(value).replace(/[^0-9]/g, '')

  return Number(number)
}
