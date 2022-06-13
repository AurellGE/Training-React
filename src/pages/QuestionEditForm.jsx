import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuestionEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await axios.get(`http://localhost:4000/questions/${id}`);
      setTitle(res.data.title);
      setDetail(res.data.detail);
    };
    fetchQuestion();
  }, []);

  const updateQuetion = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/questions/${id}`, {
        title,
        detail,
      });
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  const deleteQuestion = async (e) => {
    try {
      axios.delete(`http://localhost:4000/questions/${id}`);
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <form onSubmit={(e) => updateQuetion(e)} className="question-form">
        <h1 className="question-form__title">Edit Question</h1>

        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="question-form__input"
        />

        <label>Detail</label>
        <input
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          type="text"
          className="question-form__input"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <button onClick={deleteQuestion} className="btn btn-primary btn-delete">
        Delete
      </button>
    </>
  );
};

export default QuestionEditForm;
