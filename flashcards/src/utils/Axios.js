import axios from 'axios';
import React, { useState } from 'react';

axios.get('http://localhost:5000/chapter')
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
        });

export default axios