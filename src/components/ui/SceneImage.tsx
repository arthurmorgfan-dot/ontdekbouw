import { sceneImages } from "@/lib/scene-images";

/** Server-only, pre-sized local artwork. CSS supplies the desktop/mobile focal point. */
export default function SceneImage({ src, alt = "", sizes = "100vw", eager = false }: {
  src: string; alt?: string; sizes?: string; eager?: boolean;
}) {
  const scene = sceneImages[src];
  if (!scene) throw new Error(`Scene has no responsive artwork: ${src}`);
  const largest = scene.variants.at(-1)!;
  // Pre-optimized static files and an exact srcset avoid runtime image processing.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="scene-image" src={largest.src} srcSet={scene.variants.map(image => `${image.src} ${image.width}w`).join(", ")} sizes={sizes} width={scene.width} height={scene.height} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />;
}
