import * as React from 'react';
import { SVGProps } from 'react';

export const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={14}
		height={14}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M12.106 9.477c-.03-.105.034-.252.095-.357a4.803 4.803 0 0 0 .854-2.734c.008-2.7-2.23-4.889-4.996-4.889-2.413 0-4.426 1.672-4.898 3.89-.07.33-.106.665-.106 1.002 0 2.702 2.151 4.95 4.918 4.95.44 0 1.032-.135 1.357-.225.325-.091.647-.211.73-.243a.749.749 0 0 1 .559.008l1.63.589a.383.383 0 0 0 .112.03.236.236 0 0 0 .23-.234.38.38 0 0 0-.014-.08l-.471-1.707Z'
			stroke='#213A8F'
			strokeWidth={1.5}
			strokeMiterlimit={10}
			strokeLinecap='round'
		/>
		<path
			d='M2.114 6.002a4.474 4.474 0 0 0-.185 4.607c.06.11.091.195.075.248-.016.054-.504 1.832-.504 1.832a.246.246 0 0 0 .061.238.24.24 0 0 0 .148.066c.03.002.06-.002.088-.011l1.715-.527a.459.459 0 0 1 .355.035c.542.268 1.15.457 1.769.508a4.661 4.661 0 0 0 2.419-.454'
			stroke='#213A8F'
			strokeWidth={1.5}
			strokeMiterlimit={10}
			strokeLinecap='round'
		/>
	</svg>
);
