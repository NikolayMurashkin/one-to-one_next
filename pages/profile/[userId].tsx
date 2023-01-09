import Head from 'next/head';

import styles from './[userId].module.scss';
import Info from '../../components/profile/info/Info';
import Questions from '../../components/profile/questions/Questions';
import Interviews from '../../components/profile/interviews/Interviews';
import Summary from '../../components/profile/summary/Summary';
import MainWindow from '../../components/profile/mainWindow/MainWindow';
import Filters from '../../components/profile/filters/Filters';

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
				<div className={styles.left}>
					<Info />
					<Questions />
					<Interviews />
					<Summary
						label={'Общее кол-во пройденных собес.'}
						number={120}
					/>
					<Summary label={'сумарное кол-во балов'} number={1234} />
					<Summary
						label={'кол-во заданных  ему вопросов'}
						number={4555}
					/>
				</div>
				<div className={styles.right}>
					<MainWindow />
					<Filters />
				</div>
			</main>
		</>
	);
};

export default ProfilePage;

// export function getStaticProps() {
// 	return;
// }
