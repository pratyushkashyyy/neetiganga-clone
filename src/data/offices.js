export const CONTACT_EMAIL = 'neetiganga@hotmail.com';

export const OFFICES = [
  {
    id: 'pune',
    city: 'Pune',
    address: 'Level 4, Platinum Estate, Near Pune District Court, Shivaji Nagar, Pune, 411005',
    phone: '+91 84214 55111'
  },
  {
    id: 'delhi',
    city: 'New Delhi',
    address: 'T-30/1/C, Road No -20, Baljeet Nagar, West Patel Nagar, New Delhi, 110008',
    phone: '+91 62077 30350'
  },
  {
    id: 'patna',
    city: 'Patna',
    address: '112A/5, Atal Path, Shivpuri, Boring Road, Patna, Bihar 800023',
    phone: '+91 82619 93747'
  }
];

export const getMapEmbedUrl = (address) => (
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
);

export const getMapSearchUrl = (address) => (
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
);

export const getTelHref = (phone) => {
  const digits = phone.replace(/\D/g, '');
  return `tel:+${digits}`;
};

export const getWhatsAppHref = (phone, city) => {
  const digits = phone.replace(/\D/g, '');
  const message = `Hello Neeti Ganga team, I want to connect with the ${city} office.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};
