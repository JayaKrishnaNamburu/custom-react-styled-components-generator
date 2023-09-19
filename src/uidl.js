export const projectUIDL = {
  globals: {
    settings: {
      title: "Demo Project",
      language: "en",
    },
    assets: [
      {
        type: "style",
        content:
          'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}',
      },
      {
        type: "style",
        content:
          "    body {      font-family: Trebuchet MS;      font-size: 16px;      line-height: 1.55;      color: #333;      background-color: #fff    }  ",
      },
      {
        type: "icon",
        path: "https://demo-project-bejq.teleporthq.app/playground_assets/cube.png",
        options: {
          iconType: "icon/png",
          iconSizes: "32x32",
        },
      },
      {
        type: "font",
        path: "",
      },
    ],
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        charSet: "utf-8",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
    customCode: {
      head: "<style>body{margin:0}*,:before,:after{box-sizing: border-box}</style>",
    },
  },
  name: "Demo Project",
  root: {
    name: "App",
    styleSetDefinitions: {
      thqLink: {
        name: "thqLink",
        type: "reusable-project-style-map",
        content: {
          color: {
            type: "static",
            content: "#333",
          },
          textDecoration: {
            type: "static",
            content: "underline",
          },
          textDecorationColor: {
            type: "static",
            content: "#822cec",
          },
        },
      },
      thqButton: {
        name: "thqButton",
        type: "reusable-project-style-map",
        content: {
          border: {
            type: "static",
            content: "unset",
          },
          borderRadius: {
            type: "static",
            content: "4px",
          },
          backgroundColor: {
            type: "static",
            content: "#822cec",
          },
          padding: {
            type: "static",
            content: "8px 16px",
          },
          color: {
            type: "static",
            content: "#fff",
          },
        },
      },
      thqTextInput: {
        name: "thqTextInput",
        type: "reusable-project-style-map",
        content: {
          borderRadius: {
            type: "static",
            content: "2px",
          },
          border: {
            type: "static",
            content: "1px solid #333",
          },
          borderBottom: {
            type: "static",
            content: "",
          },
          backgroundColor: {
            type: "static",
            content: "#fff",
          },
        },
      },
      thqNumberInput: {
        name: "thqNumberInput",
        type: "reusable-project-style-map",
        content: {
          borderRadius: {
            type: "static",
            content: "2px",
          },
          border: {
            type: "static",
            content: "1px solid #333",
          },
          borderBottom: {
            type: "static",
            content: "",
          },
          backgroundColor: {
            type: "static",
            content: "#fff",
          },
        },
      },
      thqTextArea: {
        name: "thqTextArea",
        type: "reusable-project-style-map",
        content: {
          backgroundColor: {
            type: "static",
            content: "#fff",
          },
          border: {
            type: "static",
            content: "1px solid #333",
          },
          borderRadius: {
            type: "static",
            content: "2px",
          },
        },
      },
      thqImage: {
        id: "thqImage",
        name: "thqImage",
        type: "reusable-project-style-map",
        content: {
          border: {
            type: "static",
            content: "unset",
          },
          borderRadius: {
            type: "static",
            content: "",
          },
        },
      },
      thqIcon: {
        id: "thqIcon",
        name: "thqIcon",
        type: "reusable-project-style-map",
        content: {
          fill: {
            type: "static",
            content: "#fff",
          },
        },
      },
      thqHeading1: {
        id: "thqHeading1",
        name: "thqHeading1",
        type: "reusable-project-style-map",
        content: {
          fontWeight: {
            type: "static",
            content: "400",
          },
        },
      },
      thqHeading2: {
        name: "thqHeading2",
        type: "reusable-project-style-map",
        content: {
          fontWeight: {
            type: "static",
            content: "400",
          },
        },
      },
      thqHeading3: {
        name: "thqHeading3",
        type: "reusable-project-style-map",
        content: {
          fontWeight: {
            type: "static",
            content: "400",
          },
        },
      },
      thqHeading4: {
        name: "thqHeading4",
        type: "reusable-project-style-map",
        content: {
          fontWeight: {
            type: "static",
            content: "400",
          },
        },
      },
      thqHeading5: {
        name: "thqHeading5",
        type: "reusable-project-style-map",
        content: {
          fontWeight: {
            type: "static",
            content: "400",
          },
        },
      },
      thqHeading6: {
        name: "thqHeading6",
        type: "reusable-project-style-map",
        content: {
          fontWeight: {
            type: "static",
            content: "400",
          },
        },
      },
    },
    stateDefinitions: {
      route: {
        type: "string",
        defaultValue: "Home",
        values: [
          {
            value: "Home",
            seo: {
              title: "Demo Project",
              metaTags: [
                {
                  name: "description",
                  content:
                    "This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations.",
                },
                {
                  property: "og:title",
                  content: "Demo Project",
                },
                {
                  property: "og:description",
                  content:
                    "This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations.",
                },
                {
                  property: "og:image",
                  content:
                    "https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08",
                },
              ],
            },
          },
          {
            value: "LayoutComponents",
            seo: {
              title: "LayoutComponents - Demo Project",
              metaTags: [
                {
                  name: "description",
                  content:
                    "This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations.",
                },
                {
                  property: "og:title",
                  content: "LayoutComponents - Demo Project",
                },
                {
                  property: "og:description",
                  content:
                    "This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations.",
                },
                {
                  property: "og:image",
                  content:
                    "https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08",
                },
              ],
            },
          },
          {
            value: "ReusableComponents",
            seo: {
              title: "ReusableComponents - Demo Project",
              metaTags: [
                {
                  name: "description",
                  content:
                    "This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations.",
                },
                {
                  property: "og:title",
                  content: "ReusableComponents - Demo Project",
                },
                {
                  property: "og:description",
                  content:
                    "This is your initial demo project. Here you'll learn about elements and components and see how to use of them. Please have a look at our Tutorials section for more explanations.",
                },
                {
                  property: "og:image",
                  content:
                    "https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08",
                },
              ],
            },
          },
        ],
      },
    },
    node: {
      type: "element",
      content: {
        elementType: "Router",
        children: [
          {
            type: "conditional",
            content: {
              node: {
                type: "element",
                content: {
                  elementType: "container",
                  semanticType: "div",
                  name: "home",
                  children: [
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "landing",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "Navbar",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "main",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "text",
                                    semanticType: "span",
                                    name: "text",
                                    children: [
                                      {
                                        type: "static",
                                        content:
                                          "Welcome! This is your initial Demo Project.",
                                      },
                                    ],
                                    style: {
                                      color: {
                                        type: "static",
                                        content: "#ffffff",
                                      },
                                      display: {
                                        type: "static",
                                        content: "flex",
                                      },
                                      fontSize: {
                                        type: "static",
                                        content: "50px",
                                      },
                                      maxWidth: {
                                        type: "static",
                                        content: "500px",
                                      },
                                      fontWeight: {
                                        type: "static",
                                        content: "bold",
                                      },
                                    },
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {
                                      "ae5c155a-3529-4fe0-8454-c413fa2b5576": {
                                        id: "ae5c155a-3529-4fe0-8454-c413fa2b5576",
                                        type: "style-map",
                                        content: {
                                          styles: {
                                            fontSize: {
                                              type: "static",
                                              content: "40px",
                                            },
                                          },
                                          mapType: "inlined",
                                          conditions: [
                                            {
                                              maxWidth: 479,
                                              conditionType: "screen-size",
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "text",
                                    semanticType: "span",
                                    name: "text",
                                    children: [
                                      {
                                        type: "static",
                                        content:
                                          "Use this template to explore the features of the Playground. After you have finished the intro, you can have a look under this section for a recap of the features.",
                                      },
                                    ],
                                    style: {
                                      color: {
                                        type: "static",
                                        content: "#fff",
                                      },
                                      display: {
                                        type: "static",
                                        content: "inline-block",
                                      },
                                      padding: {
                                        type: "static",
                                        content: "20px",
                                      },
                                      fontSize: {
                                        type: "static",
                                        content: "18px",
                                      },
                                      maxWidth: {
                                        type: "static",
                                        content: "600px",
                                      },
                                      marginTop: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      borderColor: {
                                        type: "static",
                                        content: "#8AECDF",
                                      },
                                      borderStyle: {
                                        type: "static",
                                        content: "solid",
                                      },
                                      borderTopWidth: {
                                        type: "static",
                                        content: "0",
                                      },
                                      borderLeftWidth: {
                                        type: "static",
                                        content: "5px",
                                      },
                                      borderRightWidth: {
                                        type: "static",
                                        content: "0",
                                      },
                                      borderBottomWidth: {
                                        type: "static",
                                        content: "0",
                                      },
                                    },
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                width: {
                                  type: "static",
                                  content: "100%",
                                },
                                display: {
                                  type: "static",
                                  content: "flex",
                                },
                                maxWidth: {
                                  type: "static",
                                  content: "1400px",
                                },
                                boxSizing: {
                                  type: "static",
                                  content: "border-box",
                                },
                                alignItems: {
                                  type: "static",
                                  content: "flex-start",
                                },
                                paddingLeft: {
                                  type: "static",
                                  content: "100px",
                                },
                                paddingRight: {
                                  type: "static",
                                  content: "100px",
                                },
                                flexDirection: {
                                  type: "static",
                                  content: "column",
                                },
                                justifyContent: {
                                  type: "static",
                                  content: "space-around",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "2d573277-54c3-4a86-b1b1-1e1a9b75c06d": {
                                  id: "2d573277-54c3-4a86-b1b1-1e1a9b75c06d",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      paddingLeft: {
                                        type: "static",
                                        content: "20px",
                                      },
                                      paddingRight: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                                "5531f7be-0c5f-4407-9ee1-5662f8282111": {
                                  id: "5531f7be-0c5f-4407-9ee1-5662f8282111",
                                  type: "style-map",
                                  content: {
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 991,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                    styles: {},
                                  },
                                },
                                "dcb3876e-95ec-4cf7-acdc-fdd330636d88": {
                                  id: "dcb3876e-95ec-4cf7-acdc-fdd330636d88",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      paddingLeft: {
                                        type: "static",
                                        content: "50px",
                                      },
                                      paddingRight: {
                                        type: "static",
                                        content: "50px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "StickyCard",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                        ],
                        style: {
                          width: {
                            type: "static",
                            content: "100%",
                          },
                          height: {
                            type: "static",
                            content: "100vh",
                          },
                          display: {
                            type: "static",
                            content: "flex",
                          },
                          position: {
                            type: "static",
                            content: "static",
                          },
                          alignItems: {
                            type: "static",
                            content: "center",
                          },
                          flexDirection: {
                            type: "static",
                            content: "column",
                          },
                          backgroundSize: {
                            type: "static",
                            content: "cover",
                          },
                          justifyContent: {
                            type: "static",
                            content: "space-between",
                          },
                          backgroundImage: {
                            type: "static",
                            content:
                              "url('https://demo-project-bejq.teleporthq.app/playground_assets/bg-image-1200h.jpg')",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "537f1abd-b7f7-4fa4-b7e0-32d4ef305ad3": {
                            id: "537f1abd-b7f7-4fa4-b7e0-32d4ef305ad3",
                            type: "style-map",
                            content: {
                              styles: {
                                paddingTop: {
                                  type: "static",
                                  content: "0",
                                },
                                paddingRight: {
                                  type: "static",
                                  content: "0",
                                },
                                paddingBottom: {
                                  type: "static",
                                  content: "0",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 479,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "cards-section",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "h1",
                              name: "portofolio",
                              children: [
                                {
                                  type: "static",
                                  content: "What can you do in Playground",
                                },
                              ],
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "5c63d0e1-6c3e-49e0-983e-6e8850da4434": {
                                  id: "5c63d0e1-6c3e-49e0-983e-6e8850da4434",
                                  type: "style-map",
                                  content: {
                                    mapType: "project-referenced",
                                    referenceId: "thqHeading1",
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "cards-grid",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content: "Drag & drop elements",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content: "Create components",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content: "Upload your own assets",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content: "Invite collaborators",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content:
                                          "Change style in the Inspector",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content:
                                          "Export code in  various frameworks",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content: "Publish on our own hosting",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "SquareCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content:
                                          "Responsiveness on multiple devices",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                display: {
                                  type: "static",
                                  content: "grid",
                                },
                                gridGap: {
                                  type: "static",
                                  content: "40px",
                                },
                                boxSizing: {
                                  type: "static",
                                  content: "border-box",
                                },
                                gridTemplateColumns: {
                                  type: "static",
                                  content: "1fr 1fr 1fr 1fr",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "2339d71d-9ba9-48bf-8c59-ecb541ae7061": {
                                  id: "2339d71d-9ba9-48bf-8c59-ecb541ae7061",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      gridTemplateColumns: {
                                        type: "static",
                                        content: "1fr 1fr 1fr",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 991,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                                "6f72d519-04ab-45c5-85bc-aabc944b805c": {
                                  id: "6f72d519-04ab-45c5-85bc-aabc944b805c",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      gridGap: {
                                        type: "static",
                                        content: "30px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                                "ebaf349b-d905-44f4-80c6-c89357832174": {
                                  id: "ebaf349b-d905-44f4-80c6-c89357832174",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      gridTemplateColumns: {
                                        type: "static",
                                        content: "1fr 1fr ",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                        ],
                        style: {
                          width: {
                            type: "static",
                            content: "100%",
                          },
                          display: {
                            type: "static",
                            content: "flex",
                          },
                          padding: {
                            type: "static",
                            content: "50px",
                          },
                          maxWidth: {
                            type: "static",
                            content: "1400px",
                          },
                          minHeight: {
                            type: "static",
                            content: "700px",
                          },
                          alignItems: {
                            type: "static",
                            content: "center",
                          },
                          flexDirection: {
                            type: "static",
                            content: "column",
                          },
                          justifyContent: {
                            type: "static",
                            content: "center",
                          },
                          backgroundImage: {
                            type: "static",
                            content:
                              "url('https://demo-project-bejq.teleporthq.app/playground_assets/circle-1200h.png')",
                          },
                          backgroundRepeat: {
                            type: "static",
                            content: "no-repeat",
                          },
                          backgroundPosition: {
                            type: "static",
                            content: "right",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "095e7e5c-01a5-489e-945d-99ff03d297d1": {
                            id: "095e7e5c-01a5-489e-945d-99ff03d297d1",
                            type: "style-map",
                            content: {
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 767,
                                  conditionType: "screen-size",
                                },
                              ],
                              styles: {},
                            },
                          },
                          "ae8465bf-bcc3-4670-888b-20b54d0b3a76": {
                            id: "ae8465bf-bcc3-4670-888b-20b54d0b3a76",
                            type: "style-map",
                            content: {
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 479,
                                  conditionType: "screen-size",
                                },
                              ],
                              styles: {},
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "stats-section",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "Stats",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "Post",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {
                                title: {
                                  type: "static",
                                  content: "Deploy & Code export",
                                },
                                description: {
                                  type: "static",
                                  content:
                                    "Once you have a design that you like, you can quickly copy the real-time generated code or export it into a zip file. You can also continue your work in CodeSandbox or take your project to GitHub. If you want, you can also publish the project using teleportHQ hosting, or add your own settings.",
                                },
                              },
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                        ],
                        style: {
                          width: {
                            type: "static",
                            content: "100%",
                          },
                          height: {
                            type: "static",
                            content: "100vh",
                          },
                          display: {
                            type: "static",
                            content: "flex",
                          },
                          padding: {
                            type: "static",
                            content: "50px",
                          },
                          flexWrap: {
                            type: "static",
                            content: "wrap",
                          },
                          maxWidth: {
                            type: "static",
                            content: "1400px",
                          },
                          boxSizing: {
                            type: "static",
                            content: "border-box",
                          },
                          justifyContent: {
                            type: "static",
                            content: "space-between",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "56d7fc13-a258-4258-a0a9-89a4f61a8cb9": {
                            id: "56d7fc13-a258-4258-a0a9-89a4f61a8cb9",
                            type: "style-map",
                            content: {
                              styles: {
                                padding: {
                                  type: "static",
                                  content: "30px",
                                },
                                height: {
                                  type: "static",
                                  content: "auto",
                                },
                                flexDirection: {
                                  type: "static",
                                  content: "column-reverse",
                                },
                                justifyContent: {
                                  type: "static",
                                  content: "center",
                                },
                                alignItems: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 991,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                          "7f1cfc50-3e21-4e8d-9241-108f9714931d": {
                            id: "7f1cfc50-3e21-4e8d-9241-108f9714931d",
                            type: "style-map",
                            content: {
                              styles: {
                                justifyContent: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 767,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                          "ff180ab4-d079-40ce-9682-32f16db4436f": {
                            id: "ff180ab4-d079-40ce-9682-32f16db4436f",
                            type: "style-map",
                            content: {
                              styles: {},
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 479,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "product-section",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "Post",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {
                                title: {
                                  type: "static",
                                  content: "Responsive projects",
                                },
                                description: {
                                  type: "static",
                                  content:
                                    "Responsiveness is essential when building a website. To change the resolution you're working at, use the sliders on each side of the canvas, or select the desired resolution from the breakpoints bar.",
                                },
                              },
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "image",
                              name: "image",
                              children: [],
                              style: {
                                height: {
                                  type: "static",
                                  content: "500px",
                                },
                              },
                              attrs: {
                                src: {
                                  type: "static",
                                  content:
                                    "https://demo-project-bejq.teleporthq.app/playground_assets/phone-1100h.png",
                                },
                              },
                              abilities: {},
                              referencedStyles: {
                                "ce96b645-c390-4ce4-9d31-9a0313f8757e": {
                                  id: "ce96b645-c390-4ce4-9d31-9a0313f8757e",
                                  type: "style-map",
                                  content: {
                                    mapType: "project-referenced",
                                    referenceId: "thqImage",
                                  },
                                },
                                "8c7290e2-3b05-492e-a44a-6ac2ad892520": {
                                  id: "8c7290e2-3b05-492e-a44a-6ac2ad892520",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      height: {
                                        type: "static",
                                        content: "300px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                                "f3f40708-51c6-46d1-8786-6e50e435c561": {
                                  id: "f3f40708-51c6-46d1-8786-6e50e435c561",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      height: {
                                        type: "static",
                                        content: "400px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                        ],
                        style: {
                          width: {
                            type: "static",
                            content: "100%",
                          },
                          height: {
                            type: "static",
                            content: "100vh",
                          },
                          display: {
                            type: "static",
                            content: "flex",
                          },
                          flexWrap: {
                            type: "static",
                            content: "wrap",
                          },
                          maxWidth: {
                            type: "static",
                            content: "1400px",
                          },
                          boxSizing: {
                            type: "static",
                            content: "border-box",
                          },
                          alignItems: {
                            type: "static",
                            content: "center",
                          },
                          justifyContent: {
                            type: "static",
                            content: "center",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "36fef113-3402-40b0-9592-ceacc91420af": {
                            id: "36fef113-3402-40b0-9592-ceacc91420af",
                            type: "style-map",
                            content: {
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 479,
                                  conditionType: "screen-size",
                                },
                              ],
                              styles: {},
                            },
                          },
                          "f18848bf-b777-4199-84c2-26a5c87bb345": {
                            id: "f18848bf-b777-4199-84c2-26a5c87bb345",
                            type: "style-map",
                            content: {
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 767,
                                  conditionType: "screen-size",
                                },
                              ],
                              styles: {},
                            },
                          },
                          "ff48bb29-e0f8-44aa-beb7-19ae9aecffd6": {
                            id: "ff48bb29-e0f8-44aa-beb7-19ae9aecffd6",
                            type: "style-map",
                            content: {
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 991,
                                  conditionType: "screen-size",
                                },
                              ],
                              styles: {},
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "slider-section",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "latest-projects",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "Post",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      title: {
                                        type: "static",
                                        content: "Assets manager",
                                      },
                                      description: {
                                        type: "static",
                                        content:
                                          "You can upload your own assets and use them in the project. Moreover, if you're looking for a specific image or an icon you can look it up in the libraries that we provide.",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "container",
                                    semanticType: "div",
                                    name: "container",
                                    children: [
                                      {
                                        type: "element",
                                        content: {
                                          elementType: "component",
                                          semanticType: "ImageCard",
                                          children: [],
                                          dependency: {
                                            type: "local",
                                          },
                                          style: {},
                                          attrs: {
                                            src: {
                                              type: "static",
                                              content:
                                                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ",
                                            },
                                            title: {
                                              type: "static",
                                              content: "Stock images",
                                            },
                                            description: {
                                              type: "static",
                                              content:
                                                "As we mentioned previously, you can use stock images to customize your website. Open the Unsplash tab in the Assets Manager, and replace this image by clicking on another one that you like. In the future, if you want to add an image, just click on it. For setting it as a background image, use ALT + click.",
                                            },
                                          },
                                          abilities: {},
                                          referencedStyles: {},
                                        },
                                      },
                                    ],
                                    style: {
                                      marginRight: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                display: {
                                  type: "static",
                                  content: "flex",
                                },
                                boxSizing: {
                                  type: "static",
                                  content: "border-box",
                                },
                                marginTop: {
                                  type: "static",
                                  content: "30px",
                                },
                                alignItems: {
                                  type: "static",
                                  content: "flex-start",
                                },
                                flexDirection: {
                                  type: "static",
                                  content: "column",
                                },
                                justifyContent: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "5f8a6d0e-9763-42c0-a8c7-4d51510b9981": {
                                  id: "5f8a6d0e-9763-42c0-a8c7-4d51510b9981",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      alignItems: {
                                        type: "static",
                                        content: "center",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "container",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "ImageCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {
                                      src: {
                                        type: "static",
                                        content:
                                          "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ",
                                      },
                                      title: {
                                        type: "static",
                                        content: "Props & Dynamic content",
                                      },
                                      description: {
                                        type: "static",
                                        content:
                                          "You can create dynamic components, by using the props feature. At this moment, you can have dynamic text and the images. Click on this component to see how it works, and change the text or the image.",
                                      },
                                    },
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                marginRight: {
                                  type: "static",
                                  content: "20px",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "50abdfad-6fe4-4dcc-8595-8b52481e9a4f": {
                                  id: "50abdfad-6fe4-4dcc-8595-8b52481e9a4f",
                                  type: "style-map",
                                  content: {
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 991,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                    styles: {},
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "ImageCard",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {
                                src: {
                                  type: "static",
                                  content:
                                    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ",
                                },
                                title: {
                                  type: "static",
                                  content: "Collaboration & Comments",
                                },
                                description: {
                                  type: "static",
                                  content:
                                    'Oh, and did we mention how cool the collaboration feature is? Click on the + on the top right bar, write the email of the person you want to share the project with, and you can immediately start collaborating. On the bottom left of the screen you have the "Comments" button, where you can communicate ideas by leaving messages on specific pages or components.',
                                },
                              },
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                        ],
                        style: {
                          width: {
                            type: "static",
                            content: "100%",
                          },
                          display: {
                            type: "static",
                            content: "flex",
                          },
                          flexWrap: {
                            type: "static",
                            content: "wrap",
                          },
                          maxWidth: {
                            type: "static",
                            content: "1400px",
                          },
                          boxSizing: {
                            type: "static",
                            content: "border-box",
                          },
                          alignItems: {
                            type: "static",
                            content: "center",
                          },
                          paddingTop: {
                            type: "static",
                            content: "50px",
                          },
                          paddingLeft: {
                            type: "static",
                            content: "70px",
                          },
                          paddingRight: {
                            type: "static",
                            content: "70px",
                          },
                          paddingBottom: {
                            type: "static",
                            content: "50px",
                          },
                          justifyContent: {
                            type: "static",
                            content: "center",
                          },
                          backgroundColor: {
                            type: "static",
                            content: "transparent",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "55bfdd13-25b5-4251-a456-04995d95f79d": {
                            id: "55bfdd13-25b5-4251-a456-04995d95f79d",
                            type: "style-map",
                            content: {
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 767,
                                  conditionType: "screen-size",
                                },
                              ],
                              styles: {},
                            },
                          },
                          "b4d3a272-1f8d-4cc5-bfd0-2ae82d940c11": {
                            id: "b4d3a272-1f8d-4cc5-bfd0-2ae82d940c11",
                            type: "style-map",
                            content: {
                              styles: {
                                paddingLeft: {
                                  type: "static",
                                  content: "50px",
                                },
                                paddingRight: {
                                  type: "static",
                                  content: "50px",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 991,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                          "d02f61ba-2b1a-4eeb-a09e-56e8f79de027": {
                            id: "d02f61ba-2b1a-4eeb-a09e-56e8f79de027",
                            type: "style-map",
                            content: {
                              styles: {
                                paddingLeft: {
                                  type: "static",
                                  content: "20px",
                                },
                                paddingRight: {
                                  type: "static",
                                  content: "20px",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 479,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "component",
                        semanticType: "ActionCall",
                        children: [],
                        dependency: {
                          type: "local",
                        },
                        style: {},
                        attrs: {},
                        abilities: {},
                        referencedStyles: {},
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "component",
                        semanticType: "Footer",
                        children: [],
                        dependency: {
                          type: "local",
                        },
                        style: {},
                        attrs: {},
                        abilities: {},
                        referencedStyles: {},
                      },
                    },
                  ],
                  style: {
                    width: {
                      type: "static",
                      content: "100%",
                    },
                    display: {
                      type: "static",
                      content: "flex",
                    },
                    alignItems: {
                      type: "static",
                      content: "center",
                    },
                    fontFamily: {
                      type: "static",
                      content: "'Lato'",
                    },
                    lineHeight: {
                      type: "static",
                      content: "1.4",
                    },
                    flexDirection: {
                      type: "static",
                      content: "column",
                    },
                    backgroundColor: {
                      type: "static",
                      content: "#fcfcfc",
                    },
                    overflow: {
                      type: "static",
                      content: "auto",
                    },
                    minHeight: {
                      type: "static",
                      content: "100vh",
                    },
                  },
                  attrs: {},
                  abilities: {},
                  referencedStyles: {},
                },
              },
              value: "Home",
              reference: {
                type: "dynamic",
                content: {
                  referenceType: "state",
                  id: "route",
                },
              },
            },
          },
          {
            type: "conditional",
            content: {
              node: {
                type: "element",
                content: {
                  elementType: "container",
                  semanticType: "div",
                  name: "layoutcomponents",
                  children: [
                    {
                      type: "element",
                      content: {
                        elementType: "text",
                        semanticType: "h1",
                        name: "text",
                        children: [
                          {
                            type: "static",
                            content: "Layout components",
                          },
                        ],
                        style: {
                          marginTop: {
                            type: "static",
                            content: "50px",
                          },
                          textAlign: {
                            type: "static",
                            content: "center",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "5d2d112f-e410-4c0c-a6cb-9aa98cd1effb": {
                            id: "5d2d112f-e410-4c0c-a6cb-9aa98cd1effb",
                            type: "style-map",
                            content: {
                              mapType: "project-referenced",
                              referenceId: "thqHeading1",
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "grid",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "StickyCard",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "a8666b6f-b192-4f99-91d9-d6ad85ceae13": {
                                  id: "a8666b6f-b192-4f99-91d9-d6ad85ceae13",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "stickycard",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "StickyCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                borderStyle: {
                                  type: "static",
                                  content: "solid",
                                },
                                borderWidth: {
                                  type: "static",
                                  content: "1px",
                                },
                                backgroundColor: {
                                  type: "static",
                                  content: "transparent",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "ffd58881-2b5a-486d-b2ec-88a824a833b6": {
                                  id: "ffd58881-2b5a-486d-b2ec-88a824a833b6",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      backgroundColor: {
                                        type: "static",
                                        content: "transparent",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "Navbar",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "e60e7b31-4283-4c87-92a8-69ae9d11cc24": {
                                  id: "e60e7b31-4283-4c87-92a8-69ae9d11cc24",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "stats",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "Stats",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                borderStyle: {
                                  type: "static",
                                  content: "solid",
                                },
                                borderWidth: {
                                  type: "static",
                                  content: "1px",
                                },
                                backgroundColor: {
                                  type: "static",
                                  content: "transparent",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "Stats",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "9fa6059b-3681-4cda-9e83-85fb5e94f4da": {
                                  id: "9fa6059b-3681-4cda-9e83-85fb5e94f4da",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "navbar",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "Navbar",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                backgroundColor: {
                                  type: "static",
                                  content: "#673ab7",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "ActionCall",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "a8688504-2520-4845-b124-a35f76985686": {
                                  id: "a8688504-2520-4845-b124-a35f76985686",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "ActionCall",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "Footer",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "34b2ff8f-b007-4954-b849-892dd2f1e1e6": {
                                  id: "34b2ff8f-b007-4954-b849-892dd2f1e1e6",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 767,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "Footer",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                        ],
                        style: {
                          width: {
                            type: "static",
                            content: "100%",
                          },
                          height: {
                            type: "static",
                            content: "100%",
                          },
                          display: {
                            type: "static",
                            content: "grid",
                          },
                          gridGap: {
                            type: "static",
                            content: "50px",
                          },
                          padding: {
                            type: "static",
                            content: "50px",
                          },
                          alignContent: {
                            type: "static",
                            content: "end",
                          },
                          justifyItems: {
                            type: "static",
                            content: "start",
                          },
                          justifyContent: {
                            type: "static",
                            content: "start",
                          },
                          gridTemplateRows: {
                            type: "static",
                            content: "auto auto",
                          },
                          gridTemplateColumns: {
                            type: "static",
                            content: "1fr 10fr",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "8e4ac4ce-b87d-4792-ab19-39c982600387": {
                            id: "8e4ac4ce-b87d-4792-ab19-39c982600387",
                            type: "style-map",
                            content: {
                              styles: {
                                alignItems: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 479,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                          "aae85cc3-75aa-4516-9834-108e8239fc14": {
                            id: "aae85cc3-75aa-4516-9834-108e8239fc14",
                            type: "style-map",
                            content: {
                              styles: {
                                display: {
                                  type: "static",
                                  content: "flex",
                                },
                                alignItems: {
                                  type: "static",
                                  content: "center",
                                },
                                flexDirection: {
                                  type: "static",
                                  content: "column",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 767,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "navigation",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "h1",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "Navigate to",
                                },
                              ],
                              style: {
                                textAlign: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "6f1e6ab6-9562-4fca-b5c5-075f7e60b093": {
                                  id: "6f1e6ab6-9562-4fca-b5c5-075f7e60b093",
                                  type: "style-map",
                                  content: {
                                    mapType: "project-referenced",
                                    referenceId: "thqHeading1",
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "buttons",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "text",
                                    semanticType: "span",
                                    name: "text",
                                    children: [
                                      {
                                        type: "static",
                                        content: "HOMEPAGE",
                                      },
                                    ],
                                    style: {
                                      color: {
                                        type: "static",
                                        content: "#000000",
                                      },
                                      border: {
                                        type: "static",
                                        content: "none",
                                      },
                                      margin: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      display: {
                                        type: "static",
                                        content: "inline",
                                      },
                                      fontSize: {
                                        type: "static",
                                        content: "14px",
                                      },
                                      alignSelf: {
                                        type: "static",
                                        content: "center",
                                      },
                                      alignItems: {
                                        type: "static",
                                        content: "flex-start",
                                      },
                                      paddingTop: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      paddingLeft: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      paddingRight: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      letterSpacing: {
                                        type: "static",
                                        content: "1.4",
                                      },
                                      paddingBottom: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      textDecoration: {
                                        type: "static",
                                        content: "none",
                                      },
                                      backgroundColor: {
                                        type: "static",
                                        content: "#8AECDF",
                                      },
                                    },
                                    attrs: {},
                                    abilities: {
                                      link: {
                                        type: "navlink",
                                        content: {
                                          routeName: "Home",
                                        },
                                      },
                                    },
                                    referencedStyles: {
                                      "758f9fdd-8df7-453f-9718-96779271fa12": {
                                        id: "758f9fdd-8df7-453f-9718-96779271fa12",
                                        type: "style-map",
                                        content: {
                                          mapType: "project-referenced",
                                          referenceId: "thqLink",
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "text",
                                    semanticType: "span",
                                    name: "text",
                                    children: [
                                      {
                                        type: "static",
                                        content: "REUSABLE COMPONENTS",
                                      },
                                    ],
                                    style: {
                                      color: {
                                        type: "static",
                                        content: "#000000",
                                      },
                                      border: {
                                        type: "static",
                                        content: "none",
                                      },
                                      margin: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      display: {
                                        type: "static",
                                        content: "inline",
                                      },
                                      fontSize: {
                                        type: "static",
                                        content: "14px",
                                      },
                                      alignSelf: {
                                        type: "static",
                                        content: "center",
                                      },
                                      alignItems: {
                                        type: "static",
                                        content: "flex-start",
                                      },
                                      paddingTop: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      paddingLeft: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      paddingRight: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      letterSpacing: {
                                        type: "static",
                                        content: "1.4",
                                      },
                                      paddingBottom: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      textDecoration: {
                                        type: "static",
                                        content: "none",
                                      },
                                      backgroundColor: {
                                        type: "static",
                                        content: "#8AECDF",
                                      },
                                    },
                                    attrs: {},
                                    abilities: {
                                      link: {
                                        type: "navlink",
                                        content: {
                                          routeName: "ReusableComponents",
                                        },
                                      },
                                    },
                                    referencedStyles: {
                                      "3fdbe64c-0ab5-42b6-a84f-b0f3a38dba80": {
                                        id: "3fdbe64c-0ab5-42b6-a84f-b0f3a38dba80",
                                        type: "style-map",
                                        content: {
                                          mapType: "project-referenced",
                                          referenceId: "thqLink",
                                        },
                                      },
                                    },
                                  },
                                },
                              ],
                              style: {
                                display: {
                                  type: "static",
                                  content: "flex",
                                },
                                flexDirection: {
                                  type: "static",
                                  content: "column",
                                },
                                backgroundColor: {
                                  type: "static",
                                  content: "transparent",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                        ],
                        style: {
                          display: {
                            type: "static",
                            content: "flex",
                          },
                          marginBottom: {
                            type: "static",
                            content: "50px",
                          },
                          flexDirection: {
                            type: "static",
                            content: "column",
                          },
                          backgroundColor: {
                            type: "static",
                            content: "transparent",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {},
                      },
                    },
                  ],
                  style: {
                    width: {
                      type: "static",
                      content: "100%",
                    },
                    display: {
                      type: "static",
                      content: "flex",
                    },
                    gridGap: {
                      type: "static",
                      content: "10px",
                    },
                    fontSize: {
                      type: "static",
                      content: "16px",
                    },
                    overflow: {
                      type: "static",
                      content: "auto",
                    },
                    minHeight: {
                      type: "static",
                      content: "100vh",
                    },
                    alignItems: {
                      type: "static",
                      content: "center",
                    },
                    fontFamily: {
                      type: "static",
                      content: "'Lato'",
                    },
                    alignContent: {
                      type: "static",
                      content: "stretch",
                    },
                    justifyItems: {
                      type: "static",
                      content: "stretch",
                    },
                    flexDirection: {
                      type: "static",
                      content: "column",
                    },
                    justifyContent: {
                      type: "static",
                      content: "stretch",
                    },
                    backgroundColor: {
                      type: "static",
                      content: "#fff",
                    },
                    gridTemplateColumns: {
                      type: "static",
                      content: "1fr 1fr",
                    },
                  },
                  attrs: {},
                  abilities: {},
                  referencedStyles: {},
                },
              },
              value: "LayoutComponents",
              reference: {
                type: "dynamic",
                content: {
                  referenceType: "state",
                  id: "route",
                },
              },
            },
          },
          {
            type: "conditional",
            content: {
              node: {
                type: "element",
                content: {
                  elementType: "container",
                  semanticType: "div",
                  name: "reusablecomponents",
                  children: [
                    {
                      type: "element",
                      content: {
                        elementType: "text",
                        semanticType: "h1",
                        name: "text",
                        children: [
                          {
                            type: "static",
                            content: "Reusable components",
                          },
                        ],
                        style: {
                          marginTop: {
                            type: "static",
                            content: "50px",
                          },
                          textAlign: {
                            type: "static",
                            content: "center",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "57d0af4b-5be3-48b9-a64b-33f31974868f": {
                            id: "57d0af4b-5be3-48b9-a64b-33f31974868f",
                            type: "style-map",
                            content: {
                              mapType: "project-referenced",
                              referenceId: "thqHeading1",
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "grid",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "SquareCard",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "568fb38e-e10e-4d87-beb7-a26d84d9272d": {
                                  id: "568fb38e-e10e-4d87-beb7-a26d84d9272d",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "SquareCard",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "Button",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "2b624ac3-8dd1-4c3f-a965-090d56206931": {
                                  id: "2b624ac3-8dd1-4c3f-a965-090d56206931",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "Button",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "Post",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "fbfe572c-08d6-4890-a2fa-d7106384c7d3": {
                                  id: "fbfe572c-08d6-4890-a2fa-d7106384c7d3",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "post",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "Post",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                borderStyle: {
                                  type: "static",
                                  content: "solid",
                                },
                                borderWidth: {
                                  type: "static",
                                  content: "1px",
                                },
                                backgroundColor: {
                                  type: "static",
                                  content: "transparent",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "FooterSection",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "6920ac66-fd32-442c-855d-e92735ca66dc": {
                                  id: "6920ac66-fd32-442c-855d-e92735ca66dc",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                      justifySelf: {
                                        type: "static",
                                        content: "end",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "component",
                              semanticType: "FooterSection",
                              children: [],
                              dependency: {
                                type: "local",
                              },
                              style: {},
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "span",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "ImageCard",
                                },
                              ],
                              style: {
                                alignSelf: {
                                  type: "static",
                                  content: "center",
                                },
                                justifySelf: {
                                  type: "static",
                                  content: "end",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "53ddc644-9e6c-4417-8123-9f3a02281088": {
                                  id: "53ddc644-9e6c-4417-8123-9f3a02281088",
                                  type: "style-map",
                                  content: {
                                    styles: {
                                      margin: {
                                        type: "static",
                                        content: "20px",
                                      },
                                      justifySelf: {
                                        type: "static",
                                        content: "end",
                                      },
                                    },
                                    mapType: "inlined",
                                    conditions: [
                                      {
                                        maxWidth: 479,
                                        conditionType: "screen-size",
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "imagecard",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "component",
                                    semanticType: "ImageCard",
                                    children: [],
                                    dependency: {
                                      type: "local",
                                    },
                                    style: {},
                                    attrs: {},
                                    abilities: {},
                                    referencedStyles: {},
                                  },
                                },
                              ],
                              style: {
                                display: {
                                  type: "static",
                                  content: "inline",
                                },
                                borderStyle: {
                                  type: "static",
                                  content: "solid",
                                },
                                borderWidth: {
                                  type: "static",
                                  content: "1px",
                                },
                                backgroundColor: {
                                  type: "static",
                                  content: "transparent",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                        ],
                        style: {
                          display: {
                            type: "static",
                            content: "grid",
                          },
                          gridGap: {
                            type: "static",
                            content: "50px",
                          },
                          padding: {
                            type: "static",
                            content: "50px",
                          },
                          alignItems: {
                            type: "static",
                            content: "center",
                          },
                          alignContent: {
                            type: "static",
                            content: "end",
                          },
                          justifyItems: {
                            type: "static",
                            content: "start",
                          },
                          justifyContent: {
                            type: "static",
                            content: "start",
                          },
                          gridTemplateRows: {
                            type: "static",
                            content: "auto auto",
                          },
                          gridTemplateColumns: {
                            type: "static",
                            content: "1fr 10fr",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {
                          "416eedc6-fb1e-4384-9027-c4a5fae4c9a3": {
                            id: "416eedc6-fb1e-4384-9027-c4a5fae4c9a3",
                            type: "style-map",
                            content: {
                              styles: {
                                display: {
                                  type: "static",
                                  content: "flex",
                                },
                                alignItems: {
                                  type: "static",
                                  content: "center",
                                },
                                flexDirection: {
                                  type: "static",
                                  content: "column",
                                },
                                justifyContent: {
                                  type: "static",
                                  content: "center",
                                },
                                gridTemplateColumns: {
                                  type: "static",
                                  content: "1fr 1fr",
                                },
                              },
                              mapType: "inlined",
                              conditions: [
                                {
                                  maxWidth: 479,
                                  conditionType: "screen-size",
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                    {
                      type: "element",
                      content: {
                        elementType: "container",
                        semanticType: "div",
                        name: "navigation",
                        children: [
                          {
                            type: "element",
                            content: {
                              elementType: "text",
                              semanticType: "h1",
                              name: "text",
                              children: [
                                {
                                  type: "static",
                                  content: "Navigate to",
                                },
                              ],
                              style: {
                                textAlign: {
                                  type: "static",
                                  content: "center",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {
                                "46187ef4-5460-4102-9ffb-5a5d7404147a": {
                                  id: "46187ef4-5460-4102-9ffb-5a5d7404147a",
                                  type: "style-map",
                                  content: {
                                    mapType: "project-referenced",
                                    referenceId: "thqHeading1",
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: "element",
                            content: {
                              elementType: "container",
                              semanticType: "div",
                              name: "buttons",
                              children: [
                                {
                                  type: "element",
                                  content: {
                                    elementType: "text",
                                    semanticType: "span",
                                    name: "text",
                                    children: [
                                      {
                                        type: "static",
                                        content: "HOMEPAGE",
                                      },
                                    ],
                                    style: {
                                      color: {
                                        type: "static",
                                        content: "#000000",
                                      },
                                      border: {
                                        type: "static",
                                        content: "none",
                                      },
                                      margin: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      display: {
                                        type: "static",
                                        content: "inline",
                                      },
                                      fontSize: {
                                        type: "static",
                                        content: "14px",
                                      },
                                      alignSelf: {
                                        type: "static",
                                        content: "center",
                                      },
                                      alignItems: {
                                        type: "static",
                                        content: "flex-start",
                                      },
                                      paddingTop: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      paddingLeft: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      paddingRight: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      letterSpacing: {
                                        type: "static",
                                        content: "1.4",
                                      },
                                      paddingBottom: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      textDecoration: {
                                        type: "static",
                                        content: "none",
                                      },
                                      backgroundColor: {
                                        type: "static",
                                        content: "#8AECDF",
                                      },
                                    },
                                    attrs: {},
                                    abilities: {
                                      link: {
                                        type: "navlink",
                                        content: {
                                          routeName: "Home",
                                        },
                                      },
                                    },
                                    referencedStyles: {
                                      "2655047d-1b6b-4298-819e-716e935330e8": {
                                        id: "2655047d-1b6b-4298-819e-716e935330e8",
                                        type: "style-map",
                                        content: {
                                          mapType: "project-referenced",
                                          referenceId: "thqLink",
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  type: "element",
                                  content: {
                                    elementType: "text",
                                    semanticType: "span",
                                    name: "text",
                                    children: [
                                      {
                                        type: "static",
                                        content: "LAYOUT COMPONENTS",
                                      },
                                    ],
                                    style: {
                                      color: {
                                        type: "static",
                                        content: "#000000",
                                      },
                                      border: {
                                        type: "static",
                                        content: "none",
                                      },
                                      margin: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      display: {
                                        type: "static",
                                        content: "inline",
                                      },
                                      fontSize: {
                                        type: "static",
                                        content: "14px",
                                      },
                                      alignSelf: {
                                        type: "static",
                                        content: "center",
                                      },
                                      alignItems: {
                                        type: "static",
                                        content: "flex-start",
                                      },
                                      paddingTop: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      paddingLeft: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      paddingRight: {
                                        type: "static",
                                        content: "30px",
                                      },
                                      letterSpacing: {
                                        type: "static",
                                        content: "1.4",
                                      },
                                      paddingBottom: {
                                        type: "static",
                                        content: "15px",
                                      },
                                      textDecoration: {
                                        type: "static",
                                        content: "none",
                                      },
                                      backgroundColor: {
                                        type: "static",
                                        content: "#8AECDF",
                                      },
                                    },
                                    attrs: {},
                                    abilities: {
                                      link: {
                                        type: "navlink",
                                        content: {
                                          routeName: "LayoutComponents",
                                        },
                                      },
                                    },
                                    referencedStyles: {
                                      "08674dbe-fafb-4ebd-9b2a-c6934aaa34da": {
                                        id: "08674dbe-fafb-4ebd-9b2a-c6934aaa34da",
                                        type: "style-map",
                                        content: {
                                          mapType: "project-referenced",
                                          referenceId: "thqLink",
                                        },
                                      },
                                    },
                                  },
                                },
                              ],
                              style: {
                                display: {
                                  type: "static",
                                  content: "flex",
                                },
                                marginBottom: {
                                  type: "static",
                                  content: "50px",
                                },
                                flexDirection: {
                                  type: "static",
                                  content: "column",
                                },
                                backgroundColor: {
                                  type: "static",
                                  content: "transparent",
                                },
                              },
                              attrs: {},
                              abilities: {},
                              referencedStyles: {},
                            },
                          },
                        ],
                        style: {
                          display: {
                            type: "static",
                            content: "flex",
                          },
                          flexDirection: {
                            type: "static",
                            content: "column",
                          },
                          backgroundColor: {
                            type: "static",
                            content: "transparent",
                          },
                        },
                        attrs: {},
                        abilities: {},
                        referencedStyles: {},
                      },
                    },
                  ],
                  style: {
                    width: {
                      type: "static",
                      content: "100%",
                    },
                    display: {
                      type: "static",
                      content: "flex",
                    },
                    gridGap: {
                      type: "static",
                      content: "10px",
                    },
                    fontSize: {
                      type: "static",
                      content: "16px",
                    },
                    overflow: {
                      type: "static",
                      content: "auto",
                    },
                    minHeight: {
                      type: "static",
                      content: "100vh",
                    },
                    alignItems: {
                      type: "static",
                      content: "center",
                    },
                    fontFamily: {
                      type: "static",
                      content: "'Lato'",
                    },
                    alignContent: {
                      type: "static",
                      content: "stretch",
                    },
                    justifyItems: {
                      type: "static",
                      content: "stretch",
                    },
                    flexDirection: {
                      type: "static",
                      content: "column",
                    },
                    justifyContent: {
                      type: "static",
                      content: "flex-start",
                    },
                    backgroundColor: {
                      type: "static",
                      content: "#fff",
                    },
                    gridTemplateColumns: {
                      type: "static",
                      content: "1fr 1fr",
                    },
                  },
                  attrs: {},
                  abilities: {},
                  referencedStyles: {},
                },
              },
              value: "ReusableComponents",
              reference: {
                type: "dynamic",
                content: {
                  referenceType: "state",
                  id: "route",
                },
              },
            },
          },
        ],
      },
    },
  },
  components: {
    SquareCard: {
      name: "SquareCard",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "squarecard",
          children: [
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "title",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  width: {
                    type: "static",
                    content: "100px",
                  },
                  fontSize: {
                    type: "static",
                    content: "18px",
                  },
                  fontWeight: {
                    type: "static",
                    content: "bold",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
            {
              type: "element",
              content: {
                elementType: "icon",
                name: "icon",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "path",
                      name: "path",
                      children: [],
                      style: {},
                      attrs: {
                        d: {
                          type: "static",
                          content:
                            "M224.256 512l-96.256 67.371v-134.784zM896 579.371l-96.256-67.371 96.256-67.371zM725.333 564.096l137.045 95.957-307.712 199.979v-176.512zM373.077 512l138.923-97.237 138.923 97.237-138.923 97.237zM161.621 660.011l137.045-95.915 170.667 119.467v176.512zM535.765 49.877c-6.784-4.565-14.976-7.211-23.765-7.211s-16.981 2.645-23.765 7.211l-425.344 276.48c-4.779 2.987-9.088 6.955-12.501 11.861-5.333 7.595-7.851 16.341-7.723 24.96v297.643c-0.085 7.851 1.963 15.787 6.315 22.869 1.749 2.859 3.883 5.589 6.357 7.979 2.005 2.005 4.267 3.797 6.741 5.419l0.811 0.512 425.344 276.48c6.784 4.608 14.976 7.253 23.765 7.253s16.981-2.645 23.765-7.211l425.344-276.48c4.779-2.944 9.088-6.912 12.501-11.819 5.333-7.595 7.808-16.341 7.723-25.003v-297.643c0.085-7.851-1.963-15.787-6.315-22.869-1.749-2.859-3.883-5.589-6.357-7.979-2.005-2.005-4.267-3.797-6.741-5.419l-0.811-0.512zM554.667 340.437v-176.469l307.712 200.021-137.045 95.915zM469.333 163.968v176.512l-170.667 119.467-137.045-95.957z",
                        },
                      },
                      abilities: {},
                      referencedStyles: {},
                    },
                  },
                ],
                style: {},
                attrs: {
                  fill: {
                    type: "static",
                    content: "#",
                  },
                  width: {
                    type: "static",
                    content: "24",
                  },
                  height: {
                    type: "static",
                    content: "24",
                  },
                  viewBox: {
                    type: "static",
                    content: "0 0 1024 1024",
                  },
                },
                abilities: {},
                referencedStyles: {
                  "da33f6b1-4761-4323-82de-5084de2fad2b": {
                    id: "da33f6b1-4761-4323-82de-5084de2fad2b",
                    type: "style-map",
                    content: {
                      mapType: "project-referenced",
                      referenceId: "thqIcon",
                    },
                  },
                },
              },
            },
          ],
          style: {
            width: {
              type: "static",
              content: "200px",
            },
            height: {
              type: "static",
              content: "200px",
            },
            display: {
              type: "static",
              content: "flex",
            },
            padding: {
              type: "static",
              content: "15px",
            },
            boxShadow: {
              type: "static",
              content: "10px 10px 30px 0px #a8a8a8",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            alignItems: {
              type: "static",
              content: "stretch",
            },
            flexDirection: {
              type: "static",
              content: "column",
            },
            justifyContent: {
              type: "static",
              content: "space-between",
            },
            backgroundColor: {
              type: "static",
              content: "#fff",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {
            "9ba4b97f-8e18-4e37-8f05-580bb13d9a44": {
              id: "9ba4b97f-8e18-4e37-8f05-580bb13d9a44",
              type: "style-map",
              content: {
                styles: {
                  width: {
                    type: "static",
                    content: "150px",
                  },
                  height: {
                    type: "static",
                    content: "150px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 479,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
          },
        },
      },
      propDefinitions: {
        title: {
          nodeId: "fae1e369-b2c2-4268-9bf1-87cd34dc2266",
          componentId: "47cf0bf8-fa20-4f7a-9590-388456a501b9",
          name: "title",
          type: "string",
          defaultValue: "Title",
        },
      },
    },
    Post: {
      name: "Post",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "post",
          children: [
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "h1",
                name: "title",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "title",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  fontSize: {
                    type: "static",
                    content: "2em",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "c8442fd4-edf9-436b-9bf2-df88abf7f7c6": {
                    id: "c8442fd4-edf9-436b-9bf2-df88abf7f7c6",
                    type: "style-map",
                    content: {
                      mapType: "project-referenced",
                      referenceId: "thqHeading1",
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "description",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  fontSize: {
                    type: "static",
                    content: "16px",
                  },
                  alignSelf: {
                    type: "static",
                    content: "flex-start",
                  },
                  lineHeight: {
                    type: "static",
                    content: "1.4",
                  },
                  marginRight: {
                    type: "static",
                    content: "20px",
                  },
                  marginBottom: {
                    type: "static",
                    content: "30px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
            {
              type: "element",
              content: {
                elementType: "component",
                semanticType: "Button",
                children: [],
                dependency: {
                  type: "local",
                },
                style: {},
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
          ],
          style: {
            display: {
              type: "static",
              content: "flex",
            },
            maxWidth: {
              type: "static",
              content: "400px",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            alignItems: {
              type: "static",
              content: "flex-start",
            },
            marginBottom: {
              type: "static",
              content: "20px",
            },
            flexDirection: {
              type: "static",
              content: "column",
            },
            justifyContent: {
              type: "static",
              content: "center",
            },
            backgroundColor: {
              type: "static",
              content: "transparent",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {
            "1c534367-d1ba-4475-9607-7cd38cf606e0": {
              id: "1c534367-d1ba-4475-9607-7cd38cf606e0",
              type: "style-map",
              content: {
                styles: {
                  width: {
                    type: "static",
                    content: "350px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 991,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
          },
        },
      },
      propDefinitions: {
        title: {
          nodeId: "c9082ff1-bd6d-444e-9581-c3481f0fa621",
          componentId: "72df154a-b24f-4022-a32e-c2034c84ccc5",
          name: "title",
          type: "string",
          defaultValue: "Title\n",
        },
        description: {
          nodeId: "0fe81100-2e6f-433c-a33d-b5f18e6556dd",
          componentId: "72df154a-b24f-4022-a32e-c2034c84ccc5",
          name: "description",
          type: "string",
          defaultValue: "Description\n",
        },
      },
    },
    Button: {
      name: "Button",
      node: {
        type: "element",
        content: {
          elementType: "button",
          name: "button",
          children: [
            {
              type: "static",
              content: "DISCOVER MORE",
            },
          ],
          style: {
            color: {
              type: "static",
              content: "#ffffff",
            },
            border: {
              type: "static",
              content: "none",
            },
            fontSize: {
              type: "static",
              content: "14px",
            },
            paddingTop: {
              type: "static",
              content: "15px",
            },
            paddingLeft: {
              type: "static",
              content: "30px",
            },
            paddingRight: {
              type: "static",
              content: "30px",
            },
            letterSpacing: {
              type: "static",
              content: "1.4",
            },
            paddingBottom: {
              type: "static",
              content: "15px",
            },
            backgroundColor: {
              type: "static",
              content: "#673ab7",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {},
        },
      },
      propDefinitions: {},
    },
    FooterSection: {
      name: "FooterSection",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "footersection",
          children: [
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "title",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  color: {
                    type: "static",
                    content: "#ffffff",
                  },
                  fontWeight: {
                    type: "static",
                    content: "bolder",
                  },
                  marginBottom: {
                    type: "static",
                    content: "15px",
                  },
                  letterSpacing: {
                    type: "static",
                    content: "1.5",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "text",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  color: {
                    type: "static",
                    content: "#C4C4C4",
                  },
                  marginBottom: {
                    type: "static",
                    content: "10px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "text1",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  color: {
                    type: "static",
                    content: "#C4C4C4",
                  },
                  marginBottom: {
                    type: "static",
                    content: "10px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "text2",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  color: {
                    type: "static",
                    content: "#C4C4C4",
                  },
                  marginBottom: {
                    type: "static",
                    content: "10px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
          ],
          style: {
            display: {
              type: "static",
              content: "flex",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            marginTop: {
              type: "static",
              content: "10px",
            },
            marginRight: {
              type: "static",
              content: "20px",
            },
            flexDirection: {
              type: "static",
              content: "column",
            },
            backgroundColor: {
              type: "static",
              content: "#673ab7",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {},
        },
      },
      propDefinitions: {
        link: {
          name: "link",
          type: "string",
          defaultValue: "Link",
        },
        text: {
          name: "text",
          type: "string",
          defaultValue: "text",
        },
        text1: {
          name: "text1",
          type: "string",
          defaultValue: "text1",
        },
        text2: {
          name: "text2",
          type: "string",
          defaultValue: "text2",
        },
        title: {
          name: "title",
          type: "string",
          defaultValue: "TITLE",
        },
      },
    },
    Footer: {
      name: "Footer",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "footer",
          children: [
            {
              type: "element",
              content: {
                elementType: "container",
                semanticType: "div",
                name: "contact-section",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "phone",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Phone",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#c4c4c4",
                              },
                              fontSize: {
                                type: "static",
                                content: "14px",
                              },
                              fontWeight: {
                                type: "static",
                                content: "bolder",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {
                              "4a420c6c-dbcf-48c7-9b70-08dfc921d393": {
                                id: "4a420c6c-dbcf-48c7-9b70-08dfc921d393",
                                type: "style-map",
                                content: {
                                  styles: {
                                    marginTop: {
                                      type: "static",
                                      content: "10px",
                                    },
                                  },
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 767,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "+40 (0)364 101 203",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#ffffff",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {
                        margin: {
                          type: "static",
                          content: "0",
                        },
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        marginTop: {
                          type: "static",
                          content: "0",
                        },
                        marginLeft: {
                          type: "static",
                          content: "0",
                        },
                        marginRight: {
                          type: "static",
                          content: "30px",
                        },
                        marginBottom: {
                          type: "static",
                          content: "0",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "transparent",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {},
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "address",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Address",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#c4c4c4",
                              },
                              fontSize: {
                                type: "static",
                                content: "14px",
                              },
                              fontWeight: {
                                type: "static",
                                content: "bolder",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {
                              "589a1153-6e58-47c7-9068-69019c0c5c18": {
                                id: "589a1153-6e58-47c7-9068-69019c0c5c18",
                                type: "style-map",
                                content: {
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 479,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                  styles: {},
                                },
                              },
                              "cc7da9d0-ff5a-4dd5-a88e-dcdb3be24ff8": {
                                id: "cc7da9d0-ff5a-4dd5-a88e-dcdb3be24ff8",
                                type: "style-map",
                                content: {
                                  styles: {
                                    marginTop: {
                                      type: "static",
                                      content: "10px",
                                    },
                                  },
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 767,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Calea Motilor no 84, Cluj-Napoca",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#ffffff",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {
                        margin: {
                          type: "static",
                          content: "0",
                        },
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        marginTop: {
                          type: "static",
                          content: "0",
                        },
                        marginLeft: {
                          type: "static",
                          content: "0",
                        },
                        marginRight: {
                          type: "static",
                          content: "30px",
                        },
                        marginBottom: {
                          type: "static",
                          content: "0",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "transparent",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {},
                    },
                  },
                ],
                style: {
                  display: {
                    type: "static",
                    content: "flex",
                  },
                  flexWrap: {
                    type: "static",
                    content: "wrap",
                  },
                  boxSizing: {
                    type: "static",
                    content: "border-box",
                  },
                  alignItems: {
                    type: "static",
                    content: "center",
                  },
                  paddingTop: {
                    type: "static",
                    content: "50px",
                  },
                  paddingLeft: {
                    type: "static",
                    content: "100px",
                  },
                  paddingRight: {
                    type: "static",
                    content: "100px",
                  },
                  paddingBottom: {
                    type: "static",
                    content: "50px",
                  },
                  backgroundColor: {
                    type: "static",
                    content: "transparent",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "1c63a9b9-6fe8-489a-be7a-2c6eea828abe": {
                    id: "1c63a9b9-6fe8-489a-be7a-2c6eea828abe",
                    type: "style-map",
                    content: {
                      styles: {
                        paddingLeft: {
                          type: "static",
                          content: "50px",
                        },
                        paddingRight: {
                          type: "static",
                          content: "50px",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 767,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                  "f8f9a906-947f-4f51-98f7-70d492581d4c": {
                    id: "f8f9a906-947f-4f51-98f7-70d492581d4c",
                    type: "style-map",
                    content: {
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 479,
                          conditionType: "screen-size",
                        },
                      ],
                      styles: {},
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "container",
                semanticType: "div",
                name: "footer-menu",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "footersection",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "HELP AND ADVICE",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#ffffff",
                              },
                              fontWeight: {
                                type: "static",
                                content: "bolder",
                              },
                              marginBottom: {
                                type: "static",
                                content: "15px",
                              },
                              letterSpacing: {
                                type: "static",
                                content: "1.5",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "If you have any questions",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#C4C4C4",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Or you need more support",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#C4C4C4",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Drop us a line.",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#C4C4C4",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                              textDecoration: {
                                type: "static",
                                content: "underline",
                              },
                            },
                            attrs: {},
                            abilities: {
                              link: {
                                type: "url",
                                content: {
                                  url: "mailto:hello@teleporthq.io",
                                  newTab: true,
                                },
                              },
                            },
                            referencedStyles: {
                              "3833f9fb-f950-45d1-a8be-51d23f7b2986": {
                                id: "3833f9fb-f950-45d1-a8be-51d23f7b2986",
                                type: "style-map",
                                content: {
                                  mapType: "project-referenced",
                                  referenceId: "thqLink",
                                },
                              },
                            },
                          },
                        },
                      ],
                      style: {
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        marginTop: {
                          type: "static",
                          content: "10px",
                        },
                        marginRight: {
                          type: "static",
                          content: "20px",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "#673ab7",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {},
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "footersection",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "COMPANY",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#ffffff",
                              },
                              fontWeight: {
                                type: "static",
                                content: "bolder",
                              },
                              marginBottom: {
                                type: "static",
                                content: "15px",
                              },
                              letterSpacing: {
                                type: "static",
                                content: "1.5",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "If you want to know more",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#C4C4C4",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "About our team or technology",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#C4C4C4",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Go check our website.",
                              },
                            ],
                            style: {
                              color: {
                                type: "static",
                                content: "#C4C4C4",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                              textDecoration: {
                                type: "static",
                                content: "underline",
                              },
                            },
                            attrs: {},
                            abilities: {
                              link: {
                                type: "url",
                                content: {
                                  url: "https://teleporthq.io/",
                                  newTab: true,
                                },
                              },
                            },
                            referencedStyles: {
                              "77109a60-9b67-45b4-9962-e33003adebed": {
                                id: "77109a60-9b67-45b4-9962-e33003adebed",
                                type: "style-map",
                                content: {
                                  mapType: "project-referenced",
                                  referenceId: "thqLink",
                                },
                              },
                            },
                          },
                        },
                      ],
                      style: {
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        marginTop: {
                          type: "static",
                          content: "10px",
                        },
                        marginRight: {
                          type: "static",
                          content: "20px",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "#673ab7",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {},
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "get-in-touch",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "component",
                            semanticType: "FooterSection",
                            children: [],
                            dependency: {
                              type: "local",
                            },
                            style: {},
                            attrs: {
                              text: {
                                type: "static",
                                content:
                                  "Feel free to get in touch with us via email.",
                              },
                              text1: {
                                type: "static",
                                content: " ",
                              },
                              text2: {
                                type: "static",
                                content: " ",
                              },
                              text3: {
                                type: "static",
                                content: " ",
                              },
                              title: {
                                type: "static",
                                content: "GET IN TOUCH",
                              },
                            },
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "container",
                            semanticType: "div",
                            name: "email",
                            children: [
                              {
                                type: "element",
                                content: {
                                  elementType: "icon",
                                  name: "icon",
                                  children: [
                                    {
                                      type: "element",
                                      content: {
                                        elementType: "path",
                                        name: "path",
                                        children: [],
                                        style: {},
                                        attrs: {
                                          d: {
                                            type: "static",
                                            content:
                                              "M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z",
                                          },
                                        },
                                        abilities: {},
                                        referencedStyles: {},
                                      },
                                    },
                                  ],
                                  style: {},
                                  attrs: {
                                    fill: {
                                      type: "static",
                                      content: "#fff",
                                    },
                                    width: {
                                      type: "static",
                                      content: "24",
                                    },
                                    height: {
                                      type: "static",
                                      content: "24",
                                    },
                                    viewBox: {
                                      type: "static",
                                      content: "0 0 1024 1024",
                                    },
                                  },
                                  abilities: {},
                                  referencedStyles: {
                                    "9486df63-cfe2-400a-bceb-dca5ec105936": {
                                      id: "9486df63-cfe2-400a-bceb-dca5ec105936",
                                      type: "style-map",
                                      content: {
                                        mapType: "project-referenced",
                                        referenceId: "thqIcon",
                                      },
                                    },
                                  },
                                },
                              },
                              {
                                type: "element",
                                content: {
                                  elementType: "text",
                                  semanticType: "span",
                                  name: "text",
                                  children: [
                                    {
                                      type: "static",
                                      content: "hello@teleporthq.io",
                                    },
                                  ],
                                  style: {
                                    color: {
                                      type: "static",
                                      content: "#fff",
                                    },
                                    marginLeft: {
                                      type: "static",
                                      content: "10px",
                                    },
                                  },
                                  attrs: {},
                                  abilities: {},
                                  referencedStyles: {},
                                },
                              },
                            ],
                            style: {
                              display: {
                                type: "static",
                                content: "flex",
                              },
                              alignItems: {
                                type: "static",
                                content: "center",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {
                              "803c0921-8817-420b-99c0-02c7b7890ff3": {
                                id: "803c0921-8817-420b-99c0-02c7b7890ff3",
                                type: "style-map",
                                content: {
                                  styles: {
                                    alignSelf: {
                                      type: "static",
                                      content: "center",
                                    },
                                  },
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 479,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                      style: {
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        borderColor: {
                          type: "static",
                          content: "#fff",
                        },
                        borderStyle: {
                          type: "static",
                          content: "solid",
                        },
                        paddingLeft: {
                          type: "static",
                          content: "60px",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        borderTopWidth: {
                          type: "static",
                          content: "0",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "transparent",
                        },
                        borderLeftWidth: {
                          type: "static",
                          content: "1px",
                        },
                        borderRightWidth: {
                          type: "static",
                          content: "0",
                        },
                        borderBottomWidth: {
                          type: "static",
                          content: "0",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {
                        "ce1e7e61-8378-4732-8851-7be9e7e25139": {
                          id: "ce1e7e61-8378-4732-8851-7be9e7e25139",
                          type: "style-map",
                          content: {
                            styles: {
                              padding: {
                                type: "static",
                                content: "0",
                              },
                              borderWidth: {
                                type: "static",
                                content: "0",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 991,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
                style: {
                  display: {
                    type: "static",
                    content: "flex",
                  },
                  padding: {
                    type: "static",
                    content: "0",
                  },
                  flexWrap: {
                    type: "static",
                    content: "wrap",
                  },
                  boxSizing: {
                    type: "static",
                    content: "border-box",
                  },
                  alignItems: {
                    type: "static",
                    content: "flex-start",
                  },
                  paddingLeft: {
                    type: "static",
                    content: "100px",
                  },
                  paddingRight: {
                    type: "static",
                    content: "100px",
                  },
                  paddingBottom: {
                    type: "static",
                    content: "50px",
                  },
                  justifyContent: {
                    type: "static",
                    content: "space-between",
                  },
                  backgroundColor: {
                    type: "static",
                    content: "transparent",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "66021c93-bd10-4028-828d-a73ca96b3ed9": {
                    id: "66021c93-bd10-4028-828d-a73ca96b3ed9",
                    type: "style-map",
                    content: {
                      styles: {
                        paddingLeft: {
                          type: "static",
                          content: "50px",
                        },
                        paddingRight: {
                          type: "static",
                          content: "50px",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 991,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                  "6c9a4666-808b-48ac-a926-cf855f0ceefe": {
                    id: "6c9a4666-808b-48ac-a926-cf855f0ceefe",
                    type: "style-map",
                    content: {
                      styles: {
                        textAlign: {
                          type: "static",
                          content: "center",
                        },
                        paddingLeft: {
                          type: "static",
                          content: "20px",
                        },
                        paddingRight: {
                          type: "static",
                          content: "20px",
                        },
                        justifyContent: {
                          type: "static",
                          content: "center",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 479,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                  "8ccba37c-ce5d-4baa-8f35-9985e152b8ff": {
                    id: "8ccba37c-ce5d-4baa-8f35-9985e152b8ff",
                    type: "style-map",
                    content: {
                      styles: {
                        justifyContent: {
                          type: "static",
                          content: "space-between",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 767,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "container",
                semanticType: "div",
                name: "bottom",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "social-media",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "icon",
                            name: "icon",
                            children: [
                              {
                                type: "element",
                                content: {
                                  elementType: "path",
                                  name: "path",
                                  children: [],
                                  style: {},
                                  attrs: {
                                    d: {
                                      type: "static",
                                      content:
                                        "M725.333 128v85.333h-85.333c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331v128c0 23.552 19.115 42.667 42.667 42.667h116.011l-21.333 85.333h-94.677c-23.552 0-42.667 19.115-42.667 42.667v298.667h-85.333v-298.667c0-23.552-19.115-42.667-42.667-42.667h-85.333v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM768 42.667h-128c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667h85.333v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667h85.333c19.883 0 36.608-13.611 41.387-32.299l42.667-170.667c5.717-22.869-8.192-46.037-31.061-51.755-3.541-0.896-7.125-1.323-10.325-1.28h-128v-85.333h128c23.552 0 42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667z",
                                    },
                                  },
                                  abilities: {},
                                  referencedStyles: {},
                                },
                              },
                            ],
                            style: {
                              marginRight: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {
                              fill: {
                                type: "static",
                                content: "#fff",
                              },
                              height: {
                                type: "static",
                                content: "30",
                              },
                              viewBox: {
                                type: "static",
                                content: "0 0 1024 1024",
                              },
                            },
                            abilities: {},
                            referencedStyles: {
                              "07b325ac-fde1-443d-b7ee-91e6dcf925a1": {
                                id: "07b325ac-fde1-443d-b7ee-91e6dcf925a1",
                                type: "style-map",
                                content: {
                                  mapType: "project-referenced",
                                  referenceId: "thqIcon",
                                },
                              },
                            },
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "icon",
                            name: "svg",
                            children: [
                              {
                                type: "element",
                                content: {
                                  elementType: "path",
                                  name: "path",
                                  children: [],
                                  style: {},
                                  attrs: {
                                    d: {
                                      type: "static",
                                      content:
                                        "M888.875 224.512c-7.936 10.325-16.683 20.267-26.283 29.696-9.941 9.899-14.805 24.192-11.861 38.741 1.579 7.765 2.56 17.237 2.603 27.051 0 224.256-103.637 382.763-247.893 464.981-112.939 64.384-253.355 83.413-393.472 47.787 53.12-15.403 104.96-39.296 153.301-72.107 6.272-4.224 11.648-10.368 15.019-17.963 9.557-21.547-0.128-46.763-21.675-56.32-118.357-52.608-176.213-125.056-203.477-195.968-17.792-46.251-23.296-93.781-22.187-137.685 0.896-34.603 5.888-66.56 11.861-93.099 16.853 14.592 34.304 30.080 52.736 44.245 87.509 67.285 197.291 105.813 315.563 102.741 23.083-0.64 41.557-19.499 41.557-42.667v-43.136c-0.085-7.637 0.384-15.232 1.451-22.784 4.821-34.389 21.504-66.944 49.579-91.349 30.933-26.923 69.803-38.741 107.776-36.096s74.795 19.755 101.717 50.688c10.752 12.203 27.691 17.749 44.075 12.971 9.856-2.859 19.755-6.101 29.653-9.728zM956.757 93.141c-31.573 22.272-64.981 39.509-97.579 51.413-39.723-35.669-89.216-55.552-139.776-59.093-59.648-4.139-121.003 14.464-169.685 56.832-44.203 38.443-70.485 89.899-78.080 143.872-1.579 11.307-2.347 22.741-2.304 34.133-82.005-6.059-157.611-36.267-219.776-84.096-33.067-25.429-62.336-55.851-86.784-90.24-13.653-19.2-40.277-23.765-59.477-10.112-6.571 4.651-11.392 10.795-14.293 17.451 0 0-5.632 12.757-12.16 32.427-4.779 14.379-10.283 33.067-15.232 55.040-6.955 30.805-12.885 68.352-13.909 109.696-1.323 52.352 5.12 111.445 27.819 170.496 29.141 75.733 83.883 148.395 176.939 205.781-66.944 30.976-138.453 44.331-207.915 41.259-23.552-1.024-43.477 17.195-44.501 40.747-0.725 16.597 8.107 31.403 21.888 39.168 209.28 116.267 444.843 114.261 625.749 11.136 172.416-98.176 290.987-285.867 290.987-539.051-0.043-7.125-0.341-14.080-0.981-20.864 42.923-47.573 71.509-103.637 85.163-161.323 5.419-22.912-8.789-45.909-31.701-51.328-12.373-2.944-24.747-0.128-34.432 6.656z",
                                    },
                                  },
                                  abilities: {},
                                  referencedStyles: {},
                                },
                              },
                            ],
                            style: {
                              marginRight: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {
                              fill: {
                                type: "static",
                                content: "#fff",
                              },
                              height: {
                                type: "static",
                                content: "30",
                              },
                              viewBox: {
                                type: "static",
                                content: "0 0 1024 1024",
                              },
                            },
                            abilities: {},
                            referencedStyles: {
                              "9b9a25ab-3d0d-40e5-acaf-e2a571177d99": {
                                id: "9b9a25ab-3d0d-40e5-acaf-e2a571177d99",
                                type: "style-map",
                                content: {
                                  mapType: "project-referenced",
                                  referenceId: "thqIcon",
                                },
                              },
                            },
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "icon",
                            name: "icon",
                            children: [
                              {
                                type: "element",
                                content: {
                                  elementType: "path",
                                  name: "path",
                                  children: [],
                                  style: {},
                                  attrs: {
                                    d: {
                                      type: "static",
                                      content:
                                        "M682.667 298.667c-82.475 0-157.184 33.493-211.2 87.467s-87.467 128.725-87.467 211.2v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467zM682.667 384c58.923 0 112.213 23.851 150.869 62.464s62.464 91.947 62.464 150.869v256h-85.333v-256c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496v256h-85.333v-256c0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464zM85.333 341.333c-23.552 0-42.667 19.115-42.667 42.667v512c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-512c0-23.552-19.115-42.667-42.667-42.667zM128 426.667h85.333v426.667h-85.333zM298.667 170.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM213.333 170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165z",
                                    },
                                  },
                                  abilities: {},
                                  referencedStyles: {},
                                },
                              },
                            ],
                            style: {},
                            attrs: {
                              fill: {
                                type: "static",
                                content: "#fff",
                              },
                              height: {
                                type: "static",
                                content: "30",
                              },
                              viewBox: {
                                type: "static",
                                content: "0 0 1024 1024",
                              },
                            },
                            abilities: {},
                            referencedStyles: {
                              "b0cf220a-c17a-45c7-8039-f9102c362cb7": {
                                id: "b0cf220a-c17a-45c7-8039-f9102c362cb7",
                                type: "style-map",
                                content: {
                                  mapType: "project-referenced",
                                  referenceId: "thqIcon",
                                },
                              },
                            },
                          },
                        },
                      ],
                      style: {
                        width: {
                          type: "static",
                          content: "120px",
                        },
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        flexDirection: {
                          type: "static",
                          content: "row",
                        },
                        justifyContent: {
                          type: "static",
                          content: "space-between",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {},
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "text",
                      semanticType: "span",
                      name: "all-rights",
                      children: [
                        {
                          type: "static",
                          content: "© 2020 All right reserved to a nice team.",
                        },
                      ],
                      style: {
                        color: {
                          type: "static",
                          content: "#c4c4c4",
                        },
                        margin: {
                          type: "static",
                          content: "10px",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {
                        "35ad9130-3380-4bcc-b95a-9b6c0c37c651": {
                          id: "35ad9130-3380-4bcc-b95a-9b6c0c37c651",
                          type: "style-map",
                          content: {
                            styles: {
                              textAlign: {
                                type: "static",
                                content: "center",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 479,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
                style: {
                  margin: {
                    type: "static",
                    content: "0",
                  },
                  display: {
                    type: "static",
                    content: "flex",
                  },
                  padding: {
                    type: "static",
                    content: "0",
                  },
                  flexWrap: {
                    type: "static",
                    content: "wrap",
                  },
                  boxSizing: {
                    type: "static",
                    content: "border-box",
                  },
                  marginTop: {
                    type: "static",
                    content: "0",
                  },
                  alignItems: {
                    type: "static",
                    content: "flex-start",
                  },
                  marginLeft: {
                    type: "static",
                    content: "100px",
                  },
                  paddingTop: {
                    type: "static",
                    content: "15px",
                  },
                  borderColor: {
                    type: "static",
                    content: "#ffffff",
                  },
                  borderStyle: {
                    type: "static",
                    content: "solid",
                  },
                  marginRight: {
                    type: "static",
                    content: "100px",
                  },
                  paddingLeft: {
                    type: "static",
                    content: "0",
                  },
                  paddingRight: {
                    type: "static",
                    content: "0",
                  },
                  paddingBottom: {
                    type: "static",
                    content: "30px",
                  },
                  borderTopWidth: {
                    type: "static",
                    content: "1px",
                  },
                  justifyContent: {
                    type: "static",
                    content: "space-between",
                  },
                  backgroundColor: {
                    type: "static",
                    content: "transparent",
                  },
                  borderLeftWidth: {
                    type: "static",
                    content: "0",
                  },
                  borderRightWidth: {
                    type: "static",
                    content: "0",
                  },
                  borderBottomWidth: {
                    type: "static",
                    content: "0",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "4fb00193-e750-4770-a30f-31787a39a3a4": {
                    id: "4fb00193-e750-4770-a30f-31787a39a3a4",
                    type: "style-map",
                    content: {
                      styles: {
                        marginLeft: {
                          type: "static",
                          content: "50px",
                        },
                        marginRight: {
                          type: "static",
                          content: "50px",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 767,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                  "daf11ccd-079b-4b3a-8d28-8babc65eca70": {
                    id: "daf11ccd-079b-4b3a-8d28-8babc65eca70",
                    type: "style-map",
                    content: {
                      styles: {
                        justifyContent: {
                          type: "static",
                          content: "center",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 479,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
          style: {
            width: {
              type: "static",
              content: "100%",
            },
            display: {
              type: "static",
              content: "flex",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            flexDirection: {
              type: "static",
              content: "column",
            },
            backgroundColor: {
              type: "static",
              content: "#673ab7",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {},
        },
      },
      propDefinitions: {},
    },
    Navbar: {
      name: "Navbar",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "navbar",
          children: [
            {
              type: "element",
              content: {
                elementType: "container",
                semanticType: "div",
                name: "left",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "icon",
                      name: "logo",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "path",
                            name: "path",
                            children: [],
                            style: {},
                            attrs: {
                              d: {
                                type: "static",
                                content:
                                  "M616.149 181.12l-104.149 60.16-104.149-60.16 82.603-47.189c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM170.667 585.941l106.667 61.611v120.747l-85.12-48.64c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581zM746.667 768.299v-120.747l106.667-61.611v96.725c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333zM809.003 291.328l-297.003 171.819-297.003-171.819 107.093-61.227 168.576 97.408c13.611 7.851 29.739 7.381 42.709 0l168.533-97.365zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l136.448-77.995c9.301-1.835 17.536-6.699 23.637-13.483l138.624-79.232c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-139.008-79.403c-6.272-7.125-14.635-11.776-23.595-13.525l-136.405-77.952c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-136.533 77.995c-8.96 1.749-17.323 6.4-23.595 13.483l-138.624 79.232c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l139.008 79.445c6.059 6.827 14.293 11.691 23.637 13.483l136.405 77.952c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-106.667-60.928v-194.133c0-15.701-8.491-29.44-21.333-36.949l-170.667-98.603v-123.093zM554.667 877.995v-340.949l298.667-172.757v123.093l-170.667 98.603c-13.611 7.851-21.248 22.059-21.333 36.949v194.133z",
                              },
                            },
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {},
                      attrs: {
                        fill: {
                          type: "static",
                          content: "#ffffff",
                        },
                        height: {
                          type: "static",
                          content: "36",
                        },
                        viewBox: {
                          type: "static",
                          content: "0 0 1024 1024",
                        },
                      },
                      abilities: {},
                      referencedStyles: {
                        "dbf1a68c-5954-4acc-b692-2b71a0941773": {
                          id: "dbf1a68c-5954-4acc-b692-2b71a0941773",
                          type: "style-map",
                          content: {
                            mapType: "project-referenced",
                            referenceId: "thqIcon",
                          },
                        },
                      },
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "menu-items",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Playground",
                              },
                            ],
                            style: {
                              marginRight: {
                                type: "static",
                                content: "20px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {
                              "6b28ac8e-a40c-468e-8468-f3ed21eeb8fa": {
                                id: "6b28ac8e-a40c-468e-8468-f3ed21eeb8fa",
                                type: "style-map",
                                content: {
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 991,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                  styles: {},
                                },
                              },
                              "8565ef83-458a-44e7-8d43-853711b28318": {
                                id: "8565ef83-458a-44e7-8d43-853711b28318",
                                type: "style-map",
                                content: {
                                  styles: {
                                    marginTop: {
                                      type: "static",
                                      content: "10px",
                                    },
                                  },
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 479,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Features",
                              },
                            ],
                            style: {
                              marginRight: {
                                type: "static",
                                content: "20px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {
                              "f859b7e8-b433-45e4-8ade-dc5dcd54a996": {
                                id: "f859b7e8-b433-45e4-8ade-dc5dcd54a996",
                                type: "style-map",
                                content: {
                                  styles: {
                                    marginTop: {
                                      type: "static",
                                      content: "10px",
                                    },
                                  },
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 479,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Projects",
                              },
                            ],
                            style: {
                              marginRight: {
                                type: "static",
                                content: "20px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {
                              "0e90e6ed-6fcd-4ccf-a978-accdfbc12c03": {
                                id: "0e90e6ed-6fcd-4ccf-a978-accdfbc12c03",
                                type: "style-map",
                                content: {
                                  styles: {
                                    marginTop: {
                                      type: "static",
                                      content: "10px",
                                    },
                                  },
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 479,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Contact",
                              },
                            ],
                            style: {},
                            attrs: {},
                            abilities: {},
                            referencedStyles: {
                              "5ea1ca15-2a85-4ec0-8939-899b6c3bf3d5": {
                                id: "5ea1ca15-2a85-4ec0-8939-899b6c3bf3d5",
                                type: "style-map",
                                content: {
                                  styles: {
                                    marginTop: {
                                      type: "static",
                                      content: "10px",
                                    },
                                  },
                                  mapType: "inlined",
                                  conditions: [
                                    {
                                      maxWidth: 479,
                                      conditionType: "screen-size",
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                      style: {
                        width: {
                          type: "static",
                          content: "100%",
                        },
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        paddingLeft: {
                          type: "static",
                          content: "15px",
                        },
                        justifyContent: {
                          type: "static",
                          content: "space-between",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {
                        "7fa873d2-529e-449f-9ded-3ec4cd111d41": {
                          id: "7fa873d2-529e-449f-9ded-3ec4cd111d41",
                          type: "style-map",
                          content: {
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 767,
                                conditionType: "screen-size",
                              },
                            ],
                            styles: {},
                          },
                        },
                        "80634eb6-a235-4667-a64b-7cf6d88ae5d1": {
                          id: "80634eb6-a235-4667-a64b-7cf6d88ae5d1",
                          type: "style-map",
                          content: {
                            styles: {
                              top: {
                                type: "static",
                                content: "80px",
                              },
                              left: {
                                type: "static",
                                content: "5px",
                              },
                              width: {
                                type: "static",
                                content: "100px",
                              },
                              position: {
                                type: "static",
                                content: "absolute",
                              },
                              flexDirection: {
                                type: "static",
                                content: "column",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 479,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
                style: {
                  display: {
                    type: "static",
                    content: "flex",
                  },
                  alignSelf: {
                    type: "static",
                    content: "center",
                  },
                  boxSizing: {
                    type: "static",
                    content: "border-box",
                  },
                  alignItems: {
                    type: "static",
                    content: "center",
                  },
                  justifyContent: {
                    type: "static",
                    content: "space-between",
                  },
                  backgroundColor: {
                    type: "static",
                    content: "transparent",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "7101d7be-981a-4c13-967f-78929cf1d117": {
                    id: "7101d7be-981a-4c13-967f-78929cf1d117",
                    type: "style-map",
                    content: {
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 767,
                          conditionType: "screen-size",
                        },
                      ],
                      styles: {},
                    },
                  },
                  "bcc5f7dc-69cf-4ef5-8d7f-4ec8ac2600c2": {
                    id: "bcc5f7dc-69cf-4ef5-8d7f-4ec8ac2600c2",
                    type: "style-map",
                    content: {
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 991,
                          conditionType: "screen-size",
                        },
                      ],
                      styles: {},
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "container",
                semanticType: "div",
                name: "right",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "icon",
                      name: "icon",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "path",
                            name: "path",
                            children: [],
                            style: {},
                            attrs: {
                              d: {
                                type: "static",
                                content:
                                  "M128 85.333c-23.552 0-42.667 19.115-42.667 42.667v298.667c0 23.552 19.115 42.667 42.667 42.667h298.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-23.552-19.115-42.667-42.667-42.667zM170.667 170.667h213.333v213.333h-213.333zM597.333 85.333c-23.552 0-42.667 19.115-42.667 42.667v298.667c0 23.552 19.115 42.667 42.667 42.667h298.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-23.552-19.115-42.667-42.667-42.667zM640 170.667h213.333v213.333h-213.333zM597.333 554.667c-23.552 0-42.667 19.115-42.667 42.667v298.667c0 23.552 19.115 42.667 42.667 42.667h298.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-23.552-19.115-42.667-42.667-42.667zM640 640h213.333v213.333h-213.333zM128 554.667c-23.552 0-42.667 19.115-42.667 42.667v298.667c0 23.552 19.115 42.667 42.667 42.667h298.667c23.552 0 42.667-19.115 42.667-42.667v-298.667c0-23.552-19.115-42.667-42.667-42.667zM170.667 640h213.333v213.333h-213.333z",
                              },
                            },
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {},
                      attrs: {
                        fill: {
                          type: "static",
                          content: "#ffffff",
                        },
                        width: {
                          type: "static",
                          content: "24",
                        },
                        height: {
                          type: "static",
                          content: "24",
                        },
                        viewBox: {
                          type: "static",
                          content: "0 0 1024 1024",
                        },
                      },
                      abilities: {},
                      referencedStyles: {
                        "e7b54c6c-09d5-44e9-8c03-0edb55a2ab34": {
                          id: "e7b54c6c-09d5-44e9-8c03-0edb55a2ab34",
                          type: "style-map",
                          content: {
                            mapType: "project-referenced",
                            referenceId: "thqIcon",
                          },
                        },
                      },
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "icon",
                      name: "icon",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "path",
                            name: "path",
                            children: [],
                            style: {},
                            attrs: {
                              d: {
                                type: "static",
                                content:
                                  "M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z",
                              },
                            },
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {},
                      attrs: {
                        fill: {
                          type: "static",
                          content: "#ffffff",
                        },
                        height: {
                          type: "static",
                          content: "30",
                        },
                        viewBox: {
                          type: "static",
                          content: "0 0 1024 1024",
                        },
                      },
                      abilities: {},
                      referencedStyles: {
                        "82d526dc-c0e4-411f-a455-b076fe256039": {
                          id: "82d526dc-c0e4-411f-a455-b076fe256039",
                          type: "style-map",
                          content: {
                            mapType: "project-referenced",
                            referenceId: "thqIcon",
                          },
                        },
                      },
                    },
                  },
                ],
                style: {
                  width: {
                    type: "static",
                    content: "70px",
                  },
                  display: {
                    type: "static",
                    content: "flex",
                  },
                  alignItems: {
                    type: "static",
                    content: "center",
                  },
                  marginLeft: {
                    type: "static",
                    content: "10px",
                  },
                  justifyContent: {
                    type: "static",
                    content: "space-between",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "2541cda6-93f1-4a09-bc1d-b4f6b2758840": {
                    id: "2541cda6-93f1-4a09-bc1d-b4f6b2758840",
                    type: "style-map",
                    content: {
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 991,
                          conditionType: "screen-size",
                        },
                      ],
                      styles: {},
                    },
                  },
                },
              },
            },
          ],
          style: {
            color: {
              type: "static",
              content: "#ffffff",
            },
            width: {
              type: "static",
              content: "100%",
            },
            display: {
              type: "static",
              content: "flex",
            },
            padding: {
              type: "static",
              content: "30px",
            },
            flexWrap: {
              type: "static",
              content: "wrap",
            },
            alignSelf: {
              type: "static",
              content: "center",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            alignItems: {
              type: "static",
              content: "center",
            },
            justifyContent: {
              type: "static",
              content: "space-between",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {
            "518fae93-bde0-4512-b629-329016659202": {
              id: "518fae93-bde0-4512-b629-329016659202",
              type: "style-map",
              content: {
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 991,
                    conditionType: "screen-size",
                  },
                ],
                styles: {},
              },
            },
            "64df9d53-3d3f-4cbe-81dd-9103eef565b0": {
              id: "64df9d53-3d3f-4cbe-81dd-9103eef565b0",
              type: "style-map",
              content: {
                styles: {
                  color: {
                    type: "static",
                    content: "#ffffff",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 479,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
          },
        },
      },
      propDefinitions: {},
    },
    ImageCard: {
      name: "ImageCard",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "imagecard",
          children: [
            {
              type: "element",
              content: {
                elementType: "image",
                name: "image",
                children: [],
                style: {
                  width: {
                    type: "static",
                    content: "100%",
                  },
                },
                attrs: {
                  src: {
                    type: "dynamic",
                    content: {
                      id: "src",
                      referenceType: "prop",
                    },
                  },
                },
                abilities: {},
                referencedStyles: {
                  "69e5d2e0-11be-4901-9931-5e5d71d5d2e7": {
                    id: "69e5d2e0-11be-4901-9931-5e5d71d5d2e7",
                    type: "style-map",
                    content: {
                      mapType: "project-referenced",
                      referenceId: "thqImage",
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "title",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "title",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  fontSize: {
                    type: "static",
                    content: "18px",
                  },
                  marginTop: {
                    type: "static",
                    content: "15px",
                  },
                  fontWeight: {
                    type: "static",
                    content: "bold",
                  },
                  marginBottom: {
                    type: "static",
                    content: "15px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "23c723c8-bd0a-43d4-bb93-252c56eb8736": {
                    id: "23c723c8-bd0a-43d4-bb93-252c56eb8736",
                    type: "style-map",
                    content: {
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 479,
                          conditionType: "screen-size",
                        },
                      ],
                      styles: {},
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "description",
                children: [
                  {
                    type: "dynamic",
                    content: {
                      id: "description",
                      referenceType: "prop",
                    },
                  },
                ],
                style: {
                  fontSize: {
                    type: "static",
                    content: "16px",
                  },
                  lineHeight: {
                    type: "static",
                    content: "1.4",
                  },
                  marginBottom: {
                    type: "static",
                    content: "30px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "965aa287-8cc7-40d9-888e-4057ab12936d": {
                    id: "965aa287-8cc7-40d9-888e-4057ab12936d",
                    type: "style-map",
                    content: {
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 479,
                          conditionType: "screen-size",
                        },
                      ],
                      styles: {},
                    },
                  },
                },
              },
            },
          ],
          style: {
            width: {
              type: "static",
              content: "400px",
            },
            display: {
              type: "static",
              content: "flex",
            },
            alignSelf: {
              type: "static",
              content: "flex-start",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            alignItems: {
              type: "static",
              content: "flex-start",
            },
            flexDirection: {
              type: "static",
              content: "column",
            },
            justifyContent: {
              type: "static",
              content: "center",
            },
            backgroundColor: {
              type: "static",
              content: "transparent",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {
            "760d91f1-1716-49ae-9aa4-6a45ca85754a": {
              id: "760d91f1-1716-49ae-9aa4-6a45ca85754a",
              type: "style-map",
              content: {
                styles: {
                  width: {
                    type: "static",
                    content: "200px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 479,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
            "d4339ca1-3d45-4031-b573-552c3607894a": {
              id: "d4339ca1-3d45-4031-b573-552c3607894a",
              type: "style-map",
              content: {
                styles: {
                  width: {
                    type: "static",
                    content: "300px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 991,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
          },
        },
      },
      propDefinitions: {
        src: {
          name: "src",
          type: "string",
          defaultValue:
            "https://play.teleporthq.io/static/svg/placeholders/no-image.svg",
        },
        title: {
          name: "title",
          type: "string",
          defaultValue: "Title\n",
        },
        description: {
          name: "description",
          type: "string",
          defaultValue: "Description\n",
        },
      },
    },
    ActionCall: {
      name: "ActionCall",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "actioncall",
          children: [
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "static",
                    content: "Explore the reusable components.",
                  },
                ],
                style: {
                  color: {
                    type: "static",
                    content: "#ffffff",
                  },
                  display: {
                    type: "static",
                    content: "inline-block",
                  },
                  fontSize: {
                    type: "static",
                    content: "44px",
                  },
                  textAlign: {
                    type: "static",
                    content: "center",
                  },
                  fontWeight: {
                    type: "static",
                    content: "bolder",
                  },
                  marginRight: {
                    type: "static",
                    content: "5px",
                  },
                  marginBottom: {
                    type: "static",
                    content: "15px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "5f2ce879-2788-4129-b49c-c50a0c9e7a10": {
                    id: "5f2ce879-2788-4129-b49c-c50a0c9e7a10",
                    type: "style-map",
                    content: {
                      styles: {
                        fontSize: {
                          type: "static",
                          content: "30px",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 479,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "static",
                    content: "SEE COMPONENTS",
                  },
                ],
                style: {
                  color: {
                    type: "static",
                    content: "#000000",
                  },
                  border: {
                    type: "static",
                    content: "none",
                  },
                  cursor: {
                    type: "static",
                    content: "pointer",
                  },
                  margin: {
                    type: "static",
                    content: "0",
                  },
                  display: {
                    type: "static",
                    content: "inline",
                  },
                  fontSize: {
                    type: "static",
                    content: "14px",
                  },
                  alignSelf: {
                    type: "static",
                    content: "center",
                  },
                  alignItems: {
                    type: "static",
                    content: "flex-start",
                  },
                  paddingTop: {
                    type: "static",
                    content: "15px",
                  },
                  paddingLeft: {
                    type: "static",
                    content: "30px",
                  },
                  paddingRight: {
                    type: "static",
                    content: "30px",
                  },
                  letterSpacing: {
                    type: "static",
                    content: "1.4",
                  },
                  paddingBottom: {
                    type: "static",
                    content: "15px",
                  },
                  textDecoration: {
                    type: "static",
                    content: "none",
                  },
                  backgroundColor: {
                    type: "static",
                    content: "#8AECDF",
                  },
                },
                attrs: {},
                abilities: {
                  link: {
                    type: "navlink",
                    content: {
                      routeName: "ReusableComponents",
                    },
                  },
                },
                referencedStyles: {
                  "91dd214d-2c95-4948-90aa-5a71ef8ae5ac": {
                    id: "91dd214d-2c95-4948-90aa-5a71ef8ae5ac",
                    type: "style-map",
                    content: {
                      mapType: "project-referenced",
                      referenceId: "thqLink",
                    },
                  },
                },
              },
            },
          ],
          style: {
            width: {
              type: "static",
              content: "100%",
            },
            display: {
              type: "static",
              content: "flex",
            },
            flexWrap: {
              type: "static",
              content: "wrap",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            alignItems: {
              type: "static",
              content: "center",
            },
            paddingTop: {
              type: "static",
              content: "50px",
            },
            paddingLeft: {
              type: "static",
              content: "100px",
            },
            paddingRight: {
              type: "static",
              content: "100px",
            },
            paddingBottom: {
              type: "static",
              content: "50px",
            },
            justifyContent: {
              type: "static",
              content: "space-between",
            },
            backgroundColor: {
              type: "static",
              content: "#4840a5",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {
            "185a75a8-a8b4-464b-af31-e5eeae5f86dd": {
              id: "185a75a8-a8b4-464b-af31-e5eeae5f86dd",
              type: "style-map",
              content: {
                styles: {
                  paddingLeft: {
                    type: "static",
                    content: "50px",
                  },
                  paddingRight: {
                    type: "static",
                    content: "50px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 767,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
            "45fcce79-54b0-4acd-a3ca-fbdfacd9a5c1": {
              id: "45fcce79-54b0-4acd-a3ca-fbdfacd9a5c1",
              type: "style-map",
              content: {
                styles: {
                  paddingLeft: {
                    type: "static",
                    content: "20px",
                  },
                  paddingRight: {
                    type: "static",
                    content: "20px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 479,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
            "df8325fe-8c4a-45d1-8d17-24519638158e": {
              id: "df8325fe-8c4a-45d1-8d17-24519638158e",
              type: "style-map",
              content: {
                styles: {
                  justifyContent: {
                    type: "static",
                    content: "center",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 991,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
          },
        },
      },
      propDefinitions: {},
    },
    Stats: {
      name: "Stats",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "stats",
          children: [
            {
              type: "element",
              content: {
                elementType: "container",
                semanticType: "div",
                name: "top",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "container",
                      children: [],
                      style: {
                        width: {
                          type: "static",
                          content: "250px",
                        },
                        height: {
                          type: "static",
                          content: "250px",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        marginRight: {
                          type: "static",
                          content: "40px",
                        },
                        backgroundSize: {
                          type: "static",
                          content: "cover",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "rgba(20, 20, 20, 0.2)",
                        },
                        backgroundImage: {
                          type: "static",
                          content:
                            "url('https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ')",
                        },
                        backgroundPosition: {
                          type: "static",
                          content: "center",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {
                        "3d5a564e-d9de-4701-8b83-7cb913bc533b": {
                          id: "3d5a564e-d9de-4701-8b83-7cb913bc533b",
                          type: "style-map",
                          content: {
                            styles: {
                              width: {
                                type: "static",
                                content: "220px",
                              },
                              height: {
                                type: "static",
                                content: "220px",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 991,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                        "60c0d910-b6be-4f37-b13c-d92686829ae5": {
                          id: "60c0d910-b6be-4f37-b13c-d92686829ae5",
                          type: "style-map",
                          content: {
                            styles: {
                              width: {
                                type: "static",
                                content: "150px",
                              },
                              height: {
                                type: "static",
                                content: "150px",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 479,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                        "c81ab428-aa05-40c4-9d8e-1d32cd389ee1": {
                          id: "c81ab428-aa05-40c4-9d8e-1d32cd389ee1",
                          type: "style-map",
                          content: {
                            styles: {
                              width: {
                                type: "static",
                                content: "200px",
                              },
                              height: {
                                type: "static",
                                content: "200px",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 767,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "container",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "1",
                              },
                            ],
                            style: {
                              fontSize: {
                                type: "static",
                                content: "32px",
                              },
                              textAlign: {
                                type: "static",
                                content: "center",
                              },
                              fontWeight: {
                                type: "static",
                                content: "bolder",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Project",
                              },
                            ],
                            style: {
                              textAlign: {
                                type: "static",
                                content: "center",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {
                        color: {
                          type: "static",
                          content: "#fff",
                        },
                        width: {
                          type: "static",
                          content: "150px",
                        },
                        height: {
                          type: "static",
                          content: "150px",
                        },
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        alignItems: {
                          type: "static",
                          content: "center",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        justifyContent: {
                          type: "static",
                          content: "center",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "#000",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {
                        "7e02e85e-1d98-4e25-9030-fdda844b88c3": {
                          id: "7e02e85e-1d98-4e25-9030-fdda844b88c3",
                          type: "style-map",
                          content: {
                            styles: {
                              width: {
                                type: "static",
                                content: "100px",
                              },
                              height: {
                                type: "static",
                                content: "100px",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 479,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
                style: {
                  display: {
                    type: "static",
                    content: "flex",
                  },
                  alignSelf: {
                    type: "static",
                    content: "flex-start",
                  },
                  boxSizing: {
                    type: "static",
                    content: "border-box",
                  },
                  alignItems: {
                    type: "static",
                    content: "flex-end",
                  },
                  paddingBottom: {
                    type: "static",
                    content: "40px",
                  },
                  backgroundColor: {
                    type: "static",
                    content: "transparent",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
            {
              type: "element",
              content: {
                elementType: "container",
                semanticType: "div",
                name: "bottom",
                children: [
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "container",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "∞",
                              },
                            ],
                            style: {
                              fontSize: {
                                type: "static",
                                content: "32px",
                              },
                              fontWeight: {
                                type: "static",
                                content: "bolder",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "Deploys",
                              },
                            ],
                            style: {},
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {
                        width: {
                          type: "static",
                          content: "150px",
                        },
                        height: {
                          type: "static",
                          content: "150px",
                        },
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        alignItems: {
                          type: "static",
                          content: "center",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        justifyContent: {
                          type: "static",
                          content: "center",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "#8AECDF",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {
                        "aeb51be0-222d-4aee-bc26-d51e021a0e09": {
                          id: "aeb51be0-222d-4aee-bc26-d51e021a0e09",
                          type: "style-map",
                          content: {
                            styles: {
                              width: {
                                type: "static",
                                content: "100px",
                              },
                              height: {
                                type: "static",
                                content: "100px",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 479,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                  {
                    type: "element",
                    content: {
                      elementType: "container",
                      semanticType: "div",
                      name: "container",
                      children: [
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content: "10",
                              },
                            ],
                            style: {
                              margin: {
                                type: "static",
                                content: "0",
                              },
                              fontSize: {
                                type: "static",
                                content: "32px",
                              },
                              marginTop: {
                                type: "static",
                                content: "0",
                              },
                              fontWeight: {
                                type: "static",
                                content: "bolder",
                              },
                              marginLeft: {
                                type: "static",
                                content: "0",
                              },
                              marginRight: {
                                type: "static",
                                content: "0",
                              },
                              marginBottom: {
                                type: "static",
                                content: "10px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                        {
                          type: "element",
                          content: {
                            elementType: "text",
                            semanticType: "span",
                            name: "text",
                            children: [
                              {
                                type: "static",
                                content:
                                  "Different frameworks to export your code",
                              },
                            ],
                            style: {
                              textAlign: {
                                type: "static",
                                content: "center",
                              },
                              paddingLeft: {
                                type: "static",
                                content: "40px",
                              },
                              paddingRight: {
                                type: "static",
                                content: "40px",
                              },
                            },
                            attrs: {},
                            abilities: {},
                            referencedStyles: {},
                          },
                        },
                      ],
                      style: {
                        width: {
                          type: "static",
                          content: "250px",
                        },
                        height: {
                          type: "static",
                          content: "250px",
                        },
                        display: {
                          type: "static",
                          content: "flex",
                        },
                        boxSizing: {
                          type: "static",
                          content: "border-box",
                        },
                        alignItems: {
                          type: "static",
                          content: "center",
                        },
                        marginLeft: {
                          type: "static",
                          content: "40px",
                        },
                        flexDirection: {
                          type: "static",
                          content: "column",
                        },
                        justifyContent: {
                          type: "static",
                          content: "center",
                        },
                        backgroundColor: {
                          type: "static",
                          content: "#8aecdf",
                        },
                      },
                      attrs: {},
                      abilities: {},
                      referencedStyles: {
                        "1fa3e5ad-79a7-4f1c-b35e-7fd6eafb81c9": {
                          id: "1fa3e5ad-79a7-4f1c-b35e-7fd6eafb81c9",
                          type: "style-map",
                          content: {
                            styles: {
                              width: {
                                type: "static",
                                content: "200px",
                              },
                              height: {
                                type: "static",
                                content: "200px",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 479,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                        "9b916162-067c-411a-8b2a-eee8a42f20f2": {
                          id: "9b916162-067c-411a-8b2a-eee8a42f20f2",
                          type: "style-map",
                          content: {
                            styles: {
                              width: {
                                type: "static",
                                content: "220px",
                              },
                              height: {
                                type: "static",
                                content: "220px",
                              },
                            },
                            mapType: "inlined",
                            conditions: [
                              {
                                maxWidth: 991,
                                conditionType: "screen-size",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
                style: {
                  display: {
                    type: "static",
                    content: "flex",
                  },
                  alignSelf: {
                    type: "static",
                    content: "flex-end",
                  },
                  boxSizing: {
                    type: "static",
                    content: "border-box",
                  },
                  alignItems: {
                    type: "static",
                    content: "flex-start",
                  },
                  paddingLeft: {
                    type: "static",
                    content: "100px",
                  },
                  justifyContent: {
                    type: "static",
                    content: "flex-end",
                  },
                  backgroundColor: {
                    type: "static",
                    content: "transparent",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {
                  "d3ea0f41-9d70-4ade-9aaf-20c3394e3c4b": {
                    id: "d3ea0f41-9d70-4ade-9aaf-20c3394e3c4b",
                    type: "style-map",
                    content: {
                      styles: {
                        paddingLeft: {
                          type: "static",
                          content: "0",
                        },
                      },
                      mapType: "inlined",
                      conditions: [
                        {
                          maxWidth: 767,
                          conditionType: "screen-size",
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
          style: {
            display: {
              type: "static",
              content: "flex",
            },
            padding: {
              type: "static",
              content: "20px",
            },
            alignSelf: {
              type: "static",
              content: "center",
            },
            boxSizing: {
              type: "static",
              content: "border-box",
            },
            alignItems: {
              type: "static",
              content: "flex-start",
            },
            flexDirection: {
              type: "static",
              content: "column",
            },
            justifyContent: {
              type: "static",
              content: "center",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {
            "758bd823-bc1f-41ce-8d08-aa6a4ae3bf4a": {
              id: "758bd823-bc1f-41ce-8d08-aa6a4ae3bf4a",
              type: "style-map",
              content: {
                styles: {
                  paddingTop: {
                    type: "static",
                    content: "50px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 991,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
          },
        },
      },
      propDefinitions: {},
    },
    StickyCard: {
      name: "StickyCard",
      node: {
        type: "element",
        content: {
          elementType: "container",
          semanticType: "div",
          name: "stickycard",
          children: [
            {
              type: "element",
              content: {
                elementType: "image",
                name: "image",
                children: [],
                style: {
                  top: {
                    type: "static",
                    content: "5px",
                  },
                  left: {
                    type: "static",
                    content: "5px",
                  },
                  width: {
                    type: "static",
                    content: "30px",
                  },
                  height: {
                    type: "static",
                    content: "30px",
                  },
                  position: {
                    type: "static",
                    content: "absolute",
                  },
                },
                attrs: {
                  src: {
                    type: "static",
                    content:
                      "https://demo-project-bejq.teleporthq.app/playground_assets/corner-1100h.png",
                  },
                },
                abilities: {},
                referencedStyles: {
                  "2b0f4d31-c142-4398-9323-3812c31ee81e": {
                    id: "2b0f4d31-c142-4398-9323-3812c31ee81e",
                    type: "style-map",
                    content: {
                      mapType: "project-referenced",
                      referenceId: "thqImage",
                    },
                  },
                },
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "static",
                    content: "Have an idea in mind?",
                  },
                ],
                style: {
                  fontSize: {
                    type: "static",
                    content: "20px",
                  },
                  fontWeight: {
                    type: "static",
                    content: "bold",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
            {
              type: "element",
              content: {
                elementType: "text",
                semanticType: "span",
                name: "text",
                children: [
                  {
                    type: "static",
                    content:
                      "Just start creating. Double-click on this component to edit its proprieties.",
                  },
                ],
                style: {
                  fontSize: {
                    type: "static",
                    content: "14px",
                  },
                  paddingTop: {
                    type: "static",
                    content: "15px",
                  },
                },
                attrs: {},
                abilities: {},
                referencedStyles: {},
              },
            },
          ],
          style: {
            width: {
              type: "static",
              content: "400px",
            },
            display: {
              type: "static",
              content: "flex",
            },
            padding: {
              type: "static",
              content: "40px",
            },
            position: {
              type: "static",
              content: "relative",
            },
            alignSelf: {
              type: "static",
              content: "flex-end",
            },
            alignItems: {
              type: "static",
              content: "flex-start",
            },
            flexDirection: {
              type: "static",
              content: "column",
            },
            justifyContent: {
              type: "static",
              content: "flex-end",
            },
            backgroundColor: {
              type: "static",
              content: "#fff",
            },
            overflow: {
              type: "static",
              content: "auto",
            },
          },
          attrs: {},
          abilities: {},
          referencedStyles: {
            "a62dc532-90cf-47ac-bb80-dfd1a09d115b": {
              id: "a62dc532-90cf-47ac-bb80-dfd1a09d115b",
              type: "style-map",
              content: {
                styles: {
                  width: {
                    type: "static",
                    content: "250px",
                  },
                  padding: {
                    type: "static",
                    content: "20px",
                  },
                },
                mapType: "inlined",
                conditions: [
                  {
                    maxWidth: 479,
                    conditionType: "screen-size",
                  },
                ],
              },
            },
          },
        },
      },
      propDefinitions: {},
    },
  },
};

export const uidl = {
  name: "PersonSpotlight",
  propDefinitions: {
    name: {
      type: "string",
      defaultValue: "John Doe",
    },
    url: {
      type: "string",
      defaultValue: "http://lorempixel.com/150/150/",
    },
    flag: {
      type: "string",
      defaultValue: "🇷🇴",
    },
    link: {
      type: "string",
      defaultValue: "https://twitter.com/teleportHQio",
    },
    displayLink: {
      type: "string",
      defaultValue: "@teleportHQ",
    },
    bio: {
      type: "string",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },
  node: {
    type: "element",
    content: {
      elementType: "container",
      style: {
        width: "300px",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "5px",
      },
      children: [
        {
          type: "element",
          content: {
            elementType: "image",
            attrs: {
              url: "$props.url",
            },
            style: {
              display: "block",
              margin: "auto",
              "border-radius": "100%",
            },
          },
        },
        {
          type: "element",
          content: {
            elementType: "image",
            attrs: {
              url: "$props.url",
            },
            style: {
              display: "block",
              margin: "auto",
              "border-radius": "100%",
            },
          },
        },
        {
          type: "element",
          content: {
            elementType: "container",
            style: {
              "font-size": "22px",
              "font-weight": "900",
              margin: "0",
              "text-align": "center",
            },
            children: [
              {
                type: "element",
                content: {
                  elementType: "text",
                  style: {
                    "margin-right": "7px",
                    "font-size": "28px",
                    "vertical-align": "middle",
                  },
                  children: [
                    {
                      type: "dynamic",
                      content: {
                        referenceType: "prop",
                        id: "flag",
                      },
                    },
                  ],
                },
              },
              {
                type: "dynamic",
                content: {
                  referenceType: "prop",
                  id: "name",
                },
              },
            ],
          },
        },
        {
          type: "element",
          content: {
            elementType: "container",
            style: {
              fontSize: "16px",
              margin: "0",
              "text-align": "center",
            },
            children: [
              {
                type: "element",
                content: {
                  elementType: "link",
                  style: {
                    "text-decoration": "none",
                    color: "#822cec",
                  },
                  attrs: {
                    url: {
                      type: "dynamic",
                      content: {
                        referenceType: "prop",
                        id: "link",
                      },
                    },
                  },
                  children: ["$props.displayLink"],
                },
              },
            ],
          },
        },
        {
          type: "element",
          content: {
            elementType: "container",
            children: [
              {
                type: "dynamic",
                content: {
                  referenceType: "prop",
                  id: "bio",
                },
              },
            ],
          },
        },
      ],
    },
  },
};
