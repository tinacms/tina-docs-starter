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
              ui: {
                defaultItem: {
                  type: "default",
                  text: "Lorem ipsum dolor sit amet.",
                },
              },
              fields: [
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
              ],
            },
            {
              name: "Button",
              label: "Button",
              ui: {
                defaultItem: {
                  type: "primary",
                  text: "Learn More",
                  url:"https://tina.io"
                },
              },
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
                {
                  name: "url",
                  label: "Url",
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
              ui: {
                defaultItem: {
                  backgroundImageUrl: "http://placehold.it/1200x800",
                  slogan: "Eat your food!",
                  teaser: "Lorem ipsum dolor sit amet.",
                  btnUrl: "https://tina.io",
                  btnTxt: "Learn More",
                },
              },
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
              ui: {
                defaultItem: {
                  featureList: [
                    {
                      image: "http://placehold.it/48x48",
                      title: "Hello, World",
                      desc: "Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              },
              fields: [
                {
                  type: "object",
                  name: "featureList",
                  label: "Feature List",
                  list: true,
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
          isBody: true,
        },
      ],
    },
  ],
});
