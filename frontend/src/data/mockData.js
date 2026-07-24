// Mock Data for RDA PowerTech (Electrical Component Supplier)

export const COMPANY_DETAILS = {
  name: "RDAPOWER TECH",
  shopName: "RDA PowerTech",
  address: "SHOP NO-3 RR MARKET PILLAR NO-97 DANAPUR BIHTA ROAD NEAR SHIWALA ,PATNA -801113",
  shortAddress: "Shop No-3, RR Market, Pillar No-97, Danapur Bihta Road, Near Shiwala, Patna - 801113, Bihar",
  city: "Patna",
  state: "10-Bihar",
  pincode: "801113",
  phones: ["+91 9973015880", "+91 9690222219"],
  phoneFormatted: "+91 9973015880 / +91 9690222219",
  email: "rdapowertech@gmail.com",
  gstin: "10IZZPK0353J1Z1",
  itemCode: "Industrial Electrical Spares",
  workingHours: "Monday - Saturday: 9:00 AM - 8:00 PM"
};

export const BRANDS = [
  { name: "Phoenix Contact", category: "Terminals & Power Supplies", origin: "Germany" },
  { name: "Eaton Switchgear", category: "Circuit Breakers & MCCB", origin: "USA / Europe" },
  { name: "L & T Switchgear", category: "LV & MV Switchgears", origin: "India" },
  { name: "Mitsubishi Drive", category: "VFD & Inverters", origin: "Japan" },
  { name: "Siemens Switchgears", category: "ACB, MCB & Automation", origin: "Germany" },
  { name: "Schneider Electrical", category: "Contactors & Protection", origin: "France" },
  { name: "Yaskawa Drives", category: "Industrial Drives & Servos", origin: "Japan" },
  { name: "Solar DB AC/DC", category: "Solar Combiner Boxes", origin: "Global" },
  { name: "Telergon", category: "Cam & Load Break Switches", origin: "Spain" }
];

export const MOCK_CATEGORIES = [
  { id: 1, slug: 'mcb', name: 'MCB', description: 'Miniature Circuit Breakers' },
  { id: 2, slug: 'switchgears', name: 'Switchgears', description: 'Air Circuit Breakers, MCCBs & Disconnectors' },
  { id: 3, slug: 'drives', name: 'Drives & VFDs', description: 'Variable Frequency Drives & AC Motors' },
  { id: 4, slug: 'contactors', name: 'Contactors', description: 'Power Contactors & Overload Relays' },
  { id: 5, slug: 'solar-db', name: 'Solar DB AC/DC', description: 'AC/DC Array Junction Distribution Boxes' },
  { id: 6, slug: 'isolators', name: 'Isolators', description: 'Rotary Cam Switches & Load Break Isolators' },
  { id: 7, slug: 'power-supplies', name: 'Power Supplies', description: 'DIN Rail Power Supplies & Terminal Blocks' }
];

export const MOCK_PRODUCTS = [
  // MCB
  {
    id: 1,
    category_slug: 'mcb',
    name: 'Siemens 5SL 16A Single Pole MCB',
    brand: 'Siemens Switchgears',
    model_number: '5SL6116-7RC',
    description: 'High performance C-curve miniature circuit breaker designed for commercial and industrial electrical distribution panels.',
    specifications: {
      'Current Rating': '16A',
      'Poles': 'Single Pole (1P)',
      'Breaking Capacity': '10 kA',
      'Voltage Rating': '240V / 415V AC',
      'Tripping Curve': 'C-Curve',
      'Standards': 'IEC / EN 60898-1'
    }
  },
  {
    id: 2,
    category_slug: 'mcb',
    name: 'Schneider Acti9 iC60N 32A 3P MCB',
    brand: 'Schneider Electrical',
    model_number: 'A9F74332',
    description: 'Triple pole miniature circuit breaker offering VisiSafe and VisiTrip functionality for ultimate electrical safety and quick troubleshooting.',
    specifications: {
      'Current Rating': '32A',
      'Poles': 'Triple Pole (3P)',
      'Breaking Capacity': '10 kA',
      'Voltage Rating': '415V AC',
      'Tripping Curve': 'C-Curve',
      'IP Rating': 'IP20'
    }
  },
  {
    id: 3,
    category_slug: 'mcb',
    name: 'L&T AU10000 63A 4P MCB',
    brand: 'L & T Switchgear',
    model_number: 'CM90040OOO',
    description: 'Four-pole heavy duty circuit breaker suitable for main incoming line isolation and heavy inductive motor loads.',
    specifications: {
      'Current Rating': '63A',
      'Poles': 'Four Pole (4P)',
      'Breaking Capacity': '10 kA',
      'Voltage Rating': '415V AC',
      'Tripping Curve': 'D-Curve',
      'Enclosure Compatibility': 'DIN Rail'
    }
  },

  // Switchgears
  {
    id: 4,
    category_slug: 'switchgears',
    name: 'Eaton PowerPact 250A MCCB',
    brand: 'Eaton Switchgear',
    model_number: 'NZMN2-A250',
    description: 'Molded Case Circuit Breaker with adjustable thermomagnetic release system, optimized for system and cable protection.',
    specifications: {
      'Current Rating': '250A',
      'Poles': '3 Pole',
      'Short Circuit Rating': '36 kA @ 415V',
      'Operation': 'Manual / Motorized Option',
      'Trip Unit': 'Thermomagnetic Adjustable',
      'Frame Size': 'Frame 2'
    }
  },
  {
    id: 5,
    category_slug: 'switchgears',
    name: 'Siemens 3WT Air Circuit Breaker 1000A',
    brand: 'Siemens Switchgears',
    model_number: '3WT8102-1AA00',
    description: 'Robust draw-out type Air Circuit Breaker (ACB) engineered for main low voltage power generation and factory sub-stations.',
    specifications: {
      'Current Rating': '1000A',
      'Poles': '3 Pole Drawout',
      'Breaking Capacity': '50 kA',
      'Control Voltage': '220V AC / DC',
      'Microprocessor Unit': 'ETU37B Electronic Trip Unit',
      'Compliance': 'IEC 60947-2'
    }
  },

  // Drives & VFDs
  {
    id: 6,
    category_slug: 'drives',
    name: 'Mitsubishi FR-E800 7.5kW VFD Inverter',
    brand: 'Mitsubishi Drive',
    model_number: 'FR-E840-0170-4-60',
    description: 'Compact vector control variable frequency drive supporting Ethernet communication for intelligent industrial automation.',
    specifications: {
      'Power Rating': '7.5 kW / 10 HP',
      'Input Voltage': '3-Phase 380 - 480V',
      'Output Frequency': '0.2 - 590 Hz',
      'Control Mode': 'Advanced Magnetic Flux Vector',
      'Communication': 'Modbus TCP / CC-Link IE',
      'Overload Rating': '150% for 60 sec'
    }
  },
  {
    id: 7,
    category_slug: 'drives',
    name: 'Yaskawa GA700 15kW Heavy Duty AC Drive',
    brand: 'Yaskawa Drives',
    model_number: 'GA70T4044ABM',
    description: 'High performance industrial AC drive designed to control induction and permanent magnet motors with energy-saving vector algorithm.',
    specifications: {
      'Power Rating': '15 kW / 20 HP',
      'Input Voltage': '380 - 480V AC 3-Phase',
      'Enclosure': 'IP20 / NEMA 1',
      'Keypad': 'High-Res LCD Display with Bluetooth option',
      'Safety Function': 'STO (Safe Torque Off) SIL3',
      'Coating': '3S2 / 3C2 Harsh Environment'
    }
  },

  // Contactors
  {
    id: 8,
    category_slug: 'contactors',
    name: 'Schneider TeSys Deca 40A AC3 Contactor',
    brand: 'Schneider Electrical',
    model_number: 'LC1D40ABD',
    description: '3-pole non-reversing power contactor with 24V DC coil and integrated auxiliary contact blocks.',
    specifications: {
      'Rated Current (AC-3)': '40A (18.5 kW @ 400V)',
      'Coil Voltage': '24V DC',
      'Auxiliary Contacts': '1NO + 1NC',
      'Poles': '3NO Main Contacts',
      'Mounting': 'DIN Rail or Screw Panel'
    }
  },
  {
    id: 9,
    category_slug: 'contactors',
    name: 'Siemens Sirius 3RT2027 32A Contactor',
    brand: 'Siemens Switchgears',
    model_number: '3RT2027-1BB40',
    description: 'Size S0 power contactor featuring spring-type or screw terminal configuration for high switching frequency applications.',
    specifications: {
      'Rated Power': '15 kW @ 400V 3-Phase',
      'Coil Voltage': '24V DC',
      'Operating Temperature': '-25 to +60 °C',
      'Mechanical Endurance': '10 Million Operations'
    }
  },

  // Solar DB AC/DC
  {
    id: 10,
    category_slug: 'solar-db',
    name: 'Industrial Solar AC/DC Combiner Distribution Enclosure',
    brand: 'Solar DB AC/DC',
    model_number: 'RDA-SDB-4IN2OUT',
    description: 'Pre-wired IP65 solar distribution panel equipped with DC surge protection (SPD), DC MCBs, and AC isolation circuit breaker.',
    specifications: {
      'Inputs / Outputs': '4 String Input / 2 Output',
      'Max DC Voltage': '1000V DC',
      'Surge Protection': 'Class II 1000V DC SPD',
      'Protection Degree': 'IP65 Polycarbonate UV Resistant',
      'DC Disconnect': '32A 1000V Rotary Isolator',
      'AC Section': '40A 4P AC MCB + 415V AC SPD'
    }
  },

  // Isolators
  {
    id: 11,
    category_slug: 'isolators',
    name: 'Telergon 125A 4P Enclosed Load Break Isolator',
    brand: 'Telergon',
    model_number: 'CCF01254P',
    description: 'Rotary load break isolator switch engineered for high breaking capacity and safe line isolation.',
    specifications: {
      'Rated Current': '125A',
      'Poles': '4 Pole',
      'Operating Voltage': '690V AC',
      'Handle Type': 'Padlockable Door Interlock',
      'Protection Degree': 'IP65 Enclosed'
    }
  },

  // Power Supplies
  {
    id: 12,
    category_slug: 'power-supplies',
    name: 'Phoenix Contact Quint Power 24V 20A Power Supply',
    brand: 'Phoenix Contact',
    model_number: '2866776',
    description: 'Primary-switched DIN-rail power supply with SFB (Selective Fuse Breaking) technology for superior system availability.',
    specifications: {
      'Input Voltage': '85 - 264V AC / 90 - 350V DC',
      'Output Voltage': '24V DC (Adjustable 18-29.5V)',
      'Output Current': '20A (Power Boost 26A)',
      'Efficiency': '> 93%',
      'Mounting': 'Standard DIN Rail NS 35'
    }
  },
  {
    id: 13,
    category_slug: 'power-supplies',
    name: 'Phoenix Contact ST 2.5 Spring Terminal Block',
    brand: 'Phoenix Contact',
    model_number: '3031212',
    description: 'Feed-through terminal block with spring-cage connection for fast, vibration-proof electrical wiring.',
    specifications: {
      'Wire Cross Section': '0.08 - 4 mm²',
      'Rated Current': '24A',
      'Nominal Voltage': '800V',
      'Color': 'Industrial Gray',
      'Connection Method': 'Spring-cage'
    }
  }
];
