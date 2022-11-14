import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [input, setInputChanged] = useState("");

  const handleInputChanged = (e) => setInputChanged(e.target.value);
  const handleClearInput = () => setInputChanged("");

  const handleOnSubmit = () => {
    onSubmit(input);
    handleClearInput();
  };
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center text-decoration-underline ">Todo</h1>
      </div>
      <div className="d-flex justify-content-center mt-2 w-75 mx-auto ">
        <div className="input-group ">
          <span className="input-group-text fs-5">I Need To:</span>
          <input
            onChange={handleInputChanged}
            type="text"
            className="form-control"
            value={input}
            placeholder=". . ."
          />

          <button
            onClick={handleOnSubmit}
            type="button"
            className="btn btn-primary fs-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
