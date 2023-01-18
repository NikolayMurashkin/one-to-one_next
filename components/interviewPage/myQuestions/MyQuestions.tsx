import useSWR from 'swr';

import styles from './MyQuestions.module.scss';
import { QuestionItem } from './QuestionItem';
import { fetcher } from '../../../heplers/api-utils';
import { TQuestionItem } from './MyQuestions.props';

export const MyQuestions = () => {
	const { data, error } = useSWR(
		'https://158.160.51.32:8080/one-to-one/api/v1/user/1/question',
		fetcher
	);

	if (!data) {
		return <p>Загрузка дааных...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	return (
		<ul className={styles.list}>
			{data &&
				data.items.map((item: TQuestionItem) => {
					return (
						<QuestionItem
							key={item.id}
							answer={item.answer}
							question={item.question}
							technology={item.technology.name}
						/>
					);
				})}
		</ul>
	);
};
