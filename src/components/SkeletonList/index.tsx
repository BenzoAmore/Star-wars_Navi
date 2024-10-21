import { HEROES_PER_PAGE } from "@/constans"
import { List, ListItem, Skeleton } from "@mui/material"

const SkeletonList = () =>
    <List
        sx={{
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        {[...Array(HEROES_PER_PAGE)].map((_, index) => (
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
                <Skeleton variant="text" width="100%" height='100%' sx={{ display: 'block', padding: '12px 0', }} />
            </ListItem>
        ))}
    </List>

export default SkeletonList