import { IcCalendar, IcLocal } from "@seoulmilk/icon";
import { format, subMonths } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
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
  "hanmail.net",
  "daum.net",
  "gmail.com",
  "nate.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
];

// 현재 날짜 기준 12개월 생성
const generateMonths = () => {
  return Array.from({ length: 12 }, (_, i) =>
    format(subMonths(new Date(), 11 - i), "yyyy.MM", { locale: ko })
  );
};

const SelectDropdown = ({ type }: { type: "date" | "region" | "email" }) => {
  const defaultValue =
    type === "date" ? "날짜" : type === "region" ? "지역" : "선택해주세요";
  const [selected, setSelected] = useState(defaultValue);

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
      <DropdownTrigger icon={icon} type={type} selected={selected} />
      <DropdownList>
        {options.map((item) => (
          <DropdownItem key={item} onSelect={() => setSelected(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownRoot>
  );
};

export default SelectDropdown;
