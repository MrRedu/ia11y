import { Chat } from '@/components/organisms/chat/chat';
import { IntlayerClientProvider, NextPageIntlayer } from 'next-intlayer';
import { IntlayerServerProvider } from 'next-intlayer/server';

const HomePage: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <Chat />
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};
export default HomePage;
