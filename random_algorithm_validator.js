// Stavimo bazu podataka o etimologijama iz stvarnog svijeta, kao JSON, na
// početak datoteke. JavaScript nema standardne biblioteke za čitanje i pisanje
// iz datoteka, ali, na svu sreću, JSON se lako uključi JavaScript.
const baza_podataka = [
  {
    comment: "Proto-Berber word for number 1",
    root: "yen",
    descendants: ["yun", "yiwen", "yijen", "yan", "iun", "ien"],
  },
  {
    comment: "Proto-Berber word for number 2",
    root: "sen",
    descendants: ["sen", "sme", "sin", "xina", "essin", "exsin"],
  },
  {
    comment: "Proto-Berber word for number 3",
    root: "krad",
    descendants: ["kared", "tlat", "krad", "karat", "kerad"],
  },
  {
    comment: "Proto-Berber word for number 4",
    root: "okkoz",
    descendants: ["aquz", "acodet", "kuz", "akoz", "okoz", "ekoz"],
  },
  {
    comment: "Proto-Berber word for number 10",
    root: "meraw",
    descendants: ["maraw", "marava", "marago", "mraw", "mereg", "meraw"],
  },
  {
    comment: "Ancient Egyptian word for number 1",
    root: "wuhhuw",
    descendants: ["owai", "oua", "ouei"],
  },
  {
    comment: "Ancient Egyptian word for number 2",
    root: "sinuway",
    descendants: ["snau", "sno", "sneu", "snewu"],
  },
  {
    comment: "Ancient Egyptian word for number 3",
    root: "hamtaw",
    descendants: ["xomt", "xamt"],
  },
  {
    comment: "Ancient Egyptian word for number 4",
    root: "yaftaw",
    descendants: ["ftou", "ftau"],
  },
  {
    comment: "Ancient Egyptian word for number 5",
    root: "tiyaw",
    descendants: ["tiou"],
  },
  {
    comment: "Ancient Egyptian word for number 6",
    root: "sarsaw",
    descendants: ["sou", "sau"],
  },
  {
    comment: "Ancient Egyptian word for number 7",
    root: "safhaw",
    descendants: ["xaxf", "xexb"],
  },
  {
    comment: "Ancient Egyptian word for number 8",
    root: "hamanaw",
    descendants: ["xmen", "xmoun", "smoun"],
  },
  {
    comment: "Ancient Egyptian word for number 9",
    root: "pisicaw",
    descendants: ["psit", "psis"],
  },
  {
    comment: "Ancient Egyptian word for number 10",
    root: "mucaw",
    descendants: ["met"],
  },
  {
    comment: "Proto-Semitic word for number 1",
    root: "hahad",
    descendants: [
      "wahid",
      "had",
      "ihad",
      "ahad",
      "wedu",
      "ahadu",
      "hat",
      "and",
      "hade",
      "at",
    ],
  },
  {
    comment: "Proto-Semitic word for number 2",
    root: "tin",
    descendants: [
      "itna",
      "zung",
      "tnei",
      "taren",
      "itr",
      "sene",
      "xetay",
      "exnay",
      "xtay",
      "xnay",
      "xena",
      "xina",
      "tina",
    ],
  },
  {
    comment: "Proto-Semitic word for number 3",
    root: "xalat",
    descendants: [
      "talat",
      "tlat",
      "tliet",
      "tlet",
      "tulat",
      "tlot",
      "salus",
      "xalox",
      "xulox",
      "salats",
      "seles",
      "sots",
      "sihist",
      "talat",
    ],
  },
  {
    comment: "Proto-Semitic word for number 4",
    root: "harbah",
    descendants: [
      "harba",
      "raba",
      "arba",
      "harbha",
      "arpah",
      "hareb",
      "harbo",
      "erbe",
      "arat",
      "arbat",
      "harbah",
    ],
  },
  {
    comment: "Proto-Semitic word for number 5",
    root: "hamx",
    descendants: [
      "hamsa",
      "hamsi",
      "hemsa",
      "amxa",
      "homis",
      "hames",
      "jamix",
      "hamts",
      "hamux",
      "amest",
      "hamixu",
    ],
  },
  {
    comment: "Proto-Semitic word for number 6",
    root: "xidt",
    descendants: [
      "sitta",
      "sitte",
      "setti",
      "sitta",
      "sutte",
      "sith",
      "sis",
      "xex",
      "xexah",
      "ses",
      "tittu",
    ],
  },
  {
    comment: "Proto-Semitic word for number 7",
    root: "xabh",
    descendants: [
      "sabha",
      "sebha",
      "saba",
      "sebah",
      "xabha",
      "xubha",
      "xebhe",
      "seba",
      "xibeh",
      "xivoh",
      "sebe",
    ],
  },
  {
    comment: "Proto-Semitic word for number 8",
    root: "tamaniy",
    descendants: [
      "tamaniya",
      "tmanya",
      "hmenye",
      "tmienya",
      "tumanya",
      "tmonya",
      "xemben",
      "semuni",
      "xemoneh",
      "xemonah",
      "xumona",
      "samane",
      "samantu",
      "summunt",
      "simwot",
      "tamani",
    ],
  },
  {
    comment: "Proto-Semitic word for number 9",
    root: "tixh",
    descendants: [
      "tisha",
      "tesha",
      "teshu",
      "disga",
      "tixha",
      "texha",
      "tuxha",
      "texeh",
      "tisah",
      "texah",
      "tixeh",
      "tixet",
      "tixit",
      "tashatu",
      "sehe",
      "zata",
      "zaxta",
      "jete",
      "tixu",
    ],
  },
  {
    comment: "Proto-Semitic word for number 10",
    root: "hasar",
    descendants: [
      "haxara",
      "haxra",
      "gaxra",
      "hasra",
      "hesra",
      "hexer",
      "hisir",
      "heser",
      "hasara",
      "exer",
      "asara",
      "asar",
      "aser",
      "asur",
      "asir",
      "axaru",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 1",
    root: "isa",
    descendants: [
      "ita",
      "isa",
      "itha",
      "sa",
      "ise",
      "asa",
      "eka",
      "so",
      "iso",
      "usa",
      "ta",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 2",
    root: "duxa",
    descendants: [
      "tosa",
      "drusa",
      "dusa",
      "zuwa",
      "yusu",
      "roxa",
      "tuxa",
      "uzsa",
      "dha",
      "ruha",
      "duha",
      "duwa",
      "dua",
      "dui",
      "rua",
      "dhuwa",
      "duwe",
      "thua",
      "duo",
      "adwa",
      "roa",
      "darua",
      "dalawa",
      "dora",
      "lua",
      "ua",
      "erwuw",
      "ece",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 3",
    root: "telu",
    descendants: [
      "tolo",
      "tielu",
      "tau",
      "tulu",
      "tuyu",
      "tolo",
      "turu",
      "tru",
      "duma",
      "klau",
      "tiga",
      "tri",
      "tallu",
      "tigu",
      "tolu",
      "telo",
      "tige",
      "kiu",
      "atlu",
      "toru",
      "folu",
      "kolu",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 4",
    root: "xepat",
    descendants: [
      "spet",
      "paiat",
      "sepati",
      "paat",
      "pat",
      "supate",
      "suptu",
      "xopat",
      "xpat",
      "uspat",
      "sepats",
      "paha",
      "tapat",
      "sipat",
      "peuet",
      "papat",
      "amapt",
      "opat",
      "empa",
      "paha",
      "pak",
      "empat",
      "sekawan",
      "empah",
      "hat",
      "pa",
      "uppat",
      "fat",
      "vaha",
      "ha",
      "ava",
      "wha",
      "fa",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 5",
    root: "lima",
    descendants: [
      "lima",
      "hima",
      "irima",
      "eimo",
      "arima",
      "rima",
      "limo",
      "lime",
      "nimawa",
      "lale",
      "ima",
      "nima",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 6",
    root: "enem",
    descendants: [
      "enem",
      "nuum",
      "unem",
      "eneme",
      "nomu",
      "nom",
      "lom",
      "hurum",
      "nam",
      "nenem",
      "anam",
      "onom",
      "enneng",
      "noho",
      "anom",
      "unom",
      "anum",
      "innem",
      "enina",
      "unum",
      "ono",
      "ogo",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 7",
    root: "pitu",
    descendants: [
      "pito",
      "mitu",
      "pityu",
      "pitu",
      "uptu",
      "kito",
      "fito",
      "aso",
      "vitu",
      "whitu",
      "itua",
      "hitu",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 8",
    root: "walu",
    descendants: [
      "falo",
      "alu",
      "vau",
      "walu",
      "waru",
      "voyu",
      "uwalu",
      "haru",
      "kutu",
      "arua",
      "oalu",
      "wao",
      "valu",
      "varu",
      "vahu",
      "waha",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 9",
    root: "xiwa",
    descendants: [
      "siwa",
      "siva",
      "iwa",
      "sio",
      "uswa",
      "sia",
      "sanga",
      "sera",
      "siua",
      "sivu",
      "tsiwa",
      "hiva",
      "iva",
      "thiv",
    ],
  },
  {
    comment: "Proto-Austronesian word for number 10",
    root: "puluq",
    descendants: [
      "puw",
      "puluk",
      "puluh",
      "puruku",
      "pulu",
      "apluh",
      "polo",
      "fulu",
      "puloh",
      "nulu",
      "piu",
      "apulu",
      "folo",
      "pu",
      "poo",
      "hulu",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 1",
    root: "hi",
    descendants: ["yi", "i", "ye", "ju", "ting", "a", "hi", "ha", "ik", "ib"],
  },
  {
    comment: "Proto-Hmong-Mien word for number 2",
    root: "hui",
    descendants: [
      "wa",
      "ua",
      "u",
      "uo",
      "yi",
      "ou",
      "ay",
      "au",
      "vi",
      "o",
      "ob",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 3",
    root: "pyou",
    descendants: [
      "po",
      "pye",
      "pei",
      "pa",
      "pe",
      "pi",
      "pu",
      "poi",
      "pai",
      "pyei",
      "pzer",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 4",
    root: "plei",
    descendants: [
      "ti",
      "tsi",
      "puo",
      "tlia",
      "tlou",
      "toa",
      "plar",
      "pe",
      "lu",
      "lo",
      "lei",
      "pzei",
      "pik",
      "plaub",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 5",
    root: "pria",
    descendants: [
      "tia",
      "pia",
      "pi",
      "ptsiu",
      "pya",
      "piu",
      "pu",
      "pio",
      "tsa",
      "ji",
      "pza",
      "pui",
      "pei",
      "tsib",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 6",
    root: "kruk",
    descendants: [
      "ju",
      "tiu",
      "tio",
      "txau",
      "txu",
      "to",
      "txoh",
      "kio",
      "koh",
      "tlau",
      "rau",
      "xo",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 7",
    root: "dzyunh",
    descendants: [
      "txan",
      "txa",
      "son",
      "sa",
      "xon",
      "tsam",
      "zang",
      "zeng",
      "sang",
      "xia",
      "zung",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 8",
    root: "yat",
    descendants: [
      "yi",
      "txi",
      "ya",
      "you",
      "yo",
      "zo",
      "yek",
      "za",
      "zik",
      "zi",
      "yim",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 9",
    root: "nyuo",
    descendants: [
      "ko",
      "kiu",
      "txau",
      "txo",
      "txu",
      "gu",
      "dxu",
      "txhu",
      "giu",
      "cuay",
    ],
  },
  {
    comment: "Proto-Hmong-Mien word for number 10",
    root: "giuep",
    descendants: [
      "ku",
      "khu",
      "kuo",
      "txau",
      "txu",
      "gu",
      "dxok",
      "giok",
      "gau",
      "kaum",
      "ro",
      "xap",
      "xiap",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 2",
    root: "dwoh",
    descendants: [
      "dui",
      "tuwa",
      "an",
      "erkou",
      "yerku",
      "yergu",
      "do",
      "dau",
      "div",
      "dew",
      "diw",
      "dou",
      "deu",
      "dwiu",
      "da",
      "je",
      "tuai",
      "tua",
      "twa",
      "two",
      "tuie",
      "tuo",
      "tou",
      "tue",
      "tsua",
      "tsvai",
      "tsue",
      "tveir",
      "tvair",
      "tueir",
      "to",
      "duo",
      "duos",
      "doi",
      "ruye",
      "duas",
      "dos",
      "deus",
      "dio",
      "du",
      "dva",
      "dve",
      "be",
      "bah",
      "wu",
      "wi",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 3",
    root: "treies",
    descendants: [
      "tre",
      "trei",
      "tarris",
      "erek",
      "yereki",
      "yerek",
      "tri",
      "tiris",
      "teir",
      "tair",
      "tree",
      "threis",
      "tria",
      "thri",
      "thrio",
      "threo",
      "dhree",
      "three",
      "triye",
      "tio",
      "dri",
      "drie",
      "thria",
      "dre",
      "driye",
      "dri",
      "drei",
      "drai",
      "droe",
      "thrir",
      "thrig",
      "thru",
      "tris",
      "tres",
      "tra",
      "trowo",
      "treks",
      "triye",
      "tzi",
      "txi",
      "tao",
      "tin",
      "thuna",
      "xi",
      "hre",
      "tse",
      "su",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 4",
    root: "qetuor",
    descendants: [
      "kater",
      "teter",
      "txor",
      "petor",
      "petguar",
      "pevar",
      "pesuar",
      "petuar",
      "pedair",
      "cethair",
      "cahuri",
      "kiare",
      "fidwor",
      "fider",
      "feower",
      "four",
      "fiuer",
      "vir",
      "fiar",
      "bator",
      "patru",
      "kuatro",
      "kuatri",
      "kater",
      "katr",
      "tettar",
      "tesser",
      "txetri",
      "txetur",
      "xturi",
      "txar",
      "tsar",
      "sari",
      "txadwar",
      "stuar",
      "stuer",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 5",
    root: "penqe",
    descendants: [
      "pesse",
      "pese",
      "hing",
      "hink",
      "pempe",
      "pemp",
      "kuy",
      "fimf",
      "fiuf",
      "fif",
      "five",
      "veeve",
      "funf",
      "fim",
      "fem",
      "pompe",
      "pumpe",
      "kuikue",
      "qinqe",
      "cinqe",
      "kimbe",
      "txinqe",
      "sink",
      "sek",
      "pente",
      "pende",
      "peti",
      "pet",
      "piatx",
      "pec",
      "pantxa",
      "patx",
      "pas",
      "pis",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 6",
    root: "swecs",
    descendants: [
      "giaste",
      "giaxte",
      "vec",
      "vek",
      "suekos",
      "hue",
      "hueg",
      "txueh",
      "se",
      "xe",
      "xei",
      "sia",
      "saihs",
      "seis",
      "seks",
      "sioks",
      "siks",
      "zes",
      "zeks",
      "sei",
      "sis",
      "heks",
      "feks",
      "eksi",
      "xesti",
      "xest",
      "xesc",
      "txa",
      "xax",
      "txe",
      "txo",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 7",
    root: "septm",
    descendants: [
      "state",
      "xtate",
      "xipta",
      "xaptam",
      "eotn",
      "yotx",
      "yot",
      "sekstam",
      "seith",
      "saith",
      "sebun",
      "sibun",
      "seovon",
      "seven",
      "sigun",
      "zeven",
      "zibn",
      "siu",
      "seften",
      "zepten",
      "septem",
      "sette",
      "sapte",
      "sapti",
      "siapto",
      "siete",
      "set",
      "seat",
      "setxi",
      "siete",
      "hepta",
      "efta",
      "septini",
      "sedmi",
      "sem",
      "siem",
      "sim",
      "sedm",
      "txedem",
      "sedam",
      "axta",
      "ath",
      "haf",
      "spat",
      "sukt",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 8",
    root: "hectow",
    descendants: [
      "tete",
      "tetu",
      "aitata",
      "out",
      "utx",
      "ut",
      "okstu",
      "eith",
      "eix",
      "eth",
      "wuth",
      "oht",
      "oahtx",
      "hoht",
      "ahtau",
      "athe",
      "eahta",
      "eiht",
      "ohta",
      "aht",
      "ahto",
      "axt",
      "atta",
      "okto",
      "uhto",
      "oktu",
      "otto",
      "huit",
      "ohto",
      "axto",
      "osmi",
      "osam",
      "vosiem",
      "osm",
      "osem",
      "axta",
      "ath",
      "ata",
      "haxt",
      "atu",
      "hax",
      "okat",
      "okt",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 9",
    root: "hnewn",
    descendants: [
      "nan",
      "nen",
      "inn",
      "inu",
      "nau",
      "nav",
      "naw",
      "noi",
      "naoi",
      "nuy",
      "niun",
      "niyon",
      "nione",
      "nizen",
      "nine",
      "nain",
      "nigun",
      "neun",
      "nege",
      "noin",
      "nin",
      "niu",
      "nio",
      "nigyu",
      "ni",
      "nuven",
      "neven",
      "noven",
      "novem",
      "nove",
      "noe",
      "noua",
      "nu",
      "novi",
      "nuf",
      "neuf",
      "nouv",
      "nau",
      "nuobe",
      "nuebe",
      "muevi",
      "nofe",
      "ennea",
      "devuni",
      "deveni",
      "devini",
      "deveti",
      "dzieviatx",
      "deviat",
      "yevec",
      "devet",
      "nava",
      "no",
      "naum",
    ],
  },
  {
    comment: "Proto-Indo-European word for number 10",
    root: "decm",
    descendants: [
      "ziete",
      "diete",
      "dete",
      "tasn",
      "tasu",
      "dasu",
      "tekam",
      "decam",
      "dek",
      "dec",
      "deg",
      "dekan",
      "deitx",
      "taihun",
      "thiine",
      "tien",
      "ten",
      "tin",
      "tein",
      "tsen",
      "tiu",
      "tio",
      "deken",
      "desem",
      "decem",
      "dece",
      "dege",
      "zeti",
      "dik",
      "jize",
      "dietxi",
      "dez",
      "dekse",
      "dis",
      "deka",
      "deximt",
      "desenti",
      "deset",
      "dziesiatx",
      "yesac",
      "daxa",
      "rasa",
      "lasa",
      "dus",
      "dox",
      "deh",
      "datha",
      "du",
      "xak",
    ],
  },
  {
    comment: "Proto-Mayan word for the number 1",
    root: "juun",
    descendants: ["hun", "jun", "xun"],
  },
  {
    comment: "Proto-Mayan word for the number 2",
    root: "kaab",
    descendants: ["tsab", "kai", "kiep", "kaha", "hib"],
  },
  {
    comment: "Proto-Mayan word for the number 3",
    root: "oohx",
    descendants: ["ox", "oxi", "oxip", "oxeb", "oox"],
  },
  {
    comment: "Proto-Mayan word for the number 4",
    root: "kaang",
    descendants: ["tze", "kaji", "kahup", "kan", "han"],
  },
  {
    comment: "Proto-Mayan word for the number 5",
    root: "hoh",
    descendants: ["bo", "woho", "hop", "oyeb", "hoho", "vohob"],
  },
  {
    comment: "Proto-Mayan word for the number 6",
    root: "wahq",
    descendants: ["acac", "waqih", "wakip", "waqeb", "waak", "vak"],
  },
  {
    comment: "Proto-Mayan word for the number 7",
    root: "huq",
    descendants: ["buc", "wuquh", "uuk", "vuk"],
  },
  {
    comment: "Proto-Mayan word for the number 8",
    root: "waqshaq",
    descendants: ["huaxic", "wakxaqih", "wahxakhip", "waxak"],
  },
  {
    comment: "Proto-Mayan word for the number 9",
    root: "beleng",
    descendants: ["belleuh", "belejeh", "belehep", "balon", "bolon", "balun"],
  },
  {
    comment: "Proto-Mayan word for the number 10",
    root: "laxung",
    descendants: ["lahu", "lahuh", "lahun"],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 1",
    root: "ktig",
    descendants: [
      "i",
      "yi",
      "iuh",
      "ih",
      "iai",
      "yat",
      "zak",
      "ziet",
      "tsit",
      "tsek",
      "ziak",
      "seoh",
      "jit",
      "tih",
      "pakat",
      "langai",
      "cik",
      "thek",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 2",
    root: "knis",
    descendants: [
      "liang",
      "lia",
      "niang",
      "lie",
      "lizu",
      "lian",
      "koou",
      "hnac",
      "sak",
      "patni",
      "nuu",
      "nis",
      "nyih",
      "gnyis",
      "nyu",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 3",
    root: "kxum",
    descendants: [
      "san",
      "sa",
      "sae",
      "so",
      "se",
      "xie",
      "sam",
      "lhaam",
      "sang",
      "liom",
      "liam",
      "txu",
      "sa",
      "sum",
      "hsum",
      "ksum",
      "som",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 4",
    root: "pli",
    descendants: [
      "si",
      "su",
      "sei",
      "lai",
      "li",
      "lei",
      "ti",
      "xi",
      "le",
      "lue",
      "lui",
      "bisi",
      "bxi",
      "zyi",
      "vxu",
      "bxi",
      "xo",
      "ble",
      "bli",
      "yi",
    ],
  },
  {
    comment:
      "Proto-Sino-Tibetan word for the number 5. I do not know why the 'p' is reconstructed at the beginning.",
    root: "plunga",
    descendants: [
      "wu",
      "u",
      "ou",
      "vu",
      "uoh",
      "eng",
      "ungu",
      "ungau",
      "goo",
      "mu",
      "unga",
      "ungawa",
      "manga",
      "ungah",
      "ingah",
      "yanga",
      "langa",
      "yanga",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 6",
    root: "ktiriuk",
    descendants: [
      "liu",
      "lio",
      "lau",
      "luh",
      "luah",
      "loh",
      "noh",
      "lieu",
      "leh",
      "ongok",
      "louk",
      "lek",
      "so",
      "xu",
      "niu",
      "uhkrauk",
      "txauh",
      "paruk",
      "truk",
      "druk",
      "drug",
      "tso",
      "trunk",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 7",
    root: "snis",
    descendants: [
      "txi",
      "txie",
      "txih",
      "txieh",
      "txiuh",
      "tsa",
      "tsi",
      "tsai",
      "txat",
      "tsiat",
      "sit",
      "tseih",
      "tsik",
      "hunih",
      "sanit",
      "uvdun",
      "ubdun",
      "dun",
      "din",
      "di",
      "nyit",
      "nis",
      "ni",
    ],
  },
  {
    comment:
      "Proto-Sino-Tibetan word for the number 8. I do not know why it is reconstructed with a 't' at the beginning, when nearly all Sino-Tibetan languages have either 'p' or 'b' at the beginning. I guess it is something similar to why the Proto-Indo-European word for 8 is reconstructed with 'hec-' instead of 'oc-' at the beginning, or why the Proto-Indo-European word for 9 is reconstructed with 'hn' instead of 'n' at the beginning, or why the Proto-Indo-European word for 2 is reconstructed to end with 'h', that is, because of the evidence from the early-splitting (in that case Anatolian) languages. I wonder whether I am biasing the results towards considering early sound changes more probable than they actually are, by including such words here.",
    root: "triat",
    descendants: [
      "pa",
      "ba",
      "paih",
      "peh",
      "poh",
      "pah",
      "baat",
      "pae",
      "vat",
      "pueh",
      "buai",
      "baik",
      "po",
      "hrac",
      "xih",
      "ubgiat",
      "geh",
      "giat",
      "burgiad",
      "zie",
      "jat",
      "get",
      "zat",
      "yat",
    ],
  },
  {
    comment: "Proto-Sino-Tibetan word for the number 9",
    root: "tkua",
    descendants: [
      "jiu",
      "txio",
      "ciu",
      "kiau",
      "txiu",
      "kau",
      "kiau",
      "txau",
      "kiu",
      "keu",
      "kei",
      "kau",
      "ko",
      "txi",
      "kui",
      "pukua",
      "tawa",
      "dikhi",
      "urgu",
      "udgu",
      "gu",
      "go",
      "dogo",
      "dugu",
    ],
  },
  {
    comment:
      "Proto-Sino-Tibetan word for the number 10. I do not know why it is reconstructed with 'n' at the beginning.",
    root: "nitsub",
    descendants: [
      "xi",
      "txi",
      "seh",
      "suh",
      "sih",
      "zeh",
      "zoh",
      "zih",
      "za",
      "sap",
      "sok",
      "xap",
      "sip",
      "siup",
      "sep",
      "tsap",
      "tsa",
      "sek",
      "sik",
      "seik",
      "zuh",
      "txip",
      "tse",
      "se",
      "so",
      "niji",
      "hadi",
      "sio",
      "ufxu",
      "ubku",
      "ufku",
      "txe",
      "kih",
    ],
  },
];
// Obrisimo iz "etymology_game_validator.js" podatke koji nam za nasumicno izmjenjivanje rijeci ne trebaju.
const abeceda = "abcdefghijklmnopqrstuvwxyz";
// Sada ćemo staviti korijene iz baze podataka u simulirani prajezik (umjesto da
// korijene nasumično generiramo, kao što smo radili u "etymology.html").
let original = [];
for (const rijec_u_prajeziku of baza_podataka)
  original.push(rijec_u_prajeziku.root);
// Sad slijedi algoritam za nasumicno izmjenjivanje prarijeci.
let language1 = [],
  language2 = [];
function nasumicno_izmijeni_rijec(pocetna_rijec) {
  let nova_rijec = pocetna_rijec;
  const vjerojatnost_izmjene_pojedinog_slova = 1 / (pocetna_rijec.length * 2);
  for (let i = 0; i < pocetna_rijec.length + 1; i++) {
    if (Math.random() < vjerojatnost_izmjene_pojedinog_slova) {
      const nasumicna_vrijednost = Math.random();
      if (nasumicna_vrijednost < 1 / 3)
        //Nasumicno umetanje slova.
        nova_rijec =
          nova_rijec.substr(0, i) +
          abeceda[Math.floor(Math.random() * abeceda.length)] +
          nova_rijec.substr(i);
      else if (nasumicna_vrijednost < 2 / 3)
        //Nasumicno brisanje slova.
        nova_rijec = nova_rijec.substr(0, i) + nova_rijec.substr(i + 1);
      //Nasumicna zamijena slova drugim slovom iz abecede.
      else
        nova_rijec =
          nova_rijec.substr(0, i) +
          abeceda[Math.floor(Math.random() * abeceda.length)] +
          nova_rijec.substr(i + 1);
    }
  }
  return nova_rijec;
}
function simulacija() {
  language1 = [];
  language2 = [];
  for (const prarijec of original) {
    language1.push(prarijec);
    language2.push(prarijec);
  }
  for (let i = 0; i < Math.min(language1.length, language2.length); i++) {
    language1[i] = nasumicno_izmijeni_rijec(language1[i]);
    language2[i] = nasumicno_izmijeni_rijec(language2[i]);
  }
}
// Sada slijedi program za testiranje:
for (let prarijec of baza_podataka) {
  prarijec.broj_pogodenih = 0;
  prarijec.simulirani_potomci = [];
}
let jesmo_li_naletjeli_na_gresku = false;
const koliko_cemo_puta_izvrsiti_simulaciju = 500;
for (let i = 0; i < koliko_cemo_puta_izvrsiti_simulaciju; i++) {
  simulacija();
  for (let i = 0; i < baza_podataka.length; i++) {
    if (baza_podataka[i].root != original[i]) {
      console.log(
        "Neki dio simulacije je promijenio dio originala, prekidamo!"
      );
      jesmo_li_naletjeli_na_gresku = true;
      break;
    }
    if (!baza_podataka[i].simulirani_potomci.includes(language1[i])) {
      baza_podataka[i].simulirani_potomci.push(language1[i]);
      if (baza_podataka[i].descendants.includes(language1[i]))
        baza_podataka[i].broj_pogodenih++;
    }
    if (!baza_podataka[i].simulirani_potomci.includes(language2[i])) {
      baza_podataka[i].simulirani_potomci.push(language2[i]);
      if (baza_podataka[i].descendants.includes(language2[i]))
        baza_podataka[i].broj_pogodenih++;
    }
  }
  if (jesmo_li_naletjeli_na_gresku) break;
}
// Ako nismo naletjeli na gresku, ispisimo rezultat.
if (!jesmo_li_naletjeli_na_gresku) {
  console.log(`<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Results of the validation of a randomized algorithm instead of one used in Etymology Game</title>
<style type="text/css">
body {
  font-family: sans-serif;
}
table, tr, td, th {
  border-collapse: collapse;
  border-style: solid;
}
td:nth-child(1), h1 {
  text-align: center;
}
</style>
</head>
<body>
<h1>Results of the control simulation</h1>
<p style="text-align: justify">For comparison of how good the algorithm for simulating historical phonology in <a href="https://flatassembler.github.io/etymologist.html">Etymology Game</a> is, here is what happens if you replace that algorithm with a completely random one:</p>
<table>
<tr style="background-color: #eeeeff">
  <th>ID of the comment</th>
  <th>Parent word</th>
  <th>Success rate</th>
  <th>Child words in the game</th>
  <th>Child words in the real world</th>
</tr>
`);
  let prosjek_uspjeha = 0;
  for (let i = 0; i < baza_podataka.length; i++)
    prosjek_uspjeha +=
      (baza_podataka[i].broj_pogodenih /
        baza_podataka[i].simulirani_potomci.length) *
      100;
  prosjek_uspjeha /= baza_podataka.length;
  for (let i = 0; i < baza_podataka.length; i++) {
    const prarijec = baza_podataka[i];
    const uspjeh =
      (prarijec.broj_pogodenih / prarijec.simulirani_potomci.length) * 100;
    console.log(`
<tr style="background-color: ${
      uspjeh == 0 ? "#ffcccc" : uspjeh > prosjek_uspjeha ? "#ccffcc" : "#ffeecc"
    }">
  <td>${i + 1}</td>
  <td>${prarijec.root}</td>
  <td>${uspjeh.toFixed(3)}%</td>
  <td>${prarijec.simulirani_potomci
    .sort((prva_rijec, druga_rijec) => {
      if (
        prarijec.descendants.includes(prva_rijec) &&
        !prarijec.descendants.includes(druga_rijec)
      )
        return -1;
      if (
        prarijec.descendants.includes(druga_rijec) &&
        !prarijec.descendants.includes(prva_rijec)
      )
        return 1;
      if (prva_rijec < druga_rijec) return -0.5;
      if (prva_rijec == druga_rijec) return 0;
      return 0.5;
    })
    .join(" ")}</td>
  <td>${prarijec.descendants.sort().join(" ")}</td>
</tr>
`);
  }

  console.log(`
</table>
<p>Average success rate: ${prosjek_uspjeha}%</p>
<section>
<h2>Comments:</h2>
<ol>`);
  for (const prarijec of baza_podataka)
    console.log(`<li>${prarijec.comment}</li>`);
  console.log(`
</ol>
</section>
</body>
</html>
`);
}
