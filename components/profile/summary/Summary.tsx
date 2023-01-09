import { FaStar } from 'react-icons/fa';

import styles from './Summary.module.scss';
import { TSummaryProps } from './Summary.props';

const Summary: React.FC<TSummaryProps> = ({ label, number }) => {
	return (
		<section className={styles.wrapper}>
			<h6>{label}</h6>
			<div className={styles.summary}>
				<FaStar size={150} color={'#8FAF4A'} className={styles.star} />
				<span>{number}</span>
			</div>
		</section>
	);
};

export default Summary;
