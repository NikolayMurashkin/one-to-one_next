import * as React from 'react';
import { SVGProps } from 'react';

function MedalTwo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={22}
			height={25}
			viewBox='0 0 22 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M6.23 24.5l-.688-3.184-3.169-.692 5.88-5.908 3.858 3.876L6.23 24.5z'
				fill='#FF022D'
			/>
			<path
				d='M12.111 18.591L6.231 24.5l-.688-3.184 2.148-2.158a7.83 7.83 0 01-2.142-1.724l.157-.157a7.766 7.766 0 002.352 1.512l2.125-2.135 1.928 1.937z'
				fill='#BF0222'
			/>
			<path
				d='M16.489 24.5l.688-3.184 3.169-.692-5.88-5.908-3.858 3.876 5.88 5.908z'
				fill='#FF022D'
			/>
			<path
				d='M20.346 20.624l-3.169.692-2.117-2.127c-.9.483-1.906.794-2.975.886l-.713-.716a7.706 7.706 0 003.067-.795l-1.902-1.91 1.93-1.938 5.88 5.908z'
				fill='#BF0222'
			/>
			<path
				d='M16.5 17.078c3.038-3.052 3.038-8 0-11.052a7.752 7.752 0 00-11 0c-3.038 3.052-3.038 8 0 11.052a7.752 7.752 0 0011 0z'
				fill='#E4E5ED'
			/>
			<path
				d='M15.631 16.204a6.601 6.601 0 000-9.304 6.526 6.526 0 00-9.26 0 6.601 6.601 0 000 9.304 6.526 6.526 0 009.26 0z'
				fill='#BCBFD1'
			/>
			<path
				d='M15.863 7.147a6.506 6.506 0 00-4.385-1.694c-3.616 0-6.548 2.946-6.548 6.58a6.57 6.57 0 001.686 4.405 6.575 6.575 0 01-2.164-4.886c0-3.633 2.932-6.58 6.548-6.58 1.93 0 3.665.84 4.863 2.175z'
				fill='#8D8F9D'
			/>
			<path
				d='M14.085 13.828l-1.118.368h-1.409c.554-.619 1.464-1.31 1.995-1.992 1.863-2.382.654-4.914-2.013-4.914-1.817 0-2.658.881-2.967 2.364l-.465.26.367.37 2.143.215c.049-.748.113-1.332.882-1.332.95 0 .977.982.524 1.665-.917 1.35-3.13 2.287-3.66 4.884l-.447.148.367.369h6.167v-2.037l-.366-.368z'
				fill='#8D8F9D'
			/>
			<path
				d='M11.19 13.828c.555-.62 1.464-1.31 1.996-1.993 1.862-2.382.653-4.914-2.014-4.914-2.062 0-2.866 1.134-3.064 2.994l2.143.215c.049-.748.113-1.332.882-1.332.95 0 .977.982.523 1.665-.974 1.435-3.416 2.405-3.739 5.4h6.167v-2.035h-2.893z'
				fill='#E4E5ED'
			/>
		</svg>
	);
}

export default MedalTwo;
