import React from 'react';
import { useI18next, useTranslation } from '@herob191/gatsby-plugin-react-i18next';
import { LanguageLink, StyledLocaleSwitcher } from './LocaleSwitcher.style';

const LocaleSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { languages, originalPath } = useI18next();

  return (
    <StyledLocaleSwitcher>
      {languages.map((language) => {
        return (
          <LanguageLink
            to={originalPath}
            language={language}
            $selected={i18n.language === language}
            key={language}
          >
            {language.toUpperCase()}
          </LanguageLink>
        );
      })}
    </StyledLocaleSwitcher>
  );
};

export default LocaleSwitcher;
