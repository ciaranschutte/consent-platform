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

import Link from 'next/link';
import { ReactNode } from 'react';
import urlJoin from 'url-join';

import routesByLocale from '@/i18n/routes/routesByLocale.json';
import { ValidLanguage } from '@/i18n';

export type RouteName =
	| 'home'
	| 'clinician-registration'
	| 'participant-consent'
	| 'participant-registration'
	| 'participant-dashboard';

export type Route =
	| {
			name: 'home';
			params?: never;
	  }
	| {
			name: RouteName;
			params?: { [k: string]: string };
	  };

type LocalizedLinkProps = {
	lang: ValidLanguage;
	children: ReactNode;
} & Route;

const LocalizedLink = ({ name, params, lang, children, ...rest }: LocalizedLinkProps) => {
	const locale = lang;
	const localeRoutes = (routesByLocale as any)[locale];
	if (!localeRoutes) {
		throw new Error(`No routes found for locale "${locale}"`);
	}

	const routePath = (localeRoutes as any)[name];
	if (!routePath) {
		throw new Error(`No route found for name "${name}"`);
	}

	let href = routePath;
	if (params) {
		Object.keys(params).forEach((param) => {
			href = href.replace(new RegExp(':' + param, 'g'), (params as any)[param]);
		});
	}

	return (
		<Link href={urlJoin(lang, href)} {...rest}>
			{children}
		</Link>
	);
};

export default LocalizedLink;
