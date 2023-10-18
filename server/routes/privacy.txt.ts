import { defineEventHandler } from 'h3'
export default defineEventHandler(async (event) => {
  await appendHeader(event, 'Content-Type', 'text/plain')

  return `
  # Privacy Policy Statement (GDPR)
  
  ## "Google Play" requires privacy clearance
  Google's rules for publishing apps in the "Google Play Store":
  - _"Apps that do not access any personal and sensitive user data must still submit a privacy policy."_ [EN](https://support.google.com/googleplay/android-developer/answer/9859455?hl=en )
  
  ## What kind of personal data is processed?
  - User activity: Reading and action history from apps and websites. As well as technical information about the devices they use.
  Hereafter, the term user activity is used instead of personal data, because it describes the personal data that is processed.
  
  ### Purpose
  The purpose is twofold;
  - control of unwanted/illegal user activity and
  - find a basis for making the app better for users.
  
  ## About collecting user activity
  The information is collected by "Google" via Play Console, Search Console and Analytics.
  - The developer does not collect any other information than that which is collected and stored by Google.
  - The developer has access to this information via Google, due to verified ownership of the domain where the PWA is deployed (see _#### Domain_ below).
  - The developer does not copy or store the user activity, which is found on Google', in other places.
  
  ## Google Analytics and Cookies
  Google Analytics stores and uses cookies in its processing of user data. For that reason (cf. GDPR), the developer must inform the user and request consent to such storage, in order to make use of Google Analytics.
  
  ### Login authentication
  Cookies are required when logging in to password-protected pages. Such cookies are not used if you log in to pages without a password.
  
  ## Legal liability
  The developer acknowledges responsibility for studying the user activity that Google makes available to the developers via:
  - [Google Search Console](https://search.google.com/search-console/about)
  - [Google Analytics](https://en.wikipedia.org/wiki/Google_Analytics)
  
  ## Claims and objections
  Complaints or objections to the developer's use of Google Analytics and cookies, or other complaints and objections, can be sent to the developer's email:
  - [Kyrie Eleison](mailto:jur.eleison@gmail.com)
  
  ## Complaint about processing of user activity
  In addition to complaining to the e-mail address mentioned in the previous section, you can complain to the Data Protection Authority (in Norway) if you believe that he is doing something wrong.
  - [Datatilsynet] (https://www.datatilsynet.no)
  
  #### The domain
  The app is connected to a pwa (via twa) which is deployed on a subdomain under Vercel with the following url:
  - [create-google-app.vercel.app](https://create-google-app.vercel.app)
  
  #### App name
  The app name on Google Play is:
  - "Create Google App"
  
  #### Open source code
  Source code for pwa that is the basis for building the app (with @bubblewrap) is open and public:
  - [GitHub](https://github.com/lovkyndig/create-google-app)
  
  #### GitHub
  An overview of the developer's open source programming is publicly available on the developer's account on GitHub:
  - [github.com/lovkyndig](https://github.com/lovkyndig).
  
  #### Google Play
  More information about this app can be found on Google Play by adding it to Google with the search terms "Google Play Church Postille". Direct link:
  - [Church postil](https://play.google.com/store/apps/details?id=app.vercel.create-google-app.twa).
  
  _Edited: 13.10.2023_
  
  [//]: # (This is a copy of the text in ~/server/routes/privacy.txt.ts)
  `
})
