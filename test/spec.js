import { makeConsoleThrow, restoreConsole } from './helpers/throwingConsole';

beforeEach(makeConsoleThrow);

afterEach(restoreConsole);
