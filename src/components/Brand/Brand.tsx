import React from 'react';
import { useTranslation } from '@herob191/gatsby-plugin-react-i18next';
import { InternalLink } from 'components/Link';
import { StyledBrand } from './Brand.style';

interface BrandProps {
  onClick?: () => void;
}

export const Brand: React.FC<BrandProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <StyledBrand onClick={onClick}>
      <InternalLink to={'/'}>{t('general.name')}</InternalLink>
    </StyledBrand>
  );
};

export default Brand;
