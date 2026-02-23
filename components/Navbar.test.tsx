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

