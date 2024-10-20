import { FC } from 'react';
import { IHero } from '@/types';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Skeleton } from '@mui/material';

interface HeroListProps {
  heroes: IHero[];
  isLoading: boolean
}

const HeroList: FC<HeroListProps> = ({ heroes, isLoading }) => {

  if(isLoading){
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
        {[...Array(10)].map((_, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: '#1E1E1E',
              marginBottom: 1,
              borderRadius: 2,
              minWidth: '300px',
              textAlign: 'center',
              padding: '6px 0',
            }}
          >
            <Skeleton variant="text" width="100%" height='100%' sx={{ display: 'block', padding: '12px 0',}} />
          </ListItem>
        ))}
      </List>
    )
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
