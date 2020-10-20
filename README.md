# Quran-Pashto

This is the site where one can read the Quran with Pashto translations

## Live Version
The online version of this site can be found here: [quran.tolafghan.com](https://quran.tolafghan.com)

### Local development

For running the app locally on your computer you have to have `node`, `npm` and `gridsome` installed.

After that the app can be started running `gridsome develop` in the terminal.

Once the server is running, visit `http://localhost:8080`.

### Syntax Highlighting for <page-query> blocks

You have to have Vetur plugin installed and run `Vetur: Generate grammar from...` and then reload VS Code.
Source: https://github.com/vuejs/vetur/issues/975#issuecomment-461197031

### Prettier

This project uses Prettier to have a consistent format for all js and vue files.

To run Prettier on all files, run in your terminal:

> npx prettier --config ./.prettierrc --write "**/*.{js,vue,css}"

------

Happy coding 🎉🙌
