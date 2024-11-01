import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Sidebar from "../components/SideBar"; // Adjust the import path based on your file structure

// Mock the Components and Auth components
jest.mock("../components/Components", () => (props: any) => (
  <div data-testid="mock-component" onClick={props.onClick}>
    {props.text}
  </div>
));
jest.mock("../components/Auth", () => () => <div data-testid="mock-auth">Auth Component</div>);

describe("Sidebar", () => {
  const mockOnSelect = jest.fn(); // Mock function for the onSelect prop

  const renderSidebar = (selected = "Quizes") => {
    render(
      <ThemeProvider theme={createTheme()}>
        <Sidebar selected={selected} onSelect={mockOnSelect} />
      </ThemeProvider>
    );
  };

  test("renders sidebar content", () => {
    renderSidebar();
  
    const components = screen.getAllByTestId("mock-component");
    expect(components.length).toBe(5); 
  
    expect(screen.getByText("Quizes")).toBeInTheDocument();
    expect(screen.getByText("Announcement")).toBeInTheDocument();
    expect(screen.getByText("Schedule")).toBeInTheDocument();
    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("Performance")).toBeInTheDocument();
    expect(screen.getByTestId("mock-auth")).toBeInTheDocument();
  });
  

  test("calls onSelect when a component is clicked", () => {
    renderSidebar();

    fireEvent.click(screen.getByText("Quizes"));
    expect(mockOnSelect).toHaveBeenCalledWith("Quizes");
    expect(mockOnSelect).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("Schedule"));
    expect(mockOnSelect).toHaveBeenCalledWith("schedule");
    expect(mockOnSelect).toHaveBeenCalledTimes(2);
  });

});
