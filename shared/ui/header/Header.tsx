import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import styles from './Header.module.scss';
import { LogOutIcon } from '@shared/ui/icons/LogOutIcon';
import { LogoWithoutText } from '@shared/ui/icons/LogoWithoutText';
import { useGetUserQuery } from './api/getUserApiSlice';

export interface IUser {
	id: string;
}

const Header = () => {
	const [user, setUser] = useState<number>();
	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUser(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const { data: userData, isLoading } = useGetUserQuery(user ?? skipToken);

	const logoutHandler = () => {
		localStorage.clear();
	};

	if (isLoading) {
		return <p>Загрузка...</p>;
	}

	if (userData) {
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
	} else {
		return null;
	}
};

export default Header;
