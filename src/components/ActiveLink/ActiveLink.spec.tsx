import { render } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/dist/client/router", () => ({
  useRouter() {
    return ({
      asPath: '/',
    });
  },
}));

describe("active link component", () => {
  test("active link renders correctly", () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    );
  
    expect(getByText("home")).toBeInTheDocument();
  });
  
  test("active link is receiving active class", () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    );
  
    expect(getByText("home")).toHaveClass("active");
  });
});
