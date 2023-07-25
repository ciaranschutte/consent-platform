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
import Image from 'next/image';

import { ValidLanguage, getTranslation } from '@/i18n';
import { Translation } from '@/i18n/types';

import styles from './Footer.module.scss';

import OICRLogo from '@/public/oicr.svg';
import InstagramLogo from '@/public/instagram.svg';
import TwitterLogo from '@/public/twitter.svg';
import ONGovtLogo from '@/public/on_govt.svg';
import GithubLogo from '@/public/github.svg';
import OvertureLogo from '@/public/overture.svg';

import mergeClassnames from '@/global/utils/mergeClassnames';

const footerLinks: { translation: string; url: string }[] = [
  {
    translation: 'about',
    url: '#',
  },
  {
    translation: 'help',
    url: '#',
  },
  {
    translation: 'contact',
    url: '#',
  },
  {
    translation: 'terms',
    url: '#',
  },
  {
    translation: 'privacy',
    url: '#',
  },
];

const Versions = async ({ lang }: { lang: ValidLanguage }) => {
  const translate = await getTranslation(lang, 'footer');
  return (
    <div className={styles.versions}>
      <div className={styles.credit}>
        <span>
          <b>{translate('powered-by')}: </b>
        </span>
        <Link
          href="#"
          className={mergeClassnames(styles.icon, styles.overture)}
        >
          <Image src={OvertureLogo} alt={translate('overture-alt')} />
        </Link>
        <Link href="#" className={styles.icon}>
          <Image src={GithubLogo} alt={translate('github-alt')} />
        </Link>
      </div>
      <div className={styles.copyright}>
        <span>{translate('copyright')} </span>
        <span>
          {/* TODO: fix hardcoded version */}
          {translate('ohcrn-registry', { registryVersion: '0.1.0' })} -{' '}
        </span>
        {/* TODO: fix hardcoded version */}
        <span>{translate('api', { apiVersion: '0.1.0' })}</span>
      </div>
    </div>
  );
};

const Links = ({ translate }: { translate: Translation }) => {
  return (
    <div className={mergeClassnames(styles.linkGrid, styles.links)}>
      {footerLinks.map((link) => (
        <Link className={styles.link} key={link.translation} href={link.url}>
          {translate(link.translation)}
        </Link>
      ))}
    </div>
  );
};

const Right = ({ translate }: { translate: Translation }) => {
  return (
    <div className={styles.right}>
      <Link href="#">
        <Image
          src={ONGovtLogo}
          alt={translate('on-govt-logo-alt')}
          className={styles['on-gov']}
        />
      </Link>
    </div>
  );
};

const Left = ({ translate }: { translate: Translation }) => {
  return (
    <div className={styles.left}>
      <Link href="#" className={styles.icon}>
        <Image
          src={OICRLogo}
          alt={translate('oicr-logo-alt')}
          className={styles.oicr}
        />
      </Link>
      <Link href="#" className={styles.icon}>
        <Image
          src={InstagramLogo}
          alt={translate('instagram-logo-alt')}
          className={styles.instagram}
        />
      </Link>
      <Link href="#" className={styles.icon}>
        <Image
          src={TwitterLogo}
          alt={translate('twitter-logo-alt')}
          className={styles.twitter}
        />
      </Link>
    </div>
  );
};

const Footer = async ({ lang }: { lang: ValidLanguage }) => {
  const translate = await getTranslation(lang, 'footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Left translate={translate} />
        <Right translate={translate} />
        <Links translate={translate} />
      </div>
      <Versions lang={lang} />
    </footer>
  );
};

export default Footer;
