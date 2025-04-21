import { create } from "zustand";
import { ITEMS_PER_PAGE } from "@cases/utils/constants";
import { FilterState } from "@cases/types";

const createDebounce = () => {
  let timeout: number;
  return (fn: () => void, delay: number) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

const debounce = createDebounce();

export const useFilterStore = create<FilterState>((set, get) => ({
  // Search state
  searchTerm: "",
  debouncedSearchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    debounce(() => {
      set({ debouncedSearchTerm: term });
    }, 300);
  },

  // Filter state
  statusFilter: "All",
  setStatusFilter: (status) => {
    set({ statusFilter: status, currentPage: 1 });
  },

  // Pagination state
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  itemsPerPage: ITEMS_PER_PAGE,

  // Computed values
  getFilteredAndPaginatedItems: (items) => {
    const { debouncedSearchTerm, statusFilter, currentPage, itemsPerPage } =
      get();

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
  },
}));
