import "@testing-library/jest-dom";

import { TextEncoder } from "node:util";

global.TextEncoder = TextEncoder;

import { server } from "./src/mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
