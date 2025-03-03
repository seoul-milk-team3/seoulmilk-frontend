import { IcCalendar, IcLocal } from "@seoulmilk/icon";
import { format, subMonths } from "date-fns";
import { ko } from "date-fns/locale";
import DropdownItem from "@/DropDown/DropdownItem";
import DropdownList from "@/DropDown/DropdownList";
import DropdownRoot from "@/DropDown/DropdownRoot";
import DropdownTrigger from "@/DropDown/DropdownTrigger";

const regions = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "충청북도",
  "충청남도",
  "전라남도",
  "경상남도",
  "제주특별자치도",
  "강원특별자치도",
  "전북특별자치도",
];

const emailDomains = [
  "naver.com",
  "daum.net",
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hanmail.net",
  "nate.com",
];

const generateMonths = () => {
  return Array.from({ length: 12 }, (_, i) =>
    format(subMonths(new Date(), 11 - i), "yyyy.MM", { locale: ko })
  );
};

const SelectDropdown = ({
  type,
  value,
  onSelect,
}: {
  type: "date" | "region" | "email";
  value?: string;
  onSelect: (val: string) => void;
}) => {
  const defaultValues = {
    date: "날짜 선택",
    region: "지역 선택",
    email: "이메일 선택",
  };

  const selectedValue = value ?? defaultValues[type];

  const options =
    type === "date"
      ? generateMonths()
      : type === "region"
        ? regions
        : emailDomains;

  const icon =
    type === "date" ? (
      <IcCalendar width={24} height={24} />
    ) : type === "region" ? (
      <IcLocal width={24} height={24} />
    ) : null;

  return (
    <DropdownRoot>
      <DropdownTrigger
        icon={icon}
        type={type}
        selected={selectedValue}
        isDefault={selectedValue === defaultValues[type]}
      />
      <DropdownList>
        {options.map((item) => (
          <DropdownItem key={item} onSelect={() => onSelect(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownRoot>
  );
};

export default SelectDropdown;
