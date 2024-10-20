import Pagination from '@/components/Pagination';
import HeroList from '@/components/HeroList';
import { getHeroes } from '@/services/Api';
import { useEffect, useState } from 'react';
import { IHeroesDTO } from '@/types';
import { Box, Typography } from '@mui/material';
import usePageState from '@/hooks/usePageState';

export default function Home() {
    const [page, setPage] = usePageState(1);
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<IHeroesDTO>({
        results: [],
        next: '',
        previous: '',
        count: 0,
    });
    
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const heroesData = await getHeroes(page);
            setData(heroesData);
            setIsLoading(false)
        }

        fetchData();
    }, [page]);

    return (
        <Box
            sx={{
                backgroundColor: '#0B1B30', 
                color: '#FFD700', 
                padding: 4,
                textAlign: 'center', 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center',
            }}
        >
            <Typography variant="h2" component="h2" gutterBottom>
                {!data.count ? (
                    'No heroes available'
                ) : (
                    `Heroes Found: ${data.count}`
                )}
            </Typography>
            <HeroList heroes={data.results} isLoading={isLoading}/>
            <Pagination dataCount={data.count} currentPage={page} setPage={setPage}/>
        </Box>
    );
}
