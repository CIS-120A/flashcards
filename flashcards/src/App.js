import './App.css';
import { connect } from "react-redux";
import AppRouting from './routing/AppRouting';
import { withRouter } from "react-router";
import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {

        return (
            <div className="App">
               <AppRouting />
            </div>
        );
    }

export default withRouter(App);
