## Video Representation for the Chrome Extension
This is the video represents for the working of the chrome extension.



https://github.com/Souvik-223/ai-buddy/assets/107457931/ad64fa4e-3794-45db-8644-963b561e8216



## Extension Details
This a chrome extension made using plasmo framework ([Plasmo extension](https://docs.plasmo.com/)) which uses - React, Typescript, Tailwind css and chrome MV3.

`Popup.tsx` - Main entry file that contains the design view for the chrome extension model. It also calls the backend api server and generates a streaming response for the user as displayed in the video.

`Designing` - Tailwind css is use for the designing of the chrome extension.


## Setup Details

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
