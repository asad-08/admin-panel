import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const Editor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="p-8 min-h-[80vh] w-full bg-skin-base rounded-lg flex flex-col gap-4 items-start justify-start dark:bg-slate-600">
      <label className="text-xl font-semibold dark:text-slate-200">
        Editor
      </label>
      <div className="w-full ">
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
        />
      </div>
    </div>
  );
};

export default Editor;
