import { UsePaginationProps } from "@cases/types";
import { ITEMS_PER_PAGE } from "@cases/utils/constants";
import { useMemo, useState, useEffect } from "react";

export const usePagination = ({
  items,
  itemsPerPage = ITEMS_PER_PAGE,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredAndPaginatedItems = useMemo(() => {
    const filtered = items.filter((item) => {
      const matchesSearch = item.client_name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
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
  }, [items, debouncedSearchTerm, statusFilter, currentPage, itemsPerPage]);

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
