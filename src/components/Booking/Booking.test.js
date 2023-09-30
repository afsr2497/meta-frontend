import React from 'react';
import { render, screen } from '@testing-library/react';
import Booking from './Booking';

test('renders BookingForm component', () => {
  const mockOnFormSubmit = jest.fn();
  const mockDispatchOnDateChange = jest.fn();
  const availableTimes = ["12:00", "13:00", "14:00"];

  render(
    <Booking
      onFormSubmit={mockOnFormSubmit}
      isFormSubmitted={false}
      availableTimes={availableTimes}
      dispatchOnDateChange={mockDispatchOnDateChange}
    />
  );

  // Verificar que el label "Date" es visible, como indicativo de que el componente se renderizó
  const dateLabel = screen.getByText(/Date/i);
  expect(dateLabel).toBeInTheDocument();
});
