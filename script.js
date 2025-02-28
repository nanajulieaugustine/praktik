"use strict";

const texts = {
  en: {
    texts: [
      {
        text: "During my internship, I want to focus on strengthening my skills within the entirety of my field. I am particularly fascinated by the part of the process where the project transitions from idea to final product. Therefore, I wish to work in-depth with tasks related to web/digital design, User Interface, and/or front-end development. During the 3rd semester of the Multimedia Design program, I chose the front-end development specialization and can therefore handle tasks that require hands-on experience with development in React / Next.js with Tailwind CSS. Additionally, I have broad experience within design with a focus on optimizing user journeys – both from my education and from various projects in the cultural and business sectors.",
        location: ".p1",
      },

      {
        text: "I aim to contribute with both divergent and convergent thinking to create the best possible solutions and projects during my internship through an iterative process focusing on both creativity and solution orientation. Alongside my studies, I have developed websites for associations and educational programs under Holbæk Kulturskole. Here, I have worked independently and in-depth with UI development, design, and programming. In these projects, I gained hands-on experience working with company identities, where I also dealt with content creation.",
        location: ".p2",
      },
      {
        text: "In my work process, I balance between independence and collaboration, and I also have a solution-oriented approach. I have partly acquired these skills through my employment in the service industry as a front-house manager at The Bellevue Theater, where I manage staff and oversee the final execution and communication for performances.",
        location: ".p3",
      },
      {
        text: "I engage with literature, art, and film, which has taught me to work creatively across media. Previously, I published a documentary film that was screened at film festivals in Chicago, Toronto, and Stockholm with financial support from Sparekassen Sjælland-Fyn. It was an intensive and creative process to work on this film production, where I also learned how such projects are financed and managed from start to finish.",
        location: ".p4",
      },
      { text: "Internship Application", location: ".headerp" },
      { text: "LinkedIn Profile", location: "a" },
      { text: "Contact", location: ".footerh2" },
    ],
  },
  da: {
    texts: [
      {
        text: "Jeg vil under mit praktikforløb fokusere på at styrke mine kompetencer indenfor helheden af mit fag. Jeg er især fascineret af den del af processen, hvori projektet begynder at gå fra ide til endelige produkt. Derfor ønsker jeg at arbejde dybdegående med arbejdsopgaver, der berør web/digital design, User Interface og/eller front-end development. Jeg har på 3. semester af multimediedesignuddannelsen, valgt fag-retningen front-end development, og kan derfor varetage opgaver, der kræver hands-on erfaring med udvilkling i React / next.js med tailwind css. Yderligere har jeg bred erfaring indenfor design med fokus på optimering af brugerrejser - både med undervisning fra studiet, men yderligere også fra andre projekter i kultur- og erhvervsverdenen.",
        location: ".p1",
      },

      {
        text: "Jeg ønsker at bidrage med både divergent og konvergent tænkning til at udarbejde bedst mulige løsninger og projekter i min praktik vha. en iterativ proces med fokus på både kreativitet og løsningsorintering. Jeg har sideløbende med mit studie udviklet hjemmesider til foreninger og undervisningstilbud under Holbæk Kulturskole. Her har jeg arbejdet selvstændigt og dybdegående med UI-development, design og programmering. I disse projekter har jeg fået hands-on erfaring i at arbejde med virksomheders identitet, hvori jeg heriblandt også har beskæftiget mig content creation.",
        location: ".p2",
      },
      {
        text: "I min arbejdsproces, arbejder jeg balanceret mellem selvstændighed og samarbejde, og har ydermere en løsningsorinteret tilgang. Disse kompetencer har jeg til dels opnået i forbindelse med min ansættelse i servicebranchen som forhusansvarlig på Bellevue Teatret, hvori jeg beskæftiger mig med styring af personalet og den endelige afvikling og kommunikation til forestillinger.",
        location: ".p3",
      },
      {
        text: "Jeg beskæftiger mig med litteratur, kunst og film, og jeg har på den måde tillært at arbejde kreativt på tværs af medier. Jeg har tidligere udgivet en dokumentarfilm, der har været på filmfestivaller i Chicago, Toronto og Stockholm med finansiel støtte fra Sparekassen Sjælland-Fyn. Det var en intensiv og kreativ proces at arbejde med denne filmproduktion, hvor jeg samtidig lærte, hvordan sådanne projekter finanseres og styres fra start til slut.",
        location: ".p4",
      },
      { text: "Praktikansøgning", location: ".headerp" },
      { text: "LinkedIn profil", location: "a" },
      { text: "Kontakt", location: ".footerh2" },
    ],
  },
};

let locale = "da";

document.querySelector("#select").value = "da";
document.querySelector("#select").addEventListener("change", languageChange);

window.addEventListener("DOMContentLoaded", () => {
  languageChange();
});

function languageChange(evt) {
  locale = document.querySelector("#select").value;
  console.log("locale", locale);

  texts[locale].texts.forEach((element) => {
    const elements = document.querySelectorAll(element.location);
    elements.forEach((el) => {
      el.textContent = element.text;
    });
  });
}

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
