import styles from './MainWindow.module.scss';
import Tab from '../../ui/tabs/Tabs';

const MainWindow = () => {
	return (
		<section className={styles.wrapper}>
			<Tab label='Технология' />
			<Tab label='общее кол-во заданных вопросов' />
			<Tab label='суммарное кол-во балов' />
			<Tab label='средний бал' />
		</section>
	);
};

export default MainWindow;
