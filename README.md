# gatsby-starter-linkedin-resume

[![Netlify Status](https://api.netlify.com/api/v1/badges/3177feae-108a-4542-bbea-664f86862e10/deploy-status)](https://app.netlify.com/sites/gatsby-starter-linkedin-resume/deploys)

> Generate your resume (HTML, PDF) from your Linked information with Gatsby 💪

Target audience is mainly developers who are tired of updating their CV's every now and then.

**Live Demo ✨**
- [Web version][url]
- [PDF version][url-pdf]

## What does it include? 📦

- Static hosting of your resume in `html` and `pdf` version powered with [Gatsby][gatbsy].
- [JSON Resume][json-resume] template integration.
- Automatic process of crawling your LinkedIn information with [scrapedin][scrapedin].
- Mapping from the crawler data to the [JSON Resume Schema][json-resume-schema]
- Typescript codebase with [runtime validators][typescript-json-validator].
- CLI interaction using [Commander][commander] and [Inquirer][inquirer]

## Setup ⚙️

```bash
> git clone  https://github.com/EmaSuriano/gatsby-starter-linkedin-resume.git
> yarn --ignore-engines
> yarn start

info gatsby serve running at: http://localhost:9000/
```

## Scripts 🏃‍♂️

- `start`: build the project and serve it locally in the [https://localhost:9000](https://localhost:9000).
- `build`: generate public folder to be deployed using [Netlify](http://netflify.com/).
- `generate-resume`: Crawl your data and regenerate your resume.

## How does it work? 🤔

![How it works](./docs/how-it-works.svg)

Given that accessing the values from LinkedIn is quite restricted, I decided to use an open-source scrapper that will go to your [**Public Profile**](https://www.linkedin.com/in/me), crawl all your information and save it inside the repository.

This project is not saving any of your credentials, they are only being used by the crawler to login inside LinkedIn.

Then the LinkedIn information is going to be map into the [JSONResume Schema](https://jsonresume.org/schema/), which is going to be read to generate your Resume.

## Contributing 🎉

I'm totally open for pull requests with bug fixes, changes in Documentation, or new features to the starter 🙌

## License 📝

MIT.

[url]: https://gatsby-starter-linkedin-resume.netlify.app/
[url-pdf]: https://gatsby-starter-linkedin-resume.netlify.app/pdf
[gatbsy]: https://www.gatsbyjs.org/
[json-resume]: https://jsonresume.org/
[json-resume-schema]: https://jsonresume.org/schema
[typescript-json-validator]: https://github.com/ForbesLindesay/typescript-json-validator
[inquirer]: https://github.com/SBoudrias/Inquirer.js/
[commander]: https://github.com/tj/commander.js/
[scrapedin]: https://github.com/linkedtales/scrapedin
