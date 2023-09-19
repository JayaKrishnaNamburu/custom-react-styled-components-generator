import { createReactComponentGenerator } from "@teleporthq/teleport-component-generator-react";
import reactStyledComponentsPlugin, {
  createStyleSheetPlugin,
} from "@teleporthq/teleport-plugin-react-styled-components";
import { createComponentGenerator } from "@teleporthq/teleport-component-generator";
import { UIDLUtils } from "@teleporthq/teleport-shared";
import { Parser } from "@teleporthq/teleport-uidl-validator";
import * as types from "@babel/types";
import { projectUIDL } from "./uidl.js";

const IGNORE_CHUNKS = [
  "component-types-of-props",
  "import-lib",
  "import-pack",
  "import-local",
  "export",
];

const astModifierPlugin = async (structure) => {
  const { chunks, uidl } = structure;
  const componentChunk = chunks.find((chunk) => chunk.name === "jsx-component");

  UIDLUtils.traverseElements(uidl.node, (element) => {
    if (
      element.elementType === "img" &&
      element.key === "image" &&
      componentChunk
    ) {
      const imageJSXNode = componentChunk.meta.nodesLookup[element.key];
      imageJSXNode.openingElement.name.name = "ImageWrapper";
      imageJSXNode.closingElement.name.name = "ImageWrapper";
    }
  });

  const newChunks = chunks.filter((chunk) => {
    if (IGNORE_CHUNKS.includes(chunk.name)) {
      return null;
    }

    if (chunk.name === "component-default-props") {
      chunk.content.expression.left = types.identifier("props");
      chunk.linkAfter = [];
    }

    if (chunk.name === "jsx-component") {
      chunk.content = chunk.content.declarations[0].init.body.body[0];
      chunk.linkAfter = ["component-default-props"];
    }

    if (chunk.name === "Image") {
      chunk.name = "ImageWrapper";
      chunk.content.declarations[0].id.name = "ImageWrapper";
    }

    return chunk;
  });

  structure.chunks = newChunks;
  return structure;
};

const generator = createReactComponentGenerator();
generator.addPlugin(reactStyledComponentsPlugin);
generator.addPlugin(astModifierPlugin);

const styleSheetGenerator = createComponentGenerator();
styleSheetGenerator.addPlugin(createStyleSheetPlugin());
styleSheetGenerator.addPlugin(astModifierPlugin);

const run = async () => {
  /* Generating component */
  const result = await generator.generateComponent(
    projectUIDL["components"].SquareCard,
    {
      projectStyleSet: {
        styleSetDefinitions: projectUIDL.root.styleSetDefinitions,
        fileName: "global-style",
        path: [],
      },
    }
  );

  /* Generating global style sheet styles */
  const parsedProjectUIDL = new Parser.parseProjectJSON(projectUIDL);
  const styleSheet = await styleSheetGenerator.generateComponent(
    parsedProjectUIDL.root,
    {
      skipNavlinkResolver: true,
      skipValidation: true,
      isRootComponent: true,
    }
  );

  const content = `${styleSheet.files[0].content}\n${result.files[0].content}`;
  console.log(content);
};

run();
