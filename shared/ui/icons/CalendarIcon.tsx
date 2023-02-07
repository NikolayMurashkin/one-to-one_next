import * as React from 'react';
import { SVGProps } from 'react';

export const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={14}
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
			<path d='M11.083 2.833H2.917c-.645 0-1.167.522-1.167 1.167v8.166c0 .645.522 1.167 1.167 1.167h8.166c.645 0 1.167-.522 1.167-1.167V4c0-.645-.522-1.167-1.167-1.167ZM9.334 1.667V4M4.667 1.667V4M1.75 6.333h10.5' />
		</g>
	</svg>
);
