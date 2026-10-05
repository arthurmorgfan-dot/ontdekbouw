import type { ProjectBlueprint } from "@/types/project";

export const clarkeBlueprint: ProjectBlueprint = {
  status: "Extreem vroeg",
  category: "RUIMTE-INFRASTRUCTUUR",
  compactWordmark: true,
  statement: "De laatste lift die we ooit hoeven te bouwen.",
  lead: "CLARKE onderzoekt wat er technisch, economisch en maatschappelijk nodig zou zijn voor een permanente verbinding tussen aarde en ruimte. Niet als belofte, maar als extreem langetermijnonderzoek.",
  question: "Wat zou een permanente fysieke transportverbinding tussen aarde en ruimte vereisen?",
  stageNote: "CLARKE is een theoretische onderzoeksrichting, geen actief engineeringprogramma, gefinancierd project, bouwplaats of ruimteorganisatie. Haalbaarheid met vandaag aangetoonde materialen is niet vastgesteld. Er is geen beloofde uitvoering, locatie, prototype of resultaat. Het beeld is een concept, geen technische bouwtekening. De headline verwoordt ambitie, geen voorspelling.",
  heroImage: "/images/projects/clarke-hero.png",
  heroImagePresentation: { position: "64% 55%", hideCaption: true },
  hypothesis: {
    title: "Het idee",
    principle: "Een verbinding, geen lanceerbelofte.",
    introduction: "Het klassieke aardse ruimteliftconcept onderzoekt een lange, gespannen tether van het aardoppervlak tot voorbij een geostationaire baan, met klimmers die langs de verbinding bewegen. Dat is een theoretisch infrastructuurconcept, geen toren die simpelweg steeds hoger wordt gebouwd. Een beschreven theorie is nog geen uitvoerbaar systeem.",
    steps: ["Aarde", "Tether", "Klimmer", "Ruimte"],
    note: "De naam verwijst naar Arthur C. Clarke en de geschiedenis van het idee in sciencefiction en engineering. De verwijzing is inspiratie, geen technische onderbouwing. Er zijn geen afmetingen, reistijden, draagvermogens of materiaaldoorbraken van CLARKE.",
  },
  system: {
    title: "Waarom überhaupt een lift?",
    introduction: "Zou permanente infrastructuur de economie, herhaalbaarheid en toegankelijkheid van vervoer voorbij het aardoppervlak kunnen veranderen? De vergelijking moet ook toekomstige lanceertechnologie meenemen. Goedkoper of schoner is een vraag, geen eigenschap die CLARKE al bezit.",
    elements: [
      { title: "Herhaalbaarheid", description: "Kunnen klimmers betrouwbaar langs een permanente verbinding werken, en wat vraagt dat aan energie, inspectie en vervanging?" },
      { title: "Toegankelijkheid", description: "Wie zou toegang krijgen en onder welke voorwaarden? Infrastructuur mag niet vanzelfsprekend exclusieve controle door één overheid, bedrijf of beweging betekenen." },
      { title: "Een eerlijke vergelijking", description: "Bouw, exploitatie, veiligheid en milieugevolgen moeten naast lanceeralternatieven worden gezet. Een permanent systeem is niet automatisch beter." },
    ],
  },
  designSections: [
    { id: "problemen", title: "Het probleem", tone: "sand", introduction: "De engineeringmoeilijkheid is fundamenteel. Een werkend deelsysteem zou nog geen bewijs voor de volledige verbinding zijn. Materiaal, baanmechanica, dynamiek, omgeving en beheer moeten als samenhangend systeem worden onderzocht.", items: ["Materiaalsterkte en massa", "Baanmechanica", "Klimmerenergie", "Atmosfeer", "Trillingen", "Ruimtepuin", "Bliksem en weer", "Onderhoud", "Verankering", "Beheersing van falen", "Economie", "Internationaal bestuur"], note: "Dit zijn onderzoeksgebieden, geen opgelost ontwerp. Er bestaat geen CLARKE-ankerlocatie, energievoorziening, bouwprogramma of veiligheidsplan." },
    { id: "materiaal", title: "Het materiaalprobleem", introduction: "De tether vraagt een uitzonderlijke verhouding tussen sterkte en gewicht. Materiaalgedrag moet ook over grote lengtes, met verbindingen, gebreken, omgevingsbelasting en onderhoud houdbaar blijven. Materiaalvermogen is een centrale onopgeloste voorwaarde.", items: ["Sterkte / gewicht", "Maakbaarheid", "Gebreken", "Verbindingen", "Levensduur", "Inspectie"], note: "Een gunstige eigenschap van een materiaalmonster lost het volledige praktische probleem niet op. CLARKE claimt geen bestaand materiaal dat de complete aardse ruimtelift mogelijk maakt." },
  ],
  proof: {
    title: "Wat moet CLARKE bewijzen?",
    introduction: "Theoretische beschrijvingen onderscheiden we van uitvoerbaarheid. Geen van deze vragen is door CLARKE beantwoord.",
    questions: ["Kan een geschikte tether ooit op de benodigde schaal worden vervaardigd?", "Kan het systeem dynamisch stabiel blijven?", "Kunnen klimmers betrouwbaar functioneren?", "Kan energie efficiënt en betrouwbaar worden geleverd?", "Zijn ruimtepuin en omgevingsrisico’s beheersbaar?", "Kan falen aanvaardbaar veilig worden opgevangen?", "Zou het economisch beter presteren dan toekomstige lanceertechnologie?", "Wie bezit en bestuurt infrastructuur die zich tot in de ruimte uitstrekt?", "Hoe beschermen we toegang, internationale zeggenschap en vrijheid tegen concentratie van macht?"],
  },
  prototype: {
    title: "Eerste prototype",
    statement: "Niet morgen.",
    introduction: "Eerste zinvolle stappen zouden literatuuronderzoek, engineeringmodellen, materiaalonderzoek en kleine afgebakende deelsysteemvragen zijn. Niet een toren naar de ruimte bouwen. Eerst bepalen welke aanname toetsbaar is en of verder onderzoek gerechtvaardigd is.",
    scope: [{ label: "Onderzoeksvraag", value: "Nog af te bakenen" }, { label: "Model en materiaal", value: "Nog te onderzoeken" }, { label: "Prototype", value: "Geen prototype gepland of gebouwd" }, { label: "Middelen en planning", value: "Geen financiering, partners of bouwdatum" }],
    prerequisites: ["Literatuur", "Aannames", "Modellen", "Deelsysteemvraag", "Toetsingscriteria", "Kritiek"],
    note: "Een toekomstige kleine test zou uitsluitend een afgebakende vraag kunnen beantwoorden, niet de haalbaarheid van de gehele ruimtelift aantonen.",
  },
  measurements: {
    title: "Wat meten we?", introduction: "Een toekomstig meetkader vraagt eerst modellen, definities en grenzen. Geen CLARKE-metingen bestaan al.",
    items: [
      { label: "Materiaal", question: "Welke materiaalprestaties en maakbaarheid zijn aantoonbaar onder relevante omstandigheden?", status: "Nog te meten" },
      { label: "Stabiliteit", question: "Hoe gedraagt de structuur zich dynamisch en bij verstoringen?", status: "Nog te meten" },
      { label: "Energie", question: "Wat vragen klimmers, energieoverdracht en continue werking?", status: "Nog te meten" },
      { label: "Veiligheid", question: "Welke faalwijzen kunnen worden beheerst, met welke grenzen?", status: "Nog te meten" },
      { label: "Onderhoud", question: "Wat vereisen inspectie, herstel en vervanging?", status: "Nog te meten" },
      { label: "Economie", question: "Wat zou het volledige systeem kosten ten opzichte van toekomstige alternatieven?", status: "Nog te meten" },
      { label: "Milieu", question: "Welke gevolgen ontstaan over bouw, gebruik en eventuele ontmanteling?", status: "Nog te meten" },
    ],
  },
  resultsAfterCriticism: true,
  criticism: {
    title: "Wat kan er misgaan?", introduction: "Veel.",
    risks: ["Het materiaal kan falen.", "De structuur kan instabiel worden.", "Een botsing met ruimtepuin kan schade veroorzaken.", "Weer en atmosferische omstandigheden kunnen het systeem bedreigen.", "Energievereisten kunnen onhoudbaar blijken.", "Onderhoud kan onuitvoerbaar worden.", "Catastrofaal tetherfalen kan gevolgen hebben die niet aanvaardbaar te beheersen zijn.", "Kosten kunnen het idee onpraktisch maken.", "Geopolitiek conflict kan beheer en toegang ondermijnen.", "Eigendom kan macht en toegang te sterk concentreren.", "Lanceertechnologie kan sneller verbeteren dan CLARKE.", "Het concept kan simpelweg nooit praktisch worden."],
    invitation: "Daag CLARKE uit.", question: "Welke aanname houdt geen stand?", availability: "De vragen staan open. Een mogelijkheid om reacties in te sturen volgt later.",
  },
  results: { statement: "Nog geen resultaten.", description: "CLARKE heeft geen engineering-, materiaal- of prototype-uitkomsten. Als onderzoek geen haalbaarheid kan vaststellen, is dat een legitieme uitkomst. Een theorie is geen bouwresultaat.", principle: "Mislukken mag. Verbergen niet." },
  nextStep: {
    title: "Eerst bepalen wat waar zou moeten zijn.", introduction: "Welke aannames moeten aantoonbaar kloppen voordat CLARKE méér verdient dan theoretisch onderzoek? Begin bij de doorslaggevende beperkingen, niet bij een bouwdatum.", steps: ["Bronnen", "Aannames", "Materiaalgrenzen", "Dynamisch model", "Veiligheid en bestuur", "Vergelijking", "Verder onderzoeken of stoppen"], note: "Geen eigenaar, exclusief toegangsmodel of internationale bestuursvorm is gekozen. BOUW’s vrijheidstest geldt ook hier: vergroot het systeem zeggenschap en mogelijkheden, of concentreert het macht?",
  },
  relationships: [
    { label: "Technische achtergrond", title: "Kritieke technologieën — NASA NTRS", href: "https://ntrs.nasa.gov/citations/20060000015", note: "Historisch onderzoek naar voorwaarden; geen CLARKE-resultaat of bewijs van huidige haalbaarheid." },
    { label: "Naam en geschiedenis", title: "Clarke en het liftconcept — NASA Spinoff", href: "https://spinoff.nasa.gov/Spinoff2016/ip_4.html", note: "Achtergrond bij de verwijzing; geen samenwerking met BOUW." },
  ],
};
