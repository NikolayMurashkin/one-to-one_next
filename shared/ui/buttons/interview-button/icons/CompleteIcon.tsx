import * as React from 'react';
import { SVGProps } from 'react';

export const CompleteIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={13}
		height={13}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M12 5.997v.506a5.5 5.5 0 1 1-3.261-5.027M12 2.103 6.5 7.61l-1.65-1.65'
			stroke='#89B588'
			strokeWidth={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

