import { servicePhotos } from "./photos"

export const services = [
    {
        type: 'Residential',
        options: 'Kitchen, Bathroom, Living Room, Bedroom, Attic, Basement, Yard',
        image: servicePhotos.loft
    },
    {
        type: 'Post-Construction',
        options: 'Dust & Debris Removal, Floor Cleaning, Surface Cleaning, Wall Cleaning, Trash Removal, General Organization',
        image: servicePhotos.construction
    },
    {
        type: 'Party or Event',
        options: 'Trash Removal, Odor Neutralization, Bathroom Cleaning, Mopping, Venue Lockup, Stock & Stow Furniture',
        image: servicePhotos.party
    },
    {
        type: 'Commercial Space',
        options: 'Office & Workspace Cleaning, Restroom Sanitation, Breakroom & Kitchen Cleaning, High-Touch Surface Disinfection, Trash Removal, Floor Care',
        image: servicePhotos.office
    },
]

export const specials = [
    {
        service: 'Studio',
        description: 'Complete and standard cleaning of entire studio residence',
        price: '$100'
    },
    {
        service: '1 Bedroom',
        description: 'Complete and standard cleaning of residence including kitchen, 1 bathroom, 1 bedroom and living room',
        price: '$125'
    },
    {
        service: '2 Bedroom',
        description: 'Complete and standard cleaning of residence including kitchen, 1 bathroom, 2 bedrooms and living room',
        price: '$150'
    },
    {
        service: '3 Bedroom',
        description: 'Complete and standard cleaning of residence including kitchen, 1 bathroom, 3 bedrooms and living room',
        price: '$175'
    },
    {
        service: 'Premium Kitchen Cleaning',
        description: 'Deep cleaning of appliances, cabinets, dishes',
        price: '$40 add-on'
    },
    {
        service: 'Additional Bathroom Cleaning',
        description: 'Any additional bathrooms in the household',
        price: '$40 add-on'
    }
]

export const pricing = [
    {
        service: 'Attic, Basement, or Yard Cleaning',
        description: 'Thorough cleaning, tackling dust, cobwebs, and clutter to reveal the true potential of your space',
        price: 'Starting at $100'
    },
    {
        service: 'Party or Event Cleaning',
        description: 'Clearing away debris, emptying trash bins to spot-cleaning spills and sanitizing surfaces',
        price: 'Starting at $125'
    },
    {
        service: 'Post-Construction Cleaning',
        description: 'Removal of construction debris, dust, and residue',
        price: 'Starting at $150'
    },
    {
        service: 'Commerical Space Cleaning',
        description: 'Sweeping and mopping floors, sanitizing surfaces, dusting fixtures and removing built-up grime',
        price: 'Please Email Us'
    },
    {
        service: 'Apartment Turnover Painting',
        description: 'Parties who are moving out of their current rental unit and require it to be restored to original standards',
        price: 'Please Email Us'
    },
    {
        service: 'After Hours Cleaning',
        description: 'Requests after our normal hours of operation will incur an additional service fee',
        price: 'Please Email Us'
    },
]

export const subscriptions = [
    {
        service: 'Monthly Studio Cleaning',
        description: 'Complete cleaning of entire studio residence, 4 times monthly',
        price: '$400/month',
        link: 'https://buy.stripe.com/3cs01L8HgguP4JG3cc?prefilled_promo_code=LETSGETCLEAN'
    },
    {
        service: 'Monthly 1 Bedroom Cleaning',
        description: 'Complete cleaning of entire 1 bedroom residence, 4 times monthly',
        price: '$500/month',
        link: 'https://buy.stripe.com/9AQ6q9f5E6Uf8ZW9AB?prefilled_promo_code=LETSGETCLEAN'
    },
    {
        service: 'Monthly 2 Bedroom Cleaning',
        description: 'Complete cleaning of entire 2 bedroom residence, 4 times monthly',
        price: '$600/month',
        link: 'https://buy.stripe.com/5kA7ude1A1zV5NK8wy?prefilled_promo_code=LETSGETCLEAN'
    },
    {
        service: 'Monthly 3 Bedroom Cleaning',
        description: 'Complete cleaning of entire 3 bedroom residence, 4 times monthly',
        price: '$700/month',
        link: 'https://buy.stripe.com/5kAbKtcXwdiD1xu5kn?prefilled_promo_code=LETSGETCLEAN'
    },
]