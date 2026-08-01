// Product categories data module using official client assets
import plcImg from '../assets/products/plc-hmi.png';
import vfdImg from '../assets/products/vfd.png';
import sensorsImg from '../assets/products/sensors.png';
import switchgearImg from '../assets/products/switchgear.png';
import panelImg from '../assets/products/control-panel.png';
import pneumaticImg from '../assets/products/pneumatic.png';
import lubricantsImg from '../assets/products/lubricants.png';
import cablesImg from '../assets/products/cables.png';

export const products = [
  {
    id: 1,
    title: "PLC & HMI",
    description: "Industrial automation controllers and human-machine interfaces.",
    image: plcImg,
    slug: "plc-hmi",
    categoryCount: "45+ Models",
    accentColor: "from-blue-500/10 to-indigo-500/10"
  },
  {
    id: 2,
    title: "Variable Frequency Drives (VFD)",
    description: "AC drives for precision motor speed and torque control.",
    image: vfdImg,
    slug: "vfd",
    categoryCount: "60+ Models",
    accentColor: "from-sky-500/10 to-blue-500/10"
  },
  {
    id: 3,
    title: "Industrial Sensors",
    description: "Proximity, photoelectric, pressure & temperature sensors.",
    image: sensorsImg,
    slug: "sensors",
    categoryCount: "120+ Models",
    accentColor: "from-amber-500/10 to-orange-500/10"
  },
  {
    id: 4,
    title: "Switchgear",
    description: "Circuit breakers, contactors, relays & protection switches.",
    image: switchgearImg,
    slug: "switchgear",
    categoryCount: "200+ Models",
    accentColor: "from-emerald-500/10 to-teal-500/10"
  },
  {
    id: 5,
    title: "Control Panels",
    description: "Custom APFC, MCC, PLC & PCC electrical distribution panels.",
    image: panelImg,
    slug: "control-panel",
    categoryCount: "Custom Built",
    accentColor: "from-indigo-500/10 to-purple-500/10"
  },
  {
    id: 6,
    title: "Pneumatic Products",
    description: "Air cylinders, directional valves, FRL units & fittings.",
    image: pneumaticImg,
    slug: "pneumatic",
    categoryCount: "80+ Models",
    accentColor: "from-cyan-500/10 to-blue-500/10"
  },
  {
    id: 7,
    title: "Industrial Lubricants",
    description: "High-performance synthetic oils & industrial greases.",
    image: lubricantsImg,
    slug: "lubricants",
    categoryCount: "35+ Varieties",
    accentColor: "from-amber-500/10 to-yellow-500/10"
  },
  {
    id: 8,
    title: "Cables & Wires",
    description: "Flexible copper, armored power & multi-core control cables.",
    image: cablesImg,
    slug: "cables",
    categoryCount: "100+ Specs",
    accentColor: "from-slate-500/10 to-zinc-500/10"
  }
];
