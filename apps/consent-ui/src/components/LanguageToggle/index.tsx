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

import { defaultLanguage } from '@/i18n/settings';
import { ValidLanguage } from '@/i18n';
import { getUnselectedLang } from '@/components/Header';
import LinkButton from '@/components/Button/LinkButton';

export const replaceLocaleInUrl = (path: string, currentLang: string = 'en'): string => {
	const unselectedLang = getUnselectedLang(currentLang as ValidLanguage);
	const splitPath = path.split('/');
	if (!splitPath.length) {
		return defaultLanguage;
	}
	const originalLangRemoved = splitPath.slice(2).filter((item) => item.length);
	const joinedPath = [unselectedLang].concat(originalLangRemoved).join('/');
	return joinedPath;
};

function LanguageToggle({
	currentLang,
	displayLangToSelect,
}: {
	currentLang: { lang: ValidLanguage; translated: string };
	displayLangToSelect: string;
}) {
	const path = usePathname();
	const newPath = replaceLocaleInUrl(path, currentLang.lang);

	return (
		<LinkButton href={newPath} color="blue" className="font-bold">
			{displayLangToSelect}
		</LinkButton>
	);
}

export default LanguageToggle;