import Head from 'next/head';

import styles from './[userId].module.scss';
import Info from '../../components/profile/Info';

const ProfilePage = () => {
	return (
		<>
			<Head>
				<title>Profile</title>
				<meta name='description' content='Profile Page' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<main className={styles.main}>
				<Info />
			</main>
		</>
	);
};

export default ProfilePage;

// export function getStaticProps() {
// 	return;
// }
