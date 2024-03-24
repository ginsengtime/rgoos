import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "de0e310a-cc19-4070-8521-9223d42cdfe2", // Get this from tina.io
  token: "cc87545129e8fb32127a70dcbbf23197ce3b49f6", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Events",
        name: "events",
				frontmatterFormat: 'toml',
        frontmatterDelimiters: '+++',
        path: "content/en/event",
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
	    ui: { utc: true,} 
          },
          {
            type: "datetime",
            name: "date2",
            label: "date2",
          },
          {
            type: "datetime",
            name: "date3",
            label: "date3",
          },
          {
            type: "string",
            name: "place",
            label: "place",
          },
          {
            type: "string",
            name: "link",
            label: "link",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        label: "Press Items",
        name: "press_items",
        path: "content/en/press",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "content",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
