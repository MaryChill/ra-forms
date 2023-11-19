import React, { useState } from 'react';
import TrainingsAddForm from './TrainingsAddForm';
import TrainingsList from './TrainingsList';


export default function Steps() {

    const [trainings, setTrainings] = useState([]);

    const handleAdd = training => {
        setTrainings(prevTrainings => {
            prevTrainings.map(item => {
                if (item.date === training.date) {
                    let i = prevTrainings.indexOf(item)
                    training.km = Number(item.km) + Number(training.km)
                    return [prevTrainings.splice(i, 1), training]
                } else {
                    return item
                }
            })
            return ([...prevTrainings, training])
        })
    }

    const handleRemove = id => {
        setTrainings(prevTrainings => prevTrainings.filter(training => training.id !== id));
    }

    
    

    return (
        <div className='container'>
            <TrainingsAddForm onAdd={handleAdd} />
            <TrainingsList trainings={trainings} handleRemove={handleRemove} />
        </div>
    );
}    