import { css } from '@emotion/react';
import Label from '@main/components/Label/Label';
import { StoreItem } from '@main/types';
import { Flex, Text } from '@seoulmilk/ui';
import { CheckBox } from '@seoulmilk/ui';
import ActionButton from './ActionButton/ActionButton';
import { listItemStyle, text1Style, text2Style } from './ListItem.style';

interface ListItemProps {
  item: StoreItem;
  isChecked: boolean;
  onCheck: (id: string) => void;
}

const ListItem = ({ item, isChecked, onCheck }: ListItemProps) => {
  return (
    <Flex css={listItemStyle}>
      <Flex styles={{ align: 'center' }}>
        <CheckBox isChecked={isChecked} onChange={() => onCheck(item.id)} css={{ marginRight: '13rem' }} />
        <Text tag="md2-text-medium" css={text1Style}>
          {item.date}
        </Text>
        <Text tag="md2-text-medium" css={text2Style}>
          {item.store}
        </Text>
        <Label status={item.status} />
      </Flex>
      <ActionButton status={item.status} />
    </Flex>
  );
};

export default ListItem;
