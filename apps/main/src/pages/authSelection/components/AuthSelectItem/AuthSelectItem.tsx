import { theme } from '@seoulmilk/styles';
import { Flex, Text } from '@seoulmilk/ui';

interface AuthSelectItemProps {
  icon: React.ReactElement;
  name: string;
  onClick: () => void;
}

const AuthSelectItem = ({ icon, name, onClick }: AuthSelectItemProps) => {
  return (
    <Flex styles={{ direction: 'column', align: 'center', gap: '1rem' }} css={{ cursor: 'pointer' }} onClick={onClick}>
      {icon}
      <Text tag="md2-text-medium" css={{ color: theme.colors.grayscale_70 }}>
        {name}
      </Text>
    </Flex>
  );
};

export default AuthSelectItem;
