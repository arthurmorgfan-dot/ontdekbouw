import type { ProposalPlan } from "@/types/proposal";

export const affordableFoodProposalPlan: ProposalPlan = {
  headings: {
    problem: "Waar ontstaat de prijs van vers eten?",
    concept: "Lagere kosten, van producent tot consument.",
    context: "Dichterbij is een mogelijkheid, geen garantie.",
    delivery: "Welke keten zouden we kunnen testen?",
    costs: "De volledige rekening telt.",
    evidence: "Onderbouwing vóór overtuiging.",
    objections: "Een goed bouwplan moet kritiek kunnen verdragen.",
  },
  categoryListLabel: "Mogelijke mechanismen · hypotheses om te onderzoeken",
  lead: "Waarom is vers en gezond eten vaak duurder dan sterk bewerkt voedsel — en hoeveel daarvan kunnen we daadwerkelijk veranderen?",
  introduction: "Gezond eten zou niet de luxe optie moeten zijn. BOUW onderzoekt of lokale productie, slimme kassen en kortere voedselketens verse, voedzame voeding structureel betaalbaarder kunnen maken voor iedereen. Ook de prijsvergelijking zelf moet worden onderzocht: per product, seizoen en vergelijkbare hoeveelheid. Dit is een werkidee, geen bewezen oplossing of beloofde prijsverlaging.",
  problem: {
    paragraphs: [
      "De kernvraag is welke kosten tussen productie en aankoop ontstaan, en welke daarvan daadwerkelijk te verlagen zijn. We willen verse producten en alternatieven zorgvuldig vergelijken, zonder vooraf aan te nemen dat vers eten altijd duurder is of dat één productiemethode overal voordelig is.",
      "Energie, arbeid, grond, bouw, financiering, verpakking, transport, opslag, verspilling en distributie zijn mogelijke onderdelen van die rekening. Welke posten doorslaggevend zijn, verschilt mogelijk per gewas en regio. Hun aandeel in de uiteindelijke consumentenprijs is in dit bouwplan nog niet onderbouwd.",
      "Dit voorstel gaat over betaalbaarheid voor iedereen. ‘Gezond eten als basis’ stelt daarnaast een andere vraag: moeten jongeren toegang tot een voedingsbasis krijgen, ook wanneer lagere prijzen voor hun huishouden nog niet genoeg zijn? Een efficiëntere keten en gegarandeerde toegang zijn verschillende onderzoeken.",
    ],
    callout: "Een goedkopere keten is pas een voordeel voor huishoudens als de besparing ook in hun prijs terechtkomt.",
  },
  concept: {
    introduction: "Het werkidee is om verschillende manieren van produceren en verdelen te vergelijken. We onderzoeken of onnodige kosten kunnen verdwijnen zonder kwaliteit, voedingswaarde, betrouwbaarheid of een houdbare vergoeding voor producenten uit het oog te verliezen.",
    categories: ["Produceren dichter bij de consumptie", "Kastechnologie passend bij lokale omstandigheden", "Kortere en eenvoudiger voedselketens", "Minder transport- en opslagverliezen", "Minder voedselverspilling", "Directe of vereenvoudigde distributie", "Groter productievolume waar dat zinvol is", "Seizoensgebonden productie"],
    caveat: "Nog te onderzoeken: of deze mechanismen werkelijk kosten verlagen, voor welke gewassen en onder welke omstandigheden. Meer productie of minder schakels betekent niet automatisch een lagere winkelprijs; capaciteit, vraag, marktmacht en de verdeling van besparingen moeten worden onderzocht.",
    context: "LOOP- en AGRIA-achtige systemen zouden een rol kunnen spelen bij lokale of regionale productie. Dat is een mogelijkheid om te onderzoeken, geen bestaande levering of samenwerking. Energie- en bouwkosten kunnen de afweging veranderen. Import kan in sommige omstandigheden efficiënter zijn; lokale productie moet daarom worden vergeleken met reële alternatieven, niet bij voorbaat als winnaar worden gekozen.",
  },
  delivery: {
    flow: ["Kosten per product begrijpen", "Productie en ketens vergelijken", "Een afgebakende aanpak testen", "Kosten én consumentenprijzen meten"],
    options: ["Lokale kasproductie vergelijken met bestaande importketens", "Seizoensproductie vergelijken met jaarrond aanbod", "Rechtstreekse verkoop of gebundelde lokale distributie onderzoeken", "Opslag, vervoer en vraagplanning anders organiseren", "Een bestaande keten verbeteren voordat nieuwe infrastructuur wordt gebouwd"],
    unresolved: "Geen productiemethode, gewas, locatie of distributievorm is gekozen. We moeten vaststellen wie investeert, wie risico draagt, wie eventuele besparingen ontvangt en hoe lagere kosten in de consumentenprijs zichtbaar kunnen worden. Ook leveringszekerheid, kwaliteit en gevolgen voor producenten vragen onderzoek.",
  },
  pilot: {
    introduction: "Eerst klein. Dan meten. Dan beslissen. Er is nog geen pilot gestart. Een mogelijke proef zou één of enkele producten en een afgebakende keten vergelijken met een duidelijk omschreven bestaande situatie. We moeten vooraf bepalen hoe we seizoen, kwaliteit, hoeveelheden en eventuele subsidies vergelijkbaar maken, en wanneer de aanpak moet worden aangepast of gestopt.",
    dimensions: [
      { label: "Locatie en gewassen", value: "Nog te bepalen op basis van economische en lokale omstandigheden" },
      { label: "Productiemethode", value: "Nog te vergelijken en te kiezen" },
      { label: "Vergelijkingsketen", value: "Nog te bepalen; lokale productie en import niet vooraf uitsluiten" },
      { label: "Duur en productievolume", value: "Nog te bepalen" },
      { label: "Distributie en afzet", value: "Nog te ontwerpen; geen afnemers of partners vastgelegd" },
      { label: "Volledige kosten", value: "Nog te berekenen, inclusief investeringen en eventuele ondersteuning" },
      { label: "Meetpunten", value: "Kosten per vergelijkbare eenheid, consumentenprijs, kwaliteit, verliezen, energiegebruik en verdeling van eventuele besparingen — methoden nog te bepalen" },
      { label: "Stopcriteria", value: "Vooraf te bepalen, ook als lokaal produceren duurder blijkt" },
    ],
  },
  costs: {
    status: "Nog te berekenen",
    items: ["Grond, bouw en infrastructuur", "Kastechnologie, materiaal en onderhoud", "Energie, water en overige productiemiddelen", "Arbeid en begeleiding", "Financiering en afschrijving", "Verpakking, opslag en koeling", "Transport en distributie", "Verliezen en voedselverspilling", "Administratie en eventuele publieke ondersteuning", "Evaluatie en onderzoek"],
    note: "Een voorstel zonder kostenplaatje is nog geen bouwplan.",
  },
  evidence: {
    sources: [],
    knownEmptyState: "Er zijn nog geen geverifieerde onderzoeksbronnen aan dit bouwplan toegevoegd. We presenteren daarom geen bewezen prijsvoordeel van lokale kassen, kortere ketens of grotere productie. Betaalbaar vers eten is onze ambitie; de werking en economische haalbaarheid van deze aanpak moeten nog worden onderbouwd.",
    questions: ["Wanneer is vers eten duurder dan een vergelijkbaar alternatief, en hoe vergelijken we dat eerlijk?", "Zijn lokale kassen goedkoper als energie, bouw, arbeid en financiering worden meegerekend?", "Wanneer zijn import of bestaande ketens efficiënter?", "Welke gewassen passen economisch bij lokale omstandigheden en seizoenen?", "Verlaagt een kortere keten ook werkelijk de consumentenprijs?", "Wie ontvangt eventuele besparingen en onder welke voorwaarden?", "Kan meer aanbod prijzen verlagen zonder nieuwe verliezen of onhoudbare producenteninkomens?", "Welke infrastructuur en publieke middelen zouden nodig zijn?"],
  },
  objections: [
    "Zijn lokale kassen werkelijk goedkoper na energie- en bouwkosten?",
    "Wanneer is import efficiënter dan lokaal produceren?",
    "Welke gewassen maken lokaal economisch zin?",
    "Verlaagt een kortere keten de prijs voor consumenten, of alleen kosten voor een tussenpartij?",
    "Wie ontvangt de besparingen: producenten, distributeurs of huishoudens?",
    "Hoeveel infrastructuur zou nodig zijn en wie draagt het investeringsrisico?",
    "Kan overheidsingrijpen het systeem onbedoeld duurder maken?",
    "Kan groter aanbod leiden tot verspilling of prijzen die producenten niet kunnen dragen?",
    "Blijft de aanpak betaalbaar wanneer subsidies of tijdelijke ondersteuning wegvallen?",
    "Wat doen we als de belangrijkste BOUW-aannames niet kloppen?",
  ],
  results: {
    status: "Nog geen resultaten.",
    description: "Er is nog geen pilot uitgevoerd. Hier komen later gemeten kosten, consumentenprijzen en andere uitkomsten met meetmethode, vergelijkingsbasis, bronnen en beperkingen. Ook een duurdere aanpak of een besparing die huishoudens niet bereikt, moet zichtbaar zijn. Nu zijn er geen aangetoonde prijsverlagingen of besparingen.",
    outcomes: [],
  },
  challenge: {
    heading: "Wat zien we over het hoofd?",
    lead: "Een bouwplan wordt beter door kritiek, niet door kritiek te vermijden.",
    prompts: ["Welke kosten of ketenschakels missen we?", "Waar zou import of een bestaande aanpak beter kunnen werken?", "Hoe zorgen we dat een eventuele besparing huishoudens bereikt?"],
    availability: "Meedenken en kritiek delen wordt hier later mogelijk. Er is nu nog geen inzendformulier; reacties worden op deze pagina niet verzameld.",
  },
  nextStep: {
    introduction: "Eerst de vergelijking scherp maken. Pas als producten, alternatieven en volledige kosten goed zijn afgebakend, kunnen we beoordelen welke hypothese een kleine proef verdient. De uitkomst mag ook zijn dat lokale productie voor een bepaalde situatie geen voordeel biedt.",
    tasks: ["Een productgroep en lokale omstandigheden kiezen om te onderzoeken", "Een eerlijke vergelijking met bestaande productie- en importketens uitwerken", "Kosten, benodigde infrastructuur en risico’s volledig modelleren", "Onderzoeken hoe eventuele besparingen in consumentenprijzen terechtkomen", "Geverifieerde bronnen verzamelen en aannames toetsbaar maken", "Een afgebakend pilotontwerp met meetmethoden en stopcriteria voorbereiden"],
  },
};
