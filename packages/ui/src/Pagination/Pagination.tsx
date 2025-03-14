import Flex from "@/Flex/Flex";
import {
  IcPaginationLeft,
  IcPaginationLeftDouble,
  IcPaginationRight,
  IcPaginationRightDouble,
} from "@seoulmilk/icon";
import { paginationStyle, pageButtonStyle } from "./Pagination.style";
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);

  return (
    <Flex css={paginationStyle}>
      <Flex styles={{ gap: "0.8rem", align: "center" }}>
        {currentPage > 10 && (
          <IcPaginationLeftDouble
            width={32}
            height={32}
            onClick={() => onPageChange(1)}
          />
        )}
        {currentPage > 1 && (
          <IcPaginationLeft
            width={32}
            height={32}
            onClick={() => onPageChange(currentPage - 1)}
          />
        )}
      </Flex>

      <Flex styles={{ align: "center", gap: "1rem" }}>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <span
            key={page}
            css={pageButtonStyle(page === currentPage)}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        ))}
      </Flex>

      <Flex styles={{ gap: "0.8rem", align: "center" }}>
        {currentPage < totalPages && (
          <IcPaginationRight
            width={32}
            height={32}
            onClick={() => onPageChange(currentPage + 1)}
          />
        )}
        {currentPage < totalPages - 9 && (
          <IcPaginationRightDouble
            width={32}
            height={32}
            onClick={() => onPageChange(totalPages)}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Pagination;
