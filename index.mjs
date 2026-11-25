import { testRunner } from '@cairul/plugin-kit/runner';
import adapter from './run.mjs';
import { trx, testPlugin } from '@cairul/plugin-kit/reports';

const reports = testPlugin('mstest.passed', { trx });

export default testRunner(reports, 'mstest.run', adapter);
