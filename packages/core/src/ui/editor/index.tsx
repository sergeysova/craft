"use client";

import { useMemo } from "react";
import { useCurrentEditor, EditorContent, JSONContent, Extension, EditorProvider } from "@tiptap/react";
import { defaultEditorProps } from "./props";
import { defaultExtensions } from "./extensions";
import { EditorBubbleMenu } from "./bubble-menu";
import { EditorProps } from "@tiptap/pm/view";
import { Editor as EditorClass } from "@tiptap/core";

export type CraftEditorProps = {
  /**
   * Additional classes to add to the editor container.
   * Defaults to "relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg".
   */
  className?: string;
  /**
   * The value to use for the editor.
   */
  value: JSONContent | string;
  /**
   * A list of extensions to use for the editor, in addition to the default Novel extensions.
   * Defaults to [].
   */
  extensions?: Extension[];
  /**
   * Props to pass to the underlying Tiptap editor, in addition to the default Novel editor props.
   * Defaults to {}.
   */
  editorProps?: EditorProps;
  /**
   * A callback function that is called whenever the editor is updated.
   * Defaults to () => {}.
   */
  // eslint-disable-next-line no-unused-vars
  onUpdate?: (editor?: EditorClass) => void | Promise<void>;
};

export default function CraftEditor({
  className = "relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg",
  extensions = [],
  editorProps = {},
  value,
  onUpdate = () => {},
}: CraftEditorProps) {
  const editorExtensions = useMemo(() => [...defaultExtensions, ...extensions], [extensions]);
  const tiptapEditorProps = useMemo(() => ({ ...defaultEditorProps, ...editorProps }), [editorProps]);

  return (
    <EditorProvider
      extensions={editorExtensions}
      editorProps={tiptapEditorProps}
      autofocus="end"
      content={value}
      onUpdate={({ editor }) => onUpdate(editor)}
    >
      <CraftContent className={className} />
    </EditorProvider>
  );
}

function CraftContent({ className }: { className: string }) {
  const { editor } = useCurrentEditor();

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className={className}
    >
      <EditorBubbleMenu />
      {/* {editor?.isActive("image") && <ImageResizer editor={editor} />} */}
      <EditorContent editor={editor} />
    </div>
  );
}
