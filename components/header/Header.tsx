import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<Image
					src={'/images/logo.jpg'}
					alt={'Logo'}
					width={100}
					height={80}
				/>
			</Link>

			<Link
				href={{
					pathname: '/profile/[userId]',
					query: { userId: 1 },
				}}
			>
				<div className={styles.personInfo}>
					<span className={styles.name}>Леонов Василий</span>
					<span className={styles.email}>nagibator@gmail.com</span>
				</div>
				<Image
					src={'/images/profile.png'}
					alt={'profile'}
					width={37}
					height={37}
				/>
			</Link>
		</header>
	);
};

export default Header;
