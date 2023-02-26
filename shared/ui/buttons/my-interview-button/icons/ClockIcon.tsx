import * as React from 'react';
import { SVGProps } from 'react';

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={15}
		height={15}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g
			opacity={0.5}
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M7.5 13.334a5.833 5.833 0 1 0 0-11.667 5.833 5.833 0 0 0 0 11.667Z' />
			<path d='M7.5 4v3.5l2.333 1.167' />
		</g>
	</svg>
);

