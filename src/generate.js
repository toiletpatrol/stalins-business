const ADJ = [
  'Absolute',
  'Chronic',
  'Sick',
  'Boston',
  'Moscow',
  'Nazi',
  'SS',
  'U.S.',
  'Siberian',
  'Russian',
  'Agressive',
  'Stalin\'s',
  'Hounds of',
  'Abused',
  'Total',
  'Fucked',
  'Fucked Up',
  'Pure',
  'Rational',
  'Masturbating',
  'Teenage',
  'Total',
  'Big',
  'Primal',
  'Full',
  'Blazing',
  'Hot',
  'Grim',
  'Dark',
  'Homo',
  'Young',
  'Youngblood',
  'Loaded',
  'Everyday',
  'Damn',
  'Damned',
  'Goddam',
  'Blasted',
  'Blessed',
  'Bloody',
  'Gone',
  'Criminal',
  'Eternal',
  'Endless',
  'Final',
  'Inner',
  'Mad',
  'Crazy',
  'Rotten',
  'Silent',
  'Deadly',
  'Sentenced',
  'Broken',
  'Blind',
  'Weird',
  'Anti',
  'Antisocial',
  'Social',
  'New',
  'Old',
  'Modern',
  'Black',
  'Violent',
  'Crown',
  'Stabbed',
  'Meat',
  'Disfunctional',
  'Poor',
  'Tragic',
  'Communist',
  'Savage',
  'Absurd',
  'Crud',
  'Crucial',
  'Night',
  'Double',
  'Urunal',
  'Uranium',
  'Cellar',
  'TV',
  'Cold'
];

const NOUN = [
  // Нищета болезни страдание
  'Sick',
  'Breed',
  'Disgust',
  'Discharge',
  'Distress',
  'Disbelief',
  'Tragedy',
  'Fear',
  'Depression',
  'Demention',
  'Madness',
  'Nightmare',
  'Sepsis',
  'Decay',
  'Trauma',
  'Poverty',
  'Misery',
  'Assholes',
  'Bastards',

  // Эмоции
  'Attention',

  // Насилие
  'Strangler',
  'Murderer',
  'Agression',
  'Hate',
  'Abuse',
  'Fury',
  'Killer',
  'Pressure',
  'Stress',
  'Control',
  'Domination',
  'Tension',
  'Machine',
  'Poison',
  'Contact',
  'Death',
  'Reaper',
  'Razor',
  'Obedience',
  'Skull',
  'Cracker',
  'Goons',
  'Violence',
  'Court',
  'Stab',
  'Butchers',
  'Crime',

  // Война/борьба
  'Pact',
  'Boots',
  'Castle',
  'Unit',
  'Destruction',
  'War',
  'Collision',
  'Impact',
  'Conflict',
  'Battle',
  'Gun',
  'Guns',
  'Warrior',
  'Soldier',
  'Cage',
  'Prison',
  'Shot',
  'Fire',
  'Chain',
  'Combat',
  'Knife',
  'Gulag',

  // Секс/наркотики
  'Pleasure',
  'Drug',
  'Drugs',
  'Sex',
  'Penis',
  'Butthole',

  // Пафосные слова
  'Generation',
  'Way',
  'Hell',
  'Heck',
  'Business',
  'Rite',
  'Ritual',
  'Cult',
  'Condition',
  'Superior',
  'Exit',
  'Order',
  'Depth',
  'Reality',
  'Mind',
  'Silence',
  'Breakout',
  'Lie',
  'Liars',
  'School',
  'College',
  'Trap',
  'Race',
  'Fuck',
  'Standard',

  // Животные
  'Dog',
  'Dogs',
  'Hound',
  'Hounds',
  'Warthog',
  'Animals',
  'Primates',
  'Wolves',
  'Wolf',
  'Human',
  'Creatures',

  'Gas',
  'Club',

  'Eye',
  'Hand',
  'Leg',
  'Head',
  'Brain',
  'Blood',
  'Beef',
  'Meat',
  'Organ'
];

let random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function () {
  let i1 = random(0, ADJ.length-1);
  let i2 = random(0, NOUN.length-1);

  return `${ADJ[i1]} ${NOUN[i2]}`;
}
