import { Flex, Text } from '@seoulmilk/ui';
import { titleStyle, inputStyle, textStyle } from './ErrorCheckItem.style';

interface ErrorCheckItemProps {
  leftTitle: string;
  leftField: string; // formData의 키 값
  leftValue: string | number;
  rightTitle?: string; // rightTitle이 없을 수도 있음
  rightField?: string; // formData의 키 값 (optional)
  rightValue?: string | number; // 값이 없을 수도 있음
  isEditing: boolean;
  onChange: (field: string, value: string) => void;
}

const ErrorCheckItem = ({
  leftTitle,
  leftField,
  leftValue,
  rightTitle,
  rightField,
  rightValue,
  isEditing,
  onChange,
}: ErrorCheckItemProps) => {
  return (
    <Flex styles={{ justify: 'space-between', align: 'center', width: '100%', gap: '2.1rem' }}>
      {/* 왼쪽 필드 */}
      <Flex styles={{ justify: 'space-between', align: 'center', width: '54.5rem' }}>
        <Text tag="md2-text-medium" css={titleStyle}>
          {leftTitle}
        </Text>
        {isEditing ? (
          <input css={inputStyle} value={leftValue} onChange={(e) => onChange(leftField, e.target.value)} />
        ) : (
          <Flex css={textStyle} styles={{ align: 'center', paddingLeft: '1.9rem' }}>
            <Text tag="md2-text-medium">{typeof leftValue === 'number' ? leftValue.toLocaleString() : leftValue}</Text>
          </Flex>
        )}
      </Flex>

      {/* 오른쪽 필드 (값이 있을 때만 렌더링) */}
      {rightTitle && rightField && (
        <Flex styles={{ justify: 'space-between', align: 'center', width: '54.5rem' }}>
          <Text tag="md2-text-medium" css={titleStyle}>
            {rightTitle}
          </Text>
          {isEditing ? (
            <input css={inputStyle} value={rightValue ?? ''} onChange={(e) => onChange(rightField, e.target.value)} />
          ) : (
            <Flex css={textStyle} styles={{ align: 'center', paddingLeft: '1.9rem' }}>
              <Text tag="md2-text-medium">
                {typeof rightValue === 'number' ? rightValue.toLocaleString() : rightValue}
              </Text>
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default ErrorCheckItem;
