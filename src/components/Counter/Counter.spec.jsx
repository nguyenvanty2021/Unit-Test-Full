import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";
// test case này là test: props, test ẩn hiển data (trong lúc call api như loading, show text loading), test data khi truyền props vào
// test data khi click btn (tính tổng, hiệu, tích, thương)
describe("Counter", () => {
  describe('initialized with defaultCount=0 and description="My Counter', () => {
    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<Counter defaultCount={10} description="My Count" />);
    });
    it("renders show data, and will disappear after 300ms", async () => {
      await waitForElementToBeRemoved(() => screen.queryByText("showData"));
    });
    it("renders 'Current Count: 10'", async () => {
      // screen.getByTest("Current Count: 0");
      // nếu bất động bộ thì thêm async await findByText vào
      await screen.findByText("Current Count: 10");
      // expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
    });
    it('renders title as "My Counter"', async () => {
      // nếu bất động bộ thì thêm async await findByText vào
      await screen.findByText(/my count/i);
      // expect(screen.getByText(/my count/i)).toBeInTheDocument();
    });
    describe('when the incrementor changes to 5 and "+" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "8"); // giá trị của incrementor default là 1, '4' là chuỗi '4' -> 1 + '4' = '14' + 10 default = 24
        user.click(
          screen.getByRole("button", {
            name: "+",
          })
        );
      });
      it('renders "Current Count: 26"', async () => {
        // nếu bất động bộ thì thêm async await findByText vào
        await screen.findByText("Current Count: 28");
        // expect(screen.getByText("Current Count: 26")).toBeInTheDocument();
      });
    });
    describe("when + is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", {
            name: "+",
          })
        );
      });
      it("renders 'Current count: 11'", async () => {
        // nếu bất động bộ thì thêm async await findByText vào
        await screen.findByText("Current Count: 11");
      });
    });
  });
});
