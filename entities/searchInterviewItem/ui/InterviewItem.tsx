import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '../model/SearchInterviewItem.module.scss';
import { ISearchInterviewItemProps } from '@entities/searchInterviewItem/model/SearchInterviewItem.props';
import { SearchInterviewButton } from '@shared/ui';
import {
	IAcceptInterview,
	IInterviewItem,
} from '../model/searchInterviewItemTypes';

import { useAcceptInterviewMutation } from '@entities/searchInterviewItem/api/acceptInterviewApiSlice';
import { useGetUserByIdQuery } from '@shared/api/getUserByIdApiSlice';

export const SearchInterviewItem: React.FC<ISearchInterviewItemProps> = ({
	stack,
	initiatorId,
	date,
	level,
	id,
	buttonText,
	isDisabled
}) => {
	const cx = classNames.bind(styles);
	const [userId, setUserId] = useState<number>();
	useEffect(() => {
		const userIdJson = localStorage.getItem('id');
		if (userIdJson) {
			setUserId(userIdJson !== null ? JSON.parse(userIdJson) : {});
		}
	}, []);

	const interviewRef = useRef<HTMLLIElement>(null);
	const [acceptInterview] = useAcceptInterviewMutation();
	const { data: user, error } = useGetUserByIdQuery(initiatorId);

	const acceptInterviewHanlder = (body: IAcceptInterview) => {
		acceptInterview(body);

		const refStyle = interviewRef.current?.style;
		if (refStyle) {
			refStyle.opacity = '0';
			refStyle.transition = 'all 1s ease';
			refStyle.transform = 'translateY(-30px)';
			setTimeout(() => {
				refStyle.display = 'none';
			}, 1000);
		}
	};
	if (!user) {
		return <p>Загрузка...</p>;
	}
	if (error) {
		return <p>Произошла ошибка</p>;
	}

	return (
		<li className={cx('inteviewItem')} ref={interviewRef}>
			<span className={cx('text')}>{date}</span>
			<span className={cx('text')}>{stack}</span>
			<span className={cx('text')}>{`${user.name} ${user.surName}`}</span>
			<span className={cx('text')}>{level}</span>
			<span
				onClick={() =>
					acceptInterviewHanlder({
						opponentId: userId,
						oneToOneId: id,
					})
				}
			>
				<SearchInterviewButton isDisabled={isDisabled} text={buttonText} />
			</span>
		</li>
	);
};
