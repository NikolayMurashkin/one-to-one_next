import Image from 'next/image';

import styles from './Info.module.scss';
import Rating from '../ui/rating/Rating';

const Info = () => {
	return (
		<section>
			<Image
				src={'/images/avatar.jpg'}
				alt='avatar'
				width={50}
				height={50}
			/>
			<div>
				<h5>Leonov Vasily</h5>
				<div>
					<span>User Raiting</span>
					<Rating />
				</div>
			</div>
		</section>
	);
};

export default Info;
