import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <SignUp />
      </div>  
    </div>
  )
  
}
