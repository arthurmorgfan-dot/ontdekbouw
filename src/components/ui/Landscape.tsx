import SceneImage from "./SceneImage";

/** Shared environmental artwork. The surrounding section supplies its concept caption. */
export default function Landscape({ eager = false, sizes = "(max-width: 767px) 1000px, 100vw" }: { eager?: boolean; sizes?: string }) {
  return <div className="landscape" aria-hidden="true"><SceneImage src="/images/future/river-civilization.webp" sizes={sizes} eager={eager} /></div>;
}
