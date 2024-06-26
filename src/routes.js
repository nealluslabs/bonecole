import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

//import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
//import HomePage from './pages/HomePage';
import HomePage1 from './pages/HomePage1';
//import HomePage2 from './pages/HomePage2';
import FeedPage from './pages/FeedPage';
import VideoPage from './pages/VideoPage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import DocsPage from './pages/DocsPage';
//import MembersPage from './pages/MembersPage';
//import MyCoolersPage from './pages/MyCoolersPage';
//import CoolersPage from './pages/CoolersPage';
//import JoinCoolerPage from './pages/JoinCoolerPage';
import InboxPage from './pages/InboxPage';
import SettingsPage from './pages/AddCourse';
import UserListPage from './pages/UserListPage';
import IncubatorVideoPage from './pages/IncubatorVideosPage';
import OperationsVideoPage from './pages/OperationsVideosPage';
import ViewIncubatorPage from './pages/ViewIncubatorPage';

//import PublicCoolerPage from './pages/PublicCoolerPage';
//import PrivateCoolerPage from './pages/PrivateCoolerPage';
//import PublicCoolerJoin from './pages/PublicCoolerJoin';
//import PrivateCoolerJoin from './pages/PrivateCoolerJoin';
//import CreateCoolerPage from './pages/CreateCoolerPage';
import Login from './pages/Login';
import LoginUpdatedPage from './pages/LoginUpdatedPage/LoginUpdatedPage'
import RegisterUpdatedPage from './pages/RegisterUpdatedPage/RegisterUpdatedPage'
import CategoriesVideoPage from './pages/CategoriesVideosPage';
import CoursesStatsPage from './pages/CoursesStatsPage'
import ContractorListPage from './pages/ContractorListPage'
import ContractorStatsPage from './pages/ContractorStatsPage'
import AddCourse from './pages/AddCourse';
import AddBlog from './pages/AddBlog';
import EditCourse from './pages/EditCourse';
import AddSubject from './pages/AddSubject';
import AddTeacher from './pages/AddTeacher';
import AddOrder from './pages/AddOrder';

import EditTeacher from './pages/EditTeacher';

import AddSession from './pages/AddSession';
//import AddLesson from './pages/AddLesson';
import AddLesson from './pages/AddLessonAlso';
//import AddChapter from './pages/AddChapter';
import AddChapter from './pages/AddChapterAlso';
import AddPastExam from './pages/AddPastExam';
import EditChapter from './pages/EditChapter';
import AddQuiz from './pages/AddQuiz';
import StudentListPage from './pages/StudentListPage';
import TeacherListPage from './pages/TeacherListPage';
import OrdersPage from './pages/OrdersPage';

import EditLesson from './pages/EditLesson';
import EditQuiz from './pages/EditQuizBackup';
import EditPastExam from './pages/EditPastExam';
import BlogPage from './pages/BlogPage';
import ViewQuizBreakdown from './pages/ViewQuizBreakdown';

export default function Router() {
  const routes = useRoutes([
   
     
   
   
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: 'home', element:<UserListPage/>/*<HomePage1 />*/ },
        { path: 'feed', element: <FeedPage /> },
        { path: 'courses-stats', element: <CoursesStatsPage /> },
        { path: 'student-list', element: <StudentListPage /> },
        { path: 'student-stats', element: <ContractorStatsPage /> },
        { path: 'incubator-videos', element: <IncubatorVideoPage /> },
        { path: 'incu-videos-tech', element: <OperationsVideoPage /> },
        { path: 'incu-videos-ops', element: <OperationsVideoPage /> },
        { path: 'incu-videos-safety', element: <OperationsVideoPage /> },
        { path: 'view-incubator', element: <ViewIncubatorPage /> },
        { path: 'video', element: <VideoPage /> },
        { path: 'video-details', element: <VideoDetailsPage /> },
        { path: 'docs', element: <DocsPage /> },
        { path: 'courses', element: <CategoriesVideoPage /> },
        { path: 'blog', element: <BlogPage/> },
        { path: 'teacher-list', element: <TeacherListPage /> },

        
        { path: 'chat', element: <InboxPage /> },
        { path: 'add-course', element: <AddCourse /> },
        { path: 'add-blog', element: <AddBlog /> },
        { path: 'add-subject', element: <AddSubject /> },
        { path: 'edit-subject', element: <EditCourse /> },
        { path: 'add-lesson', element: <AddLesson /> },
        { path: 'edit-lesson', element: <EditLesson /> },
        { path: 'edit-past-exam', element: <EditPastExam /> },
        { path: 'add-chapter', element: <AddChapter /> },
        { path: 'add-pastexam', element: <AddPastExam /> },
        { path: 'add-quiz', element: <AddQuiz /> },
        { path: 'edit-quiz', element: <EditQuiz /> },
        { path: 'view-quiz-breakdown', element: <ViewQuizBreakdown /> },
        { path: 'edit-chapter', element: <EditChapter /> },
        { path: 'add-teacher', element: <AddTeacher /> },
        { path: 'add-order', element: <AddOrder /> },
        { path: 'edit-teacher', element: <EditTeacher /> },
        { path: 'orders', element: <OrdersPage /> },
        // { path: 'my-cooler', element: <MyCoolersPage /> },
       
       
      ],
    },
    {
      path: 'loginTest',
      element:/* <Login />*/<LoginUpdatedPage/>,
    },

    {
      path: 'regTest',
      element:/* <Login />*/<RegisterUpdatedPage/>,
    },

   
    
   
    {
      element: <SimpleLayout />,
      children: [
        // { element: <Navigate to="/login" />, index: true },
        { element: <Navigate to="loginTest" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
