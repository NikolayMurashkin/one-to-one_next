import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Rating.module.scss';

type TRatingProps = {
	readOnly: boolean;
	count?: number;
};

const Rating: React.FC<TRatingProps> = ({ readOnly, count = 0 }) => {
	const cx = classNames.bind(styles);

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
							onClick={() => {
								if (!readOnly) {
									setRating(ratingValue);
								}
							}}
						/>
						<FaStar
							size={20}
							className={cx('star', {
								readOnly: readOnly === true,
							})}
							color={
								ratingValue <= (hover || rating || count)
									? '#ffc107'
									: '#e4e5e9'
							}
							onMouseEnter={() => {
								if (!readOnly) {
									setHover(ratingValue);
								}
							}}
							onMouseLeave={() => {
								if (!readOnly) {
									setHover(0);
								}
							}}
						/>
					</label>
				);
			})}
		</div>
	);
};

export default Rating;
