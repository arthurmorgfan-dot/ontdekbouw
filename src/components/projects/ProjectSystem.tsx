import Image from "next/image";
import type { ProjectBlueprint } from "@/types/project";

export function ProjectFlow({ steps, label }: { steps: string[]; label: string }) {
  return <ol className="blueprint-flow" aria-label={label}>{steps.map(step => <li key={step}>{step}</li>)}</ol>;
}

export default function ProjectSystem({ system }: { system: ProjectBlueprint["system"] }) {
  return <><p>{system.introduction}</p>{system.illustration && <figure className="blueprint-plan-art"><Image src={system.illustration.image} alt={system.illustration.alt} width={1000} height={800} sizes="(max-width: 800px) 88vw, 55vw" /><figcaption>Conceptueel schema / geen maatvoering of definitief ontwerp</figcaption></figure>}<ol className="blueprint-system">{system.elements.map((element, index) => <li key={element.title}>
    <div><span className="blueprint-small-label">{String(index + 1).padStart(2, "0")}</span><h3>{element.title}</h3></div><p>{element.description}</p>
    {element.questions && <ul>{element.questions.map(question => <li key={question}>{question}</li>)}</ul>}
  </li>)}</ol></>;
}
