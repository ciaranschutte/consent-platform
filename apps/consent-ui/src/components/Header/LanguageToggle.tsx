/*
 * Copyright (c) 2023 The Ontario Institute for Cancer Research. All rights reserved
 *
 * This program and the accompanying materials are made available under the terms of
 * the GNU Affero General Public License v3.0. You should have received a copy of the
 * GNU Affero General Public License along with this program.
 *  If not, see <http://www.gnu.org/licenses/>.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from '@/components/Button/Button.module.scss';
import { ValidLanguage } from '@/i18n';
import routesByLocale from '@/i18n/routes/routesByLocale.json';
import { RouteName, RouteNameEnum } from '@/components/Link/types';

import LocalizedLink from '../Link/LocalizedLink';

import { getUnselectedLang } from '.';

function getRouteNameByPath(routeObj: { [k: string]: string }, value: string): string | undefined {
	const keys = Object.keys(routeObj);
	return keys.find((key: string) => routeObj[key] === value);
}

const findLinkNameByPath = (path: string, lang: ValidLanguage): RouteName => {
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

function LanguageToggle({ lang, children }: { lang: ValidLanguage; children: ReactNode }) {
	const langToSelect = getUnselectedLang(lang);
	const path = usePathname();
	const linkName = findLinkNameByPath(path, lang);

	return (
		<LocalizedLink
			name={linkName}
			lang={langToSelect}
			role="button"
			color="blue"
			className={clsx(styles.base, styles.primary, styles.blue)}
		>
			{children}
		</LocalizedLink>
	);
}

export default LanguageToggle;
