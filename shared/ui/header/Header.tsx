import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import { LogOutIcon } from '@shared/ui/icons/LogOutIcon';
import { LogoWithoutText } from '@shared/ui/icons/LogoWithoutText';
import { useGetUserQuery } from './api/getUserApiSlice';

export interface IUser {
	id: number;
}

const Header = () => {
	const [user, setUser] = useState<IUser>({id: 0});
	const { data: userData } = useGetUserQuery(user.id);
	
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const userIdJson = localStorage.getItem('id');
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const logoutHandler = () => {
		localStorage.clear();
	};
	if (!userData) {
		return <p>Загрузка...</p>;
	}
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.logo}>
				<LogoWithoutText />
			</Link>
			<div className={styles.profile}>
				<div className={styles.personInfo}>
					<span
						className={styles.name}
					>{`${userData?.name} ${userData?.surName}`}</span>
					<span className={styles.email}>{userData?.email}</span>
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
				onClick={logoutHandler}
			>
				<LogOutIcon />
			</Link>
		</header>
	);
};

export default Header;
