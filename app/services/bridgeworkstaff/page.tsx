import { ServiceDetailPage } from '@/components/sections';
import { services } from '@/data/config/services';
import { Metadata } from 'next';

const service = services.find((s) => s.id === 'bridgeworkstaff')!;

export const metadata: Metadata = {
  title: `${service.name} - ${service.title} | BridgeWork Partners`,
  description: service.description,
};

export default function BridgeWorkStaffPage() {
  return <ServiceDetailPage service={service} />;
}
