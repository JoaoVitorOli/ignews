import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { useSession } from "next-auth/client";
import { SigninButton } from ".";

jest.mock("next-auth/client")

describe("SignInButton component", () => {
  it("renders correctly when user is not authenticated", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([null, false]);

    render(
      <SigninButton />
    );
  
    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([
      {
        user: {
          name: "John Doe", email: "john@email.com"
        },
        expires: "fake-expires"
      }, 
      false
    ]);

    render(
      <SigninButton />
    );
  
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
