import styles from './Tabs.module.scss';
import { TTabs } from './Tabs.props';

const Tab: React.FC<TTabs> = ({ label }) => {
	return <span className={styles.label}>{label}</span>;
};

export default Tab;
