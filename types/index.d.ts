/**
 *
 * Necessary code to use the find-property on window-object
 * source:
 * https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript/56402425#56402425
 *
 */
declare global {
  interface Window {
    find: any,
    gtag: (...args: any[]) => void,
    google: any // Used in custom/GoogleTranslatets.vue
  }
  interface Navigator {
    Clipboard: Clipboard
  }
  interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void
  }
  // https://stackoverflow.com/questions/75965295/what-is-the-typescript-type-of-mutation-list-in-callback-function-of-mutation-ob
}

export { }