import type { ProjectBlueprint } from "@/types/project";

export const mendBlueprint: ProjectBlueprint = {
  status: "In ontwikkeling",
  category: "BOUWPROJECT / BIOLOGIE & HERSTEL",
  statement: "Kunnen we het lichaam beter helpen zichzelf te herstellen?",
  lead: "MEND onderzoekt hoe biomaterialen, biologische structuren en de omgeving van weefselherstel kunnen samenwerken met herstelprocessen die het lichaam al bezit.",
  question: "Hoe kunnen materialen, omgeving en biologie samenwerken met herstelprocessen die het lichaam al bezit?",
  stageNote: "MEND is een experimenteel onderzoeksconcept, geen biotechbedrijf, zorgaanbieder, behandeling, medisch hulpmiddel, operationeel laboratorium of bewezen regeneratieve technologie. Er zijn geen experimenten, patiënten, trials, partners, patenten of doorbraken van MEND. Het beeld is conceptueel, geen bestaand MEND-laboratorium. Overtuiging is nog geen bewijs.",
  heroImage: "/images/projects/mend-hero.png",
  heroImagePresentation: { position: "50% 55%", hideCaption: true },
  hypothesis: {
    title: "Het doel",
    principle: "Het lichaam doet het biologische werk.",
    introduction: "MEND wil onderzoeken of we bestaande herstelprocessen beter kunnen begrijpen, ondersteunen of structuur bieden. Weefselherstel, wondgenezing, biomaterialen, weefsel-materiaalinteractie en regeneratieve geneeskunde vormen een onderzoeksrichting, geen platform dat het menselijk lichaam regenereert.",
    steps: ["Bestaande biologie begrijpen", "Afgebakende hypothese", "Passend model", "Veilig toetsen"],
    note: "MEND-hypothese: een zorgvuldig ontworpen materiaal en omgeving zouden onder bepaalde omstandigheden herstelprocessen kunnen ondersteunen. Wat, waar en hoe moet eerst wetenschappelijk worden afgebakend. Eventuele toekomstige toepassing moet vrijwillig zijn en lichamelijke zeggenschap respecteren; MEND stelt geen verplichte behandeling voor. Er is geen snellere of littekenloze genezing, orgaanregeneratie, succesvolle integratie of behandeling aangetoond.",
  },
  system: {
    title: "Het lichaam bouwt al",
    introduction: "Gevestigde biologie, geen MEND-ontdekking: mensen beschikken over herstelprocessen, maar hun regeneratief vermogen is beperkt. Wondherstel kan littekenvorming omvatten; het betekent niet dat ieder weefsel volledig naar zijn oorspronkelijke toestand terugkeert. MEND begint bij het bestuderen van deze processen.",
    elements: [
      { title: "Wat biologie al laat zien", description: "Het lichaam vernieuwt cellen en kan weefselschade herstellen. Bij wondherstel veranderen cellen en de extracellulaire matrix — de structuur rond cellen — in samenhang. Dit is algemene biologische kennis, geen bewijs voor een MEND-interventie." },
      { title: "Wat MEND veronderstelt", description: "Mogelijk kan een materiaal een bruikbare omgeving of tijdelijke structuur bieden. Dat is een hypothese, niet een ontdekking of behandeling." },
      { title: "Wat MEND moet testen", description: "Eerst een specifieke materiaalvraag, passend experimenteel model en meetbare criteria bepalen. Resultaten uit een model mogen niet rechtstreeks als werkzaamheid in mensen worden gepresenteerd." },
    ],
  },
  designSections: [
    {
      id: "materiaal", title: "Materiaal ontmoet lichaam", tone: "sand",
      introduction: "Welke eigenschappen zouden een materiaal of scaffold — een ondersteunende structuur — geschikt kunnen maken voor contact met weefsel? MEND moet structuur, eigenschappen en biologische reacties samen onderzoeken, zonder geschiktheid vooraf aan te nemen.",
      items: ["Structuur", "Porositeit", "Mechanisch gedrag", "Afbraak", "Biologische verenigbaarheid", "Celrespons", "Integratie"],
      note: "Onderzoeksvragen, geen opgelost ontwerp. Een materiaal kan technisch bruikbaar lijken en toch ongewenste reacties veroorzaken. Er is geen MEND-materiaal geselecteerd, gekarakteriseerd of bewezen veilig.",
    },
    {
      id: "tijdelijke-structuur", title: "Een tijdelijke structuur",
      introduction: "Zou een zorgvuldig ontworpen tijdelijke structuur een omgeving kunnen bieden waarin eigen cellen zich organiseren en beschadigd weefsel herstellen of vervangen? Dit is de scaffold-hypothese die MEND wil afbakenen, geen geclaimde therapie.",
      items: ["Functie afbakenen", "Materiaalvereisten", "Passend model", "Afbraak volgen", "Ongewenste effecten toetsen"],
      note: "Een structuur werkt niet zelfstandig als vervanging voor biologie. Of cellen passend reageren, of afbraak verantwoord verloopt en of enige ondersteuning optreedt, zijn onbeantwoorde vragen. Geen experimenten op mensen voorstellen.",
    },
    {
      id: "herstelomgeving", title: "De omgeving van herstel", tone: "dark",
      introduction: "Herstel vraagt meer dan één materiaal of voedingsstof. De onderzoeksvraag moet rekening houden met de biologische en mechanische omgeving. Het lichaam verricht het herstel; voedingsstoffen behoren tot de middelen en voorwaarden waarop processen steunen, niet tot een zelfstandige genezingsoplossing.",
      items: ["Zuurstofvoorziening", "Doorbloeding", "Mechanische omgeving", "Ontstekingsreacties", "Voeding", "Signalen tussen cellen"],
      note: "Dit zijn factoren voor literatuuronderzoek en modelkeuze, geen diagnose of behandeladvies. MEND kent geen werkzame dosering, materiaalcombinatie of herstelprotocol. Welke factoren relevant en meetbaar zijn hangt af van de gekozen vraag.",
    },
    {
      id: "onderzoeksmethode", title: "Van hypothese naar experiment", tone: "sand",
      introduction: "VRAAG → HYPOTHESE → MODEL → EXPERIMENT → METEN → KRITIEK → HERHALEN. Eerst beschrijven wat gevestigde kennis is, wat slechts verondersteld wordt en welke waarneming de hypothese zou ondersteunen of weerleggen. Medische verwachtingen mogen niet vooruitlopen op bewijs.",
      items: ["Vraag", "Hypothese", "Model", "Experiment", "Meten", "Kritiek", "Herhalen"],
      note: "Vóór een proef: meetcriteria, controles, reproduceerbaarheid, veiligheidsgrenzen en modelbeperkingen vastleggen. Bronnen dienen algemene kennis te onderbouwen; ze zijn geen MEND-resultaten. NIGMS beschrijft beperkte menselijke regeneratie en de extracellulaire matrix bij wondherstel. Een literatuurbeoordeling voor de specifieke MEND-vraag moet nog worden uitgevoerd.",
    },
  ],
  prototype: {
    title: "Eerste prototype",
    introduction: "Begin met literatuuronderzoek en materiaalvereisten. Ontwerp- of computermodellen kunnen helpen waar passend. Eventuele veilige laboratoriumkarakterisering en in-vitrostudies komen alleen later, met bevoegde wetenschappelijke begeleiding, geschikte faciliteiten en toepasselijke toetsing. Geen onderzoek op mensen als eerste stap.",
    scope: [
      { label: "Eerste vraag", value: "Nog wetenschappelijk af te bakenen" },
      { label: "Materiaal en model", value: "Nog te bepalen; geen ontwerp of experiment vastgesteld" },
      { label: "Faciliteiten en begeleiding", value: "Nog te bepalen; geen actief laboratorium of partners" },
      { label: "Veiligheids- en meetcriteria", value: "Nog te ontwikkelen vóór een eventuele proef" },
      { label: "Kosten en planning", value: "Nog te berekenen en te bepalen" },
    ],
    prerequisites: ["Literatuur", "Materiaalvereisten", "Hypothese", "Modelkeuze", "Wetenschappelijke beoordeling", "Veilige karakterisering", "Meten en kritiek"],
    note: "Dit is een mogelijk onderzoekskader, geen lopende proef. In-vitrobevindingen zouden uitsluitend het gekozen model beschrijven, niet klinische werking of veiligheid bewijzen.",
  },
  measurements: {
    title: "Wat meten we?",
    introduction: "Iedere maat moet bij de latere onderzoeksvraag en het werkelijke model passen. Geen materiaal-, biologische of hersteluitkomsten van MEND bestaan al.",
    items: [
      { label: "Materiaal", question: "Wat zijn mechanisch gedrag, stabiliteit, afbraak en structuur of porositeit onder vastgelegde omstandigheden?", status: "Nog te meten" },
      { label: "Biologische interactie", question: "Welke verenigbaarheid, celrespons, hechting of integratie kan in een passend model verantwoord worden onderzocht?", status: "Nog te meten" },
      { label: "Herstel", question: "Welke herstelgerelateerde uitkomst is werkelijk meetbaar binnen het gekozen model, en wat kan daaruit niet worden geconcludeerd?", status: "Nog te meten" },
      { label: "Veiligheid", question: "Welke toxiciteit, ontstekingsreacties, ongewenste biologische effecten en faalwijzen moeten worden getoetst?", status: "Nog te meten" },
    ],
  },
  resultsAfterCriticism: true,
  criticism: {
    title: "Wat kan er misgaan?",
    introduction: "Een verkeerde hypothese is informatie. MEND moet ongewenste reacties en negatieve resultaten net zo serieus behandelen als mogelijke ondersteuning van herstel.",
    risks: ["Het materiaal kan toxisch zijn.", "Een ongewenste immuun- of ontstekingsreactie kan optreden.", "Infectie kan ontstaan.", "Afbraak kan te snel of te langzaam verlopen.", "Mechanische eigenschappen kunnen niet bij het weefsel passen.", "Integratie kan tekortschieten.", "Een laboratoriumresultaat kan niet vertaalbaar zijn naar levend weefsel.", "Dier- of in-vitrobevindingen kunnen niet vertaalbaar zijn naar mensen.", "Een interventie kan normaal herstel verstoren.", "Ongecontroleerde weefselgroei kan optreden.", "Productie kan niet betrouwbaar herhaalbaar zijn.", "Kosten kunnen een aanpak onpraktisch maken.", "Regelgevende vereisten kunnen verdere toepassing aanzienlijk moeilijker maken.", "De hypothese kan simpelweg onjuist zijn."],
    invitation: "Daag MEND uit.", question: "Wat zien we over het hoofd?",
    availability: "De vragen staan open voor wetenschappelijke kritiek. Een mogelijkheid om reacties in te sturen volgt later.",
  },
  results: {
    statement: "Nog geen resultaten.",
    description: "MEND heeft geen materiaaltesten, weefselintegratie, wond- of brandwondenbehandeling, klinische effectiviteit of goedgekeurde producten aangetoond. Er zijn geen patiënten, trials of bewezen technologieën. Hier horen later modelgebonden metingen, negatieve uitkomsten en hun grenzen.",
    principle: "Mislukken mag. Verbergen niet.",
  },
  nextStep: {
    title: "Eén vraag betrouwbaar kunnen testen.",
    introduction: "De eerste taak van MEND is niet bewijzen dat we het lichaam kunnen herstellen. Het is bepalen welke vraag we als eerste betrouwbaar kunnen testen. Begin met een afgebakende literatuur- en materiaalvraag, niet met een breed regeneratieplatform.",
    steps: ["Vraag afbakenen", "Bronnen beoordelen", "Hypothese", "Model en meetcriteria", "Veiligheidsbeoordeling", "Passende begeleiding", "Besluiten over een eerste proef"],
    note: "Ambitie, biologische kennis, hypothese en experimentele uitkomst blijven afzonderlijk zichtbaar. Een toekomstig resultaat uit een beperkt model is nooit vanzelf bewijs voor een medische behandeling.",
  },
  relationships: [
    { label: "Biologische achtergrond", title: "Regeneratie — NIGMS", href: "https://www.nigms.nih.gov/education/fact-sheets/Pages/regeneration", note: "Algemene kennis over beperkte menselijke regeneratie; geen bewijs voor MEND." },
    { label: "Biologische achtergrond", title: "Extracellulaire matrix — NIGMS", href: "https://nigms.nih.gov/biobeat/2016/09/the-ecm-a-dynamic-system-for-moving-our-cells", note: "Algemene uitleg over matrix en wondherstel; geen MEND-onderzoek." },
    { label: "BOUW-richting", title: "Technologie moet mensen sterker maken", href: "/standpunten#standpunt-11", note: "Een principe, geen medische werkzaamheidsclaim." },
  ],
};
