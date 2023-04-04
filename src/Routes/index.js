import { Navigate, useRoutes } from "react-router-dom";
import { useUser } from "hooks";

import { lazy } from "react";



const Error404 = lazy(() => import("pages/Errors/Error404"));
const Error500 = lazy(() => import("pages/Errors/Error500"));
const Error503 = lazy(() => import("pages/Errors/Error503"));
// ----------------------------------------------------------------------


const Login=lazy(()=> import ("components/Login"))
const Signup=lazy(()=> import ("components/Signup"))  
// const NotFound=lazy(()=> import ("components/NotFound")) 
const Homepage = lazy(()=>import("pages/Homepage")) 
const AddChild = lazy(()=>import("pages/AddChild"))
const ParentBoard = lazy(()=>import("pages/ParentBoard")) 
const SubjectsOverview = lazy(()=>import("pages/SubjectsOverview"))   
const LessonOverview = lazy(()=>import("pages/LessonOverview"))
const CalendarProgress = lazy(()=>import("pages/CalendarProgress"))
const LessonDetails = lazy(()=>import("pages/LessonDetails"))
const KidHome = lazy(()=>import("pages/KidHome"))
const KidBoard = lazy(()=>import("pages/KidBoard"))
const KidSubjects = lazy(()=>import("pages/KidSubjects"))
const KidPlayer = lazy(()=>import("pages/KidPlayer"))
const KidPlay= lazy(()=>import("pages/KidPlay"))
const Parent = lazy(()=>import("pages/Parent"))
const Kid = lazy(()=>import("pages/Kid"))
const Billing = lazy(()=>import("pages/Billing"))




export default function Routes() {

	const { user } = useUser();
	return useRoutes([
		
		{
			path:"/",
			element :  <Homepage/> /*user ? <Homepage/> : <Login/>*/,
		},
		{
			path: "/Login",
			element: user ? <Navigate to="/" /> : <Login />,
		},
		
		{
			path: "/Signup",
			element: user ? <Navigate to="/" /> : <Signup />,
		},
		{
			path: "/AddChild",
			// element: user ? <Navigate to="/" /> : <Signup />,
			element:<AddChild />,
		},
		{
			path: "/billing",
			// element: user ? <Navigate to="/" /> : <Signup />,
			element:<Billing/>,
		},
		{
				path: "/parent",
				element: <Parent />,
				children: [
					// { path: "", element: <Parent /> },
					{ path: "board", element: <ParentBoard /> },
					{path:"subjects",element:<SubjectsOverview/>},
					{path:"subject-overview",element:<LessonOverview/>},
					{path:"calendar",element:<CalendarProgress/>},
					{path:"lesson-details",element:<LessonDetails/>},
					
				],
		},

		{
			path: "/kid",
			element: <Kid />,
			children: [
				// { path: "", element: <Parent /> },
				{ path: "board", element: <KidBoard /> },
				{ path: "home", element: <KidHome /> },
				{ path: "watch", element: <KidPlayer /> },
				{ path: "subjects", element: <KidSubjects /> },
				{ path: "play", element: <KidPlay /> },
				
			],
		},

		
		{ path: "/500", element: <Error500 /> },
		{ path: "/503", element: <Error503 /> },
		{ path: "*", element: <Error404 /> },
	]);
}
