export default function () {
  return {
    name: 'purge',
    transform: (source, id) => {
      if (/src\/vendors\/index/.test(id)) {
        return {
          code: source.replace(/antdv\:\santdvToImport/, '')
        }
      }
    }
  }
}
