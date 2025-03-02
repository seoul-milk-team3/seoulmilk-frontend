import { IcCalendar, IcArrowDropdown, IcLocal } from "@seoulmilk/icon";
import { format, subMonths } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import DropdownItem from "@/DropDown/DropdownItem";
import DropdownList from "@/DropDown/DropdownList";
import DropdownRoot from "@/DropDown/DropdownRoot";
import DropdownTrigger from "@/DropDown/DropdownTrigger";
import { triggerStyle, arrowStyle } from "@/DropDown/Dropdown.style";
import Flex from "@/Flex/Flex";
import Text from "@/Text/Text";
import { useDropdownContext } from "@/DropDown/context";
import { theme } from "@seoulmilk/styles";

const SelectDropdown = ({ type }: { type: "date" | "region" | "email" }) => {
  const defaultValue =
    type === "date" ? "날짜" : type === "region" ? "지역" : "선택해주세요";

  const [selected, setSelected] = useState(defaultValue);
  const { isOpen } = useDropdownContext(); // isOpen 상태 가져오기

  const options =
    type === "date"
      ? Array.from({ length: 12 }, (_, i) =>
          format(subMonths(new Date(), 11 - i), "yyyy.MM", { locale: ko })
        )
      : type === "region"
        ? [
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
          ]
        : [
            "naver.com",
            "hanmail.net",
            "daum.net",
            "gmail.com",
            "nate.com",
            "hotmail.com",
            "outlook.com",
            "icloud.com",
          ];

  const icon =
    type === "date" ? (
      <IcCalendar width={24} height={24} />
    ) : type === "region" ? (
      <IcLocal width={24} height={24} />
    ) : null;

  return (
    <DropdownRoot>
      <DropdownTrigger>
        <div css={triggerStyle(type)}>
          <Flex styles={{ gap: "1rem", align: "center" }}>
            {icon}
            <Text
              tag={type === "email" ? "md2-text-regular" : "md2-text-medium"}
              css={{
                color:
                  selected === "선택해주세요"
                    ? theme.colors.grayscale_40
                    : type === "email"
                      ? theme.colors.grayscale_80
                      : theme.colors.grayscale_50,
              }}
            >
              {selected}
            </Text>
          </Flex>

          <IcArrowDropdown width={24} height={24} css={arrowStyle(isOpen)} />
        </div>
      </DropdownTrigger>

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
