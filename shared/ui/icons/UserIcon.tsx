import * as React from 'react';
import { SVGProps } from 'react';

export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={15}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M13.25 13.125v-1.25a2.5 2.5 0 0 0-2.5-2.5h-5a2.5 2.5 0 0 0-2.5 2.5v1.25M8.25 6.875a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
			stroke='gray'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);