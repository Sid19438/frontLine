export interface Astrologer {
  _id: string;
  name: string;
  expertise: string;
  languages: string;
  reviews: number;
  rating: number;
  experience: number;
  avatar: string;
  about: string;
  specializations: string[];
  plans: any[];
  gallery: string[];
  isActive: boolean;
  consultationUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Plan {
  label: string;
  minutes: number;
  discount: string;
  price: number;
  oldPrice: number;
  connect: string;
  rating: number;
}

// Comprehensive dummy data for astrologers with 6 packages
export const dummyAstrologers: Astrologer[] = [
  {
    _id: '1',
    name: 'Pandit Rajesh Kumar',
    expertise: 'Vedic Astrology & Palmistry',
    languages: 'Hindi, English, Sanskrit',
    reviews: 1247,
    rating: 5,
    experience: 15,
    avatar: 'https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2024/03/zayn-copy.jpg',
    about: 'Expert in Vedic astrology with 15+ years of experience. Specializes in marriage compatibility, career guidance, and health predictions. Provides accurate horoscope readings and personalized remedies for life challenges.',
    specializations: ['Marriage Compatibility', 'Career Guidance', 'Health Predictions', 'Remedies'],
    plans: [
      {
        label: 'Audio Call',
        minutes: 15,
        discount: '',
        price: 499,
        oldPrice: 499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 30,
        discount: '',
        price: 899,
        oldPrice: 899,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 60,
        discount: '',
        price: 1499,
        oldPrice: 1499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 15,
        discount: '',
        price: 749,
        oldPrice: 749,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 30,
        discount: '',
        price: 1349,
        oldPrice: 1349,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 60,
        discount: '',
        price: 2449,
        oldPrice: 2449,
        connect: 'Video Call',
        rating: 5
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    ],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '2',
    name: 'Dr. Priya Sharma',
    expertise: 'Numerology & Gemstone Therapy',
    languages: 'Hindi, English, Gujarati',
    reviews: 892,
    rating: 5,
    experience: 12,
    avatar: 'https://pearlentertainment.in/wp-content/uploads/2024/08/Mostlysane-5.jpg',
    about: 'Specialist in numerology and gemstone remedies. Combines ancient wisdom with modern techniques to provide comprehensive life guidance. Expert in business numerology and relationship compatibility.',
    specializations: ['Business Numerology', 'Education Guidance', 'Relationship Compatibility', 'Gemstone Therapy'],
    plans: [
      {
        label: 'Audio Call',
        minutes: 15,
        discount: '',
        price: 499,
        oldPrice: 499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 30,
        discount: '',
        price: 899,
        oldPrice: 899,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 60,
        discount: '',
        price: 1499,
        oldPrice: 1499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 15,
        discount: '',
        price: 749,
        oldPrice: 749,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 30,
        discount: '',
        price: 1349,
        oldPrice: 1349,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 60,
        discount: '',
        price: 2449,
        oldPrice: 2449,
        connect: 'Video Call',
        rating: 5
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop'
    ],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '3',
    name: 'Acharya Amit Patel',
    expertise: 'Kundli Analysis & Remedies',
    languages: 'Hindi, English, Gujarati',
    reviews: 1563,
    rating: 5,
    experience: 18,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuYj43rWvaJaaVAV6GR7zaC8URwPb5sQCgA&s',
    about: 'Master of Kundli analysis and spiritual remedies. Provides comprehensive birth chart analysis, marriage compatibility, and personalized spiritual guidance. Expert in traditional Vedic remedies.',
    specializations: ['Kundli Analysis', 'Marriage Compatibility', 'Family Harmony', 'Spiritual Remedies'],
    plans: [
      {
        label: 'Audio Call',
        minutes: 15,
        discount: '',
        price: 499,
        oldPrice: 499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 30,
        discount: '',
        price: 899,
        oldPrice: 899,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 60,
        discount: '',
        price: 1499,
        oldPrice: 1499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 15,
        discount: '',
        price: 749,
        oldPrice: 749,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 30,
        discount: '',
        price: 1349,
        oldPrice: 1349,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 60,
        discount: '',
        price: 2449,
        oldPrice: 2449,
        connect: 'Video Call',
        rating: 5
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop'
    ],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '4',
    name: 'Mataji Sunita Devi',
    expertise: 'Tantra & Spiritual Healing',
    languages: 'Hindi, English, Bengali',
    reviews: 2034,
    rating: 5,
    experience: 22,
    avatar: 'https://i.pinimg.com/736x/99/e0/f4/99e0f484970d3a125d16159097e92d50.jpg',
    about: 'Renowned spiritual healer and tantra expert. Specializes in spiritual healing, protection rituals, and inner peace. Provides guidance for spiritual growth and life transformation.',
    specializations: ['Spiritual Healing', 'Protection Rituals', 'Inner Peace', 'Life Transformation'],
    plans: [
      {
        label: 'Audio Call',
        minutes: 15,
        discount: '',
        price: 499,
        oldPrice: 499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 30,
        discount: '',
        price: 899,
        oldPrice: 899,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 60,
        discount: '',
        price: 1499,
        oldPrice: 1499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 15,
        discount: '',
        price: 749,
        oldPrice: 749,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 30,
        discount: '',
        price: 1349,
        oldPrice: 1349,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 60,
        discount: '',
        price: 2449,
        oldPrice: 2449,
        connect: 'Video Call',
        rating: 5
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop'
    ],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    _id: '5',
    name: 'Pandit Suresh Verma',
    expertise: 'Classical Vedic Astrology',
    languages: 'Hindi, English, Sanskrit',
    reviews: 2034,
    rating: 5,
    experience: 30,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    about: 'Master of classical Vedic astrology techniques with 30+ years of experience. Expert in all aspects of Vedic astrology including marriage, career, health, and education guidance.',
    specializations: ['Classical Vedic Astrology', 'Marriage Guidance', 'Career Counseling', 'Health Predictions'],
    plans: [
      {
        label: 'Audio Call',
        minutes: 15,
        discount: '',
        price: 499,
        oldPrice: 499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 30,
        discount: '',
        price: 899,
        oldPrice: 899,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Audio Call',
        minutes: 60,
        discount: '',
        price: 1499,
        oldPrice: 1499,
        connect: 'Audio Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 15,
        discount: '',
        price: 749,
        oldPrice: 749,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 30,
        discount: '',
        price: 1349,
        oldPrice: 1349,
        connect: 'Video Call',
        rating: 5
      },
      {
        label: 'Video Call',
        minutes: 60,
        discount: '',
        price: 2449,
        oldPrice: 2449,
        connect: 'Video Call',
        rating: 5
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    ],
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

// Get astrologer by name (case-insensitive)
export const getAstrologerByName = (name: string): Astrologer | undefined => {
  return dummyAstrologers.find(astro => 
    astro.name.toLowerCase() === name.toLowerCase()
  );
};

// Get top astrologers (first 4)
export const getTopAstrologers = (): Astrologer[] => {
  return dummyAstrologers.slice(0, 4);
};

// Get all astrologers
export const getAllAstrologers = (): Astrologer[] => {
  return dummyAstrologers;
};

export interface Puja {
  _id: string;
  name: string;
  description: string;
  benefits: string[];
  duration: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  isPopular: boolean;
  rating: number;
  reviews: number;
}

// Dummy data for 8 pujas
export const dummyPujas: Puja[] = [
  {
    _id: 'p1',
    name: 'Mangal Dosha Shanti Puja',
    description: 'Removes the negative effects of Mars (Mangal) from your horoscope. This powerful puja helps in marriage compatibility and removes obstacles in relationships.',
    benefits: ['Removes marriage obstacles', 'Improves relationship harmony', 'Reduces anger and aggression', 'Brings peace and stability'],
    duration: '2-3 hours',
    price: 2100,
    originalPrice: 3000,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    category: 'Marriage',
    isPopular: true,
    rating: 4.8,
    reviews: 156
  },
  {
    _id: 'p2',
    name: 'Saturn Shanti Puja',
    description: 'Alleviates the malefic effects of Saturn (Shani) and brings relief from Sade Sati period. Helps in career growth and removes financial obstacles.',
    benefits: ['Removes career obstacles', 'Improves financial stability', 'Reduces stress and anxiety', 'Brings success and prosperity'],
    duration: '3-4 hours',
    price: 2500,
    originalPrice: 3500,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop',
    category: 'Career',
    isPopular: true,
    rating: 4.9,
    reviews: 203
  },
  {
    _id: 'p3',
    name: 'Ganesh Puja',
    description: 'Removes all obstacles and brings success in all endeavors. Lord Ganesh is worshipped first before any auspicious work.',
    benefits: ['Removes all obstacles', 'Brings success in endeavors', 'Improves concentration', 'Enhances wisdom and knowledge'],
    duration: '1-2 hours',
    price: 1500,
    originalPrice: 2000,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    category: 'General',
    isPopular: false,
    rating: 4.7,
    reviews: 89
  },
  {
    _id: 'p4',
    name: 'Lakshmi Puja',
    description: 'Attracts wealth, prosperity, and abundance. Goddess Lakshmi brings financial success and material comforts.',
    benefits: ['Attracts wealth and prosperity', 'Improves financial luck', 'Brings abundance', 'Enhances business success'],
    duration: '2-3 hours',
    price: 1800,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop',
    category: 'Wealth',
    isPopular: true,
    rating: 4.6,
    reviews: 134
  },
  {
    _id: 'p5',
    name: 'Durga Puja',
    description: 'Provides protection from negative energies and evil forces. Goddess Durga destroys all evil and brings victory.',
    benefits: ['Provides protection', 'Destroys negative energies', 'Brings victory over enemies', 'Enhances courage and strength'],
    duration: '3-4 hours',
    price: 2200,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    category: 'Protection',
    isPopular: false,
    rating: 4.5,
    reviews: 78
  },
  {
    _id: 'p6',
    name: 'Kundli Dosha Shanti Puja',
    description: 'Removes all types of doshas from your birth chart and brings harmony in life. Comprehensive solution for all astrological problems.',
    benefits: ['Removes all doshas', 'Brings life harmony', 'Improves overall luck', 'Balances planetary influences'],
    duration: '4-5 hours',
    price: 3000,
    originalPrice: 4500,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop',
    category: 'General',
    isPopular: true,
    rating: 4.9,
    reviews: 267
  },
  {
    _id: 'p7',
    name: 'Vastu Shanti Puja',
    description: 'Removes Vastu doshas from your home or workplace and brings positive energy. Essential for new properties.',
    benefits: ['Removes Vastu doshas', 'Brings positive energy', 'Improves home harmony', 'Enhances workplace success'],
    duration: '2-3 hours',
    price: 1900,
    originalPrice: 2800,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    category: 'Home',
    isPopular: false,
    rating: 4.4,
    reviews: 92
  },
  {
    _id: 'p8',
    name: 'Navagraha Shanti Puja',
    description: 'Pacifies all nine planets and brings balance in life. Comprehensive solution for all planetary problems.',
    benefits: ['Pacifies all planets', 'Brings life balance', 'Improves overall wellbeing', 'Removes planetary obstacles'],
    duration: '5-6 hours',
    price: 3500,
    originalPrice: 5000,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop',
    category: 'General',
    isPopular: true,
    rating: 4.8,
    reviews: 189
  }
];

// Get all pujas
export const getAllPujas = (): Puja[] => {
  return dummyPujas;
};

// Get popular pujas
export const getPopularPujas = (): Puja[] => {
  return dummyPujas.filter(puja => puja.isPopular);
};

// Get puja by ID
export const getPujaById = (id: string): Puja | undefined => {
  return dummyPujas.find(puja => puja._id === id);
};
