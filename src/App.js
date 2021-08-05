import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useEffect, useState } from "react";

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks"); //Odczyt: pobieramy sobie z localStorage klucz tasks,
  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : []; //Zwracamy z localStorage i przerabiamy metodą parse z powrotem na listę, [] - są po to by na początku gdy nie ma nic w localStorage, była pusta lista.
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // gdy zostaną zmodyfikowane tasks uruchomi się ta linijka, useEffectem zapisujemy tasks w localStorage, JSON.stringify zamieni nam wartość na string,
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };
  //Funkcja chowająca gotowe zadania
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  //Funkcja usuwająca zadania
  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };
  //Funkcja przekreślająca zadania
  const addNewTask = (content) => {
    setTasks((task) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };
  //Funkcja dodająca nowe zadanie
  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };
  //Funkcja zaznaczająca wszystkie gotowe zadania
  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}
//Wygląd aplikacji
export default App;
