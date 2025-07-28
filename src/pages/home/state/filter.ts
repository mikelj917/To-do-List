let currentFilter: "all" | "completed" | "pending" = "all";

export function setFilter(filter: typeof currentFilter) {
  currentFilter = filter;
}

export function getFilter() {
  return currentFilter;
}
