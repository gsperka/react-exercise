import { render, screen } from '@testing-library/react';
import { AppContext } from '../../App';
import { Search } from "./Search";

test("search field is rendered", () => {
  const setKeyword = jest.fn();
  render(
    <AppContext.Provider value={{ setKeyword }}>
      <Search/>
    </AppContext.Provider>
  );

  const searchField = screen.getByLabelText("Search Events");
  expect(searchField).toBeInTheDocument();
});

