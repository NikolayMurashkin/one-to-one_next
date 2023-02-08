import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import { LogoIcon } from '@shared/ui/icons/LogoIcon';
import { LogOutIcon } from '@shared/ui/icons/LogOutIcon';

export interface IUser {
	id: number;
	login: string;
	email: string;
	name: string;
	surName: string;
}

const Header = () => {
	const [user, setUser] = useState<IUser>();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userJson = localStorage.getItem('userInfo');
			setUser(userJson !== null ? JSON.parse(userJson) : {});
		}
	}, []);

	const logoutHandler = () => {
		localStorage.clear();
	};
	if (!user) {
		return <p>Загрузка...</p>;
	}
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.logo}>
				<LogoIcon />
			</Link>
			<div className={styles.profile}>
				<div className={styles.personInfo}>
					<span
						className={styles.name}
					>{`${user.name} ${user.surName}`}</span>
					<span className={styles.email}>{user.email}</span>
				</div>
				<Image
					src={'/profile.png'}
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
				<LogOutIcon />
			</Link>
		</header>
	);
};

export default Header;
