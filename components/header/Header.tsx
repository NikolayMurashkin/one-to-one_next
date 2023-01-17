import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.logo}>
				<Image
					src={'/images/logo.jpg'}
					alt={'Logo'}
					width={100}
					height={80}
				/>
			</Link>
			<div className={styles.profile}>
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
			</div>
			<Link
				href={{
					pathname: '/login',
				}}
			>
				<Image
					src={'/icons/log-out.svg'}
					alt={'profile'}
					width={37}
					height={37}
				/>
			</Link>
		</header>
	);
};

export default Header;
