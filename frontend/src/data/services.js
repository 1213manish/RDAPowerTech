// Our Services data module
import { Factory, Cpu, Layers, Package, Settings, Wrench } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: "Industrial Automation",
    description: "End-to-end industrial process automation, SCADA integration, system turnkey design & optimization.",
    icon: Factory,
    slug: "industrial-automation"
  },
  {
    id: 2,
    title: "PLC Programming",
    description: "Custom PLC, HMI & VFD programming, logic configuration & troubleshooting for Siemens, Delta & Mitsubishi.",
    icon: Cpu,
    slug: "plc-programming"
  },
  {
    id: 3,
    title: "Control Panel Design",
    description: "Custom design & assembly of APFC, MCC, PCC, PLC & custom distribution panels tailored to client specs.",
    icon: Layers,
    slug: "control-panel-design"
  },
  {
    id: 4,
    title: "Electrical Products Supply",
    description: "Authorized supply of genuine circuit breakers, switchgears, drives, sensors & industrial cabling.",
    icon: Package,
    slug: "electrical-products-supply"
  },
  {
    id: 5,
    title: "Installation & Commissioning",
    description: "On-site panel installation, wiring, testing, VFD parameter tuning & field commissioning.",
    icon: Settings,
    slug: "installation-commissioning"
  },
  {
    id: 6,
    title: "Maintenance & Technical Support",
    description: "Preventive maintenance, rapid breakdown support, panel retrofitting & 24/7 technical engineering assistance.",
    icon: Wrench,
    slug: "maintenance-support"
  }
];
