import type { ProposalPlan } from "@/types/proposal";

export const basisProposalPlan: ProposalPlan = {
  overview: {
    name: "BOUW Basis",
    headline: "Gezond eten als basisvoorziening.",
    principle: "Eerst zorgen dat iedereen goed kan eten.",
    layers: [
      { title: "Goedkoper naar inkomen", description: "Gezonde basisproducten worden sterker ondersteund bij lagere huishoudinkomens. Naarmate het inkomen stijgt, neemt de ondersteuning geleidelijk af." },
      { title: "BOUW Basispakket", description: "Een pakket met gezonde basisvoeding dat ieder huishouden kan aanvragen. Geen ingewikkelde beoordeling of bewijs dat je arm genoeg bent." },
    ],
    boxStatement: "Geen luxe pakket. Geen compleet dieet. Een gezonde basis.",
    metrics: ["Kosten per persoon / week", "Voedsel per persoon", "Voedingswaarde", "Productiecapaciteit", "Distributiekosten", "Totale publieke kosten"],
    mathStatement: "We publiceren de aannames, berekeningen en beperkingen achter het voorstel. Als de cijfers het idee tegenspreken, verandert het voorstel.",
    pilotHeadline: "Begin met 100 mensen.",
    stages: ["100 mensen", "1.000", "10.000", "Nederland"],
    closingHeadline: "Geen beloftes. Eerst bewijzen dat het werkt.",
  },
  headings: {
    problem: "Eerst zorgen dat iedereen goed kan eten.",
    concept: "Een voedingsbasis voor ieder huishouden.",
    context: "Productie vergelijken, niet vooraf kiezen.",
    delivery: "Van productie naar huishouden.",
    costs: "Een goed idee moet doorgerekend kunnen worden.",
    evidence: "Wat moeten we nog bewijzen?",
    objections: "Welke aannames kunnen het voorstel veranderen?",
  },
  categoryListLabel: "Mogelijke productcategorieën · samenstelling nog te onderzoeken",
  lead: "Wat als Nederland publieke middelen gebruikt om gezond basisvoedsel goedkoper te maken — en ervoor zorgt dat niemand zonder een goede basis hoeft te zitten?",
  introduction: "BOUW Basis is een voorstel met twee lagen: publieke ondersteuning maakt een afgebakende mand met voedzame basisproducten goedkoper naar huishoudinkomen. Daarnaast kan ieder huishouden in Nederland een gratis basispakket aanvragen. Het pakket vervangt geen supermarkt en levert niet alles wat iemand eet; het biedt een voedingsbasis waarmee mensen zelf maaltijden kunnen samenstellen.",
  problem: {
    paragraphs: ["Dit voorstel onderzoekt of publieke middelen een voedingsbasis toegankelijk kunnen maken. De werking, kosten en uitvoerbaarheid zijn nog niet vastgesteld."],
    callout: "Eerst zorgen dat iedereen goed kan eten.",
  },
  concept: {
    introduction: "In de eerste laag neemt de ondersteuning geleidelijk af bij een hoger huishoudinkomen. De tweede laag is een gratis basispakket op aanvraag voor ieder huishouden, zonder armoedetoets.",
    categories: ["Groente", "Fruit", "Aardappelen", "Volkoren granen", "Havermout", "Peulvruchten", "Noten en zaden", "Plantaardige eiwitbronnen"],
    caveat: "Voor de inkomensafhankelijke laag moeten we nog bepalen welk inkomen meetelt, hoe ondersteuning afloopt en hoe privacy wordt beschermd. Het gratis pakket kent in dit voorstel geen inkomensvoorwaarde. Productkeuze, hoeveelheden, allergieën en individuele voedingsbehoeften vragen nog onderzoek.",
    context: "BOUW wil onderzoeken hoe lokale landbouw, kasproductie, bestaande leveranciers en efficiënte distributie samen zouden kunnen werken. Geen productiemethode staat vooraf vast. We vergelijken kosten, leveringszekerheid, bereik en verliezen voordat we een uitvoering kiezen.",
  },
  delivery: {
    flow: ["Productie", "BOUW Basis", "Huishouden"],
    options: ["Lokale landbouw en kasproductie vergelijken met het aanbod van bestaande leveranciers", "Inkoop, opslag en distributie gezamenlijk onderzoeken", "Toegankelijke aanvraag, afhaalpunten en mogelijke bezorging afwegen"],
    unresolved: "Er zijn nog geen leveranciers, locaties of distributiepartners vastgelegd. Ook de aanvraagroute, bescherming van persoonsgegevens, voedselveiligheid, keuzevrijheid en de manier waarop ondersteuning de prijs verlaagt, moeten worden uitgewerkt. Er kan nu nog geen pakket worden aangevraagd.",
  },
  pilot: {
    introduction: "Niet meteen heel Nederland. Test eerst één lokaal systeem met 100 deelnemers. Meet kosten, verspilling, voedingswaarde, gebruik en logistiek. Verbeter wat niet werkt. Schaal alleen wat wel werkt.",
    dimensions: [
      { label: "Voorgestelde proefomvang", value: "100 deelnemers; er is nog geen proef gestart" },
      { label: "Locatie en duur", value: "Nog te bepalen" },
      { label: "Pakket en voedingswaarde", value: "Wordt doorgerekend" },
      { label: "Meetpunten", value: "Kosten, verspilling, voedingswaarde, gebruik en logistiek" },
    ],
  },
  costs: {
    status: "Wordt doorgerekend",
    items: ["Voedsel en inkoop", "Opslag en koeling", "Verpakking", "Distributie", "Inkomensafhankelijke ondersteuning", "Aanvraag en administratie", "Verspilling", "Evaluatie"],
    note: "Als de cijfers het idee tegenspreken, verandert het voorstel.",
  },
  evidence: {
    sources: [],
    knownEmptyState: "Er zijn nog geen geverifieerde onderzoeksbronnen aan BOUW Basis toegevoegd. De werking, voedingskundige geschiktheid en economische haalbaarheid zijn niet aangetoond. Dit is een voorstel om te onderzoeken, geen bewezen oplossing.",
    questions: ["Welke producten en hoeveelheden vormen een passende basis voor verschillende huishoudens?", "Hoe kan ondersteuning geleidelijk afnemen zonder onnodige administratie of verlies van privacy?", "Wat zijn de volledige kosten van beide lagen, en hoe werken ze samen?", "Wordt het pakket gebruikt, en hoe beperken we verspilling?", "Welke productie en distributie zijn betrouwbaar en uitvoerbaar?"],
  },
  objections: ["Hoe voorkomen we verspilling en ongewenste effecten op bestaande leveranciers?", "Hoe blijven aanvraag en inkomensondersteuning toegankelijk en privacyvriendelijk?", "Wat doen we als het pakket of de uitvoering ongeschikt of te duur blijkt?"],
  results: {
    status: "Nog geen resultaten.",
    description: "Er is nog geen pilot gestart of uitgevoerd. Hier komen later gemeten uitkomsten met meetmethode, kosten, bronnen en beperkingen. Ook tegenvallende resultaten worden gepubliceerd. Het groeipad is voorwaardelijk, geen toezegging van landelijke invoering.",
    outcomes: [],
  },
  challenge: {
    heading: "Wat zien we over het hoofd?",
    lead: "Een voorstel wordt beter door kritiek.",
    prompts: ["Welke aanname moeten we als eerste toetsen?", "Welke kosten, voedingsbehoeften of uitvoeringsrisico’s ontbreken?"],
    availability: "Vragen en kritiek kunnen via het bestaande Doe mee-formulier worden gedeeld.",
  },
  nextStep: {
    introduction: "Eerst de basis definiëren en de volledige kosten modelleren. Daarna beslissen of een lokaal proefontwerp verantwoord is.",
    tasks: ["Het pakket en de inkomensafhankelijke ondersteuning afbakenen", "De aannames, kosten en voedingswaarde inzichtelijk maken", "Vooraf meetmethoden en criteria voor aanpassen, stoppen of doorgaan vastleggen"],
  },
};
