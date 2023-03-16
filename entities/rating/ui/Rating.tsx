import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from '../model/Rating.module.scss';
import { useAppDispatch } from '@app/hooks';
import { setRating } from '@entities/rating/api/ratingSlice';

type TRatingProps = {
	readOnly: boolean;
	count?: number;
	setRating?: React.Dispatch<React.SetStateAction<number | undefined>>
};

const Rating: React.FC<TRatingProps> = ({ readOnly, count = 0, setRating }) => {
	const cx = classNames.bind(styles);

	const dispatch = useAppDispatch();
	const [rating, setInnerRating] = useState(0);
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
								if (!readOnly && setRating) {
									setInnerRating(ratingValue);
									setRating(ratingValue)
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
