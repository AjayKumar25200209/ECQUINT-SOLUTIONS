import { useEffect } from "react";
import { useAccessibilityStore } from "../store/accessibilityStore";

export default function useAccessibilityEffects() {
  const {
    textSize,
    contrast,
    reduceMotion,
    highlightLinks,
    cursorSize,
  } = useAccessibilityStore();

  useEffect(() => {
    const body = document.body;

    // RESET
    body.classList.remove(
      "text-normal",
      "text-large",
      "text-xlarge",
      "contrast-high",
      "reduce-motion",
      "highlight-links",
      "cursor-large",
      "cursor-xlarge"
    );

    // TEXT SIZE
    body.classList.add(`text-${textSize}`);

    // CONTRAST
    if (contrast === "high") {
      body.classList.add("contrast-high");
    }

    // MOTION
    if (reduceMotion) {
      body.classList.add("reduce-motion");
    }

    // LINK HIGHLIGHT
    if (highlightLinks) {
      body.classList.add("highlight-links");
    }

    // CURSOR SIZE
    if (cursorSize === "large") {
      body.classList.add("cursor-large");
    }
    if (cursorSize === "xlarge") {
      body.classList.add("cursor-xlarge");
    }
  }, [
    textSize,
    contrast,
    reduceMotion,
    highlightLinks,
    cursorSize,
  ]);
}