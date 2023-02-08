import * as React from 'react';
import { SVGProps } from 'react';

export const LogOutIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g
			opacity={0.6}
			stroke='#000'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9' />
		</g>
	</svg>
);

