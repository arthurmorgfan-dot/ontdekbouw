import { getI18n } from "@/i18n/server";
export default async function ProjectIntroduction({ items }: { items: readonly { title: string; description: string }[] }) {
 const { t } = await getI18n();
 return <dl className="project-introduction">{items.map(item=><div key={item.title}><dt>{t(item.title)}</dt><dd>{t(item.description)}</dd></div>)}</dl>;
}
