import { ServiceDetailPage } from '@/components/sections';
import { services } from '@/data/config/services';
import { Metadata } from 'next';

const service = services.find((s) => s.id === 'bridgeworktech')!;

export const metadata: Metadata = {
  title: `${service.name} - ${service.title} | BridgeWork Partners`,
  description: service.description,
};

export default function BridgeWorkTechPage() {
  return <ServiceDetailPage service={service} />;
}
