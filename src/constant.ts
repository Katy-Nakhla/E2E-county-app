export const SORT_KEYS = {
  price_ascending: "price_ascending",
  price_descending: "price_descending",
  name_A_Z: "name_A_Z",
  name_Z_A: "name_Z_A",
};

export const SORT_OPTIONS = [
  { value: SORT_KEYS.price_ascending, label: "Sort by price ascending " },
  { value: SORT_KEYS.price_descending, label: "Sort by price descending " },
  { value: SORT_KEYS.name_A_Z, label: "Sort by name A-Z " },
  { value: SORT_KEYS.name_Z_A, label: "Sort by name Z-A " },
];

export const PRICE_RANGE = [0, 200];
