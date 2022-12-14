import {
  CodeBlockExample,
  CodeInlineExample,
  CodeSampleOutputExample,
  CodeUserInputExample,
  CodeVariablesExample,
} from './index';

import { storiesOf } from '@storybook/vue3';

storiesOf('Core/Code', module).add('Block', CodeBlockExample);

// export default {
//     title: 'Core/Code'
// };

// export const Block = CodeBlockExample;
// export const Inline = CodeInlineExample;
// export const SampleOutput = CodeSampleOutputExample;
// export const UserInput = CodeUserInputExample;
// export const Variables = CodeVariablesExample;
