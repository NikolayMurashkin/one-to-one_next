import Image from 'next/image';

import styles from './Info.module.scss';
import Rating from '../../ui/rating/Rating';
import avatar from '../../../public/images/avatar.png';

const Info = () => {
	return (
		<section className={styles.wrapper}>
			<Image src={avatar} alt='avatar' width={132} height={132} />
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
