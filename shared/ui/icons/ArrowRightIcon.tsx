import * as React from 'react';
import { SVGProps } from 'react';

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={7}
		height={13}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			opacity={0.5}
			d='m1 12.5 6-6-6-6'
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

