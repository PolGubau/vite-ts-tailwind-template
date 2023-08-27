import { render, screen } from "@testing-library/react";

import { App } from "../../src/App";

test("MyComponent displays correctoy", () => {
	render(<App />);

	const heading = screen.getByText(/Welcome/i);

	expect(heading).toBeInTheDocument();
});
