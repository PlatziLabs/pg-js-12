import { runCode } from "./exercise";

describe('tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 'Hello, World!' before 2s", async () => {
    const mockCallback = jest.fn(x => 42 + x);
    runCode(mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("should return call setTimeout with 2s", async () => {
    const spyTimeout = jest.spyOn(global, "setTimeout");
    const mockCallback = jest.fn(x => 42 + x);
    runCode(mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
});
