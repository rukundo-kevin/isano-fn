import { FamilyTreeItem } from "../types";

interface ItemObject {
  [key: string]: FamilyTreeItem;
}

export const items: ItemObject = {
  root: {
    index: "root",
    isFolder: false,
    children: [
      "kayinamura",
      "didas",
      "rwabununga",
      "gafurutsi",
      "frere",
      "busirinkiko",
      "mugabo",
      "alice",
      "ancila",
      "janet",
    ],
    data: "Root item",
  },
  // Abana ba Rulinda
  kayinamura: {
    index: "kayinamura",
    children: [],
    data: "Kayinamura",
    isFolder: false,
    gender: "Male",
    born: "N/A",
    dead: "N/A",
    photo: "",
  },
  didas: {
    index: "didas",
    children: [],
    data: "Didas",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "N/A",
    photo: "",
  },
  rwabununga: {
    index: "rwabununga",
    isFolder: true,
    gender: "Male",

    children: [
      "mukankusi",
      "kagubare",
      "kabanguka",
      "kabalungi",
      "karimukiza",
      "murebwayire",
      "kayitesi",
      "kabatesi",
    ],
    data: "Rwabununga Charles",
    born: "Jan  1928",
    dead: "Oct 2015",
    photo: "",
  },
  gafurutsi: {
    index: "gafurutsi",
    isFolder: true,
    gender: "Male",
    children: [
      "hamurungi",
      "nyagashayija",
      "edward",
      "joy",
      "theopista",
      "maridadi",
      "scola",
      "rwizima",
    ],
    data: "Gafurutsi",
    born: "N/A",
    dead: "Feb 2020",
    photo: "",
  },
  frere: {
    index: "frere",
    isFolder: true,
    gender: "Male",
    children: ["mukazi"],
    data: "Frere",
    born: "N/A",
    dead: "N/A",
    photo: "",
  },
  busirinkiko: {
    index: "busirinkiko",
    isFolder: true,
    gender: "Male",

    children: ["bashayija", "steven", "vanessa", "faith", "muhindaSam"],
    data: "Busirinkiko",
    born: "N/A",
    dead: "N/A",
    photo: "",
  },
  mugabo: {
    index: "mugabo",
    data: "Mugabo",
    isFolder: false,
    gender: "Male",
    children: [],

    born: "N/A",
    dead: "N/A",
    photo: "",
  },
  alice: {
    index: "alice",
    data: "Alice",
    isFolder: false,
    gender: "Female",
    children: [],

    born: "N/A",
    dead: "N/A",
    photo: "",
  },
  ancila: {
    index: "ancila",
    children: [],
    data: "Ancila",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "N/A",
    photo: "",
  },
  janet: {
    index: "janet",
    children: [],
    data: "Janet",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: " Present",
    photo: "",
  },
  // Abana ba Rwabununga
  mukankusi: {
    index: "mukankusi",
    isFolder: true,
    gender: "Female",

    children: [
      "mugoregore",
      "slyvia",
      "jenifer",
      "macondo",
      "taremwa",
      "kinyata",
      "ericka",
    ],
    data: "Mukankusi",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  kagubare: {
    index: "kagubare",
    isFolder: true,
    gender: "Male",

    children: [
      "mushabe",
      "kamukobwa",
      "kaniniri",
      "natukunda",
      "boy",
      "rwakibwana",
      "kabibi",
    ],
    data: "Kagubare Alex",
    born: "Jan 1962",
    dead: "Feb 14, 2023",
    photo: "",
  },
  kabanguka: {
    index: "kabanguka",
    isFolder: true,
    gender: "Male",

    children: [
      "kaliza",
      "rukundoKevin",
      "niyonshuti",
      "gatoElisah",
      "gakuruElia",
    ],
    data: "Kabanguka Vicent",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  kabalungi: {
    index: "kabalungi",

    isFolder: true,
    gender: "Female",
    children: ["rutare", "samKabarungi", "nkotanyi", "umuhozaAnitha"],
    data: "Kabalungi",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  karimukiza: {
    index: "karimukiza",
    isFolder: true,
    gender: "Male",

    children: ["kagubareSam", "dorcas", "phionah", "kezaIris"],
    data: "Karimukiza Samuel",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  murebwayire: {
    index: "murebwayire",
    children: [],
    data: "Murebwayire",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
    photo: "",
  },
  kayitesi: {
    index: "kayitesi",
    isFolder: true,
    gender: "female",

    children: ["danny", "deborah"],
    data: "Kayitesi",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  kabatesi: {
    index: "kabatesi",
    children: [],
    data: "Kabatesi",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
    photo: "",
  },
  // Abana ba Frere
  mukazi: {
    index: "mukazi",
    children: [],
    data: "Mukazi",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
    photo: "",
  },
  //   Abana ba Gafurutsi
  hamurungi: {
    index: "hamurungi",
    isFolder: true,
    gender: "Female",
    children: ["mukimbiri"],
    data: "Hamurungi",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  nyagashayija: {
    index: "nyagashayija",
    children: ["maclin", "afande", "bright", "mutoni", "shema"],
    data: "Nyagashayija",
    isFolder: true,
    gender: "Male",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  edward: {
    index: "edward",
    children: ["deus", "natasha", "kevin"],
    data: "Edward",
    gender: "Male",
    isFolder: true,
    born: "N/A",
    dead: "Present",
  },
  joy: {
    index: "joy",
    children: [],
    data: "Joy",
    gender: "Female",

    isFolder: false,
    born: "N/A",
    dead: "Present",
  },
  theopista: {
    index: "theopista",
    children: [],
    data: "Theopista",
    gender: "Female",

    isFolder: false,
    born: "N/A",
    dead: "Present",
  },
  maridadi: {
    index: "maridadi",
    children: [],
    data: "Maridadi",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  scola: {
    index: "scola",
    children: [],
    data: "Scola",
    gender: "female",

    isFolder: false,
    born: "N/A",
    dead: "Present",
  },
  rwizima: {
    index: "rwizima",
    gender: "Male",

    children: [],
    data: "Rwizima",
    isFolder: false,
    born: "N/A",
    dead: "Present",
  },
  // Abana ba Busirinkiko
  bashayija: {
    index: "bashayija",
    children: [],
    data: "Bashayija",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  steven: {
    index: "steven",
    children: [],
    data: "Steven",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  vanessa: {
    index: "vanessa",
    children: [],
    data: "Vanessa",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  faith: {
    index: "faith",
    children: [],
    data: "Faith",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  muhindaSam: {
    index: "muhindaSam",
    children: [],
    data: "Muhinda Sam",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
    photo:
      "https://media.licdn.com/dms/image/C5603AQGQXk730H_PEQ/profile-displayphoto-shrink_800_800/0/1517419799505?e=1687392000&v=beta&t=BuH7Pi1e49Mu-sWDZJsVLqK5rqAoR0AswJq7xKWACG0",
  },
  // Abana ba Mukankusi
  mugoregore: {
    index: "mugoregore",
    children: [],
    data: "Mugoregore",
    gender: "Female",

    isFolder: false,
    born: "N/A",
    dead: "Present",
  },
  slyvia: {
    index: "slyvia",
    children: [],
    data: "Slyvia",

    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  jenifer: {
    index: "jenifer",
    children: [],
    data: "Jenifer",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  macondo: {
    index: "macondo",
    children: [],
    data: "Macondo",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  taremwa: {
    index: "taremwa",
    children: [],
    data: "Taremwa",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  kinyata: {
    index: "kinyata",
    children: [],
    data: "Mushayija Sam",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  ericka: {
    index: "ericka",
    children: [],
    data: "Ericka",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  // Abana ba Kagubare Alex
  mushabe: {
    index: "mushabe",
    children: [],
    data: "Mushabe Andrew",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  kamukobwa: {
    index: "kamukobwa",
    children: [],
    data: "Kamukobwa",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  kaniniri: {
    index: "kaniniri",
    children: [],
    data: "Moreen(Kaniniri)",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  natukunda: {
    index: "natukunda",
    children: [],
    data: "Natukunda",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  boy: {
    index: "boy",
    children: [],
    data: "Boy",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },

  rwakibwana: {
    index: "rwakibwana",
    children: [],
    data: "Rwakibwana",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  kabibi: {
    index: "kabibi",
    children: [],
    data: "Kabibi",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  // Abana ba Kabanguka
  kaliza: {
    index: "kaliza",
    children: [],
    data: "Kaliza Gloria",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  rukundoKevin: {
    index: "rukundoKevin",
    children: [],
    data: "Rukundo Kevin",
    isFolder: false,
    gender: "Male",
    born: "N/A",
    dead: "Present",
    photo: "https://avatars.githubusercontent.com/u/38954786?v=4",
  },
  niyonshuti: {
    index: "niyonshuti",
    children: [],
    data: "Niyonshuti Kenneth",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  gatoElisah: {
    index: "gatoElisah",
    children: [],
    data: "Gato Elisah",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  gakuruElia: {
    index: "gakuruElia",
    children: [],
    data: "Gakuru Elia",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  // Abana ba Kabalungi
  rutare: {
    index: "rutare",
    children: [],
    data: "Rutare",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  samKabarungi: {
    index: "samKabarungi",
    children: [],
    data: "Sam ",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  nkotanyi: {
    index: "nkotanyi",
    children: [],
    data: "Nkotanyi",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  umuhozaAnitha: {
    index: "umuhozaAnitha",
    children: [],
    data: "Umuhoza Anitha",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },

  // Abana ba kabao
  kagubareSam: {
    index: "kagubareSam",
    children: [],
    data: "Kagubare Samuel",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  dorcas: {
    index: "dorcas",
    children: [],
    data: "Dorcas",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  phionah: {
    index: "phionah",
    children: [],
    data: "Phionah",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },
  kezaIris: {
    index: "kezaIris",
    children: [],
    data: "Keza Iris",
    isFolder: false,
    gender: "Female",

    born: "N/A",
    dead: "Present",
  },

  //Abana ba Kayitesi
  danny: {
    index: "danny",
    children: [],
    data: "Danny",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },
  deborah: {
    index: "deborah",
    children: [],
    data: "Deborah",
    isFolder: false,
    gender: "Female",
    born: "N/A",
    dead: "Present",
  },
  // Abana ba Hamurungi
  mukimbiri: {
    index: "mukimbiri",
    children: [],
    data: "Mukimbiri",
    isFolder: false,
    gender: "Male",

    born: "N/A",
    dead: "Present",
  },

  //Abana ba Nyagashayija
  maclin: {
    index: "maclin",
    children: [],
    data: "Maclin",
    isFolder: false,
    gender: "Female",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  afande: {
    index: "afande",
    children: [],
    data: "Afande",
    isFolder: false,
    gender: "Male",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  bright: {
    index: "bright",
    children: [],
    data: "Bright",
    isFolder: false,
    gender: "Male",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  mutoni: {
    index: "mutoni",
    children: [],
    data: "Mutoni",
    isFolder: false,
    gender: "Female",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  shema: {
    index: "shema",
    children: [],
    data: "Shema",
    isFolder: false,
    gender: "Male",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  // Abana ba Edward Rwakojo
  deus: {
    index: "deus",
    children: [],
    data: "Deus",
    isFolder: false,
    gender: "Male",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  natasha: {
    index: "natasha",
    children: [],
    data: "Natasha",
    isFolder: false,
    gender: "Female",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
  kevin: {
    index: "kevin",
    children: [],
    data: "Kevin",
    isFolder: false,
    gender: "Male",
    born: "N/A",
    dead: "Present",
    photo: "",
  },
};
// Create an object with the same data as items but add photo property to each item
