import React, { useState } from 'react';
import TrainingsModel from './TrainingsModel';
import { v4 as uuidv4 } from 'uuid'

export default function TrainingsAddForm(props) {
    const { onAdd } = props;
    const [form, setForm] = useState({
        date: '',
        km: Number(''),
    });


    const handleChange = evt => {
        const { name, value } = evt.target;
        setForm(prevForm =>
            ({ ...prevForm, [name]: value}));
    }


    const handleSubmit = evt => {
        evt.preventDefault();
        const training = new TrainingsModel(uuidv4(), form.date, form.km);
        onAdd(training)
        setForm({
            date: '',
            km: '',
        });
    };



    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__box'>
                <label htmlFor='date' className='form__data'>Дата (ДД.ММ.ГГ)
                    <input
                        id='date'
                        name='date'
                        type='date'
                        className='inputDate'
                        value={form.date}
                        onChange={handleChange}
                        required />
                </label>

                <label htmlFor='km' className='form__km'>Пройдено км
                    <input
                        id='km'
                        name='km'
                        type='number'
                        min={0}
                        className='inputNumber'
                        value={form.km}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button className='button'>OK</button>
            </div>
        </form>
    )
}