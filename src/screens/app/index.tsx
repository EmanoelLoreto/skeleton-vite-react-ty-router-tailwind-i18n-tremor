import { useTranslation } from 'react-i18next'
import { useToast } from '@/hooks/useToast'
import { Button } from '@/components/Button';

const App = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header>
        <h1>{t('home.title')}</h1>
        <nav>
          <a href="/">{t('nav.home')}</a>
          <a href="/about">{t('nav.about')}</a>
          <a href="/contact">{t('nav.contact')}</a>
        </nav>
        <div>
          <Button variant="primary" onClick={() => changeLanguage('en')}>{t('languageSwitcher.en')}</Button>
          <Button variant="primary" onClick={() => changeLanguage('pt')}>{t('languageSwitcher.pt')}</Button>
          <Button variant="primary" onClick={() => changeLanguage('es')}>{t('languageSwitcher.es')}</Button>
          <Button variant="primary" onClick={() => toast({ title: 'Hello World', description: 'This is a toast message' })}>Toast</Button>
        </div>
      </header>
    </>
  )
}

export default App