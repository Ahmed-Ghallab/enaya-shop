const deliveryFees = {
  "Cairo": 60,
  "Giza": 60,
  "Alexandria": 40,
  "Qalyubia": 60,
  "Sharqia": 60,
  "Gharbia": 70,
  "Dakahlia": 60,
  "Damietta": 65,
  "Monufia": 55,
  "Ismailia": 70,
  "Suez": 75,
  "Port Said": 75,
  "Faiyum": 80,
  "Beni Suef": 80,
  "Minya": 80,
  "Assiut": 85,
  "Sohag": 90,
  "Qena": 95,
  "Luxor": 100,
  "Aswan": 110,
  "New Valley": 120,
  "North Sinai": 150,
  "South Sinai": 160,
  // fallback/default key (used when province not found)
  "default": 120,
};

export const governoratesList = Object.keys(deliveryFees).filter(k => k !== "default");

export default deliveryFees;
