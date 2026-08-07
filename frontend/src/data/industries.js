// Industries We Serve data module using official client assets
import powerPlantImg from '../assets/industries/power-plant.png';
import steelImg from '../assets/industries/steel.png';
import foodImg from '../assets/industries/food.png';
import pharmaImg from '../assets/industries/pharma.png';
import packagingImg from '../assets/industries/packaging.png';
import printingImg from '../assets/industries/printing.png';
import automobileImg from '../assets/industries/automobile.png';
import cementImg from '../assets/industries/cement.png';

export const industries = [
  {
    id: 1,
    title: "Power Plants",
    description: "Reliable automation and electrical solutions for thermal, hydro, and renewable power generation facilities.",
    image: powerPlantImg,
    slug: "power-plants"
  },
  {
    id: 2,
    title: "Steel Industry",
    description: "Heavy-duty electrical control panels, VFDs, and automation for steel processing and rolling mills.",
    image: steelImg,
    slug: "steel-industry"
  },
  {
    id: 3,
    title: "Food Processing",
    description: "Hygienic, precise automation, sensor controls, and drives for food & beverage production lines.",
    image: foodImg,
    slug: "food-processing"
  },
  {
    id: 4,
    title: "Pharmaceutical",
    description: "Compliant automation systems, PLC controllers, and cleanroom electrical distribution solutions.",
    image: pharmaImg,
    slug: "pharmaceutical"
  },
  {
    id: 5,
    title: "Packaging",
    description: "High-speed motion control, VFDs, and optical sensor solutions for modern packaging machinery.",
    image: packagingImg,
    slug: "packaging"
  },
  {
    id: 6,
    title: "Printing",
    description: "Precision speed synchronization, web tension control, and drive systems for high-speed printing presses.",
    image: printingImg,
    slug: "printing"
  },
  {
    id: 7,
    title: "Automobile",
    description: "Robotic automation, assembly line control panels, and reliable power distribution for automotive manufacturing.",
    image: automobileImg,
    slug: "automobile"
  },
  {
    id: 8,
    title: "Cement Industry",
    description: "Robust switchgear, heavy-duty drives, and motor control centers for cement manufacturing plants.",
    image: cementImg,
    slug: "cement-industry"
  }
];
