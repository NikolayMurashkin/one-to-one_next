import styles from './Filters.module.scss';
import Tab from '../../ui/tabs/Tabs';
import Button from '../../ui/button/Button';

const Filters = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.tabs}>
				<Tab label='Собеседование' />
				<Tab label='Фильтр 1' />
				<Tab label='Фильтр 2' />
				<Tab label='Фильтр 3' />
				<Tab label='Фильтр 4' />
				<Tab label='Фильтр 5' />
			</div>
			<div className={styles.interview}>
				<span>1 СОБЕСЕДОВАНИЕ (НОВОЕ, ЕЩЕ НЕ ПРОВЕДЕННОЕ)</span>
				<div className={styles.buttons}>
					<Button text='фидбек' color='secondary' />
					<Button text='НАЧАТЬ СОБЕСЕДОВАНИЕ' color='primary' />
				</div>
			</div>
			<div className={styles.interview}>
				<span>
					2 СОБЕСЕДОВАНИЕ (ПРОВЕДЕННОЕ, НУЖНО ТОЛЬКО УВИДЕТЬ ФИДБЕК)
				</span>
				<div className={styles.buttons}>
					<Button text='фидбек' color='primary' />
					<Button text='СОБЕСЕДОВАНИЕ ЗАКОНЧЕНО' color='secondary' />
				</div>
			</div>
		</section>
	);
};

export default Filters;
