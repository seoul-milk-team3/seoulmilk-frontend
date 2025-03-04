import { tabContainerStyle, tabStyle, activeTabStyle } from './TabSwitch.style';

interface TabSwitchProps {
  activeTab: 'admin' | 'user';
  onChange: (tab: 'admin' | 'user') => void;
}

const TabSwitch = ({ activeTab, onChange }: TabSwitchProps) => {
  return (
    <div css={tabContainerStyle}>
      <button css={[tabStyle, activeTab === 'admin' && activeTabStyle]} onClick={() => onChange('admin')}>
        관리자
      </button>
      <button css={[tabStyle, activeTab === 'user' && activeTabStyle]} onClick={() => onChange('user')}>
        사용자
      </button>
    </div>
  );
};

export default TabSwitch;
