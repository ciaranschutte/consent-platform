import routesByLocale from '@/i18n/routes/routesByLocale.json';
import { RouteName, RouteNameEnum } from '@/components/Link/types';
import { ValidLanguage } from '@/i18n';
import { supportedLanguages } from '@/i18n/settings';

export const getUnselectedLang = (lang: ValidLanguage): ValidLanguage => {
	return supportedLanguages.filter((l) => l !== lang)[0];
};

export const getRouteNameByPath = (
	routeObj: { [k: string]: string },
	value: string,
): string | undefined => {
	const keys = Object.keys(routeObj);
	return keys.find((key: string) => routeObj[key] === value);
};

export const findLinkNameByPath = (path: string, lang: ValidLanguage): RouteName => {
	if (!path) {
		return 'home';
	}
	const pathSegments = path.split('/');
	const newPath = pathSegments.slice(2).join('/');
	const result = getRouteNameByPath(routesByLocale[lang], `/${newPath}`);
	try {
		const validRoute = RouteNameEnum.parse(result);
		return validRoute;
	} catch (e) {
		console.error(`Invalid route name: ${result}`);
		return 'home';
	}
};
