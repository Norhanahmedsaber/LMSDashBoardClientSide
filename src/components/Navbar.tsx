import Right from './Right';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../src/state/language/languageSlice';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
import { Language as LanguageIcon } from '@mui/icons-material'; // Planet icon
import { RootState } from '../../src/state/store'; // Adjust based on your store setup

const Navbar: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)'); // Hides SearchBar
  const isExtraSmallScreen = useMediaQuery('(max-width: 480px)'); // Hides Welcome text and centers icons
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en'; // Toggle between 'en' and 'ar'
    dispatch(setLanguage(newLanguage)); // Update Redux state
    i18n.changeLanguage(newLanguage); // Change language in i18next
  };

  return (
    <div
      className={`font-poppins w-full h-16 bg-slate-100 rounded-b-md flex items-center px-4 ${
        isExtraSmallScreen ? 'justify-center' : 'justify-between'
      }`}
    >
      {!isExtraSmallScreen && !isSmallScreen && (
        <div className='font-semibold text-2xl text-slate-600'>{t('welcome')}</div>
      )}
      <div className="flex items-center">
        {/* Language Toggle Button */}
        <Right hideSearch={isSmallScreen || isExtraSmallScreen} />
        <LanguageIcon
          onClick={toggleLanguage}
          style={{ cursor: 'pointer', marginLeft: '1rem', color: '#0c808f' }}
          fontSize="large"
          titleAccess="Toggle Language"
        />
      </div>
    </div>
  );
};

export default Navbar;
