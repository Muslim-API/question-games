import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import CaseStudy from "./pages/case-study-page";
import ErrorPage from "./pages/error-page";
import HomeScreen from "./pages/home-screen-page";
import InstructionScreen from "./pages/instruction-page";
import LayoutQuestion from "./pages/layout-question";
import LiveScoreScreen from "./pages/live-score-page";
import PersonalizationPage from "./pages/personalization-page";
import PublicLiveScoreScreen from "./pages/public-live-score";
import QuestionScreen from "./pages/question-page";
import ResultPage from "./pages/result-page";
import ShareYourScore from "./pages/share-your-score";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "instruction-page",
        element: <InstructionScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "live-score-page",
        element: <LiveScoreScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "public-live-score",
        element: <PublicLiveScoreScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "result-page",
        element: <ResultPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "case-study-page",
        element: <CaseStudy />,
        errorElement: <ErrorPage />,
      },
      {
        path: "share-your-score",
        element: <ShareYourScore />,
        errorElement: <ErrorPage />,
      },
      {
        path: "personalization-page",
        element: <PersonalizationPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/question",
    element: <LayoutQuestion />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/question/:numberOfQuestion",
        element: <QuestionScreen />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
