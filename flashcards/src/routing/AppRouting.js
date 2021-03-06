import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../components/Landing';
import FlashCards from "../components/FlashCards";
import Score from '../components/Score';
import HighScores from "../components/HighScores";
import Terms from "../components/Terms";
import Game from "../components/Game";


export default function AppRouting() {
    return (
        <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/flashcards/:id' component={FlashCards} />
            <Route exact path='/score/:id' component={Score} />
            <Route exact path='/high_score/:id' component={HighScores} />
            <Route exact path='/terms/:id' component={Terms} />
            <Route exact path={'/game/:id'} component={Game} />
        </div>
    )
}