import { render } from '@testing-library/react';
import MidBar from '../components/MidBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

describe('MidBar', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <ThemeProvider theme={createTheme()}>
                <MidBar />
            </ThemeProvider>
        );
        expect(getByText('Exams Time')).toBeInTheDocument();
        expect(getByText(/Are you ready to fight?/)).toBeInTheDocument();
    });
});
