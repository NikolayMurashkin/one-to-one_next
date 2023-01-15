import styles from './TabContent.module.scss';
import { TabItem } from './TabItem';

export const TabContent = () => {
	return (
		<section>
			<ul className={styles.list}>
				<li className={styles.item}>
					<TabItem
						buttonText='Заявка отправлена!'
						color='secondary'
						stack='Python'
						date='11.01.2023 10:00 MSK'
						name='Артем Кашаков'
						grade='Middle'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='PascalABC.NET'
						date='13.01.2023 10:00 MSK'
						name='Артем Кашаков'
						grade='Junoir'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='Java'
						date='17.01.2023 10:00 MSK'
						name='Полина Султанова'
						grade='Senior'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='C#'
						date='7.01.2023 10:00 MSK'
						name='Артем Кашаков'
						grade='Junior'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='C++'
						date='27.01.2023 10:00 MSK'
						name='Максим Ананьев'
						grade='Senior'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='PHP'
						date='17.01.2023 10:00 MSK'
						name='Максим Ананьев'
						grade='Middle'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='Javascript'
						date='3.01.2023 12:00 MSK'
						name='Полина Султанова'
						grade='Senior'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='Javascript'
						date='3.01.2023 12:00 MSK'
						name='Полина Султанова'
						grade='Senior'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='Javascript'
						date='3.01.2023 12:00 MSK'
						name='Полина Султанова'
						grade='Senior'
					/>
				</li>
				<li className={styles.item}>
					<TabItem
						buttonText='Откликнуться'
						color='ghost'
						stack='Javascript'
						date='3.01.2023 12:00 MSK'
						name='Полина Султанова'
						grade='Senior'
					/>
				</li>
			</ul>
		</section>
	);
};
