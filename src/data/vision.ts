export const visionDistinctions = [
  { label: "Principes", description: "Wat BOUW fundamenteel gelooft. Een overtuiging is geen bewijs van een effect." },
  { label: "Standpunten", description: "De richting waarin we Nederland willen bewegen. Geen uitgewerkt pakket maatregelen." },
  { label: "Voorstellen", description: "Concrete mechanismen die we nog moeten onderzoeken, doorrekenen en toetsen." },
  { label: "Projecten", description: "Systemen en concepten die we kunnen ontwerpen, ontwikkelen en testen." },
  { label: "Resultaten", description: "Wat daadwerkelijk is gemeten en aangetoond, met bronnen en beperkingen. Op deze site zijn nog geen BOUW-pilotresultaten gepubliceerd." },
];

export const visionPillars = [
  {
    id: "01", title: "Gezonde mensen", introduction: "Een sterke samenleving begint met mensen die de basis hebben om goed te leven.",
    beliefs: ["Verse, voedzame voeding moet veel betaalbaarder worden.", "Ieder kind verdient toegang tot een gezonde voedingsbasis.", "Bewegen en lichamelijke ontwikkeling horen bij opgroeien.", "Preventie verdient meer aandacht, naast het behandelen van problemen achteraf."],
    note: "Dagelijkse maaltijden of beweegverwachtingen zijn mogelijke uitwerkingen. Hun vorm en werking staan nog niet vast.",
  },
  {
    id: "02", title: "Een land dat bouwt", introduction: "Nederland moet weer het vertrouwen krijgen om te bouwen wat het nodig heeft.",
    beliefs: ["We moeten aanzienlijk meer woningen bouwen.", "Modulaire en alternatieve woonmodellen verdienen serieuze tests.", "Bouw, technologie, landbouw, maakindustrie en praktische beroepen verdienen status en investering.", "Praktisch onderwijs is een volwaardige route naar een goede toekomst.", "Infrastructuur en productieve capaciteit verdienen aandacht."],
    note: "Ambitie vraagt om uitvoerbare plannen. Snelheid, betaalbaarheid en leefbaarheid moeten samen worden onderzocht.",
  },
  {
    id: "03", title: "Meer vrijheid door een sterke basis", introduction: "Vrijheid betekent meer als de basis niet je hele leven opeist.",
    beliefs: ["Werk moet een geloofwaardige route naar zelfstandigheid bieden.", "Kleine schulden moeten niet uitgroeien tot problemen die levens beheersen.", "Voedsel en woningen moeten overvloediger worden; we willen meer maken, niet alleen schaarste verdelen.", "Technologie moet mensen meer mogelijkheden en vrijheid geven."],
    note: "BOUW bouwt mogelijkheden, geen verplichtingen. Een goed systeem geeft mensen meer keuzes over hun eigen leven — niet minder. De vrijheidstest onderzoekt onnodige dwang naast werking, kosten en gevolgen.",
  },
  {
    id: "04", title: "Proberen. Meten. Verbeteren.", introduction: "Overheid en samenleving moeten beter worden in het erkennen van onzekerheid.",
    beliefs: ["Begin klein waar dat praktisch kan en bepaal vooraf wat succes betekent.", "Bereken kosten, test en meet.", "Publiceer resultaten, inclusief beperkingen en tegenvallers.", "Verbeter wat werkt. Stop wat niet werkt."],
    note: "Mislukken mag. Verbergen niet.",
  },
];

type VisionPosition = {
  id: string;
  title: string;
  description: string;
  investigation?: string;
  href?: string;
  linkLabel?: string;
  featured?: boolean;
  paragraphs?: string[];
  principle?: string;
  legalNote?: string;
  source?: { title: string; href: string };
};

export const visionPositions: VisionPosition[] = [
  {
    id: "01", title: "Gezond eten moet betaalbaar zijn",
    description: "Verse, voedzame voeding hoort geen luxe te zijn. BOUW wil onderzoeken hoe productie, technologie, kortere ketens en meer aanbod de werkelijke kosten kunnen verlagen.",
    investigation: "Lokale productie is niet automatisch goedkoper. Investeringen, energie, importalternatieven en de verdeling van eventuele besparingen moeten worden meegewogen.",
    href: "/voorstellen/vers-eten-moet-goedkoper", linkLabel: "Verken het voorstel voor betaalbaar vers eten",
  },
  {
    id: "02", title: "Ieder kind verdient een gezonde basis",
    description: "De toegang van jongeren tot voedzame voeding zou niet volledig afhankelijk moeten zijn van het huishoudinkomen. Een gegarandeerde voedingsbasis verdient onderzoek, beginnend met een toetsbaar pilotontwerp.",
    investigation: "Samenstelling, toegang, universele of gerichte ondersteuning, uitvoering en kosten zijn nog open vragen. Er is geen BOUW-pilot gestart.",
    href: "/voorstellen/gezond-eten-als-basis", linkLabel: "Verken het voorstel voor een voedingsbasis",
  },
  {
    id: "03", title: "Nederland moet veel meer bouwen",
    description: "We willen meer woningen en meer ruimte voor leefbare buurten. Snellere, betaalbaardere manieren van bouwen, waaronder modulaire modellen, moeten worden ontwikkeld en getest.",
    investigation: "We presenteren geen bewezen bouwtempo of kostenbesparing. Kwaliteit, infrastructuur en leefbaarheid horen bij de toetsing.",
    href: "/projecten/hive", linkLabel: "Ontdek het woonconcept HIVE",
  },
  {
    id: "04", title: "Bewegen moet weer normaal worden",
    description: "Sport en lichamelijke ontwikkeling verdienen een veel sterkere plek in het opgroeien. Het doel is gezondheid en mogelijkheden, met ruimte voor verschillen tussen jongeren.",
    investigation: "De balans tussen stimulering, toegankelijkheid, verwachtingen en verplichting is nog te onderzoeken. Sportplicht is geen vastgesteld BOUW-beleid. De vrijheidstest stelt een hogere eis: noodzaak, bewijs, proportionaliteit, alternatieven en gevolgen voor rechten en vrijheid. Dit onderzoek kan de verplichtingsoptie ook verwerpen.",
    href: "/voorstellen/iedere-dag-bewegen", linkLabel: "Verken de open vragen rond bewegen",
  },
  {
    id: "05", title: "Praktisch onderwijs verdient dezelfde status",
    description: "Bouw, technologie, landbouw, maakindustrie en andere praktische vaardigheden verdienen respect als serieuze routes naar een goede toekomst. We willen dat leren maken en vakmanschap volwaardig meetellen.",
    investigation: "Welke onderwijs- en ontwikkelroutes daarbij passen, moet met aandacht voor jongeren, onderwijskwaliteit en uitvoerbaarheid worden uitgewerkt.",
  },
  {
    id: "06", title: "Werken moet weer iets opleveren",
    description: "Productief werk, vaardigheden leren en ondernemen moeten een geloofwaardige route vormen naar meer zelfstandigheid en een beter leven.",
    investigation: "Dit is een richting, geen belofte over inkomens of koopkracht. Concrete maatregelen vragen een kostenplaatje en onderzoek naar hun gevolgen.",
  },
  {
    id: "07", title: "Voorkom schulden voordat ze levens verwoesten",
    description: "Grijp eerder in. BOUW wil voorkomen dat beheersbare financiële problemen uitgroeien tot langdurige persoonlijke en maatschappelijke schade.",
    investigation: "Hoe preventie, kennis en begeleiding kunnen werken, moet worden uitgewerkt en getoetst. Er zijn nog geen resultaten van een BOUW-schuldenprogramma.",
    href: "/projecten/rise", linkLabel: "Ontdek het concept RISE",
  },
  {
    id: "08", title: "Nederland als knooppunt voor plantaardig voedsel", featured: true,
    description: "BOUW wil onderzoeken of Nederland een belangrijk knooppunt kan worden voor voedzame plantaardige producten van Nederlandse én internationale boeren en telers.",
    principle: "Betaal de boer goed. Voed de jeugd goed. Bouw een sterker land.",
    paragraphs: [
      "De richting: een sterke, eerlijke opbrengst voor boeren en telers verbinden aan een ruim aanbod van verse, voedzame producten. We willen onderzoeken of die combinatie gezond eten bereikbaar kan maken voor jongeren. Een goede vergoeding, voldoende aanbod en lage consumentenprijzen gaan niet vanzelf samen; het volledige model moet worden doorgerekend.",
      "Een mogelijke uitwerking is toegang tot een voedzame, verse maaltijd overdag voor jongeren van ongeveer 13–17 jaar, vooral tijdens het voortgezet onderwijs. Die leeftijdsgroep, het maaltijdconcept, de toegang en de financiering zijn voorstellen om te onderzoeken, geen vastgesteld programma.",
      "Daarnaast willen we verkennen hoe voeding, lichamelijke ontwikkeling, onderwijs en voorbereiding op praktisch vakwerk elkaar kunnen versterken. Dat vraagt om zorgvuldig ontwikkelde onderwijs- en leerwerktrajecten, niet om jongeren simpelweg van school te laten vertrekken.",
    ],
    legalNote: "Een toekomstig traject moet binnen de bestaande leerplicht en, waar van toepassing, kwalificatieplicht passen en juridisch en onderwijskundig worden ontwikkeld. Dit voorstel betekent niet dat een 13-jarige school kan verlaten om voor BOUW te werken.",
    source: { title: "Rijksoverheid: leerplicht en kwalificatieplicht", href: "https://www.rijksoverheid.nl/themas/onderwijs/leerplicht/leerplicht-en-kwalificatieplicht" },
    investigation: "BOUW betaalt nu geen boeren, importeert geen voedsel en voert geen maaltijdprogramma uit. Er zijn geen afspraken met scholen. Economische haalbaarheid, voedingskundige onderbouwing, verantwoordelijkheden en uitvoering moeten nog worden onderzocht.",
    href: "/voorstellen/gezond-eten-als-basis", linkLabel: "Verken de voedingsbasis voor jongeren",
  },
  {
    id: "09", title: "Technologie moet mensen sterker maken",
    description: "AI, automatisering, biotechnologie en engineering moeten menselijke mogelijkheden, overvloed en kwaliteit van leven vergroten. We willen technologie beoordelen op wat zij mensen oplevert, voorbij alleen extra productiviteit.",
    investigation: "Mogelijke toepassingen vragen onderzoek naar werking, veiligheid, vrijheid en gevolgen. Een technisch idee is nog geen bewezen verbetering.",
  },
  {
    id: "10", title: "Test voordat je landelijk uitrolt",
    description: "Waar dat praktisch kan, moeten grote nieuwe interventies beginnen met meetbare pilots. Bepaal vooraf wat we willen leren, wat het kost en wanneer doorgaan, aanpassen of stoppen gerechtvaardigd is.",
    investigation: "Een kleine proef is geen automatisch bewijs dat landelijke invoering werkt. Schaal, context en beperkingen moeten onderdeel blijven van de beoordeling.",
  },
  {
    id: "11", title: "Mislukken mag. Verbergen niet.",
    description: "Publiceer mislukkingen en negatieve resultaten naast successen. Een mislukt experiment kan iets leren; verbergen maakt eerlijke beoordeling onmogelijk.",
    investigation: "Dit is onze norm voor toekomstige tests. We claimen hiermee geen al uitgevoerde onderzoeken of gepubliceerde pilotresultaten.",
  },
  {
    id: "12", title: "Goede ideeën hebben geen politieke kleur",
    description: "Beoordeel ideeën op bewijs, gevolgen, haalbaarheid, vrijheid en resultaten. Hun traditionele plek aan de linker- of rechterkant van de politiek hoort niet te bepalen of we ze serieus onderzoeken.",
    investigation: "Constructief bouwen vraagt ook dat we onze eigen aannames kunnen herzien. Een aantrekkelijk idee moet kritiek en toetsing kunnen verdragen.",
  },
];

export const positionChapters = [
  { id: "gezond-en-wonen", label: "01—04", title: "De basis om goed te leven.", positions: visionPositions.slice(0, 4) },
  { id: "leren-werken-en-voeden", label: "05—08", title: "Een land dat mogelijkheden maakt.", positions: visionPositions.slice(4, 8) },
  { id: "technologie-en-bewijs", label: "09—12", title: "Vooruitgang die zich laat toetsen.", positions: visionPositions.slice(8, 12) },
];
