class KipuhValidator {
  automaticValidator(inputName: string) {
    return (value: any) => {
      if (value) {
        return true
      }
      return `${inputName} is required.`
    }
  }
}

export default new KipuhValidator()
