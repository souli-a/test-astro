import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';
import { CircleCheck, Mail, PhoneForwarded } from 'lucide-react';
import { toast } from 'sonner';
import { EMAIL, PHONE_NUMBER } from '../constants/contact';
import useWindowWidth from '../hooks/useWindowWidth';
import copyToClipboard from '../utils/copyToClipboard';
import ToasterPortal from './ToasterPortal';
import ClipboardButton from './ui/ClipboardButton';
import TextBody from './ui/TextBody';

const ContactInfo = ({ className }: { className?: string }) => {
  const preferredColorScheme = usePrefersColorScheme();
  const isThemeDark = preferredColorScheme === 'dark';
  const windowWidth = useWindowWidth();
  const iconSize = windowWidth >= 768 ? 20 : 13;

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    copyToClipboard(e);
    toast('Copié', {
      style: {
        width: 'fit-content',
        fontSize: 'var(--text-body-desktop)',
        fontWeight: 'var(--font-weight-body-desktop)',
        fontFamily: 'Unbounded',
        boxShadow: 'none',
        borderRadius: '1rem',
      },
      icon: (
        <CircleCheck color="var(--color-green)" size={20} strokeWidth={3} />
      ),
    });
  };

  return (
    <address
      className={`not-italic flex flex-wrap gap-5 max-md:gap-2 ${
        className || ''
      }`}>
      <ClipboardButton handleCopy={handleCopy} value={EMAIL}>
        <Mail color="var(--color-primary)" size={iconSize} strokeWidth={3} />
        <TextBody>{EMAIL}</TextBody>
      </ClipboardButton>
      <ClipboardButton handleCopy={handleCopy} value={PHONE_NUMBER}>
        <PhoneForwarded
          color="var(--color-primary)"
          size={iconSize}
          strokeWidth={3}
        />
        <TextBody>{PHONE_NUMBER}</TextBody>
      </ClipboardButton>
      <ToasterPortal isThemeDark={isThemeDark} />
    </address>
  );
};

export default ContactInfo;
