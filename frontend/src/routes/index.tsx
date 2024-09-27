import { createFileRoute } from '@tanstack/react-router'
import loginBg3 from '../assets/loginBg3.jpg'
import Form from '@/components/form'
import Result from '@/components/result'

export const Route = createFileRoute('/')({
  component: form,
})

function form(){
  return(
    <div className='flex justify-center h-screen  items-center ' style={{ 
      backgroundImage: `url(${loginBg3})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:'no-repeat',
      filter: 'brightness(0.8)'
      
       }}>
      {/* <Form></Form> */}
      <Result></Result>
    </div>
    
  )
}


