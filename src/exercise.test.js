import { runCode } from "./exercise";

describe("tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 'Hello, World!' before 2s", () => {
    jest
      .spyOn(global, "setTimeout")
      .mockImplementation((callback) => callback());
    const mockCallback = jest
      .fn((x) => 42 + x);
    runCode(mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("should return call setTimeout with 2s", () => {
    const spyTimeout = jest
      .spyOn(global, "setTimeout")
      .mockImplementation((callback) => callback());
    const mockCallback = jest.fn((x) => 42 + x);
    runCode(mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(spyTimeout).toHaveBeenCalledTimes(1);
    expect(spyTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
});
