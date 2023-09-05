import * as z from 'zod';
import { ComponentProps } from 'react';
import Link from 'next/link';

import { ValidLanguage } from '@/i18n';

export type RouteParams = { [k: string]: string };
export type Route =
	| {
			name: 'home';
			params?: never;
	  }
	| {
			name: RouteName;
			params?: RouteParams;
	  };

export type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, 'href'> &
	Route & {
		lang: ValidLanguage;
	};

const VALID_ROUTE_NAMES = [
	'home',
	'clinician-registration',
	'participant-consent',
	'participant-registration',
	'participant-dashboard',
] as const;

export const RouteNameEnum = z.enum(VALID_ROUTE_NAMES);
export type RouteName = z.infer<typeof RouteNameEnum>;
