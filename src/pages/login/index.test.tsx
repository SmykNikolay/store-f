import { render, screen } from "@testing-library/react";

const LoginPage = () => <div>Login Page</div>;

test("renders login page", () => {
  render(<LoginPage />);
  expect(screen.getByText("Login Page")).toBeInTheDocument();
});
