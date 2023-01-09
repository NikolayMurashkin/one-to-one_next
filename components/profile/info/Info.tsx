import Image from 'next/image';

import styles from './Info.module.scss';
import Rating from '../../ui/rating/Rating';

const Info = () => {
	return (
		<section className={styles.wrapper}>
			<Image
				src={'/images/avatar.png'}
				alt='avatar'
				width={132}
				height={132}
			/>
			<div className={styles.info}>
				<h5>Leonov Vasily</h5>
				<div className={styles.rating}>
					<span>User Raiting</span>
					<Rating />
				</div>
			</div>
		</section>
	);
};

export default Info;
