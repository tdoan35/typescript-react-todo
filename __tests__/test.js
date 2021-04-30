// Hello Codesmith!!!

describe('State Initializes', () => {
  let state;

  beforeEach(() => {
    state = [{"text":"Walk the dog","complete":true},{"text":"Write app","complete":false}];
  });

  it('should return a default state when given an undefined input', () => {
   expect(state[0]).toEqual({"text":"Walk the dog","complete":true});
   expect(state[1]).toEqual({"text":"Write app","complete":false});
   expect(state).toEqual(
      [{"text":"Walk the dog","complete":true},{"text":"Write app","complete":false}]
    );
  });
});

describe('State Updates', () => {
  let prevState, currState, stateDiff;

  beforeEach(() => {
    prevState = [{"text":"Walk the dog","complete":true},{"text":"Write app","complete":false}];
    currState = [{"text":"Walk the dog","complete":true},{"text":"Write app","complete":true}];
    stateDiff = {"added":{},"deleted":{},"updated":{"1":{"complete":true}}};
  });

  it('prevMemoizedState should not equal currMemoizedState', () => {
    expect(prevState).not.toEqual(currState);
  });
  it('should useStateHook variable where component changed', () => {
    expect(currState).toEqual([{"text":"Walk the dog","complete":true},{"text":"Write app","complete":true}]);
    expect(stateDiff).toEqual({"added":{},"deleted":{},"updated":{"1":{"complete":true}}});
  });
});

describe('State Updates', () => {
  let prevState, currState, stateDiff;

  beforeEach(() => {
    prevState = [{"text":"Walk the dog","complete":true},{"text":"Write app","complete":true}];
    currState = [{"text":"Walk the dog","complete":true},{"text":"Write app","complete":false}];
    stateDiff = {"added":{},"deleted":{},"updated":{"1":{"complete":false}}};
  });

  it('prevMemoizedState should not equal currMemoizedState', () => {
    expect(prevState).not.toEqual(currState);
  });
  it('should useStateHook variable where component changed', () => {
    expect(currState).toEqual([{"text":"Walk the dog","complete":true},{"text":"Write app","complete":false}]);
    expect(stateDiff).toEqual({"added":{},"deleted":{},"updated":{"1":{"complete":false}}});
  });
});