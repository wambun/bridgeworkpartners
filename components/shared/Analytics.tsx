'use client';

import { Analytics } from '@shipixen/pliny/analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { siteConfig } from '@/data/config/site.settings';

export const AnalyticsWrapper = () => {
    const analyticsConfig = siteConfig.analytics;

    return (
        <>
            <VercelAnalytics />
            {analyticsConfig && <Analytics analyticsConfig={analyticsConfig} />}
        </>
    );
};
