import { useGetAllQuestionsQuery} from '../../../redux/';

import styles from './MyQuestions.module.scss';
import { QuestionItem } from './QuestionItem';

export const MyQuestions = () => {
	const { data, error } = useGetAllQuestionsQuery(1);

	if (!data) {
		return <p>Загрузка...</p>;
	}

	if (error) {
		return <p>Что-то пошло не так! Мы скоро всё исправим!</p>;
	}

	return (
		<ul className={styles.list}>
			{data &&
				data.items.map((item) => {
					return (
						<QuestionItem
							key={item.id}
							answer={item.answer}
							question={item.question}
							technology={item.technology?.name}
						/>
					);
				})}
		</ul>
	);
};
