# IT2810-prosjekt4

Michelindatabase er en side for å søke i alle restaurantene som fikk michelin stjerne i 2019. 
Det er mulighet for å filtrere på et utvalg regioner, de mest kjente mat-kategoriene, og prisklasse. 
I tillegg kan man sortere på navn (A-W), pris fra billigst til dyrest, og antall stjerner. 
Det er kun 15 restauranter som vises om gangen, resten kan man se ved å bla i sidene. 
For å se mer informasjon om restauranten kan man klikke på "more information" neders på "restaurant-kortet", som vil føre deg til restaurantens side. 


# Hvordan kjøre prosjektet


## Klone prosjektet

Åpne et tomt prosjekt i programmet du ønsker å kjøre prosjektet fra (F.eks. Visual Studio Code)

Åpne en terminal i denne mappen og skriv:

    git clone https://gitlab.stud.idi.ntnu.no/it2810-h20/team-41/prosjekt-4.git
    cd prosjekt-4
    cd project-4

## Kjør følgende kommandoer

    npm install
    npm install expo-cli --global (hvis ikke allerede installert)

## Kjøre prosjektet

    npm start

NB: For å kjøre prosjektet må du være koblet til NTNU nettet (evt. via vpn)    


# Teknologier

## Expo cli
Prosjektet er bygget opp av Expo-rammeverket. Expo er et rammeverk og en plattform for universelle React-applikasjoner. Det er et sett med verktøy og tjenester bygget rundt React Native og native plattformer som hjelper en med å utvikle, bygge og distribuere og på iOS-, Android- og webapper fra samme JavaScript / TypeScript-kodebase.

## Stack

Vi valgte å benytte oss av MERN stacken. Vi ønsket å benytte oss av en NoSQL database(se database under). Express er et rammeverk fra Node som gjør
det enkelt å bygge ut APIer uten å skrive mye kode. React er en veldokumentert biblioteket som gjør det enkelt å bygge ut web-komponenter uten mye
komplikasjoner ved håndtering av staten.


## Redux

Redux er blitt benyttet til state management, og alt av kode er gjenbrukt fra prosjekt 3.



# Bruk av tredjeparts-komponenter

**React Native Elements** er tredjeparts-komponenter til React Native og er benyttet til å bygge opp mye av aplikasjonen vår. 
Vi valgte å benytte oss av RNE som tredjeparts-komponent fordi den gjør utvikling av applikasjoner på tvers av plattformer ekstremt enkelt. 
RNE er godt dokumentert og fungerer derfor godt som et utgangspunkt for førstegangsbrukerer av React-Native. 
I tillegg har komponentene et fint design som sparte oss for tid på styling og passet fint til applikasjonen.


**React Navigation** ble brukt til routing mellom sidene med Stack Navigator biblioteket. Dette benytter seg av en slags “history stack”, der man kan da enkelt navigere mellom sider ved at appen “pusher” og “popper” sider fra navigasjon stacken. 
 

**Andre biblioteker**
- @react-navigation/native - lager navigasjonsstruktur i appen 
- @react-navigation/stack - til stack navigasjon
- @expo/vector-icons - ikoner
- react-native-vector-icons - ikoner
- react-native-check-box - checkbox løsning på filtrering



# Backend

Backend koden kjører på VM og det er derfor ikke nødvendig å starte serveren i prosjekt-4/backend. 
Prosjektet skal kjøre på http://it2810-41.idi.ntnu.no:3000. Backenden er klonet fra prosjekt 3 med marginale endringer. 
Hvis man mistenker at serveren er nede kan man sjekke om http://it2810-41.idi.ntnu.no:3000/api/restaurant viser data.

# Testing

I prosjekt 3, som bygger på omtrent den samme funksjonaliteten, gjennomførte vi både omfattende systematisk enhetstesting og automatisert end-to-end testing. Vi valgte derfor, i kombinasjon med hvordan kravene/fokusområdet til prosjekt 4 er gitt,
at det ikke var behov for utvikling av automatiske tester. Vi har likevel utført manuell end-to-end testing for å forsikre oss om at det ikke var noen åpenbare tekniske feil eller mangler i appen. De manuelle testene ble utført i stor grad i likhet med hvordan de automatiske end-to-end testen ble utført i prosjekt 3.
Appen ble testet på IPhone 11 (IOS), IPhone 11 pro (IOS), og huawei p20 (Android).
