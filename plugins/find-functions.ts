export default defineNuxtPlugin(() => {
  return {
    provide: {
      // used in SearchModal-component
      checkSearchString: (str: string) => {
        // Using Unicode Character Categories: Other Punctuation (quatationsmark/apostrophe) and Initial Punctuation (Pi)
        function fixed (str) {
          const punctations = /\u0022|\u0027|\p{Pi}/gu
          str = str.replace(punctations, '') // Other Punctuation:  + Initial Punctuation (Pi)
          return str.replace(/ /g, '_') // replace Space_Separator (Zs) &nbsp; OR %20
        }
        // adding this searchString below in NuxtLink, as queryparam to url
        return fixed(str)
      },
      getAndChangeSearchparam: () => {
        // Phrases must be enclosed in quotation marks
        const route = useRoute()
        const searchString = useState('searchString')
        const findSearchparam = ref(route.query.searchparam ? route.query.searchparam : '')
        const newString = findSearchparam.value.toString()
        searchString.value = newString.replace(/\u005F/gu, ' ') // replace to Space_Separator (Zs)
        return searchString.value
      }
    }
  }
})

/*
Original functions:
const checkSearchString = (str) => {
  // Using Unicode Character Categories: Other Punctuation (quatationsmark/apostrophe) and Initial Punctuation (Pi)
  const fixed = (str) => {
    const punctations = /\u0022|\u0027|\p{Pi}/gu
    str = str.replace(punctations, '') // Other Punctuation:  + Initial Punctuation (Pi)
    return str.replace(/ /g, '_') // replace Space_Separator (Zs) &nbsp; OR %20
  }
  // adding this searchString below in NuxtLink, as queryparam to url
  return fixed(str)
}

const getAndChangeSearchparam = () => {
  const searchString = useState('searchString')
  const findSearchparam = ref(route.query.searchparam ? route.query.searchparam : '')
  const newString = findSearchparam.value.toString()
  searchString.value = newString.replace(/\u005F/gu, ' ') // replace to Space_Separator (Zs)
}
*/

/*
Sources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
https://www.compart.com/en/unicode/category

https://codybontecou.com/using-url-query-params-in-nuxt-3.html
*/