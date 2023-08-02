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
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { defaultLanguage } from '@/i18n/settings';
import { ValidLanguage } from '@/i18n';
import { getUnselectedLang } from '@/components/Header';

const replaceLocaleInUrl = (path: string, currentLang: string = 'en'): string => {
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
	selected,
	displayLangToSelect,
	children,
}: {
	selected: string;
	displayLangToSelect: string;
	children: ReactNode;
}) {
	const path = usePathname();
	const [showList, setShowList] = useState<boolean>(false);
	const newPath = replaceLocaleInUrl(path, selected);
	return (
		<div>
			<button onClick={() => setShowList(!showList)}>{children}</button>
			{showList && (
				<Link
					style={{
						display: 'flex',
						flex: 1,
						border: '1px solid black',
						width: '150px',
					}}
					href={newPath}
				>
					{displayLangToSelect}
				</Link>
			)}
		</div>
	);
}

export default LanguageToggle;
