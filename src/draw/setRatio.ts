import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constant";

// 横を絶対値として16:9の比率を保つ
export const setRatio = (tale: HTMLDivElement) => {
  // Bodyタグ
  // ブラウザ幅縮小用のCSS指定

  const setScale = () => {
    const baseWidthScale = window.innerWidth / SCREEN_WIDTH;
    const baseHeightScale = window.innerHeight / SCREEN_HEIGHT;
    tale.style.transform = `scale(${Math.min(
      baseWidthScale,
      baseHeightScale
    )}) translate(-50%, -50%)`;
  };
  setScale();
  window.addEventListener("resize", () => {
    setScale();
  });
};
