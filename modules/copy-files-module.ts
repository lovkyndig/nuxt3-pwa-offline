/**
 *
 * copy files to public folder
 * source:
 * https://github.com/Benbinbin/bloginote-copy-files-module/blob/main/src/module.ts
 */
import fs from 'node:fs'
import path from 'node:path'
import { defineNuxtModule } from '@nuxt/kit'
/*
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))
// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
*/

// Added 12.10.2023 if this package is not used as an template.
let source = 'content'
let destination = 'public'
if (!fs.existsSync('content')) {
  source = '.playground/content'
  destination = '.playground/public'
  // fs.writeFileSync(`.playground/info.txt`,`The source and destination for nuxt-content is: ${source} and ${destination}`)

  // added 11.10.2023 by KE (because of error with .playground (if the content dosn't exist).
  if (!fs.existsSync(source)) {
    console.log('Creating content-folder!')
    fs.mkdir(`${source}`, () => {})
  } 
} else { /* https://iq.opengenus.org/create-delete-files-directory-js/ */ }

// clean the "article" folder (copy from the "content" folder) by default
const cleanContentFiles = (folderPathArr: string[] = []) => {
  folderPathArr.forEach((folderPath) => {
    const exists = fs.existsSync(folderPath)
    if (exists) {
      fs.rmSync(folderPath, { recursive: true })
    }
  })
}

// then copy all other type of files except .md from "content" folder to public folder
// so all the assets can link to inside the markdown file by relative path
const copyContentFiles = (src: string, destFolderName: string, ignore: string[] = []) => {
  // url isn't case-sensitive but folder name is case-sensitive
  // change all the folders name to lowercase when copy them to public
  const dest = destFolderName.toLowerCase()

  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()
  if (isDirectory) {
    if (!fs.existsSync(dest) || !fs.statSync(src).isDirectory()) {
      fs.mkdirSync(dest)
    }
    fs.readdirSync(src).forEach((childItemName: string) => {
      copyContentFiles(
        path.join(src, childItemName),
        path.join(dest, childItemName),
        ignore
      )
    })
  } else {
    const ext = path.extname(src) as string
    if (!ignore.includes(ext)) {
      fs.copyFileSync(src, dest)
    }
  }
}

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('build:before', () => {
      // clean some folders (copied from the "content" folder at the previous build time) first
      // the value should be ['public/article'] for BlogiNote (this folder is container for all articles)
      const cleanFolders = options.clean ? options.clean : []
      cleanContentFiles(cleanFolders)

      // copy all files within the source folder (preserve the file system hierarchy)
      // to the dest folder
      // but ignore some types of file, the default value is ['.md', '.json', '.csv']
      // because these types can handle by Nuxt Content module
      const sourceFolder = options.sourceFolder ? options.sourceFolder : source
      const destFolder = options.destFolder ? options.destFolder : destination
      // const sourceFolder = options.sourceFolder ? options.sourceFolder : join(currentDir, './content')
      // const destFolder = options.destFolder ? options.destFolder : join(currentDir, './public')
      const ignoreTypes = options.ignoreTypes ? options.ignoreTypes : ['.md', '.json', '.csv']
      copyContentFiles(sourceFolder, destFolder, ignoreTypes)
    })
  }
})
