import { Flex, Text } from '@seoulmilk/ui';
import { labelBaseStyle, labelStyles } from './Label.style';

export interface LabelProps {
  status: '정상' | '비정상' | '미입금';
}
const Label = ({ status }: LabelProps) => {
  return (
    <Flex styles={{ align: 'center', justify: 'center' }} css={[labelBaseStyle, labelStyles[status]]}>
      {status}
    </Flex>
  );
};

export default Label;
