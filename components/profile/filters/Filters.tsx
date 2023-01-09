import styles from './Filters.module.scss';
import Tab from '../../ui/tabs/Tabs';

const Filters = () => {
	return (
		<section className={styles.wrapper}>
			<Tab label='Собеседование' />
			<Tab label='Фильтр 1' />
			<Tab label='Фильтр 2' />
			<Tab label='Фильтр 3' />
			<Tab label='Фильтр 4' />
			<Tab label='Фильтр 5' />
		</section>
	);
};

export default Filters;
