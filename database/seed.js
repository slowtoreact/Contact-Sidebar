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
          Monday: ['00:01-00:00'],
          Tuesday: ['00:01-00:00'],
          Wednesday: ['00:01-00:00'],
          Thursday: ['00:01-00:00'],
          Friday: ['00:01-15:00'],
          Saturday: [''],
          Sunday: ['12:00-00:00']
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
        name: "GB FISH AND CHIPS",
        address: "1311 Broadway, Denver, CO 80210",
        phone: "(720)570-5103",
        website: "https://www.gbfishandchips.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['11:00-21:00']
        }
      },
      {
        name: "PINTS PUB - BRITISH GASTRO BREWPUB",
        address: "221 W 13th Ave, Denver, CO 80204",
        phone: "(303)534-7543",
        website: "https://www.pintspub.com",
        openTable: true,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-00:00'],
          Saturday: ['11:00-00:00'],
          Sunday: ['11:00-20:00']
        }
      },
      {
        name: "CUBA CUBA CAFE & BAR",
        address: "1173 Delaware St, Denver, CO 80204",
        phone: "(303)605-2822",
        website: "https://www.cubacubacafe.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['17:00-22:00'],
          Tuesday: ['17:00-22:00'],
          Wednesday: ['17:00-22:00'],
          Thursday: ['17:00-22:00'],
          Friday: ['17:00-22:30'],
          Saturday: ['17:00-22:30'],
          Sunday: ['']
        }
      },
      {
        name: "MIZUNA",
        address: "3504, 225 E 7th St, Denver, CO 80203",
        phone: "(303)832-4778",
        website: "https://www.mizunadenver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/mizuna-denver",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['17:00-22:00'],
          Wednesday: ['17:00-22:00'],
          Thursday: ['17:00-22:00'],
          Friday: ['17:00-22:00'],
          Saturday: ['17:00-22:00'],
          Sunday: ['']
        }
      },
      {
        name: "THE FAINTING GOAT",
        address: "846 Broadway, Denver, CO 80203",
        phone: "(303)945-2323",
        website: "https://www.thefaintinggoatdenver.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-02:00'],
          Tuesday: ['11:00-02:00'],
          Wednesday: ['11:00-02:00'],
          Thursday: ['11:00-02:00'],
          Friday: ['11:00-02:00'],
          Saturday: ['10:00-02:00'],
          Sunday: ['10:00-02:00']
        }
      },
      {
        name: "TABLE 6",
        address: "609 Corona St, Denver, CO 80218",
        phone: "(303)831-8800",
        website: "https://www.table6denver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/table-6",
        hoursOpen: {
          Monday: ['17:00-22:00'],
          Tuesday: ['17:00-22:00'],
          Wednesday: ['17:00-22:00'],
          Thursday: ['17:00-22:00'],
          Friday: ['17:00-23:00'],
          Saturday: ['17:00-23:00'],
          Sunday: ['10:30-14:00','17:00-21:00']
        }
      },
      {
        name: "FRUITION RESTAURANT",
        address: "1313 6th Ave, Denver, CO 80218",
        phone: "(303)831-1962",
        website: "https://www.fruitionrestaurant.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['17:00-22:00'],
          Tuesday: ['17:00-22:00'],
          Wednesday: ['17:00-22:00'],
          Thursday: ['17:00-22:00'],
          Friday: ['17:00-22:00'],
          Saturday: ['17:00-22:00'],
          Sunday: ['17:00-21:00']
        }
      },
      {
        name: "SUSHI DEN",
        address: "1487 S Pearl St, Denver, CO 80210",
        phone: "(303)777-0826",
        website: "https://www.sushiden.net",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:30-14:30','16:45-22:30'],
          Tuesday: ['11:30-14:30','16:45-22:30'],
          Wednesday: ['11:30-14:30','16:45-22:30'],
          Thursday: ['11:30-14:30','16:45-22:30'],
          Friday: ['11:30-14:30','16:45-23:00'],
          Saturday: ['16:30-23:00'],
          Sunday: ['17:00-22:30']
        }
      },
      {
        name: "IZAKAYA DEN",
        address: "1487A S Pearl St, Denver, CO 80210",
        phone: "(303)777-0691",
        website: "https://www.izakayaden.net",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['17:00-22:00'],
          Tuesday: ['17:00-22:00'],
          Wednesday: ['17:00-22:00'],
          Thursday: ['17:00-22:00'],
          Friday: ['17:00-23:00'],
          Saturday: ['11:30-14:30','17:00-23:00'],
          Sunday: ['']
        }
      },
      {
        name: "OTOTO",
        address: "1501 S Pearl St, Denver, CO 80210",
        phone: "(303)733-2503",
        website: "https://www.ototoden.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: [''],
          Tuesday: [''],
          Wednesday: ['16:30-22:00'],
          Thursday: ['16:30-22:00'],
          Friday: ['16:30-23:00'],
          Saturday: ['16:30-23:00'],
          Sunday: ['11:30-14:30','16:30-21:00']
        }
      },
      {
        name: "VENICE ITALIAN RESTAURANT",
        address: "5946 S Holly St, Greenwood Village, CO 80111",
        phone: "(720)482-9191",
        website: "https://www.veniceristorante.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-14:00','17:00-22:00'],
          Tuesday: ['11:00-14:00','17:00-22:00'],
          Wednesday: ['11:00-14:00','17:00-22:00'],
          Thursday: ['11:00-14:00','17:00-22:00'],
          Friday: ['11:00-14:00','17:00-22:00'],
          Saturday: ['17:00-22:00'],
          Sunday: ['17:00-22:00']
        }
      },
      {
        name: "MERCANTILE DINING AND PROVISIONS",
        address: "1701 Wynkoop St, #155 Denver, CO 80202",
        phone: "(720)460-3733",
        website: "https://www.mercantiledenver.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['07:00-22:00'],
          Tuesday: ['07:00-22:00'],
          Wednesday: ['07:00-22:00'],
          Thursday: ['07:00-22:00'],
          Friday: ['07:00-22:00'],
          Saturday: ['07:00-22:00'],
          Sunday: ['07:00-22:00']
        }
      },
      {
        name: "VILLAGE COFFEE SHOP",
        address: "6717 Folsom St, Boulder, CO 80302",
        phone: "(303)442-9689",
        website: "https://www.villagecoffeeshopboulder.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['05:30-15:00'],
          Tuesday: ['05:30-15:00'],
          Wednesday: ['05:30-15:00'],
          Thursday: ['05:30-15:00'],
          Friday: ['05:30-15:00'],
          Saturday: ['05:30-14:30'],
          Sunday: ['07:00-14:30']
        }
      },
      {
        name: "THE PARKWAY CAFE",
        address: "4700 Pearl St, #4 Boulder, CO 80301",
        phone: "(303)447-1833",
        website: "https://www.boulderbreakfast.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['07:00-15:00'],
          Tuesday: ['07:00-15:00'],
          Wednesday: ['07:00-15:00'],
          Thursday: ['07:00-15:00'],
          Friday: ['07:00-15:00'],
          Saturday: ['07:00-14:00'],
          Sunday: ['08:00-13:00']
        }
      },
      {
        name: "LUCKY'S CAFE",
        address: "3980 Broadway, Boulder, CO 80304",
        phone: "(303)444-5007",
        website: "https://www.luckysmarket.com/luckys-cafe",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['07:00-14:00'],
          Tuesday: ['07:00-14:00'],
          Wednesday: ['07:00-14:00'],
          Thursday: ['07:00-14:00'],
          Friday: ['07:00-14:00'],
          Saturday: ['07:00-14:00'],
          Sunday: ['07:00-14:00']
        }
      },
      {
        name: "SAM'S NO.3",
        address: "1500 Curtis St, Denver, CO 80202",
        phone: "(303)534-1927",
        website: "https://www.samsno3.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['05:30-22:00'],
          Tuesday: ['05:30-22:00'],
          Wednesday: ['05:30-22:00'],
          Thursday: ['05:30-23:00'],
          Friday: ['05:30-00:00'],
          Saturday: ['07:00-00:00'],
          Sunday: ['07:00-22:00']
        }
      },
      {
        name: "OFFICERS CLUB",
        address: "84 Rampart Way, Denver, CO 80230",
        phone: "(303)284-0714",
        website: "https://www.officersclublowry.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['10:00-23:00'],
          Sunday: ['10:00-21:00']
        }
      },
      {
        name: "DENVER BISCUIT COMPANY",
        address: "3237 E. Colfax Ave, Denver, CO 80206",
        phone: "(303)377-7900",
        website: "https://www.denbisco.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['08:00-14:00'],
          Tuesday: ['08:00-14:00'],
          Wednesday: ['08:00-14:00'],
          Thursday: ['08:00-14:00'],
          Friday: ['08:00-14:00'],
          Saturday: ['08:00-15:00'],
          Sunday: ['08:00-15:00']
        }
      },
      {
        name: "ANNETTE",
        address: "2501 Dallas St, #108 Aurora, CO 80010",
        phone: "(720)710-9975",
        website: "https://www.annettesscratchtotable.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['15:00-22:00'],
          Wednesday: ['15:00-22:00'],
          Thursday: ['15:00-22:00'],
          Friday: ['15:00-22:00'],
          Saturday: ['10:00-22:00'],
          Sunday: ['10:00-14:00']
        }
      },
      {
        name: "BEAST AND BOTTLE",
        address: "719 E. 17th Ave, Denver, CO 80203",
        phone: "(303)623-3223",
        website: "https://www.beastandbottle.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/beast-and-bottle",
        hoursOpen: {
          Monday: ['17:00-21:00'],
          Tuesday: ['17:00-21:00'],
          Wednesday: ['17:00-21:00'],
          Thursday: ['17:00-21:00'],
          Friday: ['17:00-22:00'],
          Saturday: ['10:00-14:00','17:00-22:00'],
          Sunday: ['10:00=14:00','17:00-21:00']
        }
      },
      {
        name: "STAR KITCHEN",
        address: "2917 W. Mississippi Ave, Denver, CO 80219",
        phone: "(303)936-0089",
        website: "https://www.starkitchenseafooddimsum.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['10:30-21:30'],
          Tuesday: ['10:30-21:30'],
          Wednesday: [''],
          Thursday: ['10:30-21:30'],
          Friday: ['10:30-22:00'],
          Saturday: ['10:00-22:00'],
          Sunday: ['10:00-21:30']
        }
      },
      {
        name: "OPHELIA'S ELECTRIC SOAP BOX",
        address: "1215 20th St, Denver, CO 80202",
        phone: "(303)993-8023",
        website: "https://www.opheliasdenver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/ophelias-electric-soapbox",
        hoursOpen: {
          Monday: ['16:00-00:00'],
          Tuesday: ['16:00-00:00'],
          Wednesday: ['16:00-00:00'],
          Thursday: ['16:00-01:00'],
          Friday: ['11:00-14:00','16:00-01:00'],
          Saturday: ['10:00-01:00'],
          Sunday: ['10:00-14:30','17:00-00:00']
        }
      },
      {
        name: "QUALITY ITALIAN",
        address: "241 Columbine St, Denver, CO 80206",
        phone: "(303)532-8888",
        website: "https://www.qualityitalian.com/denver-menu",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/quality-italian-denver-2",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['10:30-23:00'],
          Sunday: ['10:30-22:00']
        }
      },
      {
        name: "TOKYO PREMIUM BAKERY",
        address: "1540 S. Pearl St, Denver, CO 80210",
        phone: "(720)531-3784",
        website: "https://www.tokyopremiumbakery.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['06:00-16:00'],
          Wednesday: ['06:00-16:00'],
          Thursday: ['06:00-16:00'],
          Friday: ['06:00-18:00'],
          Saturday: ['06:00-18:00'],
          Sunday: ['06:00-16:00']
        }
      },
      {
        name: "YANNI'S GREEK RESTAURANT",
        address: "1951, 5425 Landmark Pl, Greenwood Village, CO 80111",
        phone: "(303)692-0404",
        website: "https://www.yannisdenver.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['16:00-21:00']
        }
      },
      {
        name: "THE SINK",
        address: "1165 13th St, Boulder, CO 80302",
        phone: "(303)444-7465",
        website: "https://www.thesink.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['11:00-23:00'],
          Sunday: ['11:30-22:00']
        }
      },
      {
        name: "BIKER JIM'S",
        address: "2148 Larimer St, Denver, CO 80205",
        phone: "(720)746-9355",
        website: "https://www.bikerjimsdogs.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-03:00'],
          Saturday: ['11:00-03:00'],
          Sunday: ['11:00-22:00']
        }
      },
      {
        name: "THE LOBBY",
        address: "2191 Arapahoe St, Denver, CO 80205",
        phone: "(303)997-9911",
        website: "https://www.thelobbydenver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/the-lobby-denver",
        hoursOpen: {
          Monday: ['08:00-18:00'],
          Tuesday: ['08:00-18:00'],
          Wednesday: ['08:00-18:00'],
          Thursday: ['08:00-18:00'],
          Friday: ['08:00-18:00'],
          Saturday: ['08:00-18:00'],
          Sunday: ['08:00-16:30']
        }
      },
      {
        name: "ELWAY'S",
        address: "1881 Curtis St, Denver, CO 80202",
        phone: "(303)312-3107",
        website: "http://www.ritzcarlton.com/en/hotels/colorado/denver/dining/elways-downtown",
        openTable: true,
        openTableLink: "https://www.opentable.com/elways-downtown",
        hoursOpen: {
          Monday: ['06:30-22:00'],
          Tuesday: ['06:30-22:00'],
          Wednesday: ['06:30-22:00'],
          Thursday: ['06:30-22:00'],
          Friday: ['06:30-22:00'],
          Saturday: ['06:30-22:00'],
          Sunday: ['06:30-21:00']
        }
      },
      {
        name: "THE CAPITAL GRILL",
        address: "1450 Larimer St, Denver, CO 80202",
        phone: "(303)539-2500",
        website: "https://www.thecapitalgrille.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/the-capital-grille-denver",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['16:30-23:00'],
          Sunday: ['16:00-21:00']
        }
      },
      {
        name: "OCEAN PRIME",
        address: "1465 Larimer St, Denver, CO 80202",
        phone: "(303)825-3663",
        website: "https://www.ocean-prime.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/ocean-prime-denver",
        hoursOpen: {
          Monday: ['11:30-22:00'],
          Tuesday: ['11:30-22:00'],
          Wednesday: ['11:30-22:00'],
          Thursday: ['11:30-22:00'],
          Friday: ['11:30-23:00'],
          Saturday: ['16:00-23:00'],
          Sunday: ['16:00-21:00']
        }
      },
      {
        name: "THIRSTY LION GASTROPUB - UNION STATION",
        address: "1605 Wynkoop St, Denver, CO 80202",
        phone: "(303)623-0316",
        website: "https://www.thirstyliongastropub.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/thirsty-lion-gastropub-and-grill-denver",
        hoursOpen: {
          Monday: ['11:00-23:00'],
          Tuesday: ['11:00-23:00'],
          Wednesday: ['11:00-23:00'],
          Thursday: ['11:00-23:00'],
          Friday: ['11:00-00:00'],
          Saturday: ['10:00-00:00'],
          Sunday: ['10:00-23:00']
        }
      },
      {
        name: "MELLOW MUSHROOM",
        address: "1201 16th St, #108 Denver, CO 80302",
        phone: "(720)328-9114",
        website: "https://www.mellowmushroom.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-00:00'],
          Saturday: ['11:00-00:00'],
          Sunday: ['11:00-22:00']
        }
      },
      {
        name: "RIALTO CAFE",
        address: "934 16th St, Denver, CO 80302",
        phone: "(303)893-2233",
        website: "https://www.rialtocafe.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/rialto-cafe",
        hoursOpen: {
          Monday: ['06:30-22:00'],
          Tuesday: ['06:30-22:00'],
          Wednesday: ['06:30-22:00'],
          Thursday: ['06:30-22:00'],
          Friday: ['06:30-23:00'],
          Saturday: ['08:00-23:00'],
          Sunday: ['08:00-22:00']
        }
      },
      {
        name: "FRASCA FOOD AND WINE",
        address: "1738 Pearl St, Boulder, CO 80302",
        phone: "(303)442-6966",
        website: "https://www.frascafoodandwine.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['17:30-21:30'],
          Tuesday: ['17:30-21:30'],
          Wednesday: ['17:30-21:30'],
          Thursday: ['17:30-21:30'],
          Friday: ['17:30-21:30'],
          Saturday: ['17:00-22:30'],
          Sunday: ['']
        }
      },
      {
        name: "IL PASTAIO RISTORANTE",
        address: "3075 Arapahoe Ave, Boulder, CO 80303",
        phone: "(303)447-9572",
        website: "https://www.ilpastaioboulder.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: [''],
          Sunday: ['']
        }
      },
      {
        name: "SFORNO TRATTORIA ROMANA",
        address: "1308 Pearl St, Boulder, CO 80302",
        phone: "(303)449-1787",
        website: "https://www.sfornoboulder.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/sforno-trattoria",
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
        name: "ELLYNGTON'S",
        address: "321 17th St, Denver, CO 80202",
        phone: "(303)297-3111",
        website: "https://www.brownpalace.com/dining/restaurants/ellyngtons",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/ellyngtons-at-the-brown-palace",
        hoursOpen: {
          Monday: ['06:30-11:00','11:30-13:30'],
          Tuesday: ['06:30-11:00','11:30-13:30'],
          Wednesday: ['06:30-11:00','11:30-13:30'],
          Thursday: ['06:30-11:00','11:30-13:30'],
          Friday: ['06:30-11:00','11:30-13:30'],
          Saturday: ['07:00-09:00'],
          Sunday: ['07:00-09:00']
        }
      },
      {
        name: "PARK & CO",
        address: "439 E 17th Ave, Denver, CO 80203",
        phone: "(720)328-6732",
        website: "https://www.parkandcodenver.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-00:00'],
          Saturday: ['10:00-00:00'],
          Sunday: ['10:00-22:00']
        }
      },
      {
        name: "CITY GRILLE ",
        address: "321 E Colfax Ave, Dener, CO 80302",
        phone: "(303)861-0726",
        website: "https://www.citygrille.com",
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
        name: "TORCHY'S TACOS",
        address: "1085 N Broadway, Denver, CO 80203",
        phone: "(303)436-1704",
        website: "https://www.torchystacos.com",
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
        name: "FLAGSTAFF HOUSE",
        address: "1138 Flagstaff Rd, Boulder, CO 80302",
        phone: "(303)442-4640",
        website: "https://www.flagstaffhouse.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['18:00-22:00'],
          Tuesday: ['18:00-22:00'],
          Wednesday: ['18:00-22:00'],
          Thursday: ['18:00-22:00'],
          Friday: ['17:30-22:00'],
          Saturday: ['17:00-22:00'],
          Sunday: ['17:30-22:00']
        }
      },
      {
        name: "BLACK CAT",
        address: "1964 13th St, Boulder, CO 80302",
        phone: "(303)444-5500",
        website: "https://www.blackcatboulder.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/black-cat",
        hoursOpen: {
          Monday: ['17:30-21:30'],
          Tuesday: ['17:30-21:30'],
          Wednesday: ['17:30-21:30'],
          Thursday: ['17:30-21:30'],
          Friday: ['17:30-21:30'],
          Saturday: ['17:30-21:30'],
          Sunday: ['17:30-21:30']
        }
      },
      {
        name: "NEXT DOOR",
        address: "1035 Pearl St, Boulder, CO 80302",
        phone: "(720)542-8159",
        website: "https://www.nextdooreatery.com",
        openTable: false,
        openTableLink: "",
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
        name: "CURRY N KEBOB",
        address: "3050 28th St, Boulder, CO 80301",
        phone: "(720)328-4696",
        website: "https://www.currynkebob.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['11:00-14:30', '17:00-21:30'],
          Tuesday: ['11:00-14:30', '17:00-21:30'],
          Wednesday: ['11:00-14:30', '17:00-21:30'],
          Thursday: ['11:00-14:30', '17:00-21:30'],
          Friday: ['11:00-14:30', '17:00-21:30'],
          Saturday: ['11:00-14:30', '17:00-21:30'],
          Sunday: ['11:00-14:30', '17:00-21:30']
        }
      },
      {
        name: "JAPANGO",
        address: "1136 Pearl St, Boulder, CO 80302",
        phone: "(303)938-0330",
        website: "https://www.boulderjapango.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/jpango-sushi-restaurant",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-22:00'],
          Friday: ['11:00-00:00'],
          Saturday: ['11:00-00:00'],
          Sunday: ['11:00-22:00']
        }
      },
      {
        name: "WILD STANDARD",
        address: "1043 Pearl St, Boulder, CO 80302",
        phone: "(720)638-4800",
        website: "https://www.wildstandard.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/wild-standard",
        hoursOpen: {
          Monday: ['16:00-21:00'],
          Tuesday: ['16:00-21:00'],
          Wednesday: ['16:00-21:00'],
          Thursday: ['16:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['11:00-21:00']
        }
      },
      {
        name: "ZOLO SOUTHWESTERN GRILL",
        address: "2525 Arapahoe Ave, Boulder, CO 80302",
        phone: "(303)449-0444",
        website: "https://www.zologrill.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/zolo-grill",
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
        name: "JAX FISHOUSE & OYSTER BAR - BOULDER",
        address: "928 Pearl St, Boulder, CO 80302",
        phone: "(303)444-1811",
        website: "https://www.jaxfishhouse.com/boulder",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/jax-fish-house-and-oyster-bar-boulder",
        hoursOpen: {
          Monday: ['16:00-22:00'],
          Tuesday: ['16:00-22:00'],
          Wednesday: ['16:00-22:00'],
          Thursday: ['16:00-22:00'],
          Friday: ['16:00-23:00'],
          Saturday: ['16:00-23:00'],
          Sunday: ['16:00-21:00']
        }
      },
      {
        name: "THE WEST END TAVERN",
        address: "926 Pearl St, Boulder, CO 80302",
        phone: "(303)444-3535",
        website: "https://www.thewestendtavern.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/west-end-tavern",
        hoursOpen: {
          Monday: ['11:00-22:00'],
          Tuesday: ['11:00-22:00'],
          Wednesday: ['11:00-22:00'],
          Thursday: ['11:00-23:00'],
          Friday: ['11:00-23:00'],
          Saturday: ['10:00-23:00'],
          Sunday: ['10:00-22:00']
        }
      },
      {
        name: "THE BOULDER DUSHANBE TEAHOUSE",
        address: "1770 13th St, Boulder, CO 80302",
        phone: "(303)442-4993",
        website: "https://www.boulderteahouse.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['08:00-21:00'],
          Tuesday: ['08:00-21:00'],
          Wednesday: ['08:00-21:00'],
          Thursday: ['08:00-21:00'],
          Friday: ['08:00-21:00'],
          Saturday: ['08:00-21:00'],
          Sunday: ['08:00-21:00']
        }
      },
      {
        name: "HUMBOLDT FARM, FISH, WINE",
        phone: "(303)813-1700",
        website: "https://www.humboldtrestaurant.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/humboldt-farm-fish-wine",
        hoursOpen: {
          Monday: ['11:00-21:00'],
          Tuesday: ['11:00-21:00'],
          Wednesday: ['11:00-21:00'],
          Thursday: ['11:00-21:00'],
          Friday: ['11:00-22:00'],
          Saturday: ['11:00-22:00'],
          Sunday: ['10:00-15:00','16:00-21:00']
        }
      },
      {
        name: "ACORN",
        address: "3350 Brighton Blvd, Denver, CO 80216",
        phone: "(720)542-3721",
        website: "https://www.denveracorn.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['11:30-22:00'],
          Wednesday: ['11:30-22:00'],
          Thursday: ['11:30-22:00'],
          Friday: ['11:30-22:00'],
          Saturday: ['11:30-22:00'],
          Sunday: ['11:30-22:00']
        }
      },
      {
        name: "BANG UP TO THE ELEPHANT!",
        address: "1310 Pearl St, Denver CO 80203",
        phone: "(303)792-4949",
        website: "https://www.banguptotheelephant.restaurant",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/mighty-sparrow-and-the-sea-maiden",
        hoursOpen: {
          Monday: ['08:00-23:00'],
          Tuesday: ['08:00-23:00'],
          Wednesday: ['08:00-23:00'],
          Thursday: ['08:00-01:00'],
          Friday: ['08:00-01:00'],
          Saturday: ['08:00-00:00'],
          Sunday: ['08:00-23:00']
        }
      },
      {
        name: "ALOY MODERN THAI",
        address: "2134 Larimer St, Denver, CO 80205",
        phone: "(303)379-9759",
        website: "https://www.aloymodernthai.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/aloy-modern-thai-denver",
        hoursOpen: {
          Monday: ['11:00-21:30'],
          Tuesday: ['11:00-21:30'],
          Wednesday: ['11:00-21:30'],
          Thursday: ['11:00-21:30'],
          Friday: ['11:00-22:00'],
          Saturday: ['12:00-22:00'],
          Sunday: ['12:00-21:30']
        }
      },
      {
        name: "THE POPULIST",
        address: "3163 Larimer St, Denver, CO 80205",
        phone: "(720)432-3163",
        website: "https://www.thepopulistdenver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/the-populist",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['17:00-22:00'],
          Wednesday: ['17:00-22:00'],
          Thursday: ['17:00-22:00'],
          Friday: ['17:00-22:00'],
          Saturday: ['17:00-22:00'],
          Sunday: ['']
        }
      },
      {
        name: "MORIN",
        address: "1600 15th St, Denver, CO 80202",
        phone: "(303)623-0534",
        website: "https://www.morindenver.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/morin-denver",
        hoursOpen: {
          Monday: [''],
          Tuesday: ['15:00-22:00'],
          Wednesday: ['15:00-22:00'],
          Thursday: ['15:00-22:00'],
          Friday: ['15:00-23:00'],
          Saturday: ['15:00-23:00'],
          Sunday: ['']
        }
      },
      {
        name: "RYE SOCIETY",
        address: "3090 Larimer St, Denver, CO 80205",
        phone: "(303)593-2713",
        website: "https://www.ryesociety.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: ['09:00-15:00'],
          Tuesday: ['09:00-15:00'],
          Wednesday: ['09:00-15:00'],
          Thursday: ['09:00-15:00'],
          Friday: ['09:00-15:00'],
          Saturday: ['09:00-15:00'],
          Sunday: ['09:00-15:00']
        }
      },
      {
        name: "BECKON",
        address: "2843 Larimer St, Denver, CO 80205",
        phone: "(303)749-0020",
        website: "https://www.beckon-call.com",
        openTable: false,
        openTableLink: "",
        hoursOpen: {
          Monday: [''],
          Tuesday: [''],
          Wednesday: ['17:30-11:30'],
          Thursday: ['17:30-11:30'],
          Friday: ['17:30-11:30'],
          Saturday: ['17:30-11:30'],
          Sunday: ['']
        }
      }
]

const insertRestaurants = function() {
  Restaurant.create(restaurantData)
    .then(() => db.close());
};

insertRestaurants();
