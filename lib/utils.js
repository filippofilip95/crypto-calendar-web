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
        base64,
      })
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  })
