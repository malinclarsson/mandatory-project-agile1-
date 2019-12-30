// Chessboard.jsx is a chessboard for React. Inspired by chessboard.js
import React from 'react';
import { Link } from "@reach/router";
import Chessboard from "chessboardjsx";
//import { roughSquare } from "./Rough";

//** Kommentera gärna, kram */

import { Boardscontainer, Body, TitleBoard } from './styles';
import { Nav, Box, Title } from '../Global/style';

function SchackBoard() {
    return (
        <Body>
            <TitleBoard>Chessboard</TitleBoard>
            {/* <Chessboard position='start' /> */}
            <Chessboard
                id="boardscontainer"
                orientation="black"
                width={420}
                //roughSquare={roughSquare}
                position="start"
                boardStyle={{
                    borderRadius: "5px",
                    boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
                }}
                dropOffBoard="trash"
                // pieces
                sparePieces={false}
                lightSquareStyle={{ backgroundColor: "#d8ffcc" }}
                darkSquareStyle={{ backgroundColor: "#1f8500" }}
            />
        </Body>
    );
}

function GameBoard() {
    return (
        <>
            <Nav>
                <Box>
                    <Link to="/"><Title>lichess Home</Title></Link>
                </Box>
            </Nav>
            <Boardscontainer>
                <SchackBoard />
            </Boardscontainer>
        </>
    );
}

export default GameBoard;

