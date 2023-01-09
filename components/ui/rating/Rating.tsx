import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

import { TRatingProps } from './Rating.props';
import styles from './Rating.module.scss';

const Rating = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	return (
		<div className={styles.rating}>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;

				return (
					<label key={i}>
						<input
							type='radio'
							name='rating'
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar
							size={24}
							className={styles.star}
							color={
								ratingValue <= (hover || rating)
									? '#ffc107'
									: '#e4e5e9'
							}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(0)}
						/>
					</label>
				);
			})}
		</div>
	);
};

export default Rating;
