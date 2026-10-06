import ProjectPage, { generateMetadata as generateProjectMetadata } from "../[slug]/page";

// Keep the discovery destination explicit while reusing the project page unchanged.
export function generateMetadata() {
  return generateProjectMetadata({ params: Promise.resolve({ slug: "clarke" }) });
}

export default function ClarkePage() {
  return <ProjectPage params={Promise.resolve({ slug: "clarke" })} />;
}
