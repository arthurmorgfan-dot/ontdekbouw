import type { ProposalPlan } from "@/types/proposal";

export const foodProposalPlan: ProposalPlan = {
  headings: {
    problem: "Kan een gezonde basis toegankelijker?",
    concept: "Een voedingsbasis voor jongeren.",
    context: "Van dichtbij, waar het kan.",
    delivery: "Hoe zou het kunnen werken?",
    costs: "Wat moet het kosten?",
    evidence: "Onderbouwing vóór overtuiging.",
    objections: "Een goed bouwplan moet kritiek kunnen verdragen.",
  },
  categoryListLabel: "Mogelijke categorieën · samenstelling niet definitief",
  lead: "Geen kind zou slechter moeten eten omdat gezond voedsel thuis te duur is.",
  introduction: "BOUW onderzoekt een systeem waarin jongeren toegang krijgen tot een voedzaam basispakket, met de nadruk op verse, zoveel mogelijk onbewerkte plantaardige voeding. De ambitie is om dit steeds meer te verbinden aan lokale en regionale productie. Dit is een voorstel in onderzoek, geen vastgesteld beleid of bewezen oplossing.",
  problem: {
    paragraphs: [
      "Voor sommige huishoudens kan het lastig zijn om steeds verse, voedzame voeding te betalen. Hoe groot die drempel is, voor wie zij geldt en welke rol prijs naast tijd, bereikbaarheid en kennis speelt, willen we eerst beter begrijpen.",
      "Kinderen en jongeren hebben weinig invloed op het huishoudbudget. Voeding tijdens hun ontwikkeling is daarom een belangrijk onderwerp voor onderzoek. Welke voedingsbehoeften een basispakket moet ondersteunen en hoe die per leeftijd verschillen, vraagt om voedingskundige onderbouwing.",
      "Kan de samenleving een gezonde voedingsbasis toegankelijk maken zonder een onnodig ingewikkeld systeem te bouwen? Dat is de vraag achter dit voorstel. De omvang van het probleem en de gevolgen van een mogelijke aanpak zijn hier nog niet met bronnen onderbouwd.",
    ],
    callout: "De vraag is niet alleen wat gezond eten kost. De vraag is wat ongezond opgroeien ons uiteindelijk kost.",
  },
  concept: {
    introduction: "Het werkidee: jongeren krijgen toegang tot een afgebakende voedingsbasis die voornamelijk bestaat uit voedzame, onbewerkte plantaardige producten. Geen definitief menu, maar een pakket waarvan samenstelling, toegankelijkheid en geschiktheid nog moeten worden onderzocht.",
    categories: ["Groenten", "Fruit", "Peulvruchten", "Volkoren granen", "Noten en zaden, waar passend", "Andere voedingskundig onderbouwde basisproducten"],
    caveat: "Nog te onderzoeken: hoeveelheden, leeftijdsgrenzen, allergieën, individuele voedingsbehoeften en welke aanvullende producten nodig zijn. De precieze samenstelling staat niet vast.",
    context: "Op termijn zou de vraag verbonden kunnen worden aan lokale en regionale productie, naar het soort concepten dat LOOP en AGRIA verkennen. Of dat praktisch, betaalbaar en voldoende schaalbaar is, moet worden onderzocht. We claimen niet dat deze projecten momenteel voeding leveren.",
  },
  delivery: {
    flow: ["Lokale productie", "Regionale verdeling", "Toegang voor jongeren", "Meten wat er gebeurt"],
    options: ["Afhaalpunten", "Scholen", "Lokale voedselhubs", "Directe verdeling aan huishoudens", "Digitaal voedingstegoed voor producten die aan vast te stellen criteria voldoen"],
    unresolved: "Geen van deze uitvoeringsvormen is gekozen. Bereik, keuzevrijheid, privacy, toegankelijkheid, logistiek en administratieve lasten moeten worden afgewogen. Ook de mate waarin lokale productie kan leveren, staat nog open.",
  },
  pilot: {
    introduction: "Geen onmiddellijke landelijke invoering. Eerst moet een kleine, afgebakende proef worden ontworpen. Vooraf bepalen we wat we willen leren, wat we meten en wanneer doorgaan, aanpassen of stoppen verstandig zou zijn. Onderstaand kader is hypothetisch: er is nog geen pilot gestart.",
    dimensions: [
      { label: "Locatie", value: "Nog te bepalen" },
      { label: "Aantal deelnemers", value: "Nog te bepalen" },
      { label: "Duur", value: "Nog te bepalen" },
      { label: "Voedingspakket", value: "Te ontwikkelen met voedingskundige onderbouwing" },
      { label: "Kosten per deelnemer", value: "Te berekenen" },
      { label: "Meetpunten", value: "Te bepalen" },
    ],
  },
  costs: {
    status: "Nog te berekenen",
    items: ["Voedselproductie en inkoop", "Verpakking", "Distributie", "Opslag en koeling", "Administratie", "Voedselverspilling", "Personeel", "Evaluatie en onderzoek"],
    note: "Een voorstel zonder kostenplaatje is nog geen bouwplan.",
  },
  evidence: {
    sources: [],
    knownEmptyState: "Er zijn nog geen geverifieerde onderzoeksbronnen aan dit bouwplan toegevoegd. Daarom presenteren we hier geen wetenschappelijke conclusies. Onze overtuiging dat jongeren toegang moeten hebben tot een gezonde voedingsbasis is een uitgangspunt; de werking van dit voorstel moet nog worden onderbouwd.",
    questions: ["Welk pakket ondersteunt de voedingsbehoeften van verschillende leeftijden?", "Bereikt de gekozen uitvoering de jongeren voor wie toegang een drempel is?", "Wordt de voeding daadwerkelijk gebruikt en wat verandert er?", "Wat zijn de volledige kosten en de onbedoelde effecten?", "Kan lokale of regionale productie betrouwbaar bijdragen?"],
  },
  objections: ["Wordt dit systeem te duur?", "Waarom alleen jongeren?", "Hoe voorkomen we voedselverspilling?", "Hoeveel keuze moet iemand zelf houden?", "Moet toegang inkomensafhankelijk zijn of universeel?", "Kan lokale productie voldoende leveren?", "Hoe voorkomen we onnodige bureaucratie?"],
  results: {
    status: "Nog geen resultaten.",
    description: "Er is nog geen pilot uitgevoerd. Hier komen later gemeten uitkomsten, inclusief meetmethode, beperkingen en bronverwijzingen. Ook tegenvallende of onduidelijke resultaten horen daarbij. Tot die tijd staan hier geen beloften als bewijs.",
    outcomes: [],
  },
  challenge: {
    heading: "Wat zien we over het hoofd?",
    lead: "Een bouwplan wordt beter door kritiek, niet door kritiek te vermijden.",
    prompts: ["Welke aanname klopt volgens jou niet?", "Welk risico of alternatief ontbreekt?", "Welk onderzoek moeten we meenemen?"],
    availability: "Meedenken en kritiek delen wordt hier later mogelijk. Er is nu nog geen inzendformulier; reacties worden op deze pagina niet verzameld.",
  },
  nextStep: {
    introduction: "De volgende stap is het idee precies genoeg maken om een verantwoord besluit over een pilot te kunnen nemen. Dat vraagt om keuzes, onderbouwing en een toetsbaar ontwerp.",
    tasks: ["Het voedingspakket voedingskundig onderbouwen", "Bepalen wie in aanmerking zou komen", "Een uitvoeringsvorm onderzoeken en kiezen", "Het volledige kostenmodel uitwerken", "Meetbare pilotcriteria en stopvoorwaarden vastleggen"],
  },
};
