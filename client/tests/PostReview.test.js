import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostReview from './PostReview';

describe('PostReview', () => {
    test('renders PostReview component and submits data', async () => {
        render(<PostReview />);

        const titleInput = screen.getByLabelText(/Title:/i);
        const contentInput = screen.getByLabelText(/Content:/i);
        const submitButton = screen.getByRole('button', { name: /post review/i });

        fireEvent.change(titleInput, { target: { value: 'New Review Title' } });
        fireEvent.change(contentInput, { target: { value: 'This is the review content.' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            // Here you could check for a success message or other indicators of success
            expect(titleInput).toHaveValue('');
            expect(contentInput).toHaveValue('');
        });
    });
});
