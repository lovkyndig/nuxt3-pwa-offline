// import

const expandSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="currentColor" d="m17.5 4.75l-7.5 7.5l-7.5-7.5L1 6.25l9 9l9-9z"/>
  </svg>`
const collapseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="currentColor" d="m2.5 15.25l7.5-7.5l7.5 7.5l1.5-1.5l-9-9l-9 9z"/>
  </svg>`

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toggleAllHeadings: () => {
        if (document) {
          // first step: set attributes (style is set in assets/style.css)
          const detailEl = document.querySelectorAll('details')
          detailEl.forEach((element, index) => { // adding //tooltip 
            element.setAttribute('title', 'Click beside the Header - to toggle the content!') 
            element.setAttribute('style', 'position:relative;')
            const summary = element.querySelector('summary')
            if (summary) {
              summary.setAttribute('class', 'summary') // set expand icon on all headings
              let html = `<span style="opacity:0.8s;position:absolute;right:0.8rem;bottom:0.8rem">
                            ${expandSvg}
                          </span>`
              summary.insertAdjacentHTML("beforeend", html)
            }
          })
          // second step: close all open elements
          const searchString = useState('searchString')
          if (searchString.value === '') {
            detailEl.forEach((element, index) => { 
              
              if (element.hasAttribute('open')) {
                element.removeAttribute('open')
              }
            })
          }
        }
      },
      closeOtherSiblings: (event) => {
        // This script works similar as closable accordions with only one open at the time
        const current = event.currentTarget as HTMLDetailsElement
        const summary = current.querySelector('summary > span')
        if (summary) { // changing the expand icon to collapse - on the first click
          summary.innerHTML = collapseSvg
        }
        // First step: Close other open siblings 
        const getSiblings = (e) => {
          let siblings = [] // for collecting siblings
          let sibling  = e.parentNode.firstChild // first child of the parent node
          while (sibling) { // collecting siblings
            if (sibling.nodeType === 1 && sibling !== e) {
                siblings.push(sibling)
            }
            sibling = sibling.nextSibling
          }
          return siblings
        } // https://www.javascripttutorial.net/javascript-dom/javascript-siblings/
        const siblings = getSiblings(current)
        // Do something with the colleted siblings
        if (!current.hasAttribute('open')) {
          siblings.map(sibling => {
            if (sibling.hasAttribute('open')) {
              sibling.removeAttribute('open')
              sibling.querySelector('summary > span').innerHTML = expandSvg
            }
          })
        } else { // Running this on click on an open accordion. - Changing icon.
          if (summary) { // Changing the collapse-icon to expand-icon on click on open element
            summary.innerHTML = expandSvg
          }
        }

        // Second step: Get the clicked header on the top of the screen
        moveClickedHeaderToTheTop(current.querySelector('[data-heading-path]'))
        function moveClickedHeaderToTheTop (hElem) {
          const path = hElem.getAttribute('id')
          let url = window.location.href
          const urlArray = url.split('#')
          url = urlArray[0] // get only the first part of the url (if more)
          const page = '#' + path
          // get the url and add page-id to it, and then "click"
          window.location.href = url + page
        }

      }
    }
  }
})
