"use client";

import { useState } from "react";
import { CraftEditor, JSONContent } from "@sergeysova/craft";
import { defaultEditorContent } from "@/lib/default-content";

export default function Editor() {
  const [content, setContent] = useState<JSONContent>(defaultEditorContent);

  return (
    <div className="relative w-full max-w-screen-lg">
      <CraftEditor
        value={content}
        onUpdate={(editor) => setContent(editor.getJSON())}
      />
    </div>
  );
}
