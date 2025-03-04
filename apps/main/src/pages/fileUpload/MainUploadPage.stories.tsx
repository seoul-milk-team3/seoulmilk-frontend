import MainUploadPage from '@main/pages/fileUpload/MainUploadPage';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

export default {
  title: 'Pages/MainUploadPage',
  component: MainUploadPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta<typeof MainUploadPage>;

const Template: StoryFn<typeof MainUploadPage> = (args) => <MainUploadPage />;

export const Default = Template.bind({});
Default.args = {};
