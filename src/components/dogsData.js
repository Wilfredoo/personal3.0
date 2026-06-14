// Shared dog data for all /dogs style variants.
// Each pack is one sit / household. Add dogs to a pack, or add a new pack.

export const intro =
  "Even though I feel an affinity with all animals, I have a special relationship " +
  "with dogs. I am particularly fond of medium and large dogs with difficult " +
  "temperaments — whether anxiety or aggression — as they challenge me to understand " +
  "and adapt to them in order to build a bridge of trust between us. " +
  "Below are all the doggies I've cared for in recent times.";

export const packs = [
  {
    place: 'Espinhal, Portugal',
    year: '2026',
    note: '',
    dogs: [
      { name: 'Yugen', breed: 'Greater Swiss Mountain Dog', age: 5 },
      { name: 'Zuri', breed: 'Greater Swiss Mountain Dog', age: 5 },
    ],
  },
  {
    place: 'Ponte de Lima, Portugal',
    year: '2026',
    note: '',
    dogs: [
      { name: 'Sky', breed: 'Mix-Breed' },
      { name: 'Walli', breed: 'Mix-Breed' },
      { name: 'Luna', breed: 'Mix-Breed' },
    ],
  },
  {
    place: 'Vitinia, Italy',
    year: '2026',
    note: '',
    dogs: [
      { name: 'Rea', breed: 'Labrador Retriever', age: 9 },
    ],
  },
  {
    place: 'Bela, North-East Germany',
    year: '2025',
    note: '',
    dogs: [
      { name: 'Misty', breed: 'Border Collie Mix' },
    ],
  },
  {
    place: 'Weiden, Germany',
    year: '2025',
    note: '',
    dogs: [
      { name: 'Bo', breed: 'Rhodesian Ridgeback', age: 10 },
      { name: 'Hendrix', breed: 'Mix-Breed', age: 6 },
    ],
  },
  {
    place: 'Landscheid, Germany',
    year: '2025',
    note: '',
    dogs: [
      { name: 'Dobby', breed: 'Australian Shepherd', age: 5 },
      { name: 'Lucy', breed: 'Australian Shepherd', age: 7 },
    ],
  },
  {
    place: 'Louvain-la-Neuve, Belgium',
    year: '2025',
    note: '',
    dogs: [
      { name: 'Pitchou', breed: 'Mix-Breed', age: 6 },
      { name: 'Trixie', breed: 'Mix-Breed', age: 3 },
    ],
  },
  {
    place: 'Nuremberg, Germany',
    year: '2025',
    note: '',
    dogs: [
      { name: 'Trixie', breed: 'Poodle' },
    ],
  },
  {
    place: 'Najac, Occitanie, France',
    year: '2025',
    note: 'Foster dogs.',
    dogs: [
      { name: 'Poppie', breed: 'Unknown' },
      { name: 'Nazar', breed: 'Unknown' },
    ],
  },
];

export const dogCount = packs.reduce((n, p) => n + p.dogs.length, 0);
