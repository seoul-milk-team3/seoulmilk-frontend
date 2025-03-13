import { css } from '@emotion/react';
import Label from '@main/components/Label/Label';
import { StoreItem } from '@main/types';
import { TaxInvoice } from '@seoulmilk/api/src/list/types';
import { Flex, Text } from '@seoulmilk/ui';
import { CheckBox } from '@seoulmilk/ui';
import ActionButton from './ActionButton/ActionButton';
import { listItemStyle, text1Style, text2Style } from './ListItem.style';

interface ListItemProps {
  item: TaxInvoice;
  isChecked: boolean;
  onCheck: (id: number) => void;
}

const ListItem = ({ item, isChecked, onCheck }: ListItemProps) => {
  return (
    <Flex css={listItemStyle}>
      <Flex styles={{ align: 'center' }}>
        <CheckBox isChecked={isChecked} onChange={() => onCheck(item.id)} css={{ marginRight: '13rem' }} />
        <Text tag="md2-text-medium" css={text1Style}>
          {item.createdDate}
        </Text>
        <Text tag="md2-text-medium" css={text2Style}>
          {item.suName}
        </Text>
        <Label status={item.isNormal === 'NORMAL' ? '정상' : '비정상'} />
      </Flex>
      <ActionButton id={item.id} />
    </Flex>
  );
};

export default ListItem;
