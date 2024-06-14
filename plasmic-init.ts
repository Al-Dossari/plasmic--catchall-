import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "k6Ff1vjjTACuiW5BomdEV7",  // ID of a project you are using
            token: "5wR1fpt3n69Y0MPTSThCyTbiDrgU6huF2l9CtXN5UOEo3yo0aaLBwdx2HHvUCVyeIBQ0VLqjVRopOTnnTlQ"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
})