
import './App.css';
import {increment, decrement, reset} from '@store'
import { Todolist } from './components/Todolist/Todolist';
import { Taskwindow } from './components/Taskwindow/Taskwindow';



function App() {
  return (
    <section className="App">
        <header className='container m-auto'>
          <section className='bg-purple-600 p-4 flex flex-col items-center gap-4 text-center'>
            <h1 className='font-bold text-7xl '>ToDo List</h1>
            <p className='text-2xl font-semibold text-white font-mono'>Планировщик задач</p>
          </section>
        </header>
        <main className='container m-auto mt-8'>
          <section className='flex justify-center lg:justify-between gap-8 flex-wrap lg:flex-nowrap'>
            <section className='w-2/4 lg:w-1/4'>
              <Todolist />
            </section>
            <Taskwindow />

          </section>
        </main>
    </section>
  );
}

export default App;
