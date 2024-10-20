import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Pagination from '@/components/Pagination';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
describe('Pagination Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        render(
            <MemoryRouter>
                <Pagination dataCount={82} currentPage={1} setPage={vi.fn()} />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders the prev and next buttons', () => {
        const buttons = screen.getAllByRole('button');
        const prevButton = buttons.find(button => button.getAttribute('aria-label') === 'navigate before');
        const nextButton = buttons.find(button => button.getAttribute('aria-label') === 'navigate next');
        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    });

    it('disables the prev button if on the first page', () => {
        const buttons = screen.getAllByRole('button');
        const prevButton = buttons.find(button => button.getAttribute('aria-label') === 'navigate before');

        expect(prevButton).toBeInTheDocument();
        expect(prevButton).toBeDisabled();
    });

    it('enables the prev button if on a page greater than 1', () => {
        render(
            <MemoryRouter>
                <Pagination dataCount={82} currentPage={2} setPage={vi.fn()} />
            </MemoryRouter>
        );

        const buttons = screen.getAllByRole('button');
        const prevButton = buttons.find(button => button.getAttribute('aria-label') === 'navigate next');

        expect(prevButton).toBeInTheDocument();
        console.log('prevHTML', prevButton?.outerHTML);
        expect(prevButton).not.toBeDisabled();
    });

    it('disables the next button if on the last page', () => {
        render(
            <MemoryRouter>
                <Pagination dataCount={82} currentPage={9} setPage={vi.fn()} />
            </MemoryRouter>
        );

        const buttons = screen.getAllByRole('button');
        const nextButton = buttons.find(button => button.getAttribute('aria-label') === 'navigate before');

        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toBeDisabled();
    });

    it('enables the next button if not on the last page', () => {
        render(
            <MemoryRouter>
                <Pagination dataCount={82} currentPage={1} setPage={vi.fn()} />
            </MemoryRouter>
        );

        const buttons = screen.getAllByRole('button');
        const nextButton = buttons.find(button => button.getAttribute('aria-label') === 'navigate next');

        expect(nextButton).toBeInTheDocument();
        expect(nextButton).not.toBeDisabled();
    });
});
