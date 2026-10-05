export const contributionPaths = [
  { id: "meedenken", title: "Meedenken", description: "Klopt een aanname niet? Zie je een onbedoeld gevolg, een beter alternatief of iets dat we over het hoofd zien? Kritiek helpt een bouwplan vooruit." },
  { id: "meebouwen", title: "Meebouwen", description: "Breng kennis of praktische ervaring mee: landbouw, voedsel en logistiek, bouw, techniek, zorg en onderzoek, economie, onderwijs, AI en software, ontwerp, beleid of recht. We verkennen wat nodig is; er zijn geen bestaande teams of programma’s om je bij aan te sluiten." },
  { id: "bron", title: "Een bron delen", description: "Deel bewijs dat een idee ondersteunt én bewijs dat het tegenspreekt, een risico blootlegt of een alternatief laat zien. Vermeld waar de bron over gaat en wat we eruit kunnen leren." },
  { id: "pilot", title: "Een pilot helpen bouwen", description: "Denk mee over een kleine, meetbare proef: welke vraag, aanpak en meetpunten zijn zinvol? Dit is belangstelling voor toekomstig onderzoek, geen inschrijving voor een lopende pilot. Er zijn geen gepubliceerde BOUW-pilotresultaten." },
] as const;
export type ContributionType = typeof contributionPaths[number]["id"];
