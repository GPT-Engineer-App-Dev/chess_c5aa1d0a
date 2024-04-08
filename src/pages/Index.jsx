import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

// Board size configuration
const boardSize = 8;

// Pieces initial positions
const initialBoardSetup = [[FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing, FaChessBishop, FaChessKnight, FaChessRook], Array(boardSize).fill(FaChessPawn), ...Array(boardSize - 4).fill(Array(boardSize).fill(null)), Array(boardSize).fill(FaChessPawn), [FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing, FaChessBishop, FaChessKnight, FaChessRook]];

const ChessSquare = ({ children, isDark }) => {
  const bgColor = useColorModeValue(isDark ? "gray.700" : "gray.200", isDark ? "gray.200" : "gray.700");
  return (
    <Flex height="40px" width="40px" align="center" justify="center" bg={bgColor} color={isDark ? "white" : "black"}>
      {children}
    </Flex>
  );
};

const ChessPiece = ({ Piece }) => {
  if (!Piece) return null;
  return <Box as={Piece} size="24px" />;
};

const Index = () => {
  const renderChessBoard = () => {
    return initialBoardSetup.map((row, rowIndex) => {
      return row.map((Piece, columnIndex) => {
        // Determine if the square is dark or light
        const isDark = (rowIndex + columnIndex) % 2 === 1;
        return (
          <ChessSquare key={`${rowIndex}-${columnIndex}`} isDark={isDark}>
            <ChessPiece Piece={Piece} />
          </ChessSquare>
        );
      });
    });
  };

  return (
    <Flex justify="center" align="center" h="100vh">
      <Grid templateColumns={`repeat(${boardSize}, 40px)`} gap={0}>
        {renderChessBoard()}
      </Grid>
    </Flex>
  );
};

export default Index;
