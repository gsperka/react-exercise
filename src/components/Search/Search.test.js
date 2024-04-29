import { render } from '@testing-library/react';
import { Search } from "./Search";

test("search field is rendered", () => {
  const { container } = render(<Search />)
  expect(container.getElementsByClassName('searchContainer').length).toBe(1);
});

