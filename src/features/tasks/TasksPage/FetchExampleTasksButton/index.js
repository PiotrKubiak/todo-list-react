import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button, Wrapper } from "../Buttons/styled";

const ExampleTaskButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Wrapper>
      <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
    </Wrapper>
  );
};

export default ExampleTaskButton;
