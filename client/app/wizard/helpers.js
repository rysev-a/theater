export const check = (data, fields) => (
  fields.reduce((prev, next) => {
    return prev && data[next];
  }, true)
)
