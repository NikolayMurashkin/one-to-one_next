export type TRatingProps = {
	count: number;
	rating: number;
	color: {
		filled: string;
		unfilled: string;
	};
	onRating: () => void;
};
