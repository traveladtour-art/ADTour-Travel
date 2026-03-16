import Maruti_Dzire from "../assets/images/cars/Maruti_Dzire.png";
import Maruti_Ertiga from "../assets/images/cars/Maruti_Ertiga.png";
import Tempo_Traveller from "../assets/images/cars/Tempo_Traveller.png";
import Toyota_Innova_Crysta from "../assets/images/cars/toyota_innova_crysta.png";
import Force_Urbania from "../assets/images/cars/Force_Urbania.png";
/*
Key Idea:
Clean vehicle data structure for fleet section.
Each vehicle has a unique id and structured information.
Easy to map in React and scale when adding more vehicles.
*/

export const vehicles = [
  {
    id: 1,
    name: "Maruti Dzire",
    category: "Sedan",
    specs: {
      passengers: 4,
      seats: "4+1",
      luggage: 2,
      ac: true,
      color: "White",
    },
    image: Maruti_Dzire,
  },

  {
    id: 2,
    name: "Maruti Ertiga",
    category: "SUV / MUV",
    specs: {
      passengers: 6,
      seats: "6+1",
      luggage: 3,
      ac: true,
      color: "Silver",
    },
    image: Maruti_Ertiga,
  },

  {
    id: 3,
    name: "Tempo Traveller",
    category: "Traveller Van",
    specs: {
      passengers: 12,
      seats: "12",
      luggage: "Large Space",
      ac: true,
      color: "White",
    },
    image: Tempo_Traveller,
  },

  {
    id: 4,
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    specs: {
      passengers: 6,
      seats: "6+1",
      luggage: 4,
      ac: true,
      color: "Dark Blue",
    },
    image: Toyota_Innova_Crysta,
  },
  {
    id: 5,
    name: "Force Urbania",
    category: "Luxury Van",
    specs: {
      passengers: 12,
      seats: "12+1",
      luggage: 6,
      ac: true,
      color: "White",
    },
    image: Force_Urbania,
  },
];
