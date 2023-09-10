import { JSONContent } from "@tiptap/core";

export const defaultEditorContent: JSONContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Introducing craft" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Start crafting your new content",
        },
        { type: "text", text: "." },
      ],
    },
  ],
};
