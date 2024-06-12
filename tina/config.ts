import {defineConfig} from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VEREL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: "article",
                label: "Articles",
                path: "src/content/articles",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "description",
                        label: "Description",
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                    {
                        name: "tags",
                        label: "Tags",
                        type: "string",
                        list: true,
                        ui: {
                            component: "tags",
                        }
                    },
                    {
                        name: "author",
                        label: "Author",
                        type: "reference",
                        collections: ["author"],
                    },
                    {
                        type: "image",
                        name: "coverImage",
                        label: "Cover Image",
                        required: true,
                    },
                    {
                        type: "datetime",
                        name: "date",
                        label: "Date",
                        required: true,
                    },
                    {
                        type: "reference",
                        name: "language",
                        label: "Language",
                        required: true,
                        collections: ["language"],
                    }
                ],
            },
            {
                name: "author",
                label: "Authors",
                path: "src/content/authors",
                fields: [
                    {
                        type: "string",
                        name: "name",
                        label: "Name",
                        isTitle: true,
                        required: true,
                    },
                ],
            },
            {
                name: "language",
                label: "Languages",
                path: "src/content/languages",
                fields: [
                    {
                        type: "string",
                        name: "name",
                        label: "Name",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        name: "code",
                        label: "Code",
                        required: true,
                    },
                ],
            }
        ],
    },
});
