# Create Google App
Clone the repository or use it as a template. 
- Follow the [documentation](https://create-google-app.vercel.app)/ guidlines.

`Get your app in the Google Pay Console in one (1) week`, if you read the documentation and [follow my guidlines](https://create-google-app.vercel.app). (I was working ten (10) weeks to reach this goal.)

## Futures
**Full search functionality**
1. Full search functionality with use of [pagefind](https://pagefind.app/).[^1]
2. window.find()-function is used to continue searching in a article.[^2]
**Style and icons**
3. Accordion style.[^3]
4. Home- and list-page with good readability for mobil and notebook.[^4]
5. Offline icons; [nuxt-svgo](https://www.npmjs.com/package/nuxt-svgo).[^5]
**Helpers (functions/methods)**
6. Providing helpers to all my functionalities (methods).[^6]
7. WebNotification can be used in this package to send msg to the user.[^7]
8. Typescript can be used in dev ([vue-tsc](https://www.npmjs.com/package/vue-tsc)).[^8]
9. Created copy-files-module as an local module.[^9]
**Arrangement for PWA**
10. Privacy policy statement.[^10]
11. [@vite-pwa/nuxt](https://www.npmjs.com/package/@vite-pwa/nuxt): This is the first step on the way to Google Store.[^11]
12. BubbleWrap guide. See assets/guide. Required to be read.[^12]
13. Hosting on [Vercel](https://vercel.com/docs/deployments/git/vercel-for-github).[^13]
**Extra (not necessary)**
14. [Vercel Analytics](https://vercel.com/analytics), can be used when hosted on vercel.[^14]
[//]: <> (15. gtag.clients.ts. See in the plugins-folder.[^15])
[//]: <> (16. Google-site-verification-file in public-folder.[^16])

## To do-list (personal notes)
### Priority
- Add the site to [Ahrefs website-checker](https://ahrefs.com/website-checker)
- Add the site to [Google Search Console](https://search.google.com/search-console/about), and check if indexing-problems.
- Use [lighthouse](https://lighthouse-metrics.com/) to check performance, accessibility, beste practices, seo and pwa.
### On available capacity
- Add [giscus](https://giscus.app/) - Follow this [tutorial](https://www.freecodecamp.org/news/github-discussions-as-chat-system/).
- Add dark-light-themetoggle.
- Maybe add Google Translate option (not auto-translate).

## License
[MIT](./LICENSE)

[^1]: The bundle that is used for searching is normally created on generate. If you are using .playground (and want to test it there), you can use this command to create the bundle: `- npx -y pagefind --site .output/public --output-path public/_pagefind`. - Maybe you need to change `--site .output/public` to `--site ../.output/public`.
[^2]: The style and the _find-next-btn_ isn't good, and you are welcome to do it better. See FindNext-component and the find-next.svg.
[^3]: Most of the accordion functions are from [BlogiNote](https://github.com/Benbinbin/BlogiNote). - style.css is added in assets-folder with style for the accordions. - All headers is collapsed and the Catalog (Table of contents) is closed on load, except; - The headers is not collapsed when using the search-functionality.
[^4]: The length of articles on the home- and list-page is reduced. Style is changed in PostCardItem (see scss), and .short-description is added in list-page and PostListItem.
[^5]: Nuxt-svgo is used for instead. All icons are downloaded and saved in assets/icons-folder. No need for the iconify-package. Svg-compoents is added because nuxt-svgo v2 has the name as tag-name, not as attribute.
[^6]: All my helpers is located in plugin-folder.
[^7]: If the notifications don't shows, changed the settings. Add the sites url in the `allow`-settings. - In Chrome: chrome://settings/content/notifications - In Edge: edge://settings/content/notifications
[^8]: Typescript-issues in my base theme ([BlogiNote](https://github.com/Benbinbin/BlogiNote))-files are fixed with types/index.d.ts
[^9]: Needs to be there because of [issues in nuxt-content](). The inspiration for the module is this [package](https://www.npmjs.com/package/bloginote-copy-files-module).
[^10]: Privacy is mandatory for all Google Apps (and therefore needed in my apps). - privacy.txt.ts is added in server/routes-folder and privacy.txt is added to public-folder.
[^11]: @vite-pwa/nuxt is added and the setup is done in nuxt.config.ts. NB! First host your site ([vercel](https://vercel.com/docs/deployments/git/vercel-for-github)). Se more in pkt 15 below.
[^12]: Bubblewrap has to be used to create the aab-package before uploading it to Google App Store. - Bubblewrap are installed Globally on the local mashine, for use on development, because; - I'm using bubblewrap in a subfolder under the root, because the bubblewrap are creating so many files that have to be keeped away from the github-repo-files. - Guide-folder with links and info about using bubblewrap is added inside the assets-folder. - bubblewrap-folder is added to .gitignore-file.
[^13]: All public repos on github can be hosted on [vercel](https://vercel.com/docs/deployments/git/vercel-for-github) for free.
[^14]: Vercel Analytics don't use cookies and this app isn't using cookies at all, therefore you don't need to have a plugin that pop up with a question if you accept cookies.
[//]: <> ([^15]: .env holds the GTAG_ID.)
[//]: <> ([^16]: google.site-verification-file is necessary for indexing the pages in google-search-console.)

Updated 14.10.2023