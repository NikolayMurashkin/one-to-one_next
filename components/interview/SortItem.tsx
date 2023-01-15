import styles from './SortItem.module.scss';
import Image from 'next/image';

type TSortItemProps = {
	text: string
}

export const SortItem: React.FC<TSortItemProps> = ({text}) => {
	return (
		<div className={styles.item}>
			<span className={styles.text}>{text}</span>
			<Image
				src='/icons/sort.svg'
				width={10}
				height={17}
				alt='sort icon'
			/>
		</div>
	);
};
