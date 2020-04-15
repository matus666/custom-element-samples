# Examples of Custom Element Extensions for Kentico Kontent

[![Gallery](https://img.shields.io/badge/-Gallery-brightgreen.svg)](https://kentico.github.io/kontent-custom-element-samples/gallery/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

[Custom elements](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features) help you with extending the basic functionality of Kentico Kontent UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed `<iframe>` and interacts with the [Kentico Kontent](https://kontent.ai/) app via the [Custom Elements API](https://docs.kontent.ai/reference/custom-elements-js-api).

Note that Custom elements are only supported in the latest versions of our SDKs.

[![View Gallery](ViewGalleryButton.png)](https://kentico.github.io/kontent-custom-element-samples/gallery)

## ⚠ Disclaimer

Any URLs provided in the repos should not be used in production. You should follow the steps provided in the custom element's repository to deploy it yourself for testing.

If a custom element is missing deploy instructions, or you're having trouble with them, please log an issue in the custom element's repository.

If you wish to use them in a production project, you should perform a code review and fork/deploy the source code on your own as the custom elements in this repository are subject to change without notice.

**NOTE:** Some of the custom elements may require further configuration such as custom API keys or be subject to CORS limitation. In those cases you will need to fork the source repository and adjust the configuration in your copy repository according to instructions in the element's README file.

## How to create a custom element

You can find a detailed tutorial on how to create a Custom element in our [documentation](https://docs.kontent.ai/tutorials/develop-apps/integrate/integrating-your-own-content-editing-features).

### Styling your custom elements

By including Kentico Kontent default styles, you can make your Custom element look consistent with the rest of the UI.

The [/shared](https://github.com/Kentico/kontent-custom-element-samples/tree/master/shared) folder in this GitHub repository contains:

* [custom-element.css](https://github.com/Kentico/kontent-custom-element-samples/blob/master/shared/custom-element.css) – a CSS stylesheet
* [kentico-icons-v1.6.0.woff](https://github.com/Kentico/kontent-custom-element-samples/blob/master/shared/kentico-icons-v1.6.0.woff) – a font file
* [examples.html](https://github.com/Kentico/kontent-custom-element-samples/blob/master/shared/examples.html) – An HTML page containing the implementation details and an HTML markup of some of the basic elements. See also the link in Demo section.
  * showcase: [https://kentico.github.io/kontent-custom-element-samples/shared/examples.html](https://kentico.github.io/kontent-custom-element-samples/shared/examples.html)

We recommend you clone the files and host them locally yourself. The `kentico-icons-v1.6.0.woff` file needs to be hosted in the same directory as the CSS stylesheet to be properly linked.

## Feedback & Contributing

You can contribute by implementing a Custom Element Extension of your choice or pick one from the [ideas](https://github.com/Kentico/kontent-custom-element-samples/issues). Create an HTML web page, include the Custom Elements API in the code, describe what your element does in the Readme file, and send us a pull request.

### Pull request

The pull request should include:

* A screenshot file (animated or static)
  * Must be named using PascalCase (e.g. `YourComponentName.gif`)
  * Must be added to the [`src/data/assets` folder](src/data/assets)
* An element information json file
  * Must be named using PascalCase (e.g. `YourComponentName.json`)
  * Must be added to the [`src/data/elements` folder](src/data/elements)
  * Includes a brief description of the custom element functionality
  * Links to your repository
  * Use existing categories if possible
* Your repository should include a `README.md` file containing
  * A description of the custom element functionality
  * A screenshot/gif showcasing the custom element
  * Step by step instructions how to add custom element to the Kentico Kontent UI
  * Configuration description example
  * Example of the output in the Delivery Response
  * If possible, a "Deploy to Netlify" button to make it easy to get started ([e.g. Deploying section of SimpleMDE Markdown Editor](https://github.com/Kentico/kontent-custom-element-simplemde-markdown-editor#deploying))
* We no longer accept code submitted to this repository. It is only intended to act as a guidepost or collection of references to other codebases

#### Sample element JSON

The element information JSON file named after your element's name in PascalCase (e.g. `YourComonentName.json`) must be placed in the [`/src/data/elements` folder](/src/data/elements) with the following format:

```json
{
  "title": "Your Component Name",
  "description": "Short description of your element's purpose and functionality.",
  "thumbnailUrl": "../assets/YourComponentName.(gif|png|jpg)",
  "readmeUrl": "https://github.com/<YourGitHub>/<YourCustomElementRepoName>",
  "categories": [
    "Other"
  ]
}
```

### Ideas

We'd also appreciate if you [submit your ideas](https://github.com/Kentico/kontent-custom-element-samples/issues) for custom elements or vote for [the existing ones](https://github.com/Kentico/kontent-custom-element-samples/issues).

Check out the [Contributing](https://github.com/Kentico/kontent-custom-element-samples/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions, and begin contributing.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/custom-element-samples?pixel)
