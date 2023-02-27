import * as React from 'react';
import { SVGProps } from 'react';

export const LevelIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={15}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M7.75 9.375a4.375 4.375 0 1 0 0-8.75 4.375 4.375 0 0 0 0 8.75Z'
			stroke='gray'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='m5.381 8.681-.756 5.694L7.75 12.5l3.125 1.875-.756-5.7'
			stroke='gray'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
