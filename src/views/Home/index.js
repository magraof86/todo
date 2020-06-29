
import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

// NOSSOS COMPONENTES  

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

    const [filterActived, setfilterActived]= useState('all');
    const [tasks, setTasks] = useState([]);
    
    async function loadTasks(){
        await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
        .then(response =>{
            setTasks(response.data)
            console.log(response.data)

        })
    }

    useEffect(() =>{
        loadTasks();

    }, [filterActived])
    
    return (
    <S.Container>
        <Header/>
    
        <S.FilterArea>
        <button type="button" onClick ={() => setfilterActived("all")}>
            <FilterCard title="Todos"actived={filterActived == 'all'} />
        </button>
        <button type="button" onClick ={() => setfilterActived("today")}>
            <FilterCard title="Hoje" actived={filterActived == 'today'} />
        </button>
        <button type="button" onClick ={() => setfilterActived("week")}>
            <FilterCard title="Semana" actived={filterActived == 'week'}/>
        </button>
        <button type="button" onClick ={() => setfilterActived("month")}>
            <FilterCard title="Mês" actived={filterActived == 'month'}/>
        </button>
        <button type="button" onClick ={() => setfilterActived("year")}>
            <FilterCard title="Ano"actived={filterActived == 'year'}/>
        </button>
        </S.FilterArea>

        <S.Title>
            <h1>Tarefas</h1>
        </S.Title>

        <S.Content>
        {
            tasks.map(t =>(
            <TaskCard type ={t.type} title ={t.title} when={t.when}/>

            ))
        }   
        </S.Content>

        <Footer/>
    </S.Container>
    
   

)
}
export default Home;

