import styles from './Filters.module.scss';
import Button from '../../ui/button/Button';

const Filters = () => {
	return (
		<section className={styles.wrapper}>
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
