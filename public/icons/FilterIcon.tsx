import * as React from 'react';
import { SVGProps } from 'react';

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<rect x={0.5} y={0.5} width={23} height={23} rx={4.5} fill='#fff' />
		<path
			opacity={0.5}
			d='M18.222 5.875H5.777l4.978 6.438v4.45l2.489 1.362v-5.812l4.978-6.438Z'
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<rect x={0.5} y={0.5} width={23} height={23} rx={4.5} stroke='gray' />
	</svg>
);

