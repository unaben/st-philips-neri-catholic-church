import type {
  Amenity,
  BookingStep,
  FaqItem,
  HallManagerContact,
  PricingTier,
  QuickFact,
} from "../HallRental.types";

export const HALL_MANAGER: HallManagerContact = {
  role: "Hall Manager",
  name: "Mr Eddy",
  email: "stphilips.smethwick@rcaob.org.uk",
  phone: "07443 492 963",
};

export const QUICK_FACTS: QuickFact[] = [
  { icon: "👥", label: "Capacity", value: "Up to 150 guests" },
  { icon: "🚗", label: "Parking", value: "On-site parking" },
  { icon: "🍽️", label: "Kitchen", value: "Fully equipped" },
  { icon: "♿", label: "Access", value: "Step-free access" },
];

export const AMENITIES: Amenity[] = [
  {
    icon: "🪑",
    title: "Tables & Chairs",
    description:
      "Folding tables and stacking chairs included, enough to seat up to 150 guests.",
  },
  {
    icon: "🍳",
    title: "Fully Fitted Kitchen",
    description:
      "A serving kitchen with cooker, fridge, urn and worktop space for catering your event.",
  },
  {
    icon: "🔊",
    title: "Sound System",
    description:
      "PA system and microphone available on request for talks, parties and performances.",
  },
  {
    icon: "🌡️",
    title: "Heating",
    description:
      "The hall is fully heated, so it\u2019s comfortable year round.",
  },
  {
    icon: "🚻",
    title: "On-Site Toilets",
    description: "Accessible toilet facilities located just off the main hall.",
  },
  {
    icon: "🅿️",
    title: "Free Parking",
    description: "A car park adjoining the hall for guests and deliveries.",
  },
];

export const PRICING: PricingTier[] = [
  {
    name: "Hourly Hire",
    price: "£20",
    unit: "per hour",
    description: "Ideal for short meetings, classes or one-off sessions.",
  },
  {
    name: "Half Day",
    price: "£70",
    unit: "up to 4 hours",
    description:
      "Suited to children\u2019s parties, workshops and small events.",
  },
  {
    name: "Full Day",
    price: "£120",
    unit: "up to 8 hours",
    description: "Best value for weddings, celebrations and larger gatherings.",
  },
  {
    name: "Parish Group Rate",
    price: "Discounted",
    unit: "regular bookings",
    description: "Reduced rates for parish groups and registered charities.",
  },
];

export const BOOKING_STEPS: BookingStep[] = [
  {
    title: "Check Availability",
    description:
      "Contact the hall manager by phone or email with your preferred date and time.",
  },
  {
    title: "Confirm Details",
    description:
      "Let us know your event type, expected numbers and any equipment you need.",
  },
  {
    title: "Pay Deposit",
    description:
      "A deposit secures your booking. Full payment is due before the event date.",
  },
  {
    title: "Enjoy Your Event",
    description:
      "Collect the key from the hall manager and set up. We\u2019ll take care of the rest.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Is a deposit required?",
    answer:
      "Yes, a refundable deposit is required to secure your booking. Details are confirmed when you book with the hall manager.",
  },
  {
    question: "Can I bring my own caterer?",
    answer:
      "Yes, external catering is welcome. The kitchen is available for use but food safety remains the caterer\u2019s responsibility.",
  },
  {
    question: "Is alcohol permitted?",
    answer:
      "Alcohol may be served at private functions with prior agreement from the hall manager. It cannot be sold without a licence.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made with reasonable notice are eligible for a refund of the deposit, minus any costs already incurred. Speak to the hall manager for details.",
  },
  {
    question: "Do I need to clean up afterwards?",
    answer:
      "Yes, the hall should be left as it was found, with rubbish removed and surfaces wiped down. A cleaning checklist is provided at booking.",
  },
];
