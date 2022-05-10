// file: class_a.test.js
import React from 'react';
import { render } from 'utils/test-utils';

import App from "App";
jest.mock("./App");
it("should mock class B", () => {
  render(<App/>);
});
