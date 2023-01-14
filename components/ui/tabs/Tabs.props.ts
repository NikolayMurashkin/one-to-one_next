export type TTab = {
	id: string | number;
	label?: string | number;
};

export type TTabsProps = {
	selectedId: string | number;
	tabs: TTab[];
	onClick: (id: string | number) => void;
};
