import data from './data.json'
export const getData = object => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (object) {
        resolve(data?.[object])
      } else {
        resolve(data)
      }
    }, 1500)
  })
}

/*Sample usage

  useEffect(() => {
    async function getDataFromJson () {
      const data = await getData('popularEvents')
      setData(data)
    }
    getDataFromJson()
  }, [])

*/
