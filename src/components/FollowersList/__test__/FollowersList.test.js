import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import { mocked } from "ts-jest/utils";
import axios from "axios";
const mockedAxios = mocked(axios);
const mockedAxiosGet = mocked(mockedAxios.get);
const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    //  jest.mock("../../../__mocks__/axios");
    mockedAxiosGet.mockResolvedValue({
      data: {
        results: [
          {
            name: {
              first: "Laith",
              last: "Harb",
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            login: {
              username: "ThePhonyGOAT",
            },
          },
        ],
      },
    });
  });

  // beforeAll(() => {
  //     console.log("RUNS ONCE BEFORE ALL TESTS")
  // })

  // afterEach(() => {
  //     console.log("RUNS AFTER EACH TEST")
  // })

  // afterAll(() => {
  //     console.log("RUNS ONCE AFTER ALL TESTS")
  // })

  // it("should fetch and render input element", async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElement = await screen.findByTestId(`follower-item-0`);
  //   expect(followerDivElement).toBeInTheDocument();
  // });
  describe("after application fully loads", () => {
    beforeEach(async () => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<MockFollowersList />);
      // eslint-disable-next-line testing-library/prefer-query-by-disappearance
      await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    });

    it("renders the photos", async () => {
      // component có render ra 1 item có text là Hello World
      const followerDivElement = await screen.findByTestId(`follower-item-0`);
      expect(followerDivElement).toBeInTheDocument();
    });
  });
});
