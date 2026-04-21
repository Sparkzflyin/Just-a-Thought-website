"use client";

import { useState, useEffect } from "react";

const FocusWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isFocusMode, setIsFocusMode] = useState(false);

  useEffect(() => {
    if (isFocusMode) {
      document.body.classList.add("focus-mode");
    } else {
      document.body.classList.remove("focus-mode");
    }
    return () => {
      document.body.classList.remove("focus-mode");
    };
  }, [isFocusMode]);

  return (
    <>
      <button
        onClick={() => setIsFocusMode(!isFocusMode)}
        className="fixed top-28 right-4 z-50 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors shadow-md"
        aria-label={isFocusMode ? "Exit focus mode" : "Enter focus mode"}
        title={isFocusMode ? "Exit focus mode" : "Enter focus mode"}
      >
        {isFocusMode ? "👁️" : "✨"}
      </button>

      <div>{children}</div>
    </>
  );
};

export default FocusWrapper;
