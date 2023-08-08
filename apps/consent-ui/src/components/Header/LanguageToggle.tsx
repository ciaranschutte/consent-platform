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

import { ValidLanguage } from '@/i18n';
import LinkButton from '@/components/Button/LinkButton';

const getPathWithNewLocale = (locale: ValidLanguage, pathname?: string) => {
	if (!pathname) return '/';
	const segments = pathname.split('/');
	segments[1] = locale;
	return segments.join('/');
};

function LanguageToggle({
	langToSelect,
	children,
}: {
	langToSelect: ValidLanguage;
	children: ReactNode;
}) {
	const path = usePathname();
	return (
		<LinkButton href={getPathWithNewLocale(langToSelect, path)} color="blue" className="font-bold">
			{children}
		</LinkButton>
	);
}

export default LanguageToggle;
