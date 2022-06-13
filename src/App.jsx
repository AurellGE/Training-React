import { Route, Routes } from "react-router-dom";
import QuestionEditForm from "./pages/QuestionEditForm";
import About from "./pages/About";
import Layout from "./components/common/Layout";
import QuestionListPage from "./pages/QuestionListPage";
import QuestionAddForm from "./pages/QuestionAddForm";
import "./styles/main.scss";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<QuestionListPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/question/:id/edit" element={<QuestionEditForm />} />
      <Route path="/add" element={<QuestionAddForm />} />
    </Routes>
  </Layout>
);

export default App;
