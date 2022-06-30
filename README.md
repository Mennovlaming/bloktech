<!-- # blok-tech


# week 1
introductie

# week 2
meivakantie

# week 3
We hebben het in de les gehad over extensions van een editor, de verschillende soorten (bijvoorbeeld compilers, aanvullers van code en beautifyers.)

Tijdens de les moesten wij hier onderzoek naar doen en een paar dingen installeren. Ik heb hiervoor gekozen voor extensions genaamd beautify, ESLint en Peacock. 

Ik heb gekozen om 3 verschillende extensions te installeren om goed te laten zien hoe breed de hulp van een extension kan zijn. 

ESLint is een extension die je helpt nette Javascript te schrijven, doormiddel van het configureren van bepaalde standaarden controleert ESLint of je je aan deze standaarden houd, zo nee, krijg je errors te zien. ESLint is dus een taal specifieke extension. (lint)

Beautify is een extension die je helpt je code overzichtelijk te houden, het origaniseert je code op een goede en leesbare manier, zodat je het overzicht houd en een andere programmeur je werk ook zou snappen. 'goede code heeft geen documentatie nodig'. Beautify is een extenstion voor algemene code. (build)

Peacock is een extension dat je editor wat meer overzichtelijk maakt, het geeft elk los scherm een andere kleur, zodat je ook als je verschillende windows open hebt je nog kan zien wat waar is. Peacock is een extension voor de editor zelf, net als bijvoorbeeld een thema. (local)

# week 4
In deze les/week heb ik voornamelijk de nadruk gelegd op backend, ik liep tegen een aantal zaken op dat betrekking had op de database en het updaten en lezen van gegevens. Ik had een rare issue dat elke keer als ik de pagina refreshde, hij de gecashte data nog een keer ging pushen. 

Uiteindelijk heb ik de instructievideo van Danny nog een keer bekeken en gevolgd, dit heeft de isssue opgelost, al had ik geen idee wat het veroorzaakt had (Danny en Sonja ook niet).

Ik heb onderzoek gedaan naar verschillende API's die ik mogelijk kan gaan gebruiken. Omdat mijn applicatie best veel zou hebben aan informatie over evenementen en data, heb ik gekeken naar een ticketmaster API, met deze API kan je gegevens opvragen over festivals en andere evenementen die gebruik maken van ticketmaster. Dit kan handig zijn om gebruikers te laten weten voor wat ze een busrit nodig zouden moeten hebben. 

# week 5
Laatste week voor A1/eerste oplevering

Deze week was het voornamelijk puntjes op de i zetten, het verslag afronden, styling afmaken en zorgen dat er geen onverwachte errors meer komen. -->

# Readme file
Welkom bij de readme van dit project, hier zal wat uitleg geven over hoe je dit project kan runnen, en waar ik gebruik van heb gemaakt, na deze readme zou je zelf zonder problemen dit project kunnen runnen. 

clone de volgende repository van git om aan de slag te gaan met de applicatie

https://github.com/Mennovlaming/bloktech

# Setup project
Om het project te kunnen runnen, moet je NPM geinstalleerd hebben.
Om NPM te installeren, type in de terminal:

'NPM install'

Het project maakt gebruik van een database, MongoDB, een connectie hiermee is vereist voor de volledige functionaliteit.

Er zitten in de package.json een aantal voorgeprogrammerde commando's om de app te runnen, eentje hiervan is 'start'. Om te app te runnen type in de terminal:

'NPM start'

# API keys
De app maakt gebruik van 2 3rd party API's, om deze te gebruiken zal je een gepersonaliseerde API key moeten hebben. Om meer informatie te vinden hierover en om een API key aan te vragen kijk op:
- [Ticketmaster discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
- [Google places API ](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Positionstack API ](https://positionstack.com)


# .env bestand
Ik maak gebruik van een .env bestand, om de gevoelige en persoonlijke links en wachtwoorden voor mijzelf te houden. Bijgevoegd zit een .env_sample bestand, maak zelf een .env bestand aan en voeg in dit bestand je eigen keys, namen en wachtwoorden toe om hier gebruik van te maken. 

