import { Flex } from '@seoulmilk/ui';
import { tabStyle } from './Tabs.style';

const Tabs = ({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}) => {
  return (
    <Flex styles={{ gap: '2.6rem' }}>
      {tabs.map((tab) => (
        <div key={tab} css={tabStyle(activeTab === tab)} onClick={() => onChange(tab)}>
          {tab}
        </div>
      ))}
    </Flex>
  );
};

export default Tabs;
