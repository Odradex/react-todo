import { Input, Button, Divider } from "@mui/joy"
import { useState, Fragment } from "react"
import AddIcon from '@mui/icons-material/Add';

export default function AddTaskInput({onAddTask}) {
  const [taskText, setTaskText] = useState("")

  function handleButtonClick() {
    if (taskText.length > 0) {
      onAddTask(taskText)
      setTaskText('')
    }
  }

  function handleInputKeyDown(event){
    if (event.key === 'Enter') {
      handleButtonClick()
    }
  }

  return <Input
    onKeyDown={e => handleInputKeyDown(e)}
    value={taskText} 
    size="lg" 
    onChange={(e) => setTaskText(e.target.value)} 
    placeholder="Добавьте задачу" 
    endDecorator={
      <Fragment>
        <Divider orientation="vertical" />
        <Button variant="plain" color="neutral" onClick={() => handleButtonClick()}><AddIcon/></Button>
      </Fragment>
    }
  />
}