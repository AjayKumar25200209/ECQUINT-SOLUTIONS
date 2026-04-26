import { useState } from "react";
import { Settings, X } from "lucide-react";
import { useAccessibilityStore } from "../../store/accessibilityStore";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);

  const {
    textSize,
    contrast,
    reduceMotion,
    setTextSize,
    setContrast,
    toggleMotion,

    highlightLinks,
    cursorSize,
    toggleHighlightLinks,
    setCursorSize,
  } = useAccessibilityStore();

  return (
    <>
      {/* Floating Button */}
      <button
        aria-label="Accessibility settings"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-lg"
      >
        <Settings size={18} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Accessibility</h2>
          <button onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6 text-sm">

          {/* TEXT SIZE */}
          <div>
            <p className="mb-2 text-gray-700">Text Size</p>
            <div className="flex gap-2">
              {["normal", "large", "xlarge"].map((size) => (
                <button
                  key={size}
                  onClick={() => setTextSize(size)}
                  className={`px-3 py-1 rounded-md border ${
                    textSize === size
                      ? "a11y-selected bg-[#e4332d] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {size === "normal" ? "A" : size === "large" ? "A+" : "A++"}
                </button>
              ))}
            </div>
          </div>

          {/* CONTRAST */}
          <div>
            <p className="mb-2 text-gray-700">Contrast</p>
            <div className="flex gap-2">
              {["normal", "high"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setContrast(mode)}
                  className={`px-3 py-1 rounded-md border ${
                    contrast === mode
                      ? "a11y-selected bg-[#e4332d] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* MOTION */}
          <ToggleSwitch
            label="Reduce Motion"
            active={reduceMotion}
            onClick={toggleMotion}
          />

          {/* LINK HIGHLIGHT */}
          <ToggleSwitch
            label="Highlight Links"
            active={highlightLinks}
            onClick={toggleHighlightLinks}
          />

          {/* CURSOR SIZE */}
          <div>
            <p className="mb-2 text-gray-700">Cursor Size</p>
            <div className="flex gap-2">
              {["normal", "large", "xlarge"].map((size) => (
                <button
                  key={size}
                  onClick={() => setCursorSize(size)}
                  className={`px-3 py-1 rounded-md border ${
                    cursorSize === size
                      ? "a11y-selected bg-[#e4332d] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

/* ✅ REUSABLE TOGGLE */
function ToggleSwitch({ label, active, onClick }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <button
        onClick={onClick}
        className={`w-11 h-6 rounded-full relative transition ${
          active ? "bg-[#e4332d]" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
            active ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}