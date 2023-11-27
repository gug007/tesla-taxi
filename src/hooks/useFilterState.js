import { useState } from "react";

const initialFilter = {
  availability: [],
  condition: [],
  make: [],
};

export default function useFilterState() {
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  return [selectedFilter, setSelectedFilter];
}
