import * as React from 'react';
import { SVGProps } from 'react';

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={15}
		height={15}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g
			opacity={0.3}
			stroke='#000'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m11.25 3.75-7.5 7.5M3.75 3.75l7.5 7.5' />
		</g>
	</svg>
);

