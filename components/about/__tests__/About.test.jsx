import {render,screen} from "@testing-library/react"
import About from "../About";

jest.mock('framer-motion', () => ({
    AnimatePresence: ({ children }) => <>{children}</>,
    motion: {
      h2: ({ children, ...props }) => {
        const { animate, whileInView, ...validProps } = props;
        return <h2 style={{ ...(animate || whileInView) }} {...validProps}>{children}</h2>;
      },
      p: ({ children, ...props }) => {
        const { animate, whileInView, ...validProps } = props;
        return <p style={{ ...(animate || whileInView) }} {...validProps}>{children}</p>;
      },

    }
}));
  


describe("About Component", () => {
    it("About component should render", () => {
        render(<About />);
        const aboutComp = screen.getByTestId("about-component");
        expect(aboutComp).toBeInTheDocument();
    });

    it("Heading (h2) should render", () => {
        render(<About />);
        const heading = screen.getByTestId("about-header");
        expect(heading).toBeInTheDocument();
    });

    it("Description (p) should render", () => {
        render(<About />);
        const description = screen.getByTestId("about-desc");
        expect(description).toBeInTheDocument();
    });
});
