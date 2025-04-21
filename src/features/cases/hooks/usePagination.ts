import { UsePaginationProps } from "@cases/types";
import { ITEMS_PER_PAGE } from "@cases/utils/constants";
import { useMemo, useState } from "react";

export const usePagination = ({
  items,
  itemsPerPage = ITEMS_PER_PAGE,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredAndPaginatedItems = useMemo(() => {
    const filtered = items.filter((item) => {
      const matchesSearch = item.client_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || item.client_status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    return {
      items: filtered.slice(startIndex, startIndex + itemsPerPage),
      totalItems: filtered.length,
      totalPages: Math.ceil(filtered.length / itemsPerPage),
    };
  }, [items, searchTerm, statusFilter, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusFilterChange = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  return {
    pagination: {
      currentPage,
      setCurrentPage,
      handlePageChange,
      totalPages: filteredAndPaginatedItems.totalPages,
    },
    search: {
      term: searchTerm,
      setTerm: setSearchTerm,
    },
    filter: {
      status: statusFilter,
      setStatus: handleStatusFilterChange,
    },
    items: filteredAndPaginatedItems.items,
    totalItems: filteredAndPaginatedItems.totalItems,
  };
};
