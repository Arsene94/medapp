'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Select} from "@/components/ui/select";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const nextLocale = e.target.value;
        router.replace(pathname, {locale: nextLocale});
    }

    return (
        <Select
            aria-label="Selectează limba"
            label="Limbă"
            labelVariant="srOnly"
            onChange={onChange}
            options={[
                {label: '🇷🇴', value: 'ro'},
                {label: '🇬🇧', value: 'en'},
            ]}
            size="sm"
            triggerClassName="min-w-16"
            value={locale}
            variant="nav"
        />
    );
}
