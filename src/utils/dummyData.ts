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
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
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
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
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
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
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
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
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
