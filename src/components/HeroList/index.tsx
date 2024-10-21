import { FC } from 'react';
import { IHero } from '@/types';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import SkeletonList from '@/components/SkeletonList';

interface HeroListProps {
  heroes: IHero[];
  isLoading: boolean
}

const HeroList: FC<HeroListProps> = ({ heroes, isLoading }) => {

  if(isLoading){
    return <SkeletonList/>
  }

  return (
    <List
      sx={{
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {heroes.map((el: IHero) => (
        <ListItem key={el.id}
          sx={{
            backgroundColor: '#1E1E1E',
            marginBottom: 1,
            borderRadius: 2,
            minWidth: '300px',
            textAlign: 'center',
            padding: '6px 0',
          }}
        >
          <Link to={`/people/${el.id}`}
            style={{
              textDecoration: 'none',
              color: '#FFD700',
              width: '100%',
              display: 'block',
              padding: '8px 0',
            }}
          >
            <ListItemText
              primary={el.name}
              sx={{ color: '#FFD700' }}
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default HeroList;
