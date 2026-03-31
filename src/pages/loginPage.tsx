import AuthPage from "./auth"


export  const Login = () => {
    return(

    <>
        <div className="flex  h-screen">
            
            <div className="w-1/3 flex  bg-linear-to-br from-[#4848ed] - to-[#82829a] relative">
                <img className="z-0 opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArZwA-s_2TmLT-7-JRBxGZFfNNgF7mrJE92SmbYwcGysPx47LmKCOTWs1g3YsrfgUqkF6W1PTKxtvGAFgcabwt-jS73-dRRGUpjCq43ykUVVjAZ-i3CK5A_FQvfLQ1HB7ymSiuyP8-SEKF_wG49Afx9_3zUHVOp0ZeU0Dc7tn6XvwY5wqdll6qIFRmUJ1QZImVIotxBBI56vt_LE9_MRRatrgHi8LQy0k1Mok5JxW4R_3P0duw-4GcLJk1K-hMH2d1Uiks44aAJEg" alt="" />
                <h1 className="text-4xl flex flex-col justify-center items-center h-full text-shadow-slate-50 font-extrabold z-30 absolute">welcome to the patient appointement management application</h1> 
            </div>
            <div className="w-2/3 bg-linear-to-br from-[#e5d9da] to-[#a5869d]">
                <AuthPage />
            </div>
        </div>
    </>
    )
}