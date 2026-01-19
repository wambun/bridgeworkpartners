import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';
import { offices, contactInfo, socialLinks } from '@/data/config/contact';

const footerNavigation = {
  navigate: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Awards', href: '/awards' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
  ],
  services: [
    { name: 'IT & Tech Recruiting', href: '/services/bridgeworktech' },
    { name: 'Direct Hire', href: '/services/bridgeworksearch' },
    { name: 'Professional Staffing', href: '/services/bridgeworkstaff' },
    { name: 'HR Consulting', href: '/services/bridgeworkhr' },
    { name: 'SLED Services', href: '/services/bridgeworksled' },
    { name: 'RPO Solutions', href: '/services/bridgeworkrpo' },
  ],
};

const Footer = () => {
  const primaryOffice = offices.find((office) => office.isPrimary) || offices[0];

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-500 font-bold text-lg">B</span>
              </div>
              <span className="font-display font-semibold text-xl text-white">
                BridgeWork
              </span>
            </Link>
            <p className="text-primary-100 text-sm leading-relaxed mb-6">
              Award-winning human resources consulting and talent acquisition since 2008.
              Building partnerships, one hire at a time.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                  {social.icon === 'facebook' && <Facebook className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Navigate</h4>
            <nav className="space-y-3">
              {footerNavigation.navigate.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <nav className="space-y-3">
              {footerNavigation.services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-primary-100 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.mainPhone}`}
                className="flex items-start gap-3 text-primary-100 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.mainPhone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-3 text-primary-100 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-primary-100">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  {primaryOffice.address.map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-100 text-sm">
              &copy; {new Date().getFullYear()} BridgeWork Partners. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-primary-100 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-100 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
