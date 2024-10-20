import { useParams } from 'react-router-dom';
import HeroFlow from '@/components/FlowComponent/FlowComponent';
import LoadingSpinner from '@/components/LoadingSpinner';
import useHeroData from '@/hooks/useHeroData';

const HeroDetail = () => {
    const { id } = useParams<{ id: string }>();
    const heroData = useHeroData(id);

    if (!heroData) {
        return <LoadingSpinner />
    }

    return <HeroFlow {...heroData} />
};

export default HeroDetail;
