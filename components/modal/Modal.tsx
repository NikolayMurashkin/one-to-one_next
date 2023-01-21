import { useState } from 'react';

import { TModalProps } from './Modal.props';
import { Questions } from './questions/QuestionsModal';
import { InterviewsModal } from './interviews/InterviewsModal';

export const Modal: React.FC<TModalProps> = ({ tab }): JSX.Element => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	if (tab === 1) {
		return (
			<InterviewsModal
				openModal={openModal}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		);
	}
	if (tab === 3) {
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
