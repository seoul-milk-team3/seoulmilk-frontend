import FileUploadPage from '@main/pages/fileUpload/MainUploadPage';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

export default {
  title: 'Pages/MainUploadPage',
  component: FileUploadPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta<typeof FileUploadPage>;

const Template: StoryFn<typeof FileUploadPage> = (args) => <FileUploadPage />;

export const Default = Template.bind({});
Default.args = {};
