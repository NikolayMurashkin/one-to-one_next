import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';
import { useGetUserByIdQuery } from '../../redux';
import { useAppSelector } from '../../hooks/redux';

const Header = () => {
	// const userId = useAppSelector((state) => state.user.id);
	// let userId: string | null= 1;
	// const userId = localStorage.getItem('userId');
	// if (typeof window !== 'undefined') {
	// 	userId = localStorage.getItem('userId');
	// }
	// localStorage.getItem('userId');

	// const { data: user, error } = useGetUserByIdQuery(userId);

	// if (!user) {
	// 	return <p>Загрузка...</p>;
	// }
	// if (error) {
	// 	return <p>Произошла ошибка</p>;
	// }

	let user;
	if (typeof window !== 'undefined') {
	}

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
					<span
						className={styles.name}
					>{`${user.name} ${user.surName}`}</span>
					<span className={styles.email}>{user.email}</span>
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
