export const sectors = {
  hydrocarbures: {
    title: "Hydrocarbures",
    desc:
      "Pétrole et gaz naturel : principal secteur extractif de la République du Congo.",

    color: "from-cyan-500 to-blue-600",

    contracts: [
      {
        name: "Marine XII",
        operator: "ENI Congo / SNPC",
        pdf: "#",
      },

      {
        name: "Marine XX",
        operator: "Woodside Energy / SNPC",
        pdf: "#",
      },

      {
        name: "Moho-Bilondo",
        operator: "TotalEnergies EP Congo / SNPC",
        pdf: "#",
      },

      {
        name: "Nkossa",
        operator: "TotalEnergies EP Congo / SNPC",
        pdf: "#",
      },
    ],

    permits: [
    {
  name: "Marine III",
  operator: "SNPC",
  type: "Exploration / Production",
  decree: "Décret n°2005-294 du 18/07/2005",
  law: "Loi n°10-2006 du 30/03/2006",
  year: "2005",
  status: "Actif",
    pdf: "/documents/permis/marine-iii.pdf",
},

      {
        name: "Kayo",
        operator: "Wing Wah",
        type: "Exploration",
        decree: "Décret n°2006-173 du 14/04/2006",
        law: "Loi n°07-2008 du 07/04/2008",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Ngoki",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2006-427 du 31/07/2006",
        law: "Loi n°29-06 du 05/10/2006",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Mayombe",
        operator: "SNPC / PP",
        type: "Exploration",
        decree: "Décret n°2006-426 du 31/07/2006",
        law: "-",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Marine XIII",
        operator: "SNPC",
        type: "Exploration / Production",
        decree: "Décret n°2008-54 du 28/03/2008",
        law: "Loi n°33-2008 du 12/11/2008",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Haute Mer A",
        operator: "SNPC",
        type: "Offshore",
        decree: "Décret n°2009-228 du 30/07/2009",
        law: "Loi n°03-2009 du 22/09/2009",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Haute Mer B",
        operator: "SNPC",
        type: "Offshore",
        decree: "Décret n°2013-382 du 19/07/2013",
        law: "Loi n°22-2014 du 13/06/2014",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Mopongo",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2013-378 du 19/07/2013",
        law: "-",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Ngolo",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2013-379 du 19/07/2013",
        law: "-",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Marine XXI",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2018-485 du 26/12/2018",
        law: "-",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Marine XXVII",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2018-486 du 26/12/2018",
        law: "Loi n°50-2019",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Marine XXVIII",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2018-487 du 26/12/2018",
        law: "Loi n°51-2019",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Marine XX",
        operator: "TotalEnergies / SNPC",
        type: "Exploration",
        decree: "Décret n°2019-355 du 30/11/2019",
        law: "Loi n°45-2019",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Nanga I",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2019-356 du 30/11/2019",
        law: "Loi n°47-2019",
        status: "Actif",
        pdf: "#",
      },

      {
        name: "Mokélémbémbé",
        operator: "SNPC",
        type: "Exploration",
        decree: "Décret n°2015-93 du 13/01/2015",
        law: "Loi n°48-2019",
        status: "Actif",
        pdf: "#",
      },
    ],

    laws: [
      "Loi n°24-2016 portant Code des hydrocarbures",
      "Loi n°28-2019 relative au régime fiscal pétrolier",
      "Contrats de Partage de Production (CPP)",
      "Participation obligatoire de la SNPC dans les titres pétroliers",
    ],

    production: {
      pétrole: "95,65 millions de barils (2023)",
      gaz: "43 milliards de pieds cubes",
      exportations: "≈ 82 % des exportations nationales",
    },

    revenues: {
      recettes: "925,35 milliards FCFA (2023)",
      budget: "≈ 60 % des recettes de l'État",
      source: "Rapport ITIE Congo 2023",
    },
  },

  foret: {
    title: "Forêt",
    desc:
      "Exploitation durable des ressources forestières et valorisation du bois tropical.",

    color: "from-green-500 to-emerald-600",

    contracts: [
       {
    name: "Convention d'Aménagement et de Transformation (CAT)",
    operator: "CIB",
    pdf: "#",
  },
        {
    name: "Convention forestière UFA Kabo",
    operator: "CIB",
    pdf: "#",
  },
  {
    name: "Convention forestière Pokola",
    operator: "CIB",
    pdf: "#",
  },
     {
    name: "Convention forestière Ngombe",
    operator: "IFO",
    pdf: "#",
  },
    ],

    permits: [
      "Permis d'exploitation forestière",
      "Titres forestiers",
      "Concessions forestières",
    ],

    laws: [
      "Code forestier 2020",
      "Réglementation sur la gestion durable",
    ],

    production: {
      bois: "Bois tropicaux certifiés",
      essences: "Okoumé, Sapelli, Sipo",
    },
  },

  mines: {
    title: "Mines",
    desc:
      "Secteur minier comprenant le fer, la potasse, l'or et les polymétaux.",

    color: "from-yellow-500 to-orange-500",

    contracts: [
      {
        name: "Projet Kola Potash",
        operator: "Kore Potash",
        pdf: "#",
      },
 {
    name: "Convention minière Dougou",
    operator: "Kore Potash",
    pdf: "#",
  },
      {
        name: "Projet Zanaga Iron Ore",
        operator: "ZIOC",
        pdf: "#",
      },
        {
    name: "Convention minière Zanaga",
    operator: "Zanaga Iron Ore Company",
    pdf: "#",
  },
        {
    name: "Convention minière Sounda",
    operator: "Sapro Mayoko",
    pdf: "#",
  },
    ],

    permits: [
      "Permis de recherche Zanaga",
      "Permis d'exploitation Potasse",
    ],

    laws: [
      "Code minier",
      "Régime fiscal minier",
    ],

    production: {
      minerais: "Fer, Potasse, Or",
      potentiel: "Fort potentiel d'exportation",
    },
  },
}