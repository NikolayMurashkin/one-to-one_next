import * as React from 'react';
import { SVGProps } from 'react';

export const SortIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={10}
		height={18}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='m5.342 3.142 3.51 4.068c.12.138.17.297.148.477-.022.179-.14.284-.355.313H1.372c-.176-.013-.291-.1-.347-.261-.055-.162-.027-.326.085-.491L4.66 3.142a.481.481 0 0 1 .683 0Z'
			fill='#C70025'
		/>
		<g clipPath='url(#a)'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='m4.657 14.858-3.51-4.068A.592.592 0 0 1 1 10.314c.021-.18.14-.284.355-.313h7.273c.175.012.29.099.346.26.055.163.027.326-.085.491l-3.548 4.106a.48.48 0 0 1-.684 0Z'
				fill='#C70025'
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path
					fill='#fff'
					transform='rotate(-180 5 8.75)'
					d='M0 0h10v10H0z'
				/>
			</clipPath>
		</defs>
	</svg>
);

