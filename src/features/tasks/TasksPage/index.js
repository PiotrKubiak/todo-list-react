import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import ExampleTaskButton from "./FetchExampleTasksButton";
import Search from "./Search";

export function TasksPage() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj nowe Zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleTaskButton />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
