const projects = [
  {
    title: "SAP Addon",
    description: "Firefox/Chrome Extension for SAP related webpages",
    from: "2020-03",
    to: undefined,
    images: {
      thumbnail: "./img/sap-addon-4.png",
    },
    links: [
      { url: "https://nikolockenvitz.github.io/sap-addon", name: "Installation" },
      { url: "https://github.com/nikolockenvitz/sap-addon", name: "GitHub" },
    ],
    stats: {
      githubStars: 7,
    },
  },
  {
    title: "Fancy Flashcard",
    description: "Lightweight free/libre and open-source PWA to help you learning on all your devices",
    from: "2020-05",
    to: "2020-09",
    images: {
      thumbnail: "./img/fancy-flashcard-darkbg-400x150.png",
    },
    links: [
      { url: "https://fancy-flashcard.github.io/ffc", name: "Fancy Flashcard" },
      { url: "https://github.com/fancy-flashcard/ffc", name: "GitHub" },
    ],
    stats: {
      githubStars: 7,
    },
  },
  {
    title: "tg-status-bot",
    description: "Personal Telegram Bot to regularly execute certain actions (e.g. web scraping) and send notifications",
    from: "2020-09",
    to: undefined,
    images: {
      thumbnail: "./img/telegram.png",
    },
    links: [{ url: "https://github.com/nikolockenvitz/tg-status-bot", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "QR PWA",
    description: "Progressive Web App to create and scan QR codes",
    from: "2020-04",
    to: undefined,
    images: {
      thumbnail: "./img/qr-pwa.png",
    },
    links: [
      { url: "https://nikolockenvitz.de/qr", name: "QR PWA" },
      { url: "https://github.com/nikolockenvitz/qr-pwa", name: "GitHub" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "Local Image Viewer",
    description: "Firefox Extension to navigate through local images with arrow keys",
    from: "2020-04",
    to: undefined,
    images: {
      thumbnail: "./img/local-image-viewer-firefox.png",
    },
    links: [{ url: "https://github.com/nikolockenvitz/local-image-viewer", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "Browser Extension Helper",
    description: "Opinionated Node.js package to help building and deploying browser extensions",
    from: "2020-04",
    to: undefined,
    images: {
      thumbnail: undefined,
    },
    links: [{ url: "https://github.com/nikolockenvitz/browser-extension-helper", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "Decision Matrix",
    description: "Web App to create decision matrices",
    from: "2019-12",
    to: "2020-03",
    images: {
      thumbnail: "./img/decisionmatrix.png",
    },
    links: [
      { url: "https://nikolockenvitz.de/decisionmatrix", name: "Decision Matrix" },
      { url: "https://github.com/nikolockenvitz/decision-matrix", name: "GitHub" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "RCJ Digital Scoring Sheet",
    description: "RoboCup Junior Rescue Line: Digital Scoring Sheet (used at RCJ Berlin 2020)",
    from: "2019-08",
    to: undefined,
    images: {
      thumbnail: "./img/rcj-dss.png",
    },
    links: [
      { url: "https://rcjberlin.github.io/rcj-dss/", name: "RCJ DSS" },
      { url: "https://github.com/rcjberlin/rcj-dss", name: "GitHub" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "RCJ Rescue Clock",
    description: "Progressive Web App to stop time during RoboCup Junior Rescue",
    from: "2020-02",
    to: undefined,
    images: {
      thumbnail: "./img/rcj-rescue-clock-logo.png",
    },
    links: [
      { url: "https://nikolockenvitz.github.io/rcj-rescue-clock", name: "RCJ Rescue Clock" },
      { url: "https://github.com/nikolockenvitz/rcj-rescue-clock", name: "GitHub" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "RCJ Evaluation & Results",
    description: "Calculate standings and display live results for RCJ Berlin",
    from: "2020-01",
    to: undefined,
    images: {
      thumbnail: undefined,
    },
    links: [
      { url: "https://github.com/rcjberlin/evaluation", name: "Evaluation" },
      { url: "https://github.com/rcjberlin/rcjberlin.github.io", name: "Live Results" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "RCJ Notification Bot",
    description: "Bot notifying teams about schedule and events (WhatsApp, Signal, Telegram)",
    from: "2020-09",
    to: undefined,
    images: {
      thumbnail: undefined,
    },
    links: [{ url: "https://github.com/rcjberlin/rcj-notification-bot", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "RCJ Server",
    description: "Back end for RCJ DSS to store runs and enable live results",
    from: "2020-01",
    to: "2020-03",
    images: {
      thumbnail: undefined,
    },
    links: [{ url: "https://github.com/rcjberlin/rcj-server", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
    contributed: true,
  },
  {
    title: "RCJ Rescue Line League Chair",
    description: "Organizing and managing Rescue Line at RoboCup Junior Berlin",
    from: "2019-03",
    to: undefined,
    timeString: "2019 & 2020",
    images: {
      thumbnail: undefined,
    },
    links: [{ url: "https://github.com/rcjberlin", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "RCJ Current Delay",
    description: "Small Python tool to display current delay at RCJ Berlin",
    from: "2019-02",
    to: "2019-03",
    images: {
      thumbnail: "./img/rcj-current-delay.png",
    },
    links: [{ url: "https://github.com/nikolockenvitz/tools/blob/master/rcj-current-delay/cd.pyw", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "Random Mix",
    description: "Deno module to create random lists based on some discrete probability distribution",
    from: "2020-08",
    to: "2020-08",
    images: {
      thumbnail: "./img/deno-tpm.png",
    },
    links: [
      { url: "https://deno.land/x/random_mix", name: "deno.land/x" },
      { url: "https://github.com/fancy-flashcard/random-mix", name: "GitHub" },
    ],
    stats: {
      githubStars: 3,
    },
  },
  {
    title: "kek",
    description: "Deno command line utility with simple scripts",
    from: "2020-10",
    to: "2020-10",
    images: {
      thumbnail: "./img/deno-tpm.png",
    },
    links: [
      { url: "https://deno.land/x/kek", name: "deno.land/x" },
      { url: "https://nest.land/package/kek", name: "nest.land" },
      { url: "https://github.com/hackathon-sidn/deno-kek", name: "GitHub" },
    ],
    stats: {
      githubStars: 4,
    },
  },
  {
    title: "cors-proxy",
    description: "CORS proxy fetching remote URLs and adding CORS headers",
    from: "2020-10",
    to: "2020-10",
    images: {
      thumbnail: "./img/deno-tpm.png",
    },
    links: [
      { url: "https://deno.land/x/cors_proxy", name: "deno.land/x" },
      { url: "https://nest.land/package/cors-proxy", name: "nest.land" },
      { url: "https://github.com/hackathon-sidn/cors-proxy", name: "GitHub" },
    ],
    stats: {
      githubStars: 3,
    },
  },
  {
    title: "ExoPlan",
    description: "Project at DHBW Mannheim to help directors of studies plan and schedule lectures",
    from: "2019-11",
    to: "2020-07",
    images: {
      thumbnail: "./img/exoplan.png",
    },
    links: [{ url: "https://github.com/wwi17seb?q=%22dhbw-project-%22", name: "GitHub" }],
    stats: {
      githubStars: 6,
    },
  },
  {
    title: "Advent of Code",
    description: "Annual participating in this advent calendar of small programming puzzles",
    from: "2016-12",
    to: "2019-12",
    timeString: "2016, 2017, 2018 & 2019",
    images: {
      thumbnail: "./img/aoc.png",
    },
    links: [
      { url: "https://adventofcode.com", name: "Advent of Code" },
      { url: "https://github.com/nikolockenvitz?tab=repositories&q=aoc", name: "My Solutions" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "German Laws",
    description: "Web App to fetch and display German laws",
    from: "2020-05",
    to: "2021-01",
    images: {
      thumbnail: "./img/laws.png",
    },
    links: [
      { url: "https://nikolockenvitz.de/gesetz/", name: "Web App" },
      { url: "https://github.com/nikolockenvitz/german-laws", name: "GitHub" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "lock.pyw",
    description: "Python script to lock your PC once something happens",
    from: "2019-01",
    to: "2020-06",
    images: {
      thumbnail: undefined,
    },
    links: [{ url: "https://github.com/nikolockenvitz/tools/blob/master/lock.pyw", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "pwtry.pyw",
    description: "Simple Python script to memorize a password by repetition",
    from: "2019-02",
    to: "2020-01",
    images: {
      thumbnail: "./img/pwtry.png",
    },
    links: [{ url: "https://github.com/nikolockenvitz/tools/blob/master/pwtry.pyw", name: "GitHub" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "Steganography",
    description: "Web App to hide text inside an image",
    from: "2019-03",
    to: "2019-03",
    images: {
      thumbnail: "./img/steganography.png",
    },
    links: [
      { url: "https://nikolockenvitz.de/steganography", name: "Web App" },
      { url: "https://github.com/nikolockenvitz/steganography", name: "GitHub" },
    ],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "2048",
    description: "Remake of 2048 (as a Python game)",
    from: "2018-04",
    to: "2019-01",
    images: {
      thumbnail: "./img/2048-grey.png",
    },
    links: [{ url: "https://github.com/nikolockenvitz/2048", name: "GitHub" }],
    stats: {
      githubStars: 1,
    },
  },
  {
    title: "RCJ Rescue Line",
    description: "Participating in RoboCup Junior Rescue Line several times",
    from: "2013-03",
    to: "2017-05",
    images: {
      thumbnail: "./img/pi++.jpg",
    },
    links: [{ url: "https://www.youtube.com/channel/UC8JwzXIBsrtpdOSy8HrTk8g", name: "YouTube" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "Substitution Schedule CLI",
    description: "Parsing substitution schedule at school for relevant information",
    from: "2016-01",
    to: "2017-04",
    images: {
      thumbnail: undefined,
    },
    links: [{ url: "https://github.com/jubi72/archevp_bot", name: "GitHub (Telegram Bot)" }],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "Graduation Yearbook",
    description: "Creating and using a LaTeX template for the school graduation yearbook",
    from: "2017-02",
    to: "2017-06",
    images: {
      thumbnail: undefined,
    },
    links: [],
    stats: {
      githubStars: 0,
    },
  },
  {
    title: "DHBW LaTeX Template",
    description: "A LaTeX template for Project and Bachelor Thesis, DHBW Mannheim",
    from: "2018-10",
    to: "2020-05",
    images: {
      thumbnail: undefined,
    },
    links: [{ url: "https://github.com/pfisterer/DHBW_LaTeX_Template", name: "GitHub" }],
    stats: {
      githubStars: "23",
    },
    contributed: true,
  },
  {
    title: "Veramo",
    description: "A JavaScript Framework for Verifiable Data (fka DID Agent Framework)",
    from: "2020-03",
    to: undefined,
    images: {
      thumbnail: "./img/uport.png",
    },
    links: [
      { url: "https://github.com/uport-project/veramo", name: "GitHub" },
      { url: "https://veramo.io/", name: "veramo.io" },
    ],
    stats: {
      githubStars: "50",
    },
    contributed: true,
  },
  {
    title: "ethr-did",
    description: "Library for Decentralized Identifiers on Ethereum Blockchain",
    from: "2020-04",
    to: "2020-06",
    images: {
      thumbnail: "./img/uport.png",
    },
    links: [{ url: "https://github.com/uport-project/ethr-did", name: "GitHub" }],
    stats: {
      githubStars: "80",
    },
    contributed: true,
  },
  {
    title: "ethr-did-resolver",
    description: "DID resolver for Ethereum Addresses",
    from: "2020-09",
    to: undefined,
    images: {
      thumbnail: "./img/uport.png",
    },
    links: [{ url: "https://github.com/decentralized-identity/ethr-did-resolver", name: "GitHub" }],
    stats: {
      githubStars: "49",
    },
    contributed: true,
  },
  {
    title: "did-jwt",
    description: "Create and verify DID verifiable JWT's in Javascript",
    from: "2020-04",
    to: "2020-04",
    images: {
      thumbnail: "./img/dif-400x150.png",
    },
    links: [{ url: "https://github.com/decentralized-identity/did-jwt", name: "GitHub" }],
    stats: {
      githubStars: "114",
    },
    contributed: true,
  },
  {
    title: "Countries Module",
    description: "Deno module which provides information about countries",
    from: "2020-08",
    to: "2020-08",
    images: {
      thumbnail: "./img/deno-tpm.png",
    },
    links: [
      { url: "https://deno.land/x/countries", name: "deno.land/x" },
      { url: "https://github.com/michael-spengler/countries", name: "GitHub" },
    ],
    stats: {
      githubStars: 7,
    },
    contributed: true,
  },
  {
    title: "Simple Icons",
    description: "SVG icons for popular brands",
    from: "2020-08",
    to: "2020-08",
    images: {
      thumbnail: "./img/simple-icons.png",
    },
    links: [{ url: "https://github.com/simple-icons/simple-icons", name: "GitHub" }],
    stats: {
      githubStars: "10.1k",
    },
    contributed: true,
  },
  {
    title: "Signal",
    description: "A private messenger for Android, iOS, Windows, Mac, and Linux.",
    from: "2020-07",
    to: "2020-07",
    images: {
      thumbnail: "./img/signal-400x150.png",
    },
    links: [
      { url: "https://signal.org/", name: "Signal" },
      { url: "https://github.com/signalapp/Signal-Android", name: "GitHub" },
    ],
    stats: {
      githubStars: "19.1k",
    },
    contributed: true,
  },
  {
    title: "MoneyWallet",
    description: "An Android application that lets you track your expenses",
    from: "2020-12",
    to: "2020-12",
    images: {
      thumbnail: undefined,
    },
    links: [
      { url: "https://f-droid.org/en/packages/com.oriondev.moneywallet/", name: "F-Droid" },
      { url: "https://github.com/AndreAle94/moneywallet", name: "GitHub" },
    ],
    stats: {
      githubStars: "213",
    },
    contributed: true,
  },
  {
    title: "OpenStreetMap",
    description: "Improving and enhancing the data of OpenStreetMap",
    from: "2018-05",
    to: undefined,
    images: {
      thumbnail: "./img/osm-streetcomplete.png",
    },
    links: [
      { url: "https://openstreetmap.org", name: "OpenStreetMap" },
      { url: "https://github.com/westnordost/StreetComplete#readme", name: "StreetComplete" },
    ],
    stats: {
      githubStars: 0,
    },
    contributed: true,
  },
  {
    title: "Common Voice",
    description: "Recording and validating voice clips for Mozilla's Common Voice project",
    from: "2018-06",
    to: undefined,
    images: {
      thumbnail: "./img/common-voice-mars.png",
    },
    links: [{ url: "https://commonvoice.mozilla.org", name: "Common Voice" }],
    stats: {
      githubStars: 0,
    },
    contributed: true,
  },
];

if (typeof module !== "undefined") {
  module.exports = projects;
}
