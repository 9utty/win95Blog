import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";

interface Code {
  code: string;
  lang: string;
}

const CodeTag = ({ code, lang }: Code) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      hljs.highlightBlock(ref.current);
    }
  }, []);

  return (
    <pre>
      <code ref={ref} className={`hljs language-${lang}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeTag;
