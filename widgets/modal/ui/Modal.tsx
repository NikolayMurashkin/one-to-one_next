import { useState } from 'react';

import { TModalProps } from '../model/Modal.props';
import { Questions } from '@features/modalQuestions/ui/QuestionsModal';
import { InterviewsModal } from '@features/modalInterviews/ui/InterviewsModal';

export const Modal: React.FC<TModalProps> = ({ tab }): JSX.Element => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	if (tab === 1 || tab === 2) {
		return (
			<InterviewsModal
				openModal={openModal}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		);
	}
	if (tab === 4) {
		return (
			<Questions
				openModal={openModal}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		);
	}
	return <p>some</p>;
};
