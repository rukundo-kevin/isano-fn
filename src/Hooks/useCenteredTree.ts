import { useCallback, useState } from "react";

interface ContainerElement extends HTMLElement {
  getBoundingClientRect(): DOMRect;
}

type Translate = { x: number; y: number };
type Dimensions = { width: number; height: number };

type UseCenteredTreeReturnType = [
  Dimensions | undefined,
  Translate,
  (containerElem: ContainerElement | null) => void
];

export const useCenteredTree = (
  defaultTranslate: Translate = { x: 0, y: 0 }
): UseCenteredTreeReturnType => {
  const [translate, setTranslate] = useState<Translate>(defaultTranslate);
  const [dimensions, setDimensions] = useState<Dimensions>();

  const containerRef = useCallback((containerElem: ContainerElement | null) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);

  return [dimensions, translate, containerRef];
};
