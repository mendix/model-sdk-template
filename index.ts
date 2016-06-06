import {Model, IModel} from "mendixmodelsdk"

const USERNAME     = "" // Your Mendix Platform login: user@domain.tld
const APIKEY       = "" // Your api key. Can be retrieved from your profile page at https://home.mendix.com
const PROJECT_NAME = "script-generated-working-copy" // Descriptive name of the project
const TEMPLATE_MPK = "" // File location of the MPK to be used to initially fill the working copy. Relative to current dir

function processWorkingCopy(model: IModel, done: () => void) {
    console.log(" * Processing")

    /**
     * Your script. Invoke `done()` (asynchronously) once done.
     */

    done()
}

declare var process

(function() {

    const client = Model.createSdkClient({
        credentials: {
            username: USERNAME,
            apikey:   APIKEY
        }
    })

    if (process.argv.length === 2) {
        // no custom arguments passed to 'npm start' (arg0 = node, arg1 = current script)
        console.log(" * Creating working copy...");
        client.createWorkingCopy(
            {
                name: PROJECT_NAME,
                template: TEMPLATE_MPK
            },
            model => {
                console.log(` * Created working copy '${model.id}'\n * Use 'npm start ${model.id}' to re-run this script with the same working copy`)
                processWorkingCopy(
                    model,
                    () => closeWorkingCopy(model)
                )
            },
            handleError
        )
    } else {
        // custom arguments passed to 'npm start'
        const wcId = process.argv[2]
        console.log(" * Using working copy", wcId)
        client.openWorkingCopy(
            wcId,
            model => {
                processWorkingCopy(
                    model,
                    () => closeWorkingCopy(model)
                )
            },
            handleError
        )
    }

    function handleError(err) {
        console.error(err)
        process.exit(1)
    }

    function closeWorkingCopy(model) {
        // flush any pending changes to the server before exiting the process
        model.closeConnection(() => {
            console.log(" * Script completed successfully")
            process.exit(0)
        })
    }
})()
