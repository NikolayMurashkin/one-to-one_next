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
			<nav className={styles.nav}>
				<Link href='/'>Home</Link>
				<Link href='/interview'>Find Interview</Link>
			</nav>
			<Link href='/profile'>
				<Image
					src={'/images/profile.png'}
					alt={'profile'}
					width={50}
					height={50}
				/>
			</Link>
		</header>
	);
};

export default Header;
