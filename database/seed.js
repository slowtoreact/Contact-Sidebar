const db  = require('./index.js');
const Restaurant = require('./restaurant.js');

const restaurantData = [
      {
        name: "CENTRO",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "(303)442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['07:30-22:00'],
          Tuesday: ['07:30-22:00'],
          Wednesday: ['07:30-22:00'],
          Thursday: ['07:30-22:00'],
          Friday: ['07:30-22:30'],
          Saturday: ['10:00-22:30'],
          Sunday: ['10:00-21:00']
        }
      },
      {
        name: "JULEP",
        address: "3258 Larimer St, Denver, CO 80205",
        phone: "(303)-295-8977",
        website: "https://www.juleprino.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/julep-denver",
        hoursOpen: {
          Monday: [''],
          Tuesday: [''],
          Wednesday: ['17:00-22:00'],
          Thursday: ['17:00-22:00'],
          Friday: ['16:00-23:00'],
          Saturday: ['11:00-23:00'],
          Sunday: ['10:00-15:00']
        }
      },
      {
        name: "DIO MIO",
        address: "3264 Larimer St, Denver, CO 80205",
        phone: "(303)562-1965",
        website: "https://www.diomiopasta.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['17:00-21:30'],
          Tuesday: ['17:00-21:30'],
          Wednesday: ['17:00-21:30'],
          Thursday: ['17:00-21:30'],
          Friday: ['17:00-22:00'],
          Saturday: ['17:00-22:00'],
          Sunday: ['']
        }
      },
      {
        name: "SAFTA",
        address: "3330 Brighton Blvd, #201 Denver, CO 80216",
        phone: "(720)408-2444",
        website: "https://www.eatwithsafta.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: [''],
          Tuesday: [''],
          Wednesday: ['11:00-14:30','17:00-22:00'],
          Thursday: ['11:00-14:30','17:00-22:00'],
          Friday: ['11:00-14:30','17:00-23:00'],
          Saturday: ['10:00-14:30','17:00-23:00'],
          Sunday: ['10:00-14:30','17:00-22:00']
        }
      },
      {
        name: "BAR TACO",
        address: "1048 Pearl St, Ste. 101 Boulder, CO 80302",
        phone: "(719)249-8226",
        website: "https://www.bartaco/location.boulder.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-0:00'],
          Tuesday: ['11:00-0:00'],
          Wednesday: ['11:00-0:00'],
          Thursday: ['11:00-0:00'],
          Friday: ['11:00-0:00'],
          Saturday: ['11:00-0:00'],
          Sunday: ['11:00-0:00']
        }
      },
      {
        name: "BRASSERIE TEN TEN",
        address: "1011 Walnut St, Boulder, CO 80302",
        phone: "(303)998-1010",
        website: "https://www.brasserietenten.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/brassierie-ten-ten-boulder",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['09:00-23:00'],
          Sunday: ['09:00-21:00']
        }
      },
      {
        name: "RVER & WOODS",
        address: "2328 Pearl St, Boulder, CO 80302",
        phone: "(303)993-6301",
        website: "https://www.riverandwoodsboulder.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/river-and-woods-restaurant-boulder",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['11:00-14:00', '16:00-22:00'],
          Wednesday: ['11:00-14:00', '16:00-22:00'],
          Thursday: ['11:00-14:00', '16:00-22:00'],
          Friday: ['11:00-14:00', '16:00-22:00'],
          Saturday: ['09:30-13:30', '17:00-22:00'],
          Sunday: ['09:30-13:30', '17:00-22:00']
        }
      },
      {
        name: "THE MED",
        address: "1002 Walnut St, Boulder, CO 80302",
        phone: "(303)444-5335",
        website: "https://www.themedboulder.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/the-mediterranean",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['11:00-23:00'],
          Sunday: ['11:00-21:00']
        }
      },
      {
        name: "CHINA GOURMET",
        address: "3970 N. Broadway, #102 Boulder, CO 80304",
        phone: "(303)440-3500",
        website: "https://www.chinagourmetmenu.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:30-21:00'],
          Tuesday: ['11:30-21:00'],
          Wednesday: ['11:30-21:00'],
          Thursday: ['11:30-21:00'],
          Friday: ['11:30-21:00'],
          Saturday: ['16:30-21:00'],
          Sunday: ['11:30-21:00']
        }
      },
      {
        name: "HAPA SUSHI",
        address: "1117 Pearl St, Boulder, CO 80302",
        phone: "(303)473-4730",
        website: "https://www.hapasushi.com/pages/pearl-street-in-boulder",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/hapa-sushi-grill-and-sake-bar-pearl-st-boulder",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-00:00'],
          Friday: ['11:00-00:00'],
          Saturday: ['11:00-00:00'],
          Sunday: ['11:00-22:00']
        }
      },
      {
        name: "BOULDER CHOPHOUSE",
        address: "921 Walnut St, Boulder, CO 80302",
        phone: "(303)443-1188",
        website: "https://www.boulderchophouse.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/boulder-chophouse-and-tavern-boulder",
        hoursOpen: {
          Monday: ['16:00-22:00'],
          Tuesday: ['16:00-22:00'],
          Wednesday: ['16:00-22:00'],
          Thursday: ['16:00-22:00'],
          Friday: ['16:00-23:00'],
          Saturday: ['16:00-23:00'],
          Sunday: ['16:00-22:00']
        }
      },
      {
        name: "SUSHI ZAN MAI",
        address: "1221 Spruce St, Boulder, CO 80302",
        phone: "(303)440-0743",
        website: "https://www.sushizanmai.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:30-14:00','17:00-22:00'],
          Tuesday: ['11:30-14:00','17:00-22:00'],
          Wednesday: ['11:30-14:00','17:00-22:00'],
          Thursday: ['11:30-14:00','17:00-22:00'],
          Friday: ['11:30-14:00','17:00-22:00'],
          Saturday: ['17:00-00:00'],
          Sunday: ['17:00-22:00']
        }
      },
      {
        name: "DENVER CHOPHOUSE",
        address: "1735 19th St, Ste. 100 Denver, CO 80202",
        phone: "(303)296-0800",
        website: "https://www.denverchophouse.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/denver-chophouse-denver",
        hoursOpen: {
          Monday: ['11:00-23:00'],
          Tuesday: ['11:00-23:00'],
          Wednesday: ['11:00-23:00'],
          Thursday: ['11:00-23:00'],
          Friday: ['11:00-00:00'],
          Saturday: ['11:00-00:00'],
          Sunday: ['11:00-22:00']
        }
      },
      {
        name: "TACOS TEQUILA WHISKEY",
        address: "1514 York St, Denver, CO 80206",
        phone: "(720)475-1337",
        website: "https://www.tacostequilawhiskey.com/city-park-denver",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['15:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['11:00-21:00']
        }
      },
      {
        name: "OHANA ISLAND KITCHEN",
        address: "2563 15th #105 St, Denver, CO 80211",
        phone: "(303)718-6580",
        website: "https://www.ohanadenver.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-21:00'],
          Saturday: ['11:00-21:00'],
          Sunday: ['']
        }
      },
      {
        name: "ROCKY FIN POKE BAR",
        address: "1245 E. Colfax Ave, #103 Denver, CO 80218",
        phone: "(303)861-1188",
        website: "https://www.rockyfinpoke.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-21:00'],
          Saturday: ['11:00-21:00'],
          Sunday: ['11:00-21:00']
        }
      },
      {
        name: "Community",
        address: "206 S. Public Rd, Lafayette, CO 80026",
        phone: "(720)890-3793",
        website: "https://www.eatatcommunity.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['16:00-21:00'],
          Tuesday: ['16:00-21:00'],
          Wednesday: ['16:00-21:00'],
          Thursday: ['16:00-22:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['11:00-21:00']
        }
      },
      {
        name: "RIOJA",
        address: "1431 Larimer St, Denver, CO 80202",
        phone: "303-442-7771",
        website: "https://www.riojadenver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/rioja-denver",
        hoursOpen: {
          Monday: ['17:00-22:00'],
          Tuesday: ['17:00-22:00'],
          Wednesday: ['11:30-14:30','17:00-22:00'],
          Thursday: ['11:30-14:30','17:00-22:00'],
          Friday: ['11:30-14:30','17:00-23:00'],
          Saturday: ['10:00-14:30','17:00-23:00'],
          Sunday: ['10:00-14:30','17:00-22:00']
        }
      },
      {
        name: "OAK",
        address: "1400 Pearl St, Boulder, CO 80302",
        phone: "(303)444-3622",
        website: "https://www.oakatfourteenth.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:30-22:00'],
          Tuesday: ['11:30-22:00'],
          Wednesday: ['11:30-22:00'],
          Thursday: ['11:30-22:00'],
          Friday: ['11:30-22:00'],
          Saturday: ['11:30-22:00'],
          Sunday: ['17:30-22:00']
        }
      },
      {
        name: "THE KITCHEN",
        address: "1039 Pearl St, Boulder, CO 80302",
        phone: "(303)544-5973",
        website: "https://www.thekitchenbistros.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['10:00-22:00'],
          Sunday: ['10:00-21:00']
        }
      },
      {
        name: "DARK HORSE",
        address: "2922 Baseline Rd, Boulder, CO 80303",
        phone: "(303)442-8162",
        website: "https://www.darkhorsebar.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-02:00'],
          Tuesday: ['11:00-02:00'],
          Wednesday: ['11:00-02:00'],
          Thursday: ['11:00-02:00'],
          Friday: ['11:00-02:00'],
          Saturday: ['11:00-02:00'],
          Sunday: ['09:00-02:00']
        }
      },
      {
        name: "ACREAGE",
        address: "1380 Horizon Ave, Lafayette, CO 80026",
        phone: "(303)227-3243",
        website: "https://www.acreageco.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['15:00-21:00'],
          Tuesday: ['15:00-21:00'],
          Wednesday: ['15:00-21:00'],
          Thursday: ['15:00-21:00'],
          Friday: ['15:00-21:00'],
          Saturday: ['12:00-21:00'],
          Sunday: ['12:00-21:00']
        }
      },
      {
        name: "TAVERNETTA",
        address: "1889 16th St, Denver, CO 80202",
        phone: "(720)605-1889",
        website: "https://www.tavernettadenver.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['12:00-23:00'],
          Sunday: ['12:00-22:00']
        }
      },
      {
        name: "OSTERIA MARCO",
        address: "1453 Larimer St, Denver, CO 80202",
        phone: "(303)534-5855",
        website: "https://www.osteriamarco.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/osteria-marco-denver",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['11:00-23:00'],
          Sunday: ['11:00-22:00']
        }
      },
      {
        name: "RACINES",
        address: "650 Sherman St, Denver, CO 80203",
        phone: "(303)595-0418",
        website: "https://www.racinesrestaruant.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['07:00-22:00'],
          Tuesday: ['07:00-22:00'],
          Wednesday: ['07:00-22:00'],
          Thursday: ['07:00-22:00'],
          Friday: ['07:00-23:00'],
          Saturday: ['08:00-23:00'],
          Sunday: ['08:00-22:00']
        }
      },
      {
        name: "LINGER",
        address: "2030 W. 30th Ave, Denver, CO 80211",
        phone: "(303)993-3120",
        website: "https://www.lingerdenver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/linger-denver",
        hoursOpen: {
          Monday: ['16:00-22:00'],
          Tuesday: ['11:30-14:30','16:00-22:00'],
          Wednesday: ['11:30-14:30','16:00-22:00'],
          Thursday: ['11:30-14:30','16:00-22:00'],
          Friday: ['11:30-14:30','16:00-23:00'],
          Saturday: ['10:00-14:30','17:00-23:00'],
          Sunday: ['10:00-14:30','17:00-22:00']
        }
      },
      {
        name: "RIO GRANDE",
        address: "1101 Walnut St, Boulder, CO 80302",
        phone: "(303)444-3690",
        website: "https://www.riograndemexican.com/locations/boulder",
        openTable: true,
        openTableLink: "https://www.opentable.com/rio-grande-mexican-restaurant-boulder",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-23:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['11:00-23:00'],
          Sunday: ['11:00-21:00']
        }
      },
      {
        name: "MCDEVITT TACO SUPPLY",
        address: "4800 Baseline Rd, Unit C-110 Boulder, CO 80302",
        phone: "(720)573-4194",
        website: "https://www.mcdevitttacosupply.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:30-21:00'],
          Tuesday: ['11:30-21:00'],
          Wednesday: ['11:30-21:00'],
          Thursday: ['11:30-21:00'],
          Friday: ['11:30-22:00'],
          Saturday: ['11:30-22:00'],
          Sunday: ['11:30-21:00']
        }
      },
      {
        name: "SANITAS BREWING COMPANY",
        address: "3550 Frontier Ave, unit A, Boulder, CO 80301",
        phone: "(303)442-4130",
        website: "https://www.sanitasbrewing.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:30-22:00'],
          Tuesday: ['11:30-22:00'],
          Wednesday: ['11:30-22:00'],
          Thursday: ['11:30-22:00'],
          Friday: ['11:30-22:00'],
          Saturday: ['11:30-22:00'],
          Sunday: ['11:30-21:00']
        }
      },
      {
        name: "BOULDER BEER COMPANY",
        address: "2880 Wilderness Pl, Boulder, CO 80301",
        phone: "(303)444-8448",
        website: "https://www.boulderbeer.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['11:00-22:00']
        }
      },
      {
        name: "AVERY BREWING COMPANY",
        address: "4910 Nautilus Ct N, Boulder, CO 80301",
        phone: "(303)440-4324",
        website: "https://www.averybrewing.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['15:00-22:00'],
          Tuesday: ['11:30-22:00'],
          Wednesday: ['11:30-22:00'],
          Thursday: ['11:30-23:00'],
          Friday: ['11:30-23:00'],
          Saturday: ['11:30-23:00'],
          Sunday: ['11:30-22:00']
        }
      },
      {
        name: "ARCANA",
        address: "909 Walnut St, Boulder, CO 80302",
        phone: "(303)444-3885",
        website: "https://www.arcanarestaurant.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['16:00-21:00'],
          Tuesday: ['16:00-22:00'],
          Wednesday: ['16:00-22:00'],
          Thursday: ['16:00-22:00'],
          Friday: ['16:00-22:00'],
          Saturday: ['10:00-14:30','16:00-22:00'],
          Sunday: ['10:00-14:30', '16:00-21:00']
        }
      },
      {
        name: "BRU HANDBUILT ALES & EATS",
        address: "5290 Arapahoe Ave, Boulder, CO 80303",
        phone: "(720)638-5193",
        website: "https://www.bruboulder.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:30-22:00'],
          Tuesday: ['11:30-22:00'],
          Wednesday: ['11:30-22:00'],
          Thursday: ['11:30-22:00'],
          Thursday: ['11:30-22:00'],
          Friday: ['11:30-22:00'],
          Saturday: ['11:30-22:00'],
          Sunday: ['11:30-21:00']
        }
      },
      {
        name: "VIA PEARLA",
        address: "901 Pearl St, Boulder, CO 80302",
        phone: "(720)669-0100",
        website: "https://www.viapearla.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/via-pearla-boulder",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['11:00-23:00'],
          Sunday: ['15:00-21:00']
        }
      },
      {
        name: "SNOOZE AN A.M. EATERY",
        address: "1617 Pearl St, Boulder, CO 80302",
        phone: "(303)225-7344",
        website: "https://www.snoozeeatery.com/locations/boco",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['07:00-15:00'],
          Tuesday: ['07:00-15:00'],
          Wednesday: ['07:00-15:00'],
          Thursday: ['07:00-15:00'],
          Friday: ['07:00-15:00'],
          Saturday: ['07:00-15:00'],
          Sunday: ['07:00-15:00']
        }
      },
      {
        name: "SNOOZE AN A.M. EATERY",
        address: "2262 Larimer St, Denver, CO 80205",
        phone: "(303)297-0700",
        website: "https://www.snoozeeatery.com/locations/ballpark",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['06:30-14:30'],
          Tuesday: ['06:30-14:30'],
          Wednesday: ['06:30-14:30'],
          Thursday: ['06:30-14:30'],
          Friday: ['06:30-14:30'],
          Saturday: ['06:30-14:30'],
          Sunday: ['06:30-14:30']
        }
      },
      {
        name: "THE POST BREWING CO. - BOULDER",
        address: "2027 13th St, Boulder, CO 80302",
        phone: "(720)372-3341",
        website: "https://www.postbrewing.com/boulder",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/the-post-brewing-co-boulder",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['10:00-22:00'],
          Sunday: ['10:00-21:00']
        }
      },
      {
        name: "THE POST BREWING CO. - LAFAYETTE",
        address: "105 W. Emma St, Lafayette, CO 80026",
        phone: "(303)593-2066",
        website: "https://www.postbrewing.com/lafayette",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/the-post-brewing-co-lafayette",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['10:00-22:00'],
          Sunday: ['10:00-21:00']
        }
      },
      {
        name: "THE YELLOW DELI",
        address: "908 Pearl St, Boulder, CO 80302",
        phone: "(303)996-4700",
        website: "https://www.yellowdeli.com/boulder",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['00:00-23:59'],
          Tuesday: ['00:00-23:59'],
          Wednesday: ['00:00-23:59'],
          Thursday: ['00:00-23:59'],
          Friday: ['00:00-15:00'],
          Saturday: [''],
          Sunday: ['12:00-23:59']
        }
      },
      {
        name: "THE POST BREWING CO. - LONGMONT",
        address: "1258 South Hover Rd, Longmont, CO 80501",
        phone: "(720)588-2883",
        website: "https://www.postbrewing.com/longmont",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/the-post-brewing-co-longmont",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['10:00-22:00'],
          Sunday: ['10:00-21:00']
        }
      },
      {
        name: "SALT",
        address: "1047 Pearl St, Boulder, CO 80302",
        phone: "(303)444-7258",
        website: "https://www.saltthebistro.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/salt-boulder",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['10:00-21:00']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: ['7:30-22:00'],
          Tuesday: ['7:30-22:00'],
          Wednesday: ['7:30-22:00'],
          Thursday: [''],
          Friday: [''],
          Saturday: [''],
          Sunday: ['']
        }
      }
]

const insertRestaurants = function() {
  Restaurant.create(restaurantData)
    .then(() => db.close());
};

insertRestaurants();
