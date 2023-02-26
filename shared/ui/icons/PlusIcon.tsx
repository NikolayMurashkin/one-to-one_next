import * as React from 'react';
import { SVGProps } from 'react';

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={17}
		height={16}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g opacity={0.8} clipPath='url(#a)'>
			<path
				d='M8.3 14.604a6.638 6.638 0 1 0 0-13.277 6.638 6.638 0 0 0 0 13.277ZM8.3 5.31v5.311M5.644 7.966h5.31'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path
					fill='#fff'
					transform='translate(.333)'
					d='M0 0h15.932v15.932H0z'
				/>
			</clipPath>
		</defs>
	</svg>
);
