import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

// Important ->
// const followerDivElements = await screen.findAllByTestId(/follower-item/i);
// as this line giving error as react-reset the script everytime
// temp sol: change resetMocks: false in node_modules/react-scripts/scripts/utils/createJestConfig.js
// another sol: add this in package.json file "jest": {
//     "resetMocks": true
//   }

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("RUNS BEFORE EACH TEST");
    jest.mock("../../../__mocks__/axios");
  });

  beforeAll(() => {
    console.log("RUNS ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("RUNS AFTER EACH TEST");
  });

  afterAll(() => {
    console.log("RAN ONCE AFTER ALL TESTS");
  });

  it("should fetch and render single follower item", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);

    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
