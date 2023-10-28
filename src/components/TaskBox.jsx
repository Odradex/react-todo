import { Sheet, Checkbox } from "@mui/joy"

export default function TaskBox({task, onChange}) {
  const isTaskCompleted = task.completed
  return <Sheet variant='outlined' sx={{
    borderRadius: 'md',
    p: 1,
    verticalAlign: 'middle'
  }}>
   <Checkbox sx={{
      verticalAlign: 'middle',
      color: isTaskCompleted ? 'grey' : 'black',
      textDecoration: isTaskCompleted? 'line-through' : ''
   }}
   variant='outlined'
   overlay
   color='neutral'
   size='lg'
   defaultChecked={task.completed}
   label={task.text}
   onChange={() => onChange(task)}/>
  </Sheet>
}