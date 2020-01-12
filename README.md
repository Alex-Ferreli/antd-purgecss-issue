# How to test it

Install dependencies: `npm i`

### Branch master
Example with purgecss activated (only in production environment, after `npm run build`)

If you launch it with `npm start` all stuff work as it should, but during build with purgecss you will see in generated css that Divider styles are lost, so when running it you will see that styles are broken. This happen because Divider classes are concatenated and `purgecss` can't match full classes in CSS files and concatenated classes in JS/JSX/TS/TSX files.

### Branch no-purgecss
Example with purgecss deactivated

It will work after `npm run build` too, but the CSS files contains all styles generated from Tailwindcss (tons of styles, all combination of styles with styles for matching media query breakpoints too, 600kb~).

## Why it's important to make antd purgable
If only 1 dependencies of a project isn't purgable then purgecss can't be used for the entire project because some classes are lost. And Tailwindcss stuff can't be used without it because of full file size bundle.
