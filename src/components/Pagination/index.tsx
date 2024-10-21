import { FC, useMemo } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { HEROES_PER_PAGE } from '@/constans';


interface OneButtonPros {
    page: number;
    pageNum: number;
    onClick: (page: number) => void;
}

const OneButton: FC<OneButtonPros> = ({ pageNum, page, onClick }) => {
    return (
        <Button            
            onClick={() => onClick(pageNum)}
            variant={pageNum === page ? 'contained' : 'outlined'}
            sx={{
                color: pageNum === page ? '#0B1B30' : '#FFD700',
                backgroundColor: pageNum === page ? '#FFD700' : 'transparent',
                '&:hover': {
                    backgroundColor: pageNum === page ? '#FFC300' : '#C70000',
                    color: '#0B1B30',
                },
                border: '1px solid #FFD700',
                borderRadius: 2,
                '&.MuiButton-contained': {
                    backgroundColor: '#FFD700',
                    color: '#0B1B30',
                },
                '&.MuiButton-outlined': {
                    borderColor: '#FFD700',
                },
                flex: '1 1 auto',
                minWidth: '60px',
            }}
        >
            {pageNum}
        </Button>
    )
}

interface PaginationData {
    dataCount: number;
    currentPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PaginationData> = ({ dataCount, setPage, currentPage }) => {
    const navigate = useNavigate();
    
    const countPages = useMemo(() => Math.ceil(dataCount / HEROES_PER_PAGE), [dataCount]);
    const pages = useMemo(() => Array.from({ length: countPages }, (_, index) => index + 1), [countPages]);

    const handlePageChange = (newPage: number): void => {
        setPage(newPage);
        navigate(`?page=${newPage}`); 
    };
    const handleClickOnPrevButton = (): void => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleClickOnNextButton = (): void => {
        if (currentPage < countPages) {
            handlePageChange(currentPage + 1);
        }
    };
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                backgroundColor: '#0B1B30',
                padding: 2,
                borderRadius: 2,
                flexWrap: 'wrap',
            }}
        >
            <IconButton
                onClick={handleClickOnPrevButton}
                disabled={currentPage === 1}
                aria-label="navigate before"
                sx={{
                    color: '#FFD700',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: '#C70000',
                    },
                }}
            >
                <NavigateBefore />
            </IconButton>
            {pages.map((pageNum) => 
                <OneButton key={pageNum} pageNum={pageNum} page={currentPage} onClick={handlePageChange}/>
            )}
            <IconButton
                onClick={handleClickOnNextButton}
                disabled={currentPage === countPages}
                aria-label="navigate next"
                sx={{
                    color: '#FFD700',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: '#C70000',
                    },
                }}
            >
                <NavigateNext />
            </IconButton>
        </Box>
    );
};

export default Pagination;
