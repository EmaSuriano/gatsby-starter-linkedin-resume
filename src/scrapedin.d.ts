declare module 'scrapedin' {
  export default function scrapedin({
    cookies,
    email,
    password,
    isHeadless,
    hasToLog,
    hasToGetContactInfo,
    puppeteerArgs,
    puppeteerAuthenticate,
  }: any): any;
}
