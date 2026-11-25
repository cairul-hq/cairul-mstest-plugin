import { testRunner } from '@cairul/pdk/runner';
import adapter from './run.mjs';
import { trx, testPlugin } from '@cairul/pdk/reports';

const reports = testPlugin('mstest.passed', { trx });

export default testRunner(reports, 'mstest.run', adapter);
