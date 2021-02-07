import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../components/Landing';
import FlashCards from "../components/FlashCards";


export default function AppRouting() {
    return (
        <div>
            <Route exact path='/welcome' component={Landing} />
            <Route exact path='/flashcards/:id' component={FlashCards} />
        </div>
    )
}