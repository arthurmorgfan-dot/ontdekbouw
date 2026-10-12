"use client";
import { useState, useSyncExternalStore } from "react";
import { useI18n } from "@/i18n/client";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export default function HomeOS() {
  const { t } = useI18n();
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [panel, setPanel] = useState("climate");
  const [room, setRoom] = useState("living");
  const [temperatures, setTemperatures] = useState<Record<string, number>>({});
  const temperature = temperatures[room] ?? 21;
  const setTemperature = (value: number) => setTemperatures(current => ({ ...current, [room]: value }));
  const [brightnesses, setBrightnesses] = useState<Record<string, number>>({});
  const brightness = brightnesses[room] ?? 65;
  const setBrightness = (value: number) => setBrightnesses(current => ({ ...current, [room]: value }));
  const [colourTemperature, setColourTemperature] = useState("warm");
  const [scene, setScene] = useState("evening");
  const [outside, setOutside] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [energyMode, setEnergyMode] = useState("solar");
  const panels = [{ id: "climate", label: t("Klimaat") }, { id: "lighting", label: t("Licht") }, { id: "energy", label: t("Energie") }, { id: "routines", label: t("Routines") }];
  const rooms = [{ id: "living", label: t("Woonkamer") }, { id: "bedroom", label: t("Slaapkamer") }, { id: "kitchen", label: t("Keuken") }];
  const scenes = [{ id: "morning", label: t("Ochtend") }, { id: "evening", label: t("Avond") }, { id: "relax", label: t("Ontspannen") }, { id: "sleep", label: t("Slapen") }];
  return <div className="home-os" data-scene={scene} data-exterior={outside} data-colour={colourTemperature}>
    <div className="os-top"><div><span className="os-brand">HIVE / Home OS</span><p>{t("Interfaceconcept / geen gebouwde software")}</p></div><span className="os-local">{t("Lokale demo")}</span></div>
    <fieldset className="os-controls" disabled={!ready}><legend className="sr-only">{t("Interactief interfacevoorbeeld")}</legend><nav className="os-navigation" aria-label={t("Onderdelen van het interfaceconcept")}>{panels.map(item => <button key={item.id} type="button" aria-pressed={panel === item.id} onClick={() => setPanel(item.id)}>{item.label}</button>)}</nav>
    <div className="os-workspace"><div className="os-plan"><p className="os-label">{t("Conceptuele plattegrond / niet op schaal")}</p><div className="os-rooms">{rooms.map(item => <button key={item.id} type="button" className={`os-room os-room-${item.id}`} aria-pressed={room === item.id} onClick={() => setRoom(item.id)}><span aria-hidden="true" className="os-room-symbol" /><span>{item.label}</span><span className="os-room-indicator" aria-hidden="true" /></button>)}</div><p>{t("Kies een ruimte. Verken een instelling.")}</p></div>
    <div className="os-panel" aria-label={panels.find(item => item.id === panel)?.label}>
      <p className="os-label">{rooms.find(item => item.id === room)?.label} / {t("Illustratieve instellingen")}</p>
      {panel === "climate" && <><h3>{t("Comfort, per ruimte.")}</h3><label htmlFor="os-temperature">{t("Voorbeeld van een gewenste temperatuur")}</label><div className="os-setting"><output htmlFor="os-temperature">{temperature} °C</output><span>{t("Instelling / geen meting")}</span></div><input id="os-temperature" type="range" min="16" max="26" value={temperature} onChange={event => setTemperature(Number(event.target.value))} /><div className="os-readings"><p>{t("Luchtvochtigheid")} <span>{t("Geen meetdata")}</span></p><p>{t("Luchtkwaliteit")} <span>{t("Geen meetdata")}</span></p><p>{t("Ventilatie")} <span>{t("Nog te ontwerpen")}</span></p></div><p className="os-explanation">{t("Verwarming, koeling en ventilatie zouden samenwerken. Sensoren, comfort, energiegebruik en lokale bediening moeten nog worden onderzocht.")}</p></>}
      {panel === "lighting" && <><h3>{t("Licht dat met je meeleeft.")}</h3><div className="os-scenes" aria-label={t("Illustratieve lichtscènes")}>{scenes.map(item => <button key={item.id} type="button" aria-pressed={scene === item.id} onClick={() => { setScene(item.id); setBrightness(item.id === "sleep" ? 15 : item.id === "morning" ? 85 : 65); }}>{item.label}</button>)}</div><label htmlFor="os-brightness">{t("Voorbeeld van helderheid")}</label><div className="os-setting"><output htmlFor="os-brightness">{brightness}%</output><span>{t("Instelling / geen meting")}</span></div><input id="os-brightness" type="range" min="0" max="100" value={brightness} onChange={event => setBrightness(Number(event.target.value))} /><label htmlFor="os-colour">{t("Voorbeeld van kleurtemperatuur")}</label><select id="os-colour" value={colourTemperature} onChange={event => setColourTemperature(event.target.value)}><option value="warm">{t("Warm licht")}</option><option value="neutral">{t("Neutraal licht")}</option><option value="cool">{t("Koel licht")}</option></select><button type="button" className="os-toggle" aria-pressed={outside} onClick={() => setOutside(!outside)}>{t("Tuin- en padverlichting")} <span>{t(outside ? "Voorbeeld aan" : "Voorbeeld uit")}</span></button><p className="os-explanation">{t("Helderheid, kleurtemperatuur en scènes zouden per ruimte instelbaar zijn. Buitenverlichting vraagt aandacht voor veiligheid, natuur en lichthinder.")}</p></>}
      {panel === "energy" && <><h3>{t("Een helder beeld van energie.")}</h3><p className="os-explanation">{t("Geen live gegevens. Dit scherm toont welke informatie een toekomstig systeem zou kunnen geven.")}</p><div className="os-energy-grid">{[t("Zonneproductie"), t("Stroomverbruik"), t("Batterijlading"), t("Netimport"), t("Netexport")].map(label => <div key={label}><span>{label}</span><strong>—</strong><small>{t("Geen meetdata")}</small></div>)}</div><div className="os-history"><p className="os-label">{t("Energiehistorie / illustratief patroon")}</p><svg viewBox="0 0 400 80" role="img" aria-label={t("Illustratieve energiecurve zonder meetwaarden")}><path d="M0 70 H400 M0 40 H400 M0 10 H400" fill="none" stroke="currentColor" opacity=".15" /><path d="M0 68 C70 66 70 24 140 24 S210 60 270 45 S330 14 400 30" fill="none" stroke="currentColor" strokeWidth="2" /></svg></div><label htmlFor="os-energy-mode">{t("Voorgesteld planningsprincipe")}</label><select id="os-energy-mode" value={energyMode} onChange={event => setEnergyMode(event.target.value)}><option value="solar">{t("Zon gebruiken wanneer beschikbaar")}</option><option value="grid">{t("Net en opslag afstemmen")}</option><option value="manual">{t("Bewoner beslist handmatig")}</option></select><p className="os-explanation">{t("Mogelijke schema’s voor verwarming, koeling, apparaten en EV-laden zijn suggesties, geen bewezen besparingen.")}</p></>}
      {panel === "routines" && <><h3>{t("Jouw huis. Jouw regie.")}</h3><button type="button" className="os-toggle" aria-pressed={schedule} onClick={() => setSchedule(!schedule)}>{t("Voorbeeld van een avondroutine")} <span>{t(schedule ? "Voorbeeld aan" : "Voorbeeld uit")}</span></button><p className="os-explanation">{t("Een bewoner zou een voorkeur voor klimaat en licht kunnen combineren in een tijdschema. Handmatige bediening en fysieke schakelaars blijven nodig.")}</p><ul><li>{t("Privacy vanaf het ontwerp")}</li><li>{t("Lokale bediening waar mogelijk")}</li><li>{t("Geen verplichte cloud als uitgangspunt")}</li><li>{t("Toegankelijk op mobiel en mogelijk een huispaneel")}</li></ul><button type="button" className="os-reset" onClick={() => {setTemperatures({}); setBrightnesses({}); setColourTemperature("warm"); setScene("evening"); setOutside(false); setSchedule(false); setEnergyMode("solar");}}>{t("Herstel voorbeeldinstellingen")}</button></>}
    </div></div>
    </fieldset><noscript><p className="os-disclaimer">{t("JavaScript is nodig om dit interfacevoorbeeld te bedienen. Alle informatie en conceptlabels blijven leesbaar.")}</p></noscript>
    <p className="os-disclaimer">{t("Dit is een interactief ontwerpvoorbeeld. Geen verbonden woning, werkende Home OS, metingen of vastgelegde specificaties. Instellingen blijven alleen in dit scherm en worden niet opgeslagen.")}</p>
  </div>;
}
