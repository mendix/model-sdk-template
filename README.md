# model-sdk-template

Minimal template project to get started quickly with the Mendix Model SDK.
Used at the MendixWorld 2016 Model SDK workshop.

## Getting started

Run the following steps once to get started

1. Make sure that [node.js / npm](https://nodejs.org/en/download/) (4.0 or higher) is installed on your machine.
2. Clone (or [download](https://github.com/mendix/model-sdk-template/archive/master.zip)) this repository: `git clone https://github.com/mendix/model-sdk-template.git`
3. Run `npm install` in the cloned directory to install all dependencies.

## Configuring the script

Modify the `index.ts` file with the required details for `USERNAME`, `APIKEY`, `PROJECT_NAME` and `TEMPLATE_MPK`:

1. The username is your login name used at https://home.mendix.com
2. ApiKey's can be obtained from your personal profile page at https://home.mendix.com
3. Project name is a descriptive field for this project
4. The template MPK should be a (relative) path to an `.mpk` file, which can be created using the `File > Export Project Package...` function in the Mendix Business Modeler (Should be Mx 6.0 or higher project).

## Modifying the script

Add your own logic in the `processWorkingCopy` function.
Make sure to invoke `done()` once the script has finished.
Use the `model.exportMpk` to download the changed working copy if needed (working copies are wiped after 24 hours).

## Running the script

1. Use `npm start` to run the script. It will create a new online working copy from the template MPK before invoking `processWorkingCopy`
2. Use `npm start <working-copy-id>` to run the script on an existing working copy.

## Docs

* [Getting started with the Mendix SDK's](https://developers.mendix.com/sdk/)
* [Reference documentation on the Mendix meta model](https://world.mendix.com/display/MXSDK/Reference+Documentation)
* [Model SDK api docs](https://apidocs.mendix.com/modelsdk/latest/)

## Limitations

This template project is minimal and doesn't integrate with the `mendixplatformsdk`
(which provides functionality to import and export working copies to the team server).
Neither does it provide TypeScript typing for Node itself, promises etc.
For a more elaborate template project see [mendixplatformsdk-examples](https://github.com/mendix/mendixplatformsdk-examples)