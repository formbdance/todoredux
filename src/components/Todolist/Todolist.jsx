import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from '@store';
import uuid from 'react-uuid';

export const Todolist = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = event.target.todoname.value;
        const loadTodo = {
          uuid: uuid(),
          todoname: newTodo,
          completed: false,
          importance: false,
          priority: 0,
        }
        dispatch(addTodo(loadTodo));
        event.target.todoname.value = ""; 
      };
    

    const todoValue = useSelector(state => state.todolist.mytodo)
    return( 
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <textarea type='text' name='todoname' className='border resize-none overflow-auto h-40 rounded-xl p-2'/>
          <button type='submit' className='w-fit m-auto bg-green-500 rounded-2xl p-2 w-28 font-semibold text-white'>Add</button>
      </form>
     )
}