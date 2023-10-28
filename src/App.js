import { Button, Divider, Stack} from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import './App.css';
import { useEffect, useState } from 'react';
import Task from './models/Task.js';
import AddTaskInput from './components/AddTaskInput';
import TaskBox from './components/TaskBox';

const theme = extendTheme({
  components: {
    JoyDivider: {
      styleOverrides: {
        root: {
          marginTop: 12,
          marginBottom: 12
        }
      },
    },
  },
});

function App() {
  const[tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ?
      JSON.parse(savedTasks).map((taskJson) => new Task(taskJson.text, taskJson.completed, taskJson.id))
      : []
  })
  const notCompletedTasks = tasks.filter(task => !task.completed)
  const completedTasks = tasks.filter(task => task.completed)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskStatusChange(task) {
    task.toggle()
    setTasks([...tasks])
  }

  function handleAddTask(text) {
    console.log(text)
    const newTasks = [...tasks, new Task(text)]
    setTasks(newTasks)
  }

  function TaskList({tasks}) {
    return <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={1}
      sx={{
        width: '100%',
      }}
    >
      {tasks.map((task) => {
        return <TaskBox key={task.id} task={task} onChange={() => handleTaskStatusChange(task)}/>
      })}
    </Stack>;
  }

  return (
    <CssVarsProvider theme={theme}>
      <AddTaskInput onAddTask={handleAddTask}/>
      <Divider/>
      <TaskList tasks={notCompletedTasks}/>
      {completedTasks.length > 0 && (
        <>
          <Divider>Выполнено</Divider>
          <TaskList tasks={completedTasks.reverse()}/>
        </>
      )}
      <Divider/>
      <Stack direction={'row'} spacing={1}>
        <Button variant='soft' onClick={() => setTasks([])}>Очистить все</Button>
        <Button variant='soft' onClick={() => setTasks(notCompletedTasks)}>Очистить выполненные</Button>
      </Stack>
    </CssVarsProvider>
  );
}

export default App;
