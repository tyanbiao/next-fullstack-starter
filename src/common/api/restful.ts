export function resolveRestfulJson(data: object | null) {
  return {
    code: 0,
    message: 'success',
    data: data,
  }
}

export function rejectRestfulJson(code: number, message: string) {
  return {
    code: code,
    message: message,
    data: null,
  }
}
