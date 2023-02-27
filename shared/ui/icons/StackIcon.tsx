import * as React from 'react';
import { SVGProps } from 'react';

export const StackIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={15}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M8 5c3.107 0 5.625-.84 5.625-1.875 0-1.036-2.518-1.875-5.625-1.875s-5.625.84-5.625 1.875C2.375 4.161 4.893 5 8 5ZM13.625 7.5c0 1.037-2.5 1.875-5.625 1.875S2.375 8.537 2.375 7.5'
			stroke='gray'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.375 3.125v8.75c0 1.037 2.5 1.875 5.625 1.875s5.625-.838 5.625-1.875v-8.75'
			stroke='gray'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
