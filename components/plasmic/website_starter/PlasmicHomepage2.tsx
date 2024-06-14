// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: k6Ff1vjjTACuiW5BomdEV7
// Component: R0ex5hWuJUA7

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: 0MzHvy7Vjghf/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: k6Ff1vjjTACuiW5BomdEV7/projectcss
import sty from "./PlasmicHomepage2.module.css"; // plasmic-import: R0ex5hWuJUA7/css

createPlasmicElementProxy;

export type PlasmicHomepage2__VariantMembers = {};
export type PlasmicHomepage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage2__VariantsArgs;
export const PlasmicHomepage2__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage2__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage2__ArgsType;
export const PlasmicHomepage2__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage2__OverridesType = {
  app2?: Flex__<"div">;
  section?: Flex__<"section">;
  h1?: Flex__<"h1">;
  navbar?: Flex__<typeof Navbar>;
};

export interface DefaultHomepage2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage2__RenderFunc(props: {
  variants: PlasmicHomepage2__VariantsArgs;
  args: PlasmicHomepage2__ArgsType;
  overrides: PlasmicHomepage2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "supabase",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "elchin",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "1"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    clubs: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "157523a8-a564-4845-81d4-23951d76d034",
        userArgs: {},
        cacheKey: `plasmic.$.157523a8-a564-4845-81d4-23951d76d034.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "b1ee20df-31be-4cb0-b594-0a8138a60979",
        userArgs: {},
        cacheKey: `plasmic.$.b1ee20df-31be-4cb0-b594-0a8138a60979.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    clubsHttp: usePlasmicDataOp(() => {
      return {
        sourceId: "vQtRPuFArSfh43vUmgx2PS",
        opId: "a34a02a8-d77d-45ce-9f5a-e1ab31c10eaa",
        userArgs: {},
        cacheKey: `plasmic.$.a34a02a8-d77d-45ce-9f5a-e1ab31c10eaa.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"app2"}
          data-plasmic-override={overrides.app2}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.app2
          )}
          onLoad={async event => {
            const $steps = {};

            $steps["runCode"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return undefined;
                    }
                  };
                  return (({ customFunction }) => {
                    return customFunction();
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["runCode"] != null &&
              typeof $steps["runCode"] === "object" &&
              typeof $steps["runCode"].then === "function"
            ) {
              $steps["runCode"] = await $steps["runCode"];
            }
          }}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"HTTP"}
            </h1>
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  app2: ["app2", "section", "h1", "navbar"],
  section: ["section", "h1", "navbar"],
  h1: ["h1"],
  navbar: ["navbar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  app2: "div";
  section: "section";
  h1: "h1";
  navbar: typeof Navbar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage2__VariantsArgs;
    args?: PlasmicHomepage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage2__ArgProps,
          internalVariantPropNames: PlasmicHomepage2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "app2") {
    func.displayName = "PlasmicHomepage2";
  } else {
    func.displayName = `PlasmicHomepage2.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "k6Ff1vjjTACuiW5BomdEV7"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicHomepage2 = Object.assign(
  // Top-level PlasmicHomepage2 renders the root element
  withUsePlasmicAuth(makeNodeComponent("app2")),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    navbar: makeNodeComponent("navbar"),

    // Metadata about props expected for PlasmicHomepage2
    internalVariantProps: PlasmicHomepage2__VariantProps,
    internalArgProps: PlasmicHomepage2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage2;
/* prettier-ignore-end */