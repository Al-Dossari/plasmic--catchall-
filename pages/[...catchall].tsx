import * as React from 'react';
import {
    PlasmicComponent,
    ComponentRenderData,
    PlasmicRootProvider,
    extractPlasmicQueryData
} from '@plasmicapp/loader-nextjs';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { PLASMIC } from '../plasmic-init';

/**
 * Use fetchPages() to fetch list of pages that have been created in Plasmic
 */
export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await PLASMIC.fetchPages();
    return {
        paths: pages.map((page) => ({
            params: { catchall: page.path.substring(1).split('/') }
        })),
        fallback: 'blocking'
    };
};

/**
 * For each page, pre-fetch the data we need to render it
 */
export const getStaticProps: GetStaticProps = async (context) => {
    const { catchall } = context.params ?? {};

    // Convert the catchall param into a path string
    const plasmicPath =
        typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
    const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
    if (!plasmicData) {
        // This is some non-Plasmic catch-all page
        return {
            props: {}
        };
    }

    // This is a path that Plasmic knows about.
    const pageMeta = plasmicData.entryCompMetas[0];

    // Cache the necessary data fetched for the page.
    const queryCache = await extractPlasmicQueryData(
        <PlasmicRootProvider
            loader={PLASMIC}
            prefetchedData={plasmicData}
            pageRoute={pageMeta.path}
            pageParams={pageMeta.params}
        >
            <PlasmicComponent component={pageMeta.displayName} />
        </PlasmicRootProvider>
    );

    // Pass the data in as props.
    return {
        props: { plasmicData, queryCache },

        // Using incremental static regeneration, will invalidate this page
        // after 300s (no deploy webhooks needed)
        revalidate: 10
    };
};

/**
 * Actually render the page!
 */
export default function CatchallPage(props: { plasmicData?: ComponentRenderData; queryCache?: Record<string, any> }) {
    const { plasmicData, queryCache } = props;
    const router = useRouter();
    if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
        return <Error statusCode={404} />;
    }
    const pageMeta = plasmicData.entryCompMetas[0];
    return (
        // Pass in the data fetched in getStaticProps as prefetchedData
        <PlasmicRootProvider
            loader={PLASMIC}
            prefetchedData={plasmicData}
            prefetchedQueryData={queryCache}
            pageRoute={pageMeta.path}
            pageParams={pageMeta.params}
            pageQuery={router.query}
        >
            {
                // pageMeta.displayName contains the name of the component you fetched.
            }
            <PlasmicComponent component={pageMeta.displayName} />
        </PlasmicRootProvider>
    );
}
//
// function Mypage() {
//     // Use PlasmicMypage to render this component as it was
//     // designed in Plasmic, by activating the appropriate variants,
//     // attaching the appropriate event handlers, etc.  You
//     // can also install whatever React hooks you need here to manage state or
//     // fetch data.
//     //
//     // Props you can pass into PlasmicMypage are:
//     // 1. Variants you want to activate,
//     // 2. Contents for slots you want to fill,
//     // 3. Overrides for any named node in the component to attach behavior and data,
//     // 4. Props to set on the root node.
//     //
//     // By default, PlasmicMypage is wrapped by your project's global
//     // variant context providers. These wrappers may be moved to
//     // Next.js Custom App component
//     // (https://nextjs.org/docs/advanced-features/custom-app).
//     return (
//         <GlobalContextsProvider>
//             <PageParamsProvider__
//                 route={useRouter()?.pathname}
//                 params={useRouter()?.query}
//                 query={useRouter()?.query}
//             >
//                 <PlasmicMypage />
//             </PageParamsProvider__>
//         </GlobalContextsProvider>
//     );
// }

// export default Mypage;