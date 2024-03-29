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
import Image, { StaticImageData } from 'next/image';

import { ValidLanguage, getTranslation } from '@/i18n';
import { defaultLanguage, supportedLanguages } from '@/i18n/settings';
import LanguageToggle from '@/components/Header/LanguageToggle';
import OhcrnImage from '@/public/ohcrn_large.svg';

import styles from './Header.module.scss';
import HelpButton from './HelpButton';

const getUnselectedLang = (lang: ValidLanguage): ValidLanguage => {
	return supportedLanguages.filter((l) => l !== lang)[0];
};

const icons: {
	[k in ValidLanguage]: StaticImageData;
} = {
	en: OhcrnImage,
	fr: OhcrnImage, // TODO: get FR icon
};

const Header = async ({ lang }: { lang: ValidLanguage }) => {
	const translate = await getTranslation(lang, 'header');
	const langToSelect = getUnselectedLang(lang);

	const icon = icons[lang || defaultLanguage];
	return (
		<header className={styles.header}>
			<div>
				<Link href={`/${lang}`}>
					<Image src={icon} priority alt={translate('logo-alt-text')} className={styles.logo} />
				</Link>
			</div>
			<div className={styles.right}>
				<div className={styles.headerItem}>
					<LanguageToggle langToSelect={langToSelect}>
						<span className={styles['toggle-full']}>{translate(langToSelect)}</span>
						<span className={styles['toggle-abbr']}>{langToSelect}</span>
					</LanguageToggle>
				</div>
				{/* TODO: implement real help button, ticket TBD */}
				<div className={styles.help}>
					<HelpButton />
				</div>
				{/* TODO: implement mobile language toggle inside user menu in separate PR for https://github.com/OHCRN/consent-platform/issues/16 */}
				{/* TODO: implement user menu, ticket TBD */}
				<div className={styles['user-menu']}>
					<div>Hello</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
