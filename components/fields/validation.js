export const required = value => (value ? undefined : 'Required')

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const maxKbSize = max => value =>
  value && value.size / 1024 > max
    ? `Image size is too big. Maximum image size is 1MB`
    : undefined
