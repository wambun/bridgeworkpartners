export interface Office {
  id: string;
  name: string;
  address: string[];
  phone: string;
  isPrimary?: boolean;
}

export const offices: Office[] = [
  {
    id: 'corporate',
    name: 'Corporate Office',
    address: ['4425 Plano Parkway', 'Building 13 | Suite 1303', 'Carrollton, Texas 75010'],
    phone: '214-920-9910',
    isPrimary: true,
  },
  {
    id: 'fort-worth',
    name: 'Fort Worth Office',
    address: ['4500 Mercantile Plaza Drive', 'Suite 300', 'Fort Worth, TX 76137'],
    phone: '682-428-9920',
  },
  {
    id: 'houston',
    name: 'Houston Office',
    address: ['9595 Six Pines Drive', 'Suite 8210', 'The Woodlands, TX 77380'],
    phone: '469-758-8398',
  },
];

export const contactInfo = {
  email: 'info@bridgeworkpartners.com',
  mainPhone: '214-920-9910',
};

export const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/bridgework-partners', icon: 'linkedin' },
  { name: 'Facebook', href: 'https://www.facebook.com/bridgeworkpartners', icon: 'facebook' },
];
