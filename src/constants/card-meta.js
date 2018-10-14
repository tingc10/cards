export const STANDARD_CARD_VALUES = [
	{ name: '2', value: 2 },
	{ name: '3', value: 3 },
	{ name: '4', value: 4 },
	{ name: '5', value: 5 },
	{ name: '6', value: 6 },
	{ name: '7', value: 7 },
	{ name: '8', value: 8 },
	{ name: '9', value: 9 },
	{ name: '10', value: 10 },
	{ name: 'Jack', value: 11 },
	{ name: 'Queen', value: 12 },
	{ name: 'King', value: 13 },
	{ name: 'Ace', value: null },
];

export const JOKER_CARD_VALUE = { name: 'Joker', value: null };

export const COLORS = {
	RED: 'Red',
	BLACK: 'Black',
}

export const STANDARD_CARD_TYPES = [
	{ type: 'Hearts', color: COLORS.RED, },
	{ type: 'Diamonds', color: COLORS.RED },
	{ type: 'Spades', color: COLORS.BLACK },
	{ type: 'Clubs', color: COLORS.BLACK },
];

export const SPECIAL_CARD_TYPES = [
	{ type: 'JOKER', color: COLORS.RED },
	{ type: 'JOKER', color: COLORS.BLACK },
]