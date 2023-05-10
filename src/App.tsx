import React, { useState } from 'react';
import DropDownList from './DropDownList';

// Генерация последовательности целых чисел в заданном диапазоне 
function range(from: number, to: number) {
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i)
  }
  return arr;
}

export default function App() {
  const [building, setBuilding] = useState('Башня А');
  const [floor, setFloor] = useState('3');
  const [room, setRoom] = useState('1');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [comment, setComment] = useState('');

  // Обработчик изменений в полях ввода для обновления состояний
  function handlerChangeInput(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value as string;
    switch (target.name) {
      case 'date':
        setDate(value);
        break;
      case 'timeFrom':
        setTimeFrom(value);
        break;
      case 'timeTo':
        setTimeTo(value);
        break;
      case 'comment':
        setComment(value);
        break;
      case 'building':
        setBuilding(value);
        break;
      case 'floor':
        setFloor(value);
        break;
      case 'room':
        setRoom(value);
        break;
      default:
        break;
    }
  }

  // Отправка формы (вывод данных в консоль)
  function submitForm() {
    const dataOfForm = {
      building,
      floor,
      room,
      date,
      timeFrom,
      timeTo,
      comment
    }

    console.log(dataOfForm)
  }

  // Очистка формы
  function resetForm() {
    setBuilding('Башня А');
    setFloor('3');
    setRoom('1');
    setDate('');
    setTimeFrom('');
    setTimeTo('');
    setComment('');
  }

  return (
    <main>
      <form action="">
        <div className='header'>БРОНИРОВАНИЕ ПЕРЕГОВОРНОЙ</div>
        <div className='itemOfForm'>
          <p>Здание: </p>
          <DropDownList list = {['Башня А', 'Башня Б']} name='building' handlerOnChange={handlerChangeInput} />
        </div>
        <div className='itemOfForm'>
          <p>Этаж: </p><DropDownList list = {range(3, 27)} name='floor' handlerOnChange={handlerChangeInput}/>
        </div>
        <div className='itemOfForm'>
          <p>Переговорная: </p><DropDownList list = {range(1, 10)} name='room' handlerOnChange={handlerChangeInput}/>
        </div>
        <div className='itemOfForm'>
          <p>Дата: </p><input type='date' name='date' onChange={handlerChangeInput}></input>
        </div>
        <div className='itemOfForm'>
          <p>Время: </p>
          <input type='time' className='timeFrom' name='timeFrom' onChange={handlerChangeInput}/>
          <input type='time' name='timeTo' onChange={handlerChangeInput} />
        </div>
        <div className='itemOfForm'>
          <p>Комментарий: </p><textarea name='comment' onChange={handlerChangeInput}></textarea>
        </div>
        <button type='button' className='submit' onClick={submitForm}>Отправить</button>
        <button type='reset' className='reset' onClick={resetForm}>Очистить</button>
      </form>
    </main>
  );
}
