export type Tab = {
	id: number;
	label?: string | number;
};

export type TabsProps = {
	selectedId: number;
	tabs: Tab[];
};
