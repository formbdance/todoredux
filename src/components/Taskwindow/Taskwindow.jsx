import { gsap } from 'gsap';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useRef } from 'react';
import { removeTodo, updateTodo } from '@store'
import { useCallback } from 'react';

export const Taskwindow = () => {
    const elementRefs = useRef([])
    const textRefs = useRef([])
    const dispatch = useDispatch();
  

    
    const tasksBox = useSelector(state => state.todolist.mytodo);



    const trueClick = (index) => {
      const element = elementRefs.current[index]
      const text = textRefs.current[index]
      

      gsap.to(element, {opacity: 100, rotate: '360deg', scale: '1.35', duration: '1', onComplete: () => {
        dispatch(updateTodo({ index: index, updatedTodo: { completed: true } }));
        textUpdate()
      }})
      const textUpdate = () => {
        gsap.fromTo(
            text,
            {
              scale: 1,
              duration: 1,
            },
            { 
              textDecoration: 'line-through',
              scale: 0.94,
              color: '#c53a8a',
              opacity: 100,
              duration: 1,
              ease: 'power2.out',
            }
          )
      }
      
    }

    const thisTodo = (id) => {
        dispatch(removeTodo(id))
      }


return(
        <section className='w-full'>

            <section className='flex p-2 gap-4 flex-wrap justify-center'>
            {
                            tasksBox.map((el, id) => {

                                
  
                                return(
                                    <section key={el.uuid} className='md:w-1/4 bg-pink-500 h-40 p-4 rounded-3xl flex flex-col justify-between'>
                                        <section className='w-fit shadow-md p-1 pl-2 pr-2 rounded-xl'>
                                            <p className='font-bold text-lg text-gray-100 font-mono'>TASK #{id}</p>
                                        </section>
                                        <section className='overflow-hidden '>
                                            <p ref={(el) => textRefs.current[id] = el} className='line-clamp-2 text-white font-mono'>{el.todoname}</p>
                                        </section>
                                        <section className='flex justify-between'>
                                            <section>
                                                <button onClick={() => thisTodo(el.uuid)} className='bg-gray-200 shadow-lg rounded-full w-6 h-6 p-1 opacity-50 font-semibold hover:opacity-100' style={{transition: '.35s'}}> 
                                                    <img src={require('./icodel.png')} className=''></img>  
                                                </button>
                                            </section>
                                            <section>
                                                <button ref={(el) => elementRefs.current[id] = el} onClick={() => trueClick(id)} className='bg-gray-200 shadow-lg rounded-full w-6 h-6 p-1 opacity-50 font-semibold hover:opacity-100' style={{transition: '.35s'}}> 
                                                    <img src={require('./icotrue.png')} className=''></img>  
                                                </button>
                                            </section>
                                        </section>
                                    </section>
                                )
                            })
                        }
            </section>
            
        </section>
  )
}