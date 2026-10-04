export type Position = {
  id: string;
  title: string;
  direction: string;
  investigation: string;
  questions?: string[];
  detail?: { title: string; paragraphs: string[]; items?: string[] };
  note?: string;
  principle?: string;
  pilotNeeded?: boolean;
  links?: { label: string; href: string }[];
  source?: { label: string; href: string };
};

export const positionDefinitions = [
  { label: "Standpunt", status: "Richting", description: "Waar BOUW Nederland naartoe wil bewegen. Een overtuiging, geen bewezen maatregel." },
  { label: "Voorstel", status: "In onderzoek", description: "Een mogelijke uitvoering. Aannames, kosten, gevolgen en alternatieven moeten nog worden onderzocht." },
  { label: "Pilot", status: "Pilot nodig", description: "Een volgende onderzoeksstap, zodra het plan toetsbaar genoeg is. Dit label betekent niet dat er al een proef loopt." },
  { label: "Resultaat", description: "Een daadwerkelijk gemeten uitkomst, met methode, bronnen en beperkingen. Er zijn nog geen BOUW-pilotresultaten gepubliceerd op deze site." },
];

export const positions: Position[] = [
  {
    id: "01", title: "Vers eten moet goedkoper",
    direction: "Verse, voedzame plantaardige voeding moet veel betaalbaarder worden. Gezond eten hoort niet de luxe optie te zijn.",
    investigation: "BOUW onderzoekt of meer aanbod van Nederlandse en internationale telers, kastechnologie, efficiënte logistiek, kortere ketens waar zinvol en minder verspilling de werkelijke kosten kunnen verlagen. Voor huishoudens voor wie gezond eten dan nog moeilijk betaalbaar blijft, willen we onderzoeken of ondersteuning kan meebewegen met het huishoudinkomen.",
    note: "Lokale productie is niet automatisch goedkoper. Volledige kosten, importalternatieven en wie eventuele besparingen ontvangt, blijven open vragen. Inkomensafhankelijke ondersteuning is geen vastgesteld systeem.",
    links: [{ label: "Verken Vers eten moet goedkoper", href: "/voorstellen/vers-eten-moet-goedkoper" }],
  },
  {
    id: "02", title: "Goed eten voor jongeren die bouwen aan hun toekomst",
    direction: "Jongeren moeten kunnen leren, zich ontwikkelen en werken zonder de dag met honger door te komen.",
    investigation: "We willen toegang tot verse, voedzame maaltijden onderzoeken voor jongeren in de middelbareschoolleeftijd en voor jongeren in toekomstige, erkende praktische leer- en werktrajecten. Wie in aanmerking komt, welke leeftijden passend zijn, hoe het wordt betaald en hoe de maaltijd wordt aangeboden, staan nog open.",
    note: "BOUW voert geen maaltijdprogramma uit en heeft geen afspraken met scholen of leerwerkorganisaties. Eventuele trajecten moeten onderwijskundig en juridisch worden ontwikkeld.",
    links: [{ label: "Verken Gezond eten als basis", href: "/voorstellen/gezond-eten-als-basis" }],
  },
  {
    id: "03", title: "Een persoonlijk voedselpakket",
    direction: "Ondersteuning bij gezond eten moet eenvoudig, passend en toegankelijk kunnen zijn. Een voedingsbasis hoeft niet voor iedereen hetzelfde pakket te betekenen.",
    investigation: "Een mogelijke uitwerking is een eenvoudig overheidssysteem waarmee mensen die in aanmerking komen terugkerende pakketten verse plantaardige producten kunnen ontvangen. De voorwaarden, samenstelling, financiering en uitvoering moeten nog worden onderzocht.",
    detail: {
      title: "Een mogelijke digitale dienst — nog geen bestaande voorziening",
      paragraphs: ["We onderzoeken als concept een nieuwe overheidsdienst met DigiD, waarmee iemand toegang tot een passend pakket zou kunnen regelen. Er is geen dienst gebouwd, geen DigiD-koppeling en geen overheidsafspraak. Ook een goed toegankelijk alternatief voor wie digitaal niet mee kan doen, moet worden onderzocht."],
      items: ["Veilig identificeren", "Inzien of en waarom iemand in aanmerking komt", "Kiezen uit beschikbare verse plantaardige producten", "Alleen gegevens delen die echt nodig zijn om voedingsbehoeften te bepalen", "Voorkeuren of allergieën aangeven wanneer dat relevant en noodzakelijk is", "Bezorging of afhalen beheren", "Zien welke informatie wordt bewaard en waarom"],
    },
    note: "Dataminimalisatie is het uitgangspunt. Lengte, gewicht of gezondheidsinformatie verzamelen we niet alleen omdat dat mogelijk is. Zulke gegevens zijn gevoelig; noodzaak, privacy, beveiliging, bewaartermijnen en een passende juridische grondslag moeten eerst zorgvuldig worden uitgewerkt. Deze pagina vraagt of verzamelt geen persoonlijke gegevens.",
    source: { label: "Privacykader: Autoriteit Persoonsgegevens over gezondheidsgegevens", href: "https://autoriteitpersoonsgegevens.nl/themas/gezondheid" },
    links: [{ label: "Verken het onderzoek naar een voedingsbasis", href: "/voorstellen/gezond-eten-als-basis" }],
  },
  {
    id: "04", title: "Bewegen hoort bij opgroeien",
    direction: "Lichamelijke ontwikkeling en regelmatig bewegen verdienen een normale, sterke plek in het opgroeien. Het doel is gezondheid en mogelijkheden, niet straf of uniforme prestaties.",
    investigation: "Sport, wandelen, hardlopen, krachtontwikkeling, praktisch lichamelijk werk en andere toegankelijke activiteiten zijn mogelijke onderdelen. We willen ook onderzoeken of gestructureerde lichamelijke ontwikkeling kan passen binnen toekomstige praktische onderwijs- en werktrajecten. Een sportplicht of minimale deelnameverwachting kan worden onderzocht, maar is geen vastgesteld beleid.",
    questions: ["Hoe houden we rekening met beperkingen, gezondheid en individuele verschillen?", "Wat is toegankelijk en proportioneel, met respect voor vrijheid?", "Past een toekomstige aanpak binnen de bestaande onderwijsregels?", "Werken ondersteuning en stimulansen beter dan straf of dwang?"],
    note: "Gewoon schoolverzuim plaatst een kind niet automatisch in een BOUW-programma. Er is geen programma of plaatsingsregeling. Keuzevrijheid, passende begeleiding en juridische en onderwijskundige toetsing moeten vooraf worden uitgewerkt.",
    links: [{ label: "Verken Iedere dag bewegen", href: "/voorstellen/iedere-dag-bewegen" }],
  },
  {
    id: "05", title: "Nederland als knooppunt voor plantaardig voedsel",
    direction: "BOUW wil onderzoeken of Nederland een uitzonderlijk internationaal knooppunt kan worden voor voedzame plantaardige producten. Een sterke, eerlijke opbrengst voor telers moet samengaan met ruimere toegang tot goed eten hier.",
    investigation: "We willen de mogelijkheden van logistiek, havens, landbouw, kaskennis, voedseltechnologie en internationale handel verkennen, samen met de mogelijke rol van Nederlandse én internationale boeren en telers. De vraag is hoe een groot en betrouwbaar aanbod gezond eten eenvoudiger en betaalbaarder kan maken, zonder een goede vergoeding voor producenten uit het oog te verliezen.",
    principle: "Betaal de boer goed.\nVoed de jeugd goed.\nBouw een sterker land.",
    questions: ["Welke producten en ketens bieden werkelijk voordeel?", "Hoe verbinden we een eerlijke opbrengst aan betaalbare consumentenprijzen?", "Welke infrastructuur zou nodig zijn, en wie draagt kosten en risico’s?"],
    note: "Het gaat om een systeem om te onderzoeken, niet alleen om meer import. BOUW heeft geen telersovereenkomsten, importprogramma’s of operationele voedselinfrastructuur. LOOP en AGRIA zijn concepten, geen bewijs dat deze keten al bestaat.",
    links: [{ label: "Onderzoek naar betaalbaar vers eten", href: "/voorstellen/vers-eten-moet-goedkoper" }, { label: "Ontdek LOOP", href: "/#loop" }, { label: "Ontdek AGRIA", href: "/#agria" }],
  },
  {
    id: "06", title: "Warmte moet betaalbaar zijn",
    direction: "Huishoudelijke warmte moet betaalbaar blijven. De manier waarop moet ook op gezondheid, veiligheid en gevolgen voor de omgeving worden beoordeeld.",
    investigation: "We willen onderzoeken of haarden, moderne houtverwarming en verantwoord gewonnen brandhout voor sommige huishoudens een bruikbare rol kunnen spelen. Mogelijke ideeën zijn het verlagen of wegnemen van bepaalde belastingen op geschikte apparatuur bij aantoonbaar publiek voordeel, en betere toegang tot betaalbaar, verantwoord gewonnen hout. Geen van deze maatregelen is vastgesteld.",
    questions: ["Wat zijn de gevolgen voor luchtkwaliteit, gezondheid en uitstoot?", "Hoe wegen brandveiligheid, rendement en duurzaam bosbeheer mee?", "Waar verschilt geschiktheid tussen stad en platteland?", "Wat zijn de belastinggevolgen en wie ontvangt het voordeel?", "Hoe verhoudt dit zich tot warmtepompen, warmtenetten en andere alternatieven?"],
    note: "Dit is geen stookadvies of voorstel dat houtverwarming overal geschikt verklaart. Gezondheidsrisico’s en effecten voor omwonenden horen vanaf het begin bij het onderzoek. ‘Belastingvrije haarden’ is geen BOUW-beleid.",
    source: { label: "Onderzoekscontext: RIVM over houtrook en gezondheid", href: "https://www.rivm.nl/houtrook/effecten-van-houtrook-op-gezondheid" },
  },
  {
    id: "07", title: "Praktisch leren is echt onderwijs",
    direction: "Wie tot zijn recht komt door te bouwen, repareren, telen, koken, ontwerpen of maken, verdient een serieuze onderwijsroute naar volwassenheid. Vakmanschap hoort echte status te hebben.",
    investigation: "We willen erkende routes verkennen waarin onderwijs, vakmanschap, beweging, goede voeding en praktijkervaring elkaar versterken. Welke begeleiding, kwaliteitseisen en verantwoordelijkheden daarbij horen, moet nog worden ontwikkeld.",
    detail: { title: "Onderwijs + vakmanschap + beweging + goede voeding + praktijkervaring", paragraphs: ["Een toekomstig traject moet binnen de bestaande leerplicht en, waar van toepassing, kwalificatieplicht worden ontworpen. Als verandering van onderwijsregels nodig zou zijn, moet die uitdrukkelijk juridisch en democratisch worden uitgewerkt. Dit is geen toestemming voor 13-jarigen om school te verlaten, en BOUW biedt nu geen erkend traject aan."] },
    source: { label: "Onderwijskader: Rijksoverheid over leerplicht en kwalificatieplicht", href: "https://www.rijksoverheid.nl/themas/onderwijs/leerplicht/leerplicht-en-kwalificatieplicht" },
  },
  {
    id: "08", title: "Bouw totdat wonen weer normaal wordt",
    direction: "We willen schaarste aan woningen aanpakken door veel meer te bouwen, met aandacht voor betaalbaarheid en leefbare buurten.",
    investigation: "Modulaire bouw, snellere methoden, alternatieve buurtmodellen, kleinere betaalbare woningen en nieuwe materialen en productietechnieken verdienen ontwikkeling en toetsing. Kwaliteit, infrastructuur en volledige kosten moeten onderdeel zijn van de afweging.",
    note: "HABITARY verkent dit als woonconcept. Het is niet operationeel en er zijn geen aangetoonde bouwtempo’s, gerealiseerde woningen of besparingen van BOUW.",
    links: [{ label: "Ontdek het concept HABITARY", href: "/#habitary" }],
  },
  {
    id: "09", title: "Pak schulden aan voordat ze levens beheersen",
    direction: "Kleine financiële problemen mogen niet onnodig uitgroeien tot jarenlange schade. Herstel moet mogelijk zijn.",
    investigation: "BOUW wil eerder ingrijpen, eenvoudigere routes uit problematische schulden verkennen en systemen onderzoeken die herstel ondersteunen. Kennis en begeleiding zijn mogelijke onderdelen; werking en kosten moeten worden getoetst.",
    note: "LIFTED is een concept om te ontwikkelen, geen bestaande hulpdienst. Er zijn geen gemeten resultaten van een BOUW-schuldenprogramma.",
    links: [{ label: "Ontdek het concept LIFTED", href: "/#lifted" }],
  },
  {
    id: "10", title: "Werken moet weer iets opleveren",
    direction: "Wie nuttige vaardigheden leert, werkt en bijdraagt, moet een geloofwaardig pad naar zelfstandigheid hebben.",
    investigation: "We willen onderzoeken hoe belastingen, toeslagen, woonlasten en andere systemen op elkaar inwerken, zodat meer verdienen ook daadwerkelijk ruimte in iemands leven kan geven. De effecten moeten per situatie worden bekeken.",
    note: "Dit is een richting voor onderzoek. Er is in dit standpunt geen specifiek belastingplan, berekende koopkrachtwinst of vastgestelde maatregel.",
  },
  {
    id: "11", title: "Technologie moet mensen sterker maken",
    direction: "AI, automatisering, biotechnologie, engineering en nieuwe productiemethoden moeten menselijke mogelijkheden en overvloed vergroten. Technologie hoort meer op te leveren dan alleen extra productiviteit.",
    investigation: "We willen toepassingen beoordelen op hun werking, gevolgen, veiligheid en bijdrage aan kwaliteit van leven. Technische mogelijkheden zijn een beginpunt voor onderzoek, geen garantie op maatschappelijk voordeel.",
    note: "AGRIA en CYTARA zijn concepten waarin zulke vragen kunnen worden verkend. Speculatieve toepassingen, vooral rond gezondheid en biotechnologie, zijn geen bewezen technologieën of behandelingen.",
    links: [{ label: "Ontdek AGRIA", href: "/#agria" }, { label: "Ontdek het onderzoeksconcept CYTARA", href: "/#cytara" }],
  },
  {
    id: "12", title: "Eerst proberen. Dan meten. Dan opschalen.",
    direction: "Waar dat praktisch kan, moeten overheid en samenleving ideeën eerlijk testen voordat het hele land eraan wordt verbonden.",
    investigation: "Een plan moet vooraf duidelijk maken wat we willen leren, wat succes betekent, wat het kost en wanneer we aanpassen of stoppen. Een pilot is een onderzoeksstap; een positief resultaat in één context rechtvaardigt niet automatisch landelijke invoering.",
    principle: "Mislukken mag. Verbergen niet.",
    pilotNeeded: true,
    detail: { title: "Van vraag naar toetsbaar bouwplan", paragraphs: ["Probleem → Bouwplan → Pilot → Meten → Publiceren → Verbeteren → Opschalen of stoppen", "Publiceer ook tegenvallers, negatieve uitkomsten en beperkingen. Onze voorstellen hebben nog geen BOUW-pilotresultaten; eerst moeten toetsbare ontwerpen worden uitgewerkt."] },
    links: [{ label: "Bekijk de voorstellen in onderzoek", href: "/#voorstellen" }],
  },
  {
    id: "13", title: "Goede ideeën hebben geen politieke kleur",
    direction: "Begin niet met ‘Is dit links of rechts?’ Begin met ‘Werkt het?’",
    investigation: "Beoordeel een idee op bewijs, gevolgen, haalbaarheid, betaalbaarheid, vrijheid en meetbare resultaten. We moeten onze eigen aannames kunnen herzien en ook een geliefd idee kunnen loslaten wanneer de onderbouwing ontbreekt.",
    questions: ["Welk bewijs hebben we en wat weten we nog niet?", "Voor wie werkt het, onder welke omstandigheden en tegen welke kosten?", "Welke gevolgen heeft het voor vrijheid en wat meten we daadwerkelijk?"],
    links: [{ label: "Lees ook Onze visie", href: "/onze-visie" }],
  },
];
