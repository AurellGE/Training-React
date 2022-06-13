import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuestionAddForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
        const fetchQuestions = async () => {
            const res = await axios.get("http://localhost:4000/questions");
            setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  const addQuestion = async (e) => {
    e.preventDefault();

    try {
        await axios.post(`http://localhost:4000/questions`, { 
            title, 
            detail })
        navigate("/");
    } catch (e) {
        alert(e);
    }
  };

  return (
    <form onSubmit={(e) => addQuestion(e)} className="question-form">
      <h1 className="question-form__title">Add Question</h1>

      <label className="question-form__label">Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="question-form__input" />
      
      <label className="question-form__label">Detail</label>
      <input value={detail} onChange={(e) => setDetail(e.target.value)} type="text" className="question-form__input" />
      
      <button type="submit"  className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default QuestionAddForm;