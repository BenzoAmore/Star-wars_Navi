import { IFilm, IStarShip } from '@/types';
import { createFilmEdges, createStarshipEdges } from '@/components/FlowComponent/flowEdges';
import { createFilmNodes, createStarshipNodes } from '@/components/FlowComponent/flowNodes';
import { Box } from '@mui/material';
import { useCallback, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface GraphFlowProps {
  name: string;
  heroFilms: IFilm[];
  heroStarships: IStarShip[];
  heroId: number;
}

export default function GraphFlow({ name, heroFilms, heroStarships, heroId }: GraphFlowProps) {

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const getNodes = async () => {
      const filmNodes = createFilmNodes(heroFilms, heroId, name);
      const starshipNodes = createStarshipNodes(heroStarships);
      setNodes([...filmNodes, ...starshipNodes])
    }
    const getEdges = async () => {
      const filmEdges = createFilmEdges(heroFilms, heroId);
      const starshipEdges = createStarshipEdges(heroFilms, heroStarships);
      setEdges([...filmEdges, ...starshipEdges])
    }
    getNodes();
    getEdges()
  }, [heroFilms, heroStarships, heroId, name])

  const onConnect = useCallback((params: Connection) => setEdges((edges) => addEdge(params, edges)), [setEdges]);

  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={10} size={1} />
      </ReactFlow>
    </Box>
  );
}
