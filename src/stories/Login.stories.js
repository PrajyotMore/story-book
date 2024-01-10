import { Login } from './Login';

export default {
  title: 'Example/Login',
  component: Login,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: 'fullscreen',
  },
};

export const LogeedIn= {
  args: {
    data: {
      username: 'iorta@123',
      password: '123'
    },
  },
};

export const LoggedOut = {};
