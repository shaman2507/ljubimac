import { Inter, Lora } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-inter',
});

export const lora = Lora({
    subsets: ['latin'],
    weight: ['500', '600'],
    variable: '--font-lora',
});