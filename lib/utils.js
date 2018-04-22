import { format, isSameDay, addDays } from 'date-fns'

export const transformImageToObject = file =>
  new Promise(resolve => {
    let reader = new FileReader()
    const { name, lastModified, size, type } = file

    reader.onload = () => {
      const base64 = reader.result
      resolve({
        name,
        lastModified,
        size,
        type,
        base64
      })
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  })

export const getFormattedDate = date => {
  if (isSameDay(new Date(), date)) {
    return `Today ${format(date, '(dddd)')}`
  }
  if (isSameDay(date, addDays(new Date(), 1))) {
    return `Tomorrow ${format(date, '(dddd)')}`
  }
  return format(date, 'Do MMMM (dddd)')
}
