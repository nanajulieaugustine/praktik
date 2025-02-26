"use strict";
const texts = {
  en: {
    texts: [
      {
        text: "During my internship, I want to focus on strengthening my skills across the entirety of my field. I am particularly fascinated by the part of the process where a project transitions from an idea to a final product. Therefore, I wish to work in-depth on tasks related to web/digital design, User Interface, and/or front-end development. In the third semester of my Multimedia Design studies, I chose the front-end development specialization, which has equipped me to take on tasks that require hands-on experience with software and dynamic coding. Additionally, I have extensive experience in design with a focus on optimizing user journeys — not only from my studies but also from other projects in the cultural and business sectors. I aim to bring my knowledge of both the creative process and my technical expertise to develop the best possible solutions and projects during my internship. Alongside my studies, I have developed websites for associations and educational programs under Holbæk Kulturskole. In these projects, I have worked independently and in-depth with UI development, design, and programming. Through these experiences, I have gained skills in understanding corporate identity and how it can be integrated into a final product. Additionally, I have worked with content creation as part of this process. In terms of my work process, I balance independence and collaboration while maintaining a solution-oriented approach. I have developed these skills partly through my experience in the service industry, where I currently work as a foyer manager at The Bellevue Theater. In this role, I am responsible for managing staff, ensuring smooth operations, and handling communication for performances. My interest in multimedia design stems from my engagement with literature, art, and film, which has allowed me to develop a creative approach across different media. I previously produced a documentary film that was screened at film festivals in Chicago, Toronto, and Stockholm with financial support from Sparekassen Sjælland-Fyn. Throughout the filmmaking process, I worked intensively on my creativity while also gaining business knowledge related to project financing and management.",
        location: ".p",
      },
      { text: "Internship application", location: ".headerp" },
      { text: "LinkedIn profile", location: "a" },
      { text: "Contact", location: ".footerh2" },
    ],
  },
  da: {
    texts: [
      {
        text: "Jeg vil under mit praktikforløb fokusere på at styrke mine kompetencer indenfor helheden af mit fag. Jeg er især fascineret af den del af processen, hvori projektet begynder at gå fra ide til endelige produkt. Derfor ønsker jeg at arbejde dybdegående med arbejdsopgaver, der berør web/digital design, User Interface og/eller front-end development. Jeg har på 3. semester af multimediedesignuddannelsen, valgt fag-retningen front-end development, og kan derfor varetage opgaver, der kræver hands-on erfaring med programmer og dynamisk kodning. Yderligere har jeg bred erfaring indenfor design med fokus på optimering af brugerrejser - både med undervisning fra studiet, men yderligere også fra andre projekter i kultur- og erhvervsverdenen. Jeg ønsker derfor at medbringe min viden om både den kreative proces såfremt som min tekniske viden til at udarbejde bedst mulige løsninger og projekter i min praktik. Jeg har sideløbende med mit studie udviklet hjemmesider til foreninger og undervisningstilbud under Holbæk Kulturskole. Her har jeg arbejdet selvstændigt og dybdegående med UI-development, design og programmering. I disse projekter har jeg tilgået mig kompetencer indenfor virksomheders identitet og hvordan dette kan sammenkobles til et endeligt produkt, hvori jeg heriblandt også har beskæftiget mig content creation. I form af min arbejdsproces, arbejder jeg balanceret mellem selvstændighed og samarbejde, og har ydermere en løsningsorienteret tilgang. Disse kompetencer har jeg dels opnået i forbindelse med min ansættelse i servicebranchen som forhusansvarlig på Bellevue Teatret, hvori jeg beskæftiger mig med styring af personalet og den endelige afvikling og kommunikation til forestillinger. Min interesse for multimediedesign er opstået i forbindelse med at beskæftige mig med litteratur, kunst og film, og har på den måde tillært at arbejde kreativt på tværs af medier. Jeg har tidligere udgivet en dokumentarfilm, der har været på filmfestivaller i Chicago, Toronto og Stockholm med finansiel støtte fra Sparekassen Sjælland-Fyn. I processen af denne filmproduktion, arbejdede jeg intensivt med min kreativitet, men tillærte mig også viden indenfor erhvervslivet i forbindelse med finans for projektet såfremt som projektstyring.",
        location: ".p",
      },
      { text: "Praktikansøgning", location: ".headerp" },
      { text: "LinkedIn profil", location: "a" },
      { text: "Kontakt", location: ".footerh2" },
    ],
  },
};

document.querySelector(".danish").addEventListener("click", showDanish);

function showDanish() {
  texts.da.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

document.querySelector(".english").addEventListener("click", showEnglish);

function showEnglish() {
  texts.en.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}
