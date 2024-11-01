import { render, fireEvent } from '@testing-library/react';
import Components from '../components/Components';

describe('Components', () => {
    it('renders correctly with props', () => {
        const { getByText, getByAltText } = render(
            <Components 
                iconPath="path/to/icon.png" 
                text="Test Component" 
                selected={false} 
                onClick={jest.fn()} 
            />
        );
        expect(getByText('Test Component')).toBeInTheDocument();
        expect(getByAltText('Test Component icon')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <Components 
                iconPath="path/to/icon.png" 
                text="Clickable" 
                selected={false} 
                onClick={handleClick} 
            />
        );

        fireEvent.click(getByText('Clickable'));
        expect(handleClick).toHaveBeenCalled();
    });

    it('applies selected styles', () => {
        const { container } = render(
            <Components 
                iconPath="path/to/icon.png" 
                text="Selected Component" 
                selected={true} 
                onClick={jest.fn()} 
            />
        );
        expect(container.firstChild).toHaveClass('bg-white text-[#0c808f]');
    });
});

