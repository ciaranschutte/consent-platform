import { ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Button.module.scss';

import { ButtonColor, ButtonVariant } from '.';

const LinkButton = ({
	href,
	variant = 'primary',
	color = 'default',
	children,
	className = '',
}: {
	href: string;
	children: ReactNode;
	variant?: ButtonVariant;
	color?: ButtonColor;
	className?: string;
}) => {
	return (
		<Link
			href={href}
			className={clsx(styles.base, styles[variant], styles[color], className)}
			role="button"
		>
			{children}
		</Link>
	);
};

export default LinkButton;
