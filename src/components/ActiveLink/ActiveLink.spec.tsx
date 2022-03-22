import { render, screen } from "@testing-library/react";
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
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    );
  
    expect(screen.getByText("home")).toBeInTheDocument();
  });
  
  test("active link is receiving active class", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    );
  
    expect(screen.getByText("home")).toHaveClass("active");
  });
});
