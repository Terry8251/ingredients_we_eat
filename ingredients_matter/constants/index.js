import instagramLogo from '../public/instagram_logo.png';
import facebookLogo from '../public/facebook_logo.png';
import xLogo from '../public/x_logo.png'; 


// Navbar
export const NAV_LINKS = [
  { href: '/About', key: 'about', label: 'About' },
  { href: '/Meats', key: 'meats', label: 'Meats' },
  { href: '/Fruits', key: 'fruits', label: 'Fruits' },
  { href: '/Vegetable', key: 'vegetables', label: 'Vegetables' },
  { href: '/Grains', key: 'grains', label: 'Grains' },
  { href: '/Fungi', key: 'fungi', label: 'Fungi' },
  { href: '/Artificial_Ingredients', key: 'artificial_ingredients', label: 'Artificial Ingredients' },
];

// Footer Links
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
    'About Ingredients We Eat',
    'Our News Letter',
    'Privacy Policy',
    ],
  }
];

//Foot Contact Us
export const FOOTER_CONTACT_INFO = [  
  {
    title: 'Contact Us',
    label: 'Email', 
    value: 'ingredientsweeat@gmail.com',
  }
];

export const SOCIALS = [
  {
    src: instagramLogo,
    links: ['/instagram.svg'],
  },
  {
    src: facebookLogo,
    links: ['/facebook.svg'],
  },
  {
    src: xLogo,
    links: ['/twitter.svg'],
  },
];