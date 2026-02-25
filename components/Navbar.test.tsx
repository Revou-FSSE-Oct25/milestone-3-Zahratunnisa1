import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

// 🔥 MOCK AuthContext
jest.mock("./context/AuthContext", () => ({
  useAuth: () => ({
    user: null,
    logout: jest.fn(),
  }),
}));

// 🔥 MOCK CartContext
jest.mock("./context/CartContext", () => ({
  useCart: () => ({
    cart: [],
  }),
}));

describe("Navbar", () => {
  it("renders logo text", () => {
    render(<Navbar />);
    expect(screen.getByText("RevoShop")).toBeInTheDocument();
  });
});

jest.mock("./context/AuthContext", () => ({
  useAuth: () => ({
    user: null,
    logout: jest.fn(),
  }),
}));

jest.mock("./context/CartContext", () => ({
  useCart: () => ({
    cart: [],
  }),
}));

describe("Navbar", () => {
  it("shows Login button when user is not logged in", () => {
    render(<Navbar />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});

jest.mock("./context/AuthContext", () => ({
  useAuth: () => ({
    user: { name: "Zahra" },
    logout: jest.fn(),
  }),
}));

it("shows Logout button when user is logged in", () => {
  render(<Navbar />);
  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
});


