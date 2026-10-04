import type { ProposalPlan } from "@/types/proposal";

export const movementProposalPlan: ProposalPlan = {
  headings: {
    problem: "Is bewegen voor iedereen bereikbaar?",
    concept: "Een dagelijkse basis, met ruimte voor verschil.",
    context: "Gezondheid als doel. Ruimte voor het individu.",
    delivery: "Hoe zou het kunnen werken?",
    costs: "Wat vraagt dit aan middelen?",
    evidence: "Onderbouwing vóór overtuiging.",
    objections: "Een goed bouwplan moet kritiek kunnen verdragen.",
  },
  categoryListLabel: "Mogelijke activiteiten · programma nog te onderzoeken",
  lead: "Wat als bewegen voor jongeren net zo vanzelfsprekend wordt als onderwijs?",
  introduction: "BOUW wil onderzoeken hoe jongeren een sterke dagelijkse basis van bewegen, sport en praktische ontwikkeling kunnen krijgen. Het doel is gezondere, fittere en meer zelfredzame jongeren — niet straf, uiterlijk of sportprestaties. Dit is een voorstel in onderzoek. Ook de vraag of deelname vrijwillig, gestimuleerd of verplicht zou zijn, staat open.",
  problem: {
    paragraphs: [
      "Krijgen jongeren voldoende gelegenheid om regelmatig te bewegen? En maken hun omgeving, dagindeling en beschikbare voorzieningen dat voor iedereen mogelijk? BOUW wil eerst begrijpen waar eventuele drempels liggen, zonder aan te nemen dat alle jongeren hetzelfde probleem hebben.",
      "Kosten, reistijd, veiligheid, toegankelijkheid en de aansluiting bij iemands interesses kunnen vragen oproepen. Ook een beperking, chronische aandoening, mentale belasting of eerdere negatieve sportervaring verdient aandacht. Welke factoren daadwerkelijk een drempel vormen en voor wie, moet worden onderzocht.",
      "We hebben aan dit bouwplan nog geen geverifieerde bronnen toegevoegd over de omvang van het vraagstuk. We doen daarom geen uitspraak over hoeveel jongeren te weinig bewegen, of over het effect van een nog niet ontworpen programma.",
    ],
    callout: "De vraag is niet alleen hoeveel jongeren bewegen. De vraag is wat zij nodig hebben om mee te kunnen én te willen doen.",
  },
  concept: {
    introduction: "Het werkidee is een dagelijks beweegkader met verschillende activiteiten en passende begeleiding. Geen uniforme prestatie-eis of één oefenschema voor iedereen, maar ruimte voor leeftijd, interesses, mogelijkheden, herstel en persoonlijke omstandigheden.",
    categories: ["Wandelen en hardlopen", "Krachttraining met passende begeleiding", "Teamsporten", "Fietsen", "Zwemmen", "Vechtsporten", "Praktische lichamelijke activiteiten", "Aangepast bewegen bij beperkingen of chronische aandoeningen"],
    caveat: "Nog te onderzoeken: duur, intensiteit, frequentie, begeleiding, veiligheid en individuele aanpassingen. Deze lijst is geen trainingsadvies. Er zijn geen vaste prestatienormen of extreme eisen vastgesteld.",
    context: "Persoonlijke vrijheid en lichamelijke en mentale gezondheid moeten deel zijn van het ontwerp. Jongeren verschillen: hetzelfde aanbod kan voor de één toegankelijk zijn en voor de ander ongeschikt. We moeten onderzoeken welke rol jongeren, ouders, scholen en lokale aanbieders kunnen en willen dragen, zonder hun verantwoordelijkheid of beschikbare tijd vooraf vast te leggen.",
    designQuestion: {
      heading: "Vrijwillig, gestimuleerd of verplicht?",
      introduction: "Een mogelijke sportplicht is een open ontwerpvraag, geen besloten BOUW-beleid. Eerst moet duidelijk zijn of een dagelijkse beweegbasis wenselijk en haalbaar is, en of ondersteuning hetzelfde doel beter kan bereiken dan dwang. De volgende afwegingen zijn onderzoeksvragen, geen bewezen effecten.",
      options: [
        { title: "Vrijwillig", description: "Hoe behouden we keuzevrijheid en bereiken we ook jongeren voor wie deelname nu moeilijk is? Wat zou een toegankelijk, aantrekkelijk aanbod zonder verplichting opleveren?" },
        { title: "Gestimuleerd", description: "Kunnen begeleiding, betaalbaar aanbod en passende stimulansen deelname ondersteunen? Hoe voorkomen we dat een beloning toch druk oplevert of verschillen tussen jongeren vergroot?" },
        { title: "Verplicht", description: "Is een minimale beweegverwachting te rechtvaardigen? Wie bepaalt wat passend is, welke uitzonderingen gelden en wat gebeurt er bij niet-deelname? Hoe voorkomen we dat handhaving of straf het doel ondermijnt?" },
      ],
      unresolved: "Geen variant is gekozen. Eventuele verplichting vraagt afzonderlijk onderzoek naar vrijheid, rechten, uitvoerbaarheid en proportionaliteit. Een pilot met een vrijwillig aanbod zou op zichzelf geen bewijs zijn voor de rechtvaardiging of werking van dwang. We stellen nu geen sancties of handhavingsregels voor.",
    },
  },
  delivery: {
    flow: ["Drempels en wensen begrijpen", "Passend aanbod organiseren", "Deelname mogelijk maken", "Effecten en ervaringen meten"],
    options: ["Een vrijwillig lokaal aanbod met verschillende activiteiten", "Bewegen tijdens of rond de schooldag", "Samenwerking met geschikte sport- en beweegaanbieders, nog te verkennen", "Toegankelijke begeleiding en aangepast aanbod", "Ondersteuning bij kosten, vervoer en andere praktische drempels"],
    unresolved: "Geen uitvoeringsvorm of samenwerking is vastgesteld. De rollen van ouders, scholen en aanbieders, de leeftijdsgrenzen, privacy, toegankelijkheid, toezicht en benodigde deskundigheid staan open. Er moet ook ruimte zijn om bezwaar te maken, niet mee te doen of een passend alternatief te vinden. De afweging tussen vrijwilligheid, stimulering en verplichting moet apart worden onderzocht.",
  },
  pilot: {
    introduction: "Eerst klein. Dan meten. Dan beslissen. Er is nog geen BOUW-pilot uitgevoerd of gestart. Een mogelijke eerste proef zou moeten onderzoeken of een veilig, toegankelijk en vrijwillig aanbod aansluit bij jongeren. Deelnamevoorwaarden, toestemming, begeleiding en stopcriteria moeten vooraf worden uitgewerkt. Een proef is geen landelijke invoering en beslist niet automatisch over sportplicht.",
    dimensions: [
      { label: "Locatie", value: "Nog te bepalen" },
      { label: "Aantal deelnemers en leeftijden", value: "Nog te bepalen" },
      { label: "Duur", value: "Nog te bepalen" },
      { label: "Beweegprogramma", value: "Te ontwikkelen met passende deskundigheid en inbreng van jongeren" },
      { label: "Deelname en toestemming", value: "Nog te bepalen; geen verplichting of sancties vastgesteld" },
      { label: "Aanpassingen en veiligheid", value: "Te ontwerpen voor uiteenlopende lichamelijke en mentale mogelijkheden" },
      { label: "Kosten per deelnemer", value: "Te berekenen" },
      { label: "Mogelijke meetpunten", value: "Deelname, volhouden, welzijn, fitheid, blessures, plezier, uitval en kosten — meetmethoden nog te bepalen" },
      { label: "Stopcriteria en evaluatie", value: "Vooraf te bepalen, inclusief ongewenste effecten" },
    ],
  },
  costs: {
    status: "Nog te berekenen",
    items: ["Locaties en voorzieningen", "Coaches en begeleiding", "Materiaal en onderhoud", "Administratie en planning", "Toegankelijkheid en aanpassingen", "Vervoer en bereikbaarheid", "Veiligheid en toezicht", "Evaluatie en onderzoek"],
    note: "Een voorstel zonder kostenplaatje is nog geen bouwplan.",
  },
  evidence: {
    sources: [],
    knownEmptyState: "Er zijn nog geen geverifieerde onderzoeksbronnen aan dit bouwplan toegevoegd. Daarom geven we hier geen wetenschappelijke conclusies over gezondheidseffecten, deelname of verplichting. Dat jongeren de mogelijkheid moeten krijgen om passend te bewegen is ons uitgangspunt. Of dit kader werkt en welke deelnamevorm te rechtvaardigen is, moet nog worden onderbouwd.",
    questions: ["Welke drempels ervaren verschillende groepen jongeren?", "Welk aanbod is veilig, toegankelijk en aantrekkelijk voor uiteenlopende mogelijkheden?", "Wat verandert er in deelname, welzijn, fitheid en plezier, en hoe meten we dat zorgvuldig?", "Welke blessures, mentale belasting, uitval of andere ongewenste effecten ontstaan?", "Wat zijn de volledige kosten en de lasten voor ouders, scholen en aanbieders?", "Wat kunnen vrijwilligheid en ondersteuning bereiken, en welke afzonderlijke onderbouwing zou eventuele verplichting vragen?"],
  },
  objections: [
    "Moet de overheid dit überhaupt verplichten?",
    "Wat gebeurt er als iemand niet meedoet?",
    "Hoe voorkomen we dat gezondheid verandert in straf?",
    "Hoe maken we deelname mogelijk voor jongeren met beperkingen?",
    "Is ondersteuning effectiever dan verplichting?",
    "Hoe beschermen we persoonlijke vrijheid en keuze voor een passende activiteit?",
    "Hoe houden we rekening met chronische aandoeningen, mentale gezondheid en herstel?",
    "Wie beslist wat haalbaar is zonder jongeren te stigmatiseren?",
    "Wat mogen we van ouders en scholen verwachten?",
    "Wie betaalt het aanbod, vervoer en noodzakelijke aanpassingen?",
    "Wie zou een verplichting handhaven, en welke lasten en privacyrisico’s brengt dat mee?",
    "Wanneer moeten we aanpassen of stoppen omdat de nadelen zwaarder wegen?",
  ],
  results: {
    status: "Nog geen resultaten.",
    description: "Er is nog geen BOUW-pilot uitgevoerd. Hier komen later gemeten uitkomsten met meetmethoden, bronverwijzingen en beperkingen, inclusief blessures, uitval en ervaringen van jongeren. Ook nulresultaten of nadelige effecten moeten zichtbaar worden. Nu zijn er geen resultaten die dit voorstel of sportplicht rechtvaardigen.",
    outcomes: [],
  },
  challenge: {
    heading: "Wat zien we over het hoofd?",
    lead: "Een bouwplan wordt beter door kritiek, niet door kritiek te vermijden.",
    prompts: ["Welke vrijheid, beperking of ervaring krijgt te weinig aandacht?", "Welke ondersteuning zou beter kunnen werken dan verplichting?", "Wat moeten we eerst onderzoeken voordat een proef verantwoord is?"],
    availability: "Meedenken en kritiek delen wordt hier later mogelijk. Er is nu nog geen inzendformulier; reacties worden op deze pagina niet verzameld.",
  },
  nextStep: {
    introduction: "Eerst bepalen wat een verantwoord onderzoek moet toetsen. Een toegankelijke beweegbasis ontwerpen en de vraag naar verplichting onderzoeken zijn verschillende stappen. Pas na onderbouwing en evaluatie kan worden besloten of het idee verder verdient te gaan.",
    tasks: ["De doelen, doelgroepen en ervaren drempels afbakenen", "Jongeren met uiteenlopende mogelijkheden betrekken bij het ontwerp", "Een veilig en aanpasbaar beweegaanbod uitwerken", "Vrijwilligheid, ondersteuning en verplichting afzonderlijk beoordelen", "Rollen, toestemming, privacy en het volledige kostenmodel uitwerken", "Meetmethoden, evaluatiecriteria en stopvoorwaarden vastleggen vóór een eventuele pilot"],
  },
};
