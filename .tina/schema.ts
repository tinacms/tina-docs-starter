import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Documentation",
      format: "mdx",
      name: "docs",
      path: "docs",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Slug",
          name: "slug",
        },
        {
          type: "rich-text",
          label: "Body",
          name: "body",
          templates: [
            {
              name: "Callout",
              label: "Callout",
              fields:[
                {
                  name: "type",
                  label: "Type",
                  type: "string",
                  options: ["default", "warning", "error"],
                },
                {
                  name: "text",
                  label: "Text",
                  type: "string",
                },
              ]
            },
            {
              name: "Button",
              label: "Button",
              fields: [
                {
                  name: "type",
                  label: "Type",
                  type: "string",
                  options: ["primary", "success", "danger", "neutral"],
                },
                {
                  name: "text",
                  label: "Text",
                  type: "string",
                },
              ],
            },
            {
              name: "VideoPlayer",
              label: "VideoPlayer",
              fields: [
                {
                  name: "url",
                  label: "Video URL",
                  type: "string",
                },
              ],
            },
            {
              name: "Hero",
              label: "Hero",
              fields: [
                {
                  name: "backgroundImageURL",
                  label: "Background Image",
                  type: "image",
                },
                {
                  name: "slogan",
                  label: "Title",
                  type: "string",
                },
                {
                  name: "teaser",
                  label: "Teaser",
                  type: "string",
                  ui: {
                    component: "textarea",
                  },
                },
                {
                  name: "btnUrl",
                  label: "Button Url",
                  type: "string",
                },
                {
                  name: "btnTxt",
                  label: "Button Text",
                  type: "string",
                },
              ],
            },
            {
              name: "FeatureSection",
              label: "Feature",
              fields: [
                {
                  type: "object",
                  name: "featureList",
                  label: "Feature List",
                  list: true,
                  templates: [
                    {
                      name: "Feature",
                      label: "feature",
                      fields: [
                        {
                          name: "image",
                          label: "Feature Image",
                          type: "image",
                        },
                        {
                          name: "title",
                          label: "Feature Title",
                          type: "string",
                        },
                        {
                          name: "desc",
                          label: "Feature Text",
                          type: "string",
                          ui: {
                            component: "textarea",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          isBody: true,
        },
      ],
    },
  ],
});