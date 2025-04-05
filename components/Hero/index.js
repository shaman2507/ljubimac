import Link from 'next/link';
import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';

const Hero = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto'>
            <h1 className={`${lora.className}`}>
                {t('hero.title')}
            </h1>
            <Link href="/login">
                Sign In
            </Link>
            <Link href="/registration">
                Create Account
            </Link>
        </section>
    );
};

export default Hero;