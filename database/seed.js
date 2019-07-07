const db  = require('./index.js');
const Restaurant = require('./restaurant.js');

const restaurantData = [
      {
        name: "Centro",
        address: "950 Pearl St, Boulder, CO 80302",
        phone: "303-442-7771",
        website: "https://www.centromexican.com",
        openTable: true,
        openTableLink: "https://www.opentable.com/r/centro-mexican-kitchen-boulder",
        hoursOpen: {
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
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
          Monday: {hour: 7, minute: 30},
          Tuesday: {hour: 7, minute: 30},
          Wednesday: {hour: 7, minute: 30},
          Thursday: {hour: 7, minute: 30},
          Friday: {hour: 7, minute: 30},
          Saturday: {hour: 10, minute: 0},
          Sunday: {hour: 10, minute: 0}
      },
        hoursClose: {
          Monday: {hour: 22, minute: 0},
          Tuesday: {hour: 22, minute: 0},
          Wednesday: {hour: 22, minute: 0},
          Thursday: {hour: 22, minute: 0},
          Friday: {hour: 22, minute: 30},
          Saturday: {hour: 22, minute: 30},
          Sunday: {hour: 21, minute: 0}
        }
      }
]

const insertRestaurants = function() {
  Restaurant.create(restaurantData)
    .then(() => db.close());
};

insertRestaurants();
